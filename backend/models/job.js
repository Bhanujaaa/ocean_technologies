const mongoose = require('mongoose');

const { Schema } = mongoose;
const jobSchema = Schema(
  {
    JobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    Location: {
        type: String,
        required: true,
        trim: true,
      },
    Description: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
  
    URL: {
      type: String,
      trim: true,
      required:true,
    },
  },
);



const Job = mongoose.model('Job', jobSchema);

module.exports = Job;