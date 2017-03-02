const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/journal-development');
const Journal = require('../models/journal-entry');
const journals = [
  {
    date: new Date(),
    title: 'everythin',
    content: 'Men are like steel. When they lose their temper, they lose their worth.',
  },
  {
    date: new Date(),
    title: 'Unemployed',
    content: 'YES WE CAN!!!',
  },
  {
    date: new Date(),
    title: 'Sings & Weed',
    content: 'BIKINIS, ZUCCHINIS, MARTINIS. NO WEENIES',
  },
  {
    date: new Date(),
    title: 'everythin',
    content: 'Men are like steel. When they lose their temper, they lose their worth.',
  },
  {
    date: new Date(),
    title: 'Unemployed',
    content: 'YES WE CAN!!!',
  },
  {
    date: new Date(),
    title: 'Sings & Weed',
    content: 'BIKINIS, ZUCCHINIS, MARTINIS. NO WEENIES',
  },
  {
    date: new Date(),
    title: 'Titanic',
    content: 'Fresh news about big ship',
  },
  {
    date: new Date(),
    title: 'Ping pong in Hong Kong',
    content: 'Secrets of chineese masters',
  },
  {
    date: new Date(),
    title: 'Grass',
    content: 'How to trimm the grass',
  },
  {
    date: new Date(),
    title: 'North pole',
    content: 'Latest qwerty',
  },
  {
    date: new Date(),
    title: 'North South',
    content: 'Yeah',}
];

// Journal.collection.drop();
Journal.create(journals, (err, docs) => {
  if (err) { throw err };
  docs.forEach( (journals) => {
    console.log(journals.title)
  })
  mongoose.connection.close();
});
