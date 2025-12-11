import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Courses = () => {
  const { courses, addCourse, deleteCourse, updateCourse } = useAppContext();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: '', code: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddCourse = () => {
    if (formData.name && formData.code && formData.description) {
      if (editingId) {
        updateCourse(editingId, formData);
        setEditingId(null);
      } else {
        addCourse(formData);
      }
      setFormData({ name: '', code: '', description: '' });
      setShowForm(false);
    }
  };

  const handleEdit = (course) => {
    setFormData({ name: course.name, code: course.code, description: course.description });
    setEditingId(course.id);
    setShowForm(true);
  };

  const handleCancel = () => {
    setFormData({ name: '', code: '', description: '' });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-8 w-full flex flex-col overflow-y-auto py-12">
        <div className="flex justify-between items-center mb-8 pt-4">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Courses</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-xl hover:from-purple-500 hover:to-purple-600 transition shadow-lg font-semibold"
          >
            {showForm ? 'Cancel' : 'Add Course'}
          </button>
        </div>

        {showForm && (
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl mb-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Course Name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-white/20 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="text"
                name="code"
                placeholder="Course Code"
                value={formData.code}
                onChange={handleInputChange}
                className="bg-white/20 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                className="bg-white/20 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleAddCourse}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg hover:from-green-500 hover:to-green-600 transition font-semibold"
              >
                {editingId ? 'Update' : 'Add'}
              </button>
              <button
                onClick={handleCancel}
                className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-2 rounded-lg hover:from-gray-500 hover:to-gray-600 transition font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto pb-4 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.length === 0 ? (
              <p className="text-gray-400 text-lg col-span-full text-center py-12">No courses yet. Add one to get started!</p>
            ) : (
              courses.map((course) => (
                <div key={course.id} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition border border-white/20 hover:border-purple-400/50 text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">{course.name}</h3>
                  <p className="text-gray-300 mb-2">
                    <span className="font-medium text-gray-200">Code:</span> {course.code}
                  </p>
                  <p className="text-gray-300 mb-6">
                    <span className="font-medium text-gray-200">Description:</span> {course.description}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(course)}
                      className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCourse(course.id)}
                      className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg hover:from-red-500 hover:to-red-600 transition font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
