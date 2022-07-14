const db = require('../config/connection');
const { User, Event, } = require('../models');
const userSeeds = require('./userSeeds.json');
const eventSeeds = require('./eventSeeds.json');

db.once('open', async () => {
  try {
    await Event.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Event.create(eventSeeds);        
}
     

   catch (err) {
    console.error(err);
    process.exit(1); //Uncaught Fatal expression error
  }

  console.log('Your bat seeds have grown into a batarang');
  process.exit(0); // No async functions pending
});