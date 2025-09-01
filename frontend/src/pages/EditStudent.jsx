import React from "react";
import { useParams } from "react-router-dom";

export default function EditStudent() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Student {id}</h2>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Student Name" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Course" className="w-full border p-2 rounded" />
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Update Student
        </button>
      </form>
    </div>
  );
}
