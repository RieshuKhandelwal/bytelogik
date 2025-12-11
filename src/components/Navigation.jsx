import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300">
            EduManage
          </Link>
          <div className="flex gap-8">
            <Link to="/students" className="hover:text-blue-400 transition font-medium">
              Students
            </Link>
            <Link to="/teachers" className="hover:text-blue-400 transition font-medium">
              Teachers
            </Link>
            <Link to="/courses" className="hover:text-blue-400 transition font-medium">
              Courses
            </Link>
            <Link to="/assign-courses" className="hover:text-blue-400 transition font-medium">
              Assign Courses
            </Link>
            <Link to="/enroll-students" className="hover:text-blue-400 transition font-medium">
              Enroll Students
            </Link>
            <Link to="/enrollments" className="hover:text-blue-400 transition font-medium">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
