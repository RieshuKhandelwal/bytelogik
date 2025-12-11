import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [courseTeachers, setCourseTeachers] = useState([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedStudents = localStorage.getItem('students');
    const savedTeachers = localStorage.getItem('teachers');
    const savedCourses = localStorage.getItem('courses');
    const savedEnrollments = localStorage.getItem('enrollments');
    const savedCourseTeachers = localStorage.getItem('courseTeachers');

    if (savedStudents) setStudents(JSON.parse(savedStudents));
    if (savedTeachers) setTeachers(JSON.parse(savedTeachers));
    if (savedCourses) setCourses(JSON.parse(savedCourses));
    if (savedEnrollments) setEnrollments(JSON.parse(savedEnrollments));
    if (savedCourseTeachers) setCourseTeachers(JSON.parse(savedCourseTeachers));
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem('teachers', JSON.stringify(teachers));
  }, [teachers]);

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('enrollments', JSON.stringify(enrollments));
  }, [enrollments]);

  useEffect(() => {
    localStorage.setItem('courseTeachers', JSON.stringify(courseTeachers));
  }, [courseTeachers]);

  // Student Functions
  const addStudent = (student) => {
    const newStudent = {
      id: Date.now(),
      ...student,
    };
    setStudents([...students, newStudent]);
    return newStudent;
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
    // Also remove enrollments for this student
    setEnrollments(enrollments.filter(e => e.studentId !== id));
  };

  const updateStudent = (id, updatedStudent) => {
    setStudents(students.map(s => s.id === id ? { ...s, ...updatedStudent } : s));
  };

  // Teacher Functions
  const addTeacher = (teacher) => {
    const newTeacher = {
      id: Date.now(),
      ...teacher,
    };
    setTeachers([...teachers, newTeacher]);
    return newTeacher;
  };

  const deleteTeacher = (id) => {
    setTeachers(teachers.filter(t => t.id !== id));
    // Also remove course assignments for this teacher
    setCourseTeachers(courseTeachers.filter(ct => ct.teacherId !== id));
  };

  const updateTeacher = (id, updatedTeacher) => {
    setTeachers(teachers.map(t => t.id === id ? { ...t, ...updatedTeacher } : t));
  };

  // Course Functions
  const addCourse = (course) => {
    const newCourse = {
      id: Date.now(),
      ...course,
    };
    setCourses([...courses, newCourse]);
    return newCourse;
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(c => c.id !== id));
    // Also remove enrollments and course-teacher assignments
    setEnrollments(enrollments.filter(e => e.courseId !== id));
    setCourseTeachers(courseTeachers.filter(ct => ct.courseId !== id));
  };

  const updateCourse = (id, updatedCourse) => {
    setCourses(courses.map(c => c.id === id ? { ...c, ...updatedCourse } : c));
  };

  // Course-Teacher Assignment Functions
  const assignCourseToTeacher = (courseId, teacherId) => {
    // Check if already assigned
    if (courseTeachers.some(ct => ct.courseId === courseId && ct.teacherId === teacherId)) {
      return false;
    }
    const assignment = {
      id: Date.now(),
      courseId,
      teacherId,
    };
    setCourseTeachers([...courseTeachers, assignment]);
    return true;
  };

  const removeCourseFromTeacher = (courseId, teacherId) => {
    setCourseTeachers(courseTeachers.filter(ct => !(ct.courseId === courseId && ct.teacherId === teacherId)));
  };

  // Enrollment Functions
  const enrollStudentInCourse = (studentId, courseId) => {
    // Check if already enrolled
    if (enrollments.some(e => e.studentId === studentId && e.courseId === courseId)) {
      return false;
    }
    const enrollment = {
      id: Date.now(),
      studentId,
      courseId,
      enrolledDate: new Date().toLocaleDateString(),
    };
    setEnrollments([...enrollments, enrollment]);
    return true;
  };

  const removeStudentFromCourse = (studentId, courseId) => {
    setEnrollments(enrollments.filter(e => !(e.studentId === studentId && e.courseId === courseId)));
  };

  // Helper Functions
  const getTeachersByCourse = (courseId) => {
    const teacherIds = courseTeachers.filter(ct => ct.courseId === courseId).map(ct => ct.teacherId);
    return teachers.filter(t => teacherIds.includes(t.id));
  };

  const getCoursesByTeacher = (teacherId) => {
    const courseIds = courseTeachers.filter(ct => ct.teacherId === teacherId).map(ct => ct.courseId);
    return courses.filter(c => courseIds.includes(c.id));
  };

  const getEnrollmentsByStudent = (studentId) => {
    return enrollments.filter(e => e.studentId === studentId);
  };

  const getStudentsByCourse = (courseId) => {
    const studentIds = enrollments.filter(e => e.courseId === courseId).map(e => e.studentId);
    return students.filter(s => studentIds.includes(s.id));
  };

  const value = {
    // Students
    students,
    addStudent,
    deleteStudent,
    updateStudent,
    // Teachers
    teachers,
    addTeacher,
    deleteTeacher,
    updateTeacher,
    // Courses
    courses,
    addCourse,
    deleteCourse,
    updateCourse,
    // Enrollments
    enrollments,
    enrollStudentInCourse,
    removeStudentFromCourse,
    getEnrollmentsByStudent,
    getStudentsByCourse,
    // Course-Teacher Assignments
    courseTeachers,
    assignCourseToTeacher,
    removeCourseFromTeacher,
    getTeachersByCourse,
    getCoursesByTeacher,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
