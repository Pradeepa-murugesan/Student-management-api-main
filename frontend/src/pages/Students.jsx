import React, { useState } from "react";

// Dummy data (later you’ll fetch this from backend)
const initialStudents = [
  { id: 1, name: "Pradeepa", age: 20, dept: "AIML", email: "pradeepa@example.com", phone: "9876543210" },
  { id: 2, name: "Rahul", age: 21, dept: "CSE", email: "rahul@example.com", phone: "9876501234" },
];

export default function Students() {
  const [students] = useState(initialStudents);
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Students</h2>

      {/* Table */}
      <table className="w-full border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Age</th>
            <th className="py-2 px-4 text-left">Department</th>
            <th className="py-2 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="border-t hover:bg-gray-100">
              <td className="py-2 px-4">{s.name}</td>
              <td className="py-2 px-4">{s.age}</td>
              <td className="py-2 px-4">{s.dept}</td>
              <td className="py-2 px-4 text-center space-x-2">
                <button
                  onClick={() => setSelectedStudent(s)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  👁 View
                </button>
                <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                  ✏ Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Student Profile</h3>
            <p><strong>Name:</strong> {selectedStudent.name}</p>
            <p><strong>Age:</strong> {selectedStudent.age}</p>
            <p><strong>Department:</strong> {selectedStudent.dept}</p>
            <p><strong>Email:</strong> {selectedStudent.email}</p>
            <p><strong>Phone:</strong> {selectedStudent.phone}</p>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setSelectedStudent(null)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
