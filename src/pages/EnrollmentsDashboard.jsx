import React from 'react';
import { useAppContext } from '../context/AppContext';

const EnrollmentsDashboard = () => {
  const { students, courses, enrollments } = useAppContext();

  const getStudentName = (id) => students.find(s => s.id === id)?.name || 'Unknown';
  const getCourseName = (id) => courses.find(c => c.id === id)?.name || 'Unknown';

  const groupedEnrollments = courses.map((course) => ({
    courseId: course.id,
    courseName: course.name,
    courseCode: course.code,
    students: enrollments
      .filter((e) => e.courseId === course.id)
      .map((e) => ({
        studentId: e.studentId,
        studentName: getStudentName(e.studentId),
        enrolledDate: e.enrolledDate,
      })),
  }));

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-8 w-full flex flex-col overflow-y-auto py-12">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-400 mb-8 mt-4">Enrollment Dashboard</h1>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-blue-400/50 transition">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Total Students</h3>
            <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">{students.length}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-green-400/50 transition">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Total Courses</h3>
            <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">{courses.length}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-purple-400/50 transition">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Total Enrollments</h3>
            <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">{enrollments.length}</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-4 mt-8">
          {groupedEnrollments.length === 0 || enrollments.length === 0 ? (
            <p className="text-gray-400 text-lg text-center py-12">No enrollments yet. Start by enrolling students in courses!</p>
          ) : (
            <div className="space-y-6">
              {groupedEnrollments.map((courseEnrollment) => (
                <div key={courseEnrollment.courseId} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:border-violet-400/50 transition">
                  <div className="bg-gradient-to-r from-violet-600/20 to-pink-600/20 border-b border-white/20 p-8">
                    <h2 className="text-3xl font-bold text-white mb-2">{courseEnrollment.courseName}</h2>
                    <p className="text-gray-300">Code: <span className="font-semibold text-violet-300">{courseEnrollment.courseCode}</span></p>
                  </div>
                  <div className="p-8">
                    {courseEnrollment.students.length === 0 ? (
                      <p className="text-gray-400 italic">No students enrolled in this course yet.</p>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b-2 border-white/20">
                              <th className="text-left py-4 px-4 font-semibold text-gray-300">Student Name</th>
                              <th className="text-left py-4 px-4 font-semibold text-gray-300">Enrollment Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {courseEnrollment.students.map((student, index) => (
                              <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition">
                                <td className="py-4 px-4 text-gray-200">{student.studentName}</td>
                                <td className="py-4 px-4 text-gray-400">{student.enrolledDate}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className="mt-6 text-right">
                          <span className="text-gray-300 font-semibold">Total Students: <span className="text-violet-300">{courseEnrollment.students.length}</span></span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollmentsDashboard;
