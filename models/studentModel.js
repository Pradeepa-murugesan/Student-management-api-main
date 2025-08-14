const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
    id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});
const Counter = mongoose.model("Counter", counterSchema);

const studentSchema = new mongoose.Schema({
    studentId: { type: Number, unique: true }, 
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    course: { type: String, required: true },
}, { timestamps: true });

studentSchema.pre("save", async function (next) {
    if (this.isNew) {
        const counter = await Counter.findOneAndUpdate(
            { id: "studentId" },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.studentId = counter.seq;
    }
    next();
});

module.exports = mongoose.model("Student", studentSchema);
