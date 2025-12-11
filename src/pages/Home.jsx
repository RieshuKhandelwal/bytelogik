import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const { students, teachers, courses, enrollments } = useAppContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col relative overflow-hidden">
      {/* Blur background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="flex-1 max-w-7xl mx-auto px-8 w-full flex flex-col justify-between py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
            Welcome to EduManage
          </h1>
          <p className="text-xl text-gray-300">
            A comprehensive student-teacher management system
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition border border-white/20 hover:border-blue-400/50 text-center">
            <div className="text-blue-400 text-4xl font-bold mb-3">{students.length}</div>
            <p className="text-gray-300 font-medium mb-6">Total Students</p>
            <Link to="/students" className="text-blue-400 hover:text-blue-300 font-semibold transition">
              View All →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition border border-white/20 hover:border-green-400/50 text-center">
            <div className="text-green-400 text-4xl font-bold mb-3">{teachers.length}</div>
            <p className="text-gray-300 font-medium mb-6">Total Teachers</p>
            <Link to="/teachers" className="text-green-400 hover:text-green-300 font-semibold transition">
              View All →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition border border-white/20 hover:border-purple-400/50 text-center">
            <div className="text-purple-400 text-4xl font-bold mb-3">{courses.length}</div>
            <p className="text-gray-300 font-medium mb-6">Total Courses</p>
            <Link to="/courses" className="text-purple-400 hover:text-purple-300 font-semibold transition">
              View All →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition border border-white/20 hover:border-orange-400/50 text-center">
            <div className="text-orange-400 text-4xl font-bold mb-3">{enrollments.length}</div>
            <p className="text-gray-300 font-medium mb-6">Total Enrollments</p>
            <Link to="/enrollments" className="text-orange-400 hover:text-orange-300 font-semibold transition">
              View All →
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-12 mb-8 border border-white/20">
          <h2 className="w-full text-center text-3xl font-bold text-white mb-16">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/students"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl hover:from-blue-500 hover:to-blue-600 transition font-semibold text-center shadow-lg hover:shadow-xl"
            >
              Manage Students
            </Link>
            <Link
              to="/teachers"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-xl hover:from-green-500 hover:to-green-600 transition font-semibold text-center shadow-lg hover:shadow-xl"
            >
              Manage Teachers
            </Link>
            <Link
              to="/courses"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-xl hover:from-purple-500 hover:to-purple-600 transition font-semibold text-center shadow-lg hover:shadow-xl"
            >
              Manage Courses
            </Link>
            <Link
              to="/assign-courses"
              className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-6 rounded-xl hover:from-indigo-500 hover:to-indigo-600 transition font-semibold text-center shadow-lg hover:shadow-xl"
            >
              Assign Courses to Teachers
            </Link>
            <Link
              to="/enroll-students"
              className="bg-gradient-to-r from-pink-600 to-pink-700 text-white p-6 rounded-xl hover:from-pink-500 hover:to-pink-600 transition font-semibold text-center shadow-lg hover:shadow-xl"
            >
              Enroll Students
            </Link>
            <Link
              to="/enrollments"
              className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6 rounded-xl hover:from-orange-500 hover:to-orange-600 transition font-semibold text-center shadow-lg hover:shadow-xl"
            >
              View Enrollments
            </Link>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-xl p-12 border border-white/20">
          <h2 className="w-full text-center text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">How to Use EduManage</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg">1</div>
              <div>
                <p className="text-lg text-gray-200">Start by adding students, teachers, and courses using the respective management pages.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg">2</div>
              <div>
                <p className="text-lg text-gray-200">Assign courses to teachers so students know who will be teaching each course.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg">3</div>
              <div>
                <p className="text-lg text-gray-200">Enroll students in courses they wish to take.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-lg">4</div>
              <div>
                <p className="text-lg text-gray-200">View the enrollment dashboard to see all students enrolled in each course.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
