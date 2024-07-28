const mongoose = require('mongoose');
const { Enrollment } = require('./models');

// MongoDB Local URI
const uri = "mongodb://localhost:27017/college";

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    enrollStudents();
  })
  .catch((err) => {
    console.error('Connection error', err);
  });

const enrollStudents = async () => {
  const enrollments = [
    { enrollmentId: 'E001', studentId: 'S001', classId: 'C001' },
    { enrollmentId: 'E002', studentId: 'S001', classId: 'C002' },
    { enrollmentId: 'E003', studentId: 'S002', classId: 'C001' },
    { enrollmentId: 'E004', studentId: 'S003', classId: 'C003' },
    { enrollmentId: 'E005', studentId: 'S004', classId: 'C004' },
    { enrollmentId: 'E006', studentId: 'S005', classId: 'C005' },
    { enrollmentId: 'E007', studentId: 'S006', classId: 'C006' },
    { enrollmentId: 'E008', studentId: 'S007', classId: 'C001' },
    { enrollmentId: 'E009', studentId: 'S008', classId: 'C005' },
    { enrollmentId: 'E010', studentId: 'S009', classId: 'C002' },
    { enrollmentId: 'E011', studentId: 'S010', classId: 'C003' },
    { enrollmentId: 'E012', studentId: 'S011', classId: 'C004' },
    { enrollmentId: 'E013', studentId: 'S012', classId: 'C005' },
    { enrollmentId: 'E014', studentId: 'S013', classId: 'C001' },
    { enrollmentId: 'E015', studentId: 'S014', classId: 'C002' },
    { enrollmentId: 'E016', studentId: 'S015', classId: 'C003' },
    { enrollmentId: 'E017', studentId: 'S016', classId: 'C004' },
    { enrollmentId: 'E018', studentId: 'S017', classId: 'C005' },


    { enrollmentId: 'E019', studentId: 'S018', classId: 'C001' },
    { enrollmentId: 'E020', studentId: 'S019', classId: 'C002' },
    { enrollmentId: 'E021', studentId: 'S020', classId: 'C003' }
  ];

  try {
    await Enrollment.insertMany(enrollments);
    console.log('Students enrolled into classes');
  } catch (err) {
    console.error('Error enrolling students:', err);
  } finally {
    mongoose.connection.close().then(() => {
      console.log('Mongoose connection closed');
    }).catch(err => {
      console.error('Error closing connection:', err);
    });
  }
};