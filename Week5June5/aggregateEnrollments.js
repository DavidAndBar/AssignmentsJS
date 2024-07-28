const mongoose = require('mongoose');
const { Enrollment } = require('./models');

// MongoDB Local URI
const uri = "mongodb://localhost:27017/college";

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Connection error', err));

const aggregateEnrollments = async () => {
  try {
    const result = await Enrollment.aggregate([
      {
        $lookup: {
          from: 'students',
          localField: 'studentId',
          foreignField: 'studentId',
          as: 'studentDetails'
        }
      },
      {
        $lookup: {
          from: 'classes',
          localField: 'classId',
          foreignField: 'classId',
          as: 'classDetails'
        }
      },
      {
        $unwind: '$studentDetails'
      },
      {
        $unwind: '$classDetails'
      },
      {
        $project: {
          _id: 0,
          enrollmentId: 1,
          'studentDetails.firstName': 1,
          'studentDetails.lastName': 1,
          'classDetails.courseName': 1,
          'classDetails.dateTime': 1,
          'classDetails.location': 1
        }
      }
    ]);

    console.log('Aggregated Enrollments:', JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('Error aggregating enrollments:', err);
  } finally {
    mongoose.connection.close().then(() => {
      console.log('Mongoose connection closed');
    }).catch(err => {
      console.error('Error closing connection:', err);
    });
  }
};

aggregateEnrollments();