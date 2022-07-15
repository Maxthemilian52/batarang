const db = require('../config/connection');
const { User, Event, Post } = require('../models');
const userSeeds = require('./userSeeds.json');
const eventSeeds = require('./eventSeeds.json');
const postSeeds = require('./postSeeds.json')

db.once('open', async () => {
  try {
    await Event.deleteMany({});
    await User.deleteMany({});
    await Post.deleteMany({});
    
    await Event.create(eventSeeds);  
    await User.create(userSeeds);     

    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, postAuthor} = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        {
          $addToSet: {
            post: _id,
          },
        }
      );
    }
  }

   catch (err) {
    console.error(err);
    process.exit(1); //Uncaught Fatal expression error
  }

  console.log('Your bat seeds have grown into a batarang');
  process.exit(0); // No async functions pending
});