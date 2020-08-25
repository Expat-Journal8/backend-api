
exports.seed = function(knex) {
      return knex('photos').insert([
        -{photoLink: 'https://i.ibb.co/DVN5Lnx/20200322-213304.jpg', photoDesc: 'Out for dinner', photoDate: '2020-07-10', stories_id: 1,},
        {photoLink: 'https://i.ibb.co/8dXhn81/20200809-204009.jpg', photoDesc: 'Visiting the Sanctuary of Truth in Pattaya', photoDate: '2020-08-10', stories_id: 2,},
        {photoLink: 'https://i.ibb.co/RTZNzfX/20200821-093310.jpg', photoDesc: 'Enjoy a moment of relaxation in Pattaya', photoDate:'2020-07-15' , stories_id: 3,}
      ]);
};
