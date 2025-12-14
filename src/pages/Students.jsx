import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Students = () => {
  const { students, addStudent, updateStudent, deleteStudent } = useContext(AppContext);
  const [newStudent, setNewStudent] = useState({ name: '', email: '', age: '' });
  const [editing, setEditing] = useState(null);

  const handleAdd = () => {
    addStudent(newStudent);
    setNewStudent({ name: '', email: '', age: '' });
  };

  const handleEdit = (student) => {
    setEditing(student.id);
    setNewStudent(student);
  };

  const handleUpdate = () => {
    updateStudent(editing, newStudent);
    setEditing(null);
    setNewStudent({ name: '', email: '', age: '' });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Students</h1>
      
      {/* Add/Edit Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">{editing ? 'Edit Student' : 'Add New Student'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            className="p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
            className="p-3 border rounded-lg"
          />
          <input
            type="number"
            placeholder="Age"
            value={newStudent.age}
            onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
            className="p-3 border rounded-lg"
          />
        </div>
        <button
          onClick={editing ? handleUpdate : handleAdd}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
        >
          {editing ? 'Update' : 'Add'} Student
        </button>
      </div>
      
      {/* Students List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div key={student.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{student.name}</h3>
            <p className="text-gray-600 mb-1">Email: {student.email}</p>
            <p className="text-gray-600 mb-4">Age: {student.age}</p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(student)}
                className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteStudent(student.id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
