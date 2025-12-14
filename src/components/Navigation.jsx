import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white text-gray-800 shadow-lg border-r border-gray-200">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav className="space-y-4">
          <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-100">Home</Link>
          <Link to="/students" className="block py-2 px-4 rounded hover:bg-gray-100">Students</Link>
          <Link to="/teachers" className="block py-2 px-4 rounded hover:bg-gray-100">Teachers</Link>
          <Link to="/courses" className="block py-2 px-4 rounded hover:bg-gray-100">Courses</Link>
          <Link to="/assign-courses" className="block py-2 px-4 rounded hover:bg-gray-100">Assign Courses</Link>
          <Link to="/enroll-students" className="block py-2 px-4 rounded hover:bg-gray-100">Enroll Students</Link>
          <Link to="/enrollments-dashboard" className="block py-2 px-4 rounded hover:bg-gray-100">Enrollments</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
