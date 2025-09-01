const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: API for managing students
 */

// Create student
/**
 * @swagger
 * /students:
 *   post:
 *     summary: Add a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: number
 *               course:
 *                 type: string
 *     responses:
 *       201:
 *         description: Student created successfully
 */
router.post("/", studentController.createStudent);

// Get all students
/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: List of all students
 */
router.get("/", studentController.getAllStudents);

// Get student by ID
/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get a student by MongoDB ObjectId
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Student MongoDB ObjectId
 *     responses:
 *       200:
 *         description: Student data
 *       404:
 *         description: Student not found
 */
router.get("/:id", studentController.getStudentById);

// Update student by ID
/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Update a student by MongoDB ObjectId
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Student MongoDB ObjectId
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Student updated
 *       404:
 *         description: Student not found
 */
router.put("/:id", studentController.updateStudent);

// Delete student by ID
/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Delete a student by MongoDB ObjectId
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Student MongoDB ObjectId
 *     responses:
 *       200:
 *         description: Student deleted
 *       404:
 *         description: Student not found
 */
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
