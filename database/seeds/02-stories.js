
exports.seed = function(knex) {
      return knex('stories').insert([
        {storyName: 'Chinatown', storyCity: 'Bangkok', storyCountry: 'Thailand', storyDate: 2020-07-10, storyDesc:'Out on a nightly excursion looking for something to eat', user_id: 1,},
        {storyName: 'Sanctuary of Truth', storyCity: 'Pattaya City', storyCountry: 'Thailand', storyDate: 2020-08-10, storyDesc: 'A daytime excursion visiting some local places.', user_id: 2,},
        {storyName: 'Beach in Pattaya', storyCity: 'Pattaya City', storyCountry: 'Thailand', storyDate:2020-07-15 , storyDesc: 'Taking a must needed rest after a weekend of fun in Pattaya', user_id: 3,}
      ]);
};
