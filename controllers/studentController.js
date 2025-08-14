const mongoose = require("mongoose");
const Student = require("../models/studentModel");

function buildIdQuery(idParam) {
  if (/^\d+$/.test(idParam)) {
    return { type: "studentId", query: { studentId: Number(idParam) } };
  }
  if (mongoose.Types.ObjectId.isValid(idParam)) {
    return { type: "_id", query: { _id: idParam } };
  }
  return { type: "invalid" };
}

exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(400).json({ message: error.message });
  }
};
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ studentId: 1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const idParam = req.params.id;
    const idInfo = buildIdQuery(idParam);

    if (idInfo.type === "invalid") {
      return res.status(400).json({ message: "Invalid id. Provide numeric studentId or MongoDB ObjectId." });
    }

    const student = await Student.findOne(idInfo.query);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const idParam = req.params.id;
    const idInfo = buildIdQuery(idParam);

    if (idInfo.type === "invalid") {
      return res.status(400).json({ message: "Invalid id. Provide numeric studentId or MongoDB ObjectId." });
    }

    const updatedStudent = await Student.findOneAndUpdate(
      idInfo.query,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedStudent) return res.status(404).json({ message: "Student not found" });
    res.json(updatedStudent);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.status(400).json({ message: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const idParam = req.params.id;
    const idInfo = buildIdQuery(idParam);

    if (idInfo.type === "invalid") {
      return res.status(400).json({ message: "Invalid id. Provide numeric studentId or MongoDB ObjectId." });
    }

    const deleted = await Student.findOneAndDelete(idInfo.query);
    if (!deleted) return res.status(404).json({ message: "Student not found" });
    return res.json({ message: "Student deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
