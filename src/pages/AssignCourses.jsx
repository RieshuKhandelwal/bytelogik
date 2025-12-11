import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const AssignCourses = () => {
  const { courses, teachers, courseTeachers, assignCourseToTeacher, removeCourseFromTeacher, getCoursesByTeacher } = useAppContext();
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleAssign = () => {
    if (selectedTeacher && selectedCourse) {
      const success = assignCourseToTeacher(Number(selectedCourse), Number(selectedTeacher));
      if (success) {
        setSelectedCourse('');
        alert('Course assigned to teacher successfully!');
      } else {
        alert('This course is already assigned to this teacher!');
      }
    } else {
      alert('Please select both a teacher and a course!');
    }
  };

  const handleRemove = (courseId, teacherId) => {
    removeCourseFromTeacher(courseId, teacherId);
  };

  const getTeacherName = (id) => teachers.find(t => t.id === id)?.name || 'Unknown';
  const getCourseName = (id) => courses.find(c => c.id === id)?.name || 'Unknown';

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-8 w-full flex flex-col overflow-y-auto py-12">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 mb-8 mt-4">Assign Courses to Teachers</h1>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl mb-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
              className="bg-white/20 border border-white/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select a Teacher</option>
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id} className="bg-gray-800">
                  {teacher.name}
                </option>
              ))}
            </select>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="bg-white/20 border border-white/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select a Course</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id} className="bg-gray-800">
                  {course.name}
                </option>
              ))}
            </select>
            <button
              onClick={handleAssign}
              className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-lg hover:from-orange-500 hover:to-orange-600 transition font-semibold"
            >
              Assign Course
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-4 space-y-6 mt-8">
          {teachers.length === 0 ? (
            <p className="text-gray-400 text-lg text-center py-12">No teachers available. Add teachers first.</p>
          ) : (
            teachers.map((teacher) => {
              const assignedCourses = getCoursesByTeacher(teacher.id);
              return (
                <div key={teacher.id} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-4">{teacher.name}</h3>
                  <p className="text-gray-300 mb-6">
                    <span className="font-medium text-gray-200">Subject:</span> {teacher.subject}
                  </p>
                  {assignedCourses.length === 0 ? (
                    <p className="text-gray-400 italic">No courses assigned yet</p>
                  ) : (
                    <div className="flex flex-wrap gap-3">
                      {assignedCourses.map((course) => (
                        <div
                          key={course.id}
                          className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/50 text-white px-4 py-2 rounded-lg flex items-center gap-3"
                        >
                          <span className="font-medium">{course.name}</span>
                          <button
                            onClick={() => handleRemove(course.id, teacher.id)}
                            className="ml-2 text-red-300 hover:text-red-100 font-bold"
                          >
                            ×
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

export default AssignCourses;
