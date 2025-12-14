import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Courses from './pages/Courses';
import AssignCourses from './pages/AssignCourses';
import EnrollStudents from './pages/EnrollStudents';
import EnrollmentsDashboard from './pages/EnrollmentsDashboard';
import { AppProvider } from './context/AppContext';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex min-h-screen bg-gray-100">
          <Navigation />
          <div className="flex-1 ml-64 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/assign-courses" element={<AssignCourses />} />
              <Route path="/enroll-students" element={<EnrollStudents />} />
              <Route path="/enrollments-dashboard" element={<EnrollmentsDashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App
