exports.seed = function(knex) {
  return knex('stories').insert([
    {storyName: 'Chinatown', storyCity: 'Bangkok', storyCountry: 'Thailand', storyDesc:'Out on a nightly excursion looking for something to eat', storiesPhoto: 'Bangkok link', user_id: 1,},
    {storyName: 'Sanctuary of Truth', storyCity: 'Pattaya City', storyCountry: 'Thailand', storyDesc: 'A daytime excursion visiting some local places.', storiesPhoto: "pattaya link", user_id: 2,},
    {storyName: 'Beach in Pattaya', storyCity: 'Pattaya City', storyCountry: 'Thailand', storyDesc: 'Taking a must needed rest after a weekend of fun in Pattaya',storiesPhoto: 'beach link', user_id: 3,}
  ]);
}; 
