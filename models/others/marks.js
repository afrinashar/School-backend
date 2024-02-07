const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
    rollNo: {
      type: Number,
       
    },
    internal: {
      type: Map,
      marks: {
        tamil: { type: String, required: true },
        english: { type: String, required: true },
        mathmaticals: { type: String, required: true },
        science: { type: String, required: true },
        socialscience: { type: String, required: true }
      },
    },
    external: {
      type: Map,
      marks: {
        tamil: { type: String, required: true },
        english: { type: String, required: true },
        mathmaticals: { type: String, required: true },
        science: { type: String, required: true },
        socialscience: { type: String, required: true }
      }
    }
  }, { timestamps: true });
  

const Marks = mongoose.model('Marks', marksSchema);

module.exports = Marks;
