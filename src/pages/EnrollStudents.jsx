import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const EnrollStudents = () => {
  const { students, courses, enrollments, enrollStudentInCourse, removeStudentFromCourse, getEnrollmentsByStudent } = useAppContext();
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleEnroll = () => {
    if (selectedStudent && selectedCourse) {
      const success = enrollStudentInCourse(Number(selectedStudent), Number(selectedCourse));
      if (success) {
        setSelectedCourse('');
        alert('Student enrolled in course successfully!');
      } else {
        alert('This student is already enrolled in this course!');
      }
    } else {
      alert('Please select both a student and a course!');
    }
  };

  const handleRemove = (studentId, courseId) => {
    removeStudentFromCourse(studentId, courseId);
  };

  const getCourseName = (id) => courses.find(c => c.id === id)?.name || 'Unknown';
  const getStudentEnrollments = (studentId) => {
    return enrollments.filter(e => e.studentId === studentId);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-8 w-full flex flex-col overflow-y-auto py-12">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-8 mt-4">Enroll Students in Courses</h1>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl mb-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="bg-white/20 border border-white/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">Select a Student</option>
              {students.map((student) => (
                <option key={student.id} value={student.id} className="bg-gray-800">
                  {student.name}
                </option>
              ))}
            </select>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="bg-white/20 border border-white/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">Select a Course</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id} className="bg-gray-800">
                  {course.name}
                </option>
              ))}
            </select>
            <button
              onClick={handleEnroll}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition font-semibold"
            >
              Enroll Student
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-4 space-y-6 mt-8">
          {students.length === 0 ? (
            <p className="text-gray-400 text-lg text-center py-12">No students available. Add students first.</p>
          ) : (
            students.map((student) => {
              const enrolledCourses = getStudentEnrollments(student.id);
              return (
                <div key={student.id} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-4">{student.name}</h3>
                  <p className="text-gray-300 mb-2">
                    <span className="font-medium text-gray-200">Roll Number:</span> {student.rollNumber}
                  </p>
                  <p className="text-gray-300 mb-6">
                    <span className="font-medium text-gray-200">Email:</span> {student.email}
                  </p>
                  {enrolledCourses.length === 0 ? (
                    <p className="text-gray-400 italic">Not enrolled in any course</p>
                  ) : (
                    <div className="flex flex-wrap gap-3">
                      {enrolledCourses.map((enrollment) => (
                        <div
                          key={enrollment.id}
                          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 text-white px-4 py-3 rounded-lg flex flex-col gap-1"
                        >
                          <span className="font-medium">{getCourseName(enrollment.courseId)}</span>
                          <span className="text-cyan-200 text-sm">Enrolled: {enrollment.enrolledDate}</span>
                          <button
                            onClick={() => handleRemove(student.id, enrollment.courseId)}
                            className="mt-2 text-red-300 hover:text-red-100 font-bold text-sm self-start"
                          >
                            Remove ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollStudents;
