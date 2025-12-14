import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white text-gray-800 shadow-lg border-r border-gray-200">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-8">EduManage</h2>
        <nav className="space-y-4">
          <Link to="/" className="flex items-center py-2 px-4 rounded hover:bg-gray-100">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 001.414 1.414L2 12.414V19a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 001 1h3a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-9-9z"/>
            </svg>
            Home
          </Link>
          <Link to="/students" className="flex items-center py-2 px-4 rounded hover:bg-gray-100">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 012.07-.654c.04-.212.047-.432.024-.654a6.484 6.484 0 00-1.905-3.96 3 3 0 01-4.308 3.517.783.783 0 01-.358.442z"/>
            </svg>
            Students
          </Link>
          <Link to="/teachers" className="flex items-center py-2 px-4 rounded hover:bg-gray-100">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Teachers
          </Link>
          <Link to="/courses" className="flex items-center py-2 px-4 rounded hover:bg-gray-100">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Courses
          </Link>
          <Link to="/assign-courses" className="flex items-center py-2 px-4 rounded hover:bg-gray-100">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
            </svg>
            Assign Courses
          </Link>
          <Link to="/enroll-students" className="flex items-center py-2 px-4 rounded hover:bg-gray-100">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Enroll Students
          </Link>
          <Link to="/enrollments-dashboard" className="flex items-center py-2 px-4 rounded hover:bg-gray-100">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
            </svg>
            Enrollments
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
