const mongoose = require('mongoose');
const JournalSchema = new mongoose.Schema({

  date: {
      type: Date,
      required: [true, 'The journal date is required']
    },


  title:{
    type:String,
    required: [true, 'The journal title is required']

  },

  content:{
    type:String,
    required: [true, 'The journal content is required']


  }


});



module.exports = mongoose.model('Journal', JournalSchema);
