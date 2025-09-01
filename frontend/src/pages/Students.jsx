import React from "react";

export default function Students() {
  const students = [
    { id: 1, name: "Alice", course: "AI/ML" },
    { id: 2, name: "Bob", course: "Cloud Computing" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Students List</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td className="border p-2">{s.id}</td>
              <td className="border p-2">{s.name}</td>
              <td className="border p-2">{s.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
