import React from "react";

export default function AddStudent() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add New Student</h2>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Student Name" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Course" className="w-full border p-2 rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Student
        </button>
      </form>
    </div>
  );
}
