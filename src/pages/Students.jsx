import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Students = () => {
  const { students, addStudent, deleteStudent, updateStudent } = useAppContext();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', rollNumber: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddStudent = () => {
    if (formData.name && formData.email && formData.rollNumber) {
      if (editingId) {
        updateStudent(editingId, formData);
        setEditingId(null);
      } else {
        addStudent(formData);
      }
      setFormData({ name: '', email: '', rollNumber: '' });
      setShowForm(false);
    }
  };

  const handleEdit = (student) => {
    setFormData({ name: student.name, email: student.email, rollNumber: student.rollNumber });
    setEditingId(student.id);
    setShowForm(true);
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', rollNumber: '' });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-8 w-full flex flex-col overflow-y-auto py-12">
        <div className="flex justify-between items-center mb-8 pt-4">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Students</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl hover:from-blue-500 hover:to-blue-600 transition shadow-lg font-semibold"
          >
            {showForm ? 'Cancel' : 'Add Student'}
          </button>
        </div>

        {showForm && (
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl mb-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Student Name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-white/20 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white/20 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="rollNumber"
                placeholder="Roll Number"
                value={formData.rollNumber}
                onChange={handleInputChange}
                className="bg-white/20 border border-white/30 text-white placeholder-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleAddStudent}
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
            {students.length === 0 ? (
              <p className="text-gray-400 text-lg col-span-full text-center py-12">No students yet. Add one to get started!</p>
            ) : (
              students.map((student) => (
                <div key={student.id} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition border border-white/20 hover:border-blue-400/50 text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">{student.name}</h3>
                  <p className="text-gray-300 mb-2">
                    <span className="font-medium text-gray-200">Roll Number:</span> {student.rollNumber}
                  </p>
                  <p className="text-gray-300 mb-6">
                    <span className="font-medium text-gray-200">Email:</span> {student.email}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(student)}
                      className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteStudent(student.id)}
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

export default Students;
