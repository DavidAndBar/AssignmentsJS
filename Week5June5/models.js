const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: String,
  firstName: String,
  lastName: String,
  program: String,
  term: String
}, { collection: 'students' });

const classSchema = new mongoose.Schema({
  classId: String,
  courseName: String,
  dateTime: String,
  instructorId: String,
  location: String
}, { collection: 'classes' });

const enrollmentSchema = new mongoose.Schema({
  enrollmentId: String,
  studentId: String,
  classId: String
}, { collection: 'enrollments' });

const Student = mongoose.model('Student', studentSchema);
const Class = mongoose.model('Class', classSchema);
const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = { Student, Class, Enrollment };