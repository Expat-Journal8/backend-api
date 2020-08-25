
exports.seed = function(knex) {
      return knex('photos').insert([
        -{photoLink: 'https://i.ibb.co/DVN5Lnx/20200322-213304.jpg', photoDesc: 'Out for dinner', stories_id: 1,},
        {photoLink: 'https://i.ibb.co/8dXhn81/20200809-204009.jpg', photoDesc: 'Visiting the Sanctuary of Truth in Pattaya', stories_id: 2,},
        {photoLink: 'https://i.ibb.co/RTZNzfX/20200821-093310.jpg', photoDesc: 'Enjoy a moment of relaxation in Pattaya', stories_id: 3,}
      ]);
};
