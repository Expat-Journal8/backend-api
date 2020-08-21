
exports.seed = function(knex) {
      return knex('users').insert([
        {username: 'test1', password: 'password132', firstName: 'billy', lastName: 'bob', gender: 'female', age: 18, email: 'test1@gmail.com'},
        {username: 'test2', password: 'password132', firstName: 'jack', lastName: 'jill', gender: 'male', age: 20, email: 'test2@gmail.com'},
        {username: 'test3', password: 'password132', firstName: 'bill', lastName: 'ted', gender: 'male', age:20, email: 'test3@gmail.com'}
      ]);
};
