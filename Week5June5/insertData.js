const mongoose = require('mongoose');
const { Student, Class } = require('./models');

// MongoDB Local URI
const uri = "mongodb://localhost:27017/college";

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    insertData();
  })
  .catch((err) => {
    console.error('Connection error', err);
  });

const insertData = async () => {
  const students = [
    { studentId: 'S001', firstName: 'Joe', lastName: 'Smith', program: 'Computer Science', term: 'Fall' },
    { studentId: 'S002', firstName: 'Suzan', lastName: 'Ross', program: 'Engineering', term: 'Fall' },
    { studentId: 'S003', firstName: 'Peanut', lastName: 'Bindger', program: 'Mathematics', term: 'Fall' },
    { studentId: 'S004', firstName: 'Mark', lastName: 'Jenkins', program: 'Physics', term: 'Fall' },
    { studentId: 'S005', firstName: 'Alice', lastName: 'Johnson', program: 'Biology', term: 'Fall' },
    { studentId: 'S006', firstName: 'Bob', lastName: 'Brown', program: 'Chemistry', term: 'Fall' },
    { studentId: 'S007', firstName: 'Charlie', lastName: 'Davis', program: 'Quantum Computing', term: 'Fall' },
    { studentId: 'S008', firstName: 'Dana', lastName: 'Miller', program: 'Artificial Intelligence', term: 'Fall' },
    { studentId: 'S009', firstName: 'Eve', lastName: 'White', program: 'Astrogation', term: 'Fall' },
    { studentId: 'S010', firstName: 'Frank', lastName: 'Green', program: 'Computational Biology', term: 'Fall' },
    { studentId: 'S011', firstName: 'Grace', lastName: 'Taylor', program: 'Computational Materials', term: 'Fall' },
    { studentId: 'S012', firstName: 'Hank', lastName: 'Wilson', program: 'Artificial Intelligence', term: 'Fall' },
    { studentId: 'S013', firstName: 'Ivy', lastName: 'Moore', program: 'Quantum Computing', term: 'Fall' },
    { studentId: 'S014', firstName: 'Jack', lastName: 'Anderson', program: 'Astrogation', term: 'Fall' },
    { studentId: 'S015', firstName: 'Kate', lastName: 'Thomas', program: 'Computational Biology', term: 'Fall' },
    { studentId: 'S016', firstName: 'Leo', lastName: 'Harris', program: 'Computational Materials', term: 'Fall' },
    { studentId: 'S017', firstName: 'Mona', lastName: 'Martinez', program: 'Artificial Intelligence', term: 'Fall' },
    { studentId: 'S018', firstName: 'Nina', lastName: 'Clark', program: 'Quantum Computing', term: 'Fall' },
    { studentId: 'S019', firstName: 'Owen', lastName: 'Lewis', program: 'Astrogation', term: 'Fall' },
    { studentId: 'S020', firstName: 'Paul', lastName: 'Lee', program: 'Computational Biology', term: 'Fall' }
  ];

  const classes = [
    { classId: 'C001', courseName: 'Quantum Computing 101', dateTime: 'Mon 9AM', instructorId: 'I001', location: 'Room 101' },
    { classId: 'C002', courseName: 'Galactic Astrogation 101', dateTime: 'Wed 11AM', instructorId: 'I002', location: 'Room 102' },
    { classId: 'C003', courseName: 'Computational Biology 101', dateTime: 'Fri 2PM', instructorId: 'I003', location: 'Room 103' },
    { classId: 'C004', courseName: 'Computational Materials 101', dateTime: 'Tue 10AM', instructorId: 'I004', location: 'Room 104' },
    { classId: 'C005', courseName: 'Artificial Intelligence Engineering 101', dateTime: 'Thu 3PM', instructorId: 'I005', location: 'Room 105' },
    { classId: 'C006', courseName: 'Astrophysics 101', dateTime: 'Mon 1PM', instructorId: 'I006', location: 'Room 106' }
  ];

  try {
    await Student.insertMany(students);
    await Class.insertMany(classes);
    console.log('Sample data inserted');
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    mongoose.connection.close().then(() => {
      console.log('Mongoose connection closed');
    }).catch(err => {
      console.error('Error closing connection:', err);
    });
  }
};