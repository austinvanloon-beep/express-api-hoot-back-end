const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    test: {
        type: String,
        required: true
    },
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
},
{ timestamps: true }
)

const hootSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['News', 'Sports', 'Games', 'Movies', 'Music', 'Television'],
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comments: [commentSchema]
  },
  { timestamps: true }
);

const hoot = mongoose.model('Hoot', hootSchema)