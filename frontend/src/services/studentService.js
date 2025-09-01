// frontend/src/services/studentService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/students"; // update if backend runs elsewhere

// Get all students
export const getStudents = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

// Get student by ID
export const getStudentById = async (id) => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
};

// Add new student
export const addStudent = async (student) => {
    const res = await axios.post(API_URL, student);
    return res.data;
};

// Update student
export const updateStudent = async (id, student) => {
    const res = await axios.put(`${API_URL}/${id}`, student);
    return res.data;
};

// Delete student
export const deleteStudent = async (id) => {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
};
