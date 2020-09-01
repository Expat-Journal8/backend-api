const db = require('../database/db-config.js');
const Users = require('./users-model.js');

describe('users model', () => {
    // describe('insert', () => {
    //     beforeEach(async ()=>{
    //         await db('users').truncate();
    //     });

        it('insert provided character into db', async () => {
            await Users.add({username: 'Vanya007', password: 'testpass', firstName: 'Vanya', lastName: 'Hargreeves', gender: 'feel', age: 30, email: 'vanya007@gmail.com'});
            const users = await db('users');
            expect(users).toHaveLength(4);
            expect(users[3].firstName).toBe('Vanya')
        });
        it('provide length of users', async () => {
            await Users.find(1);
            const users = await db('users');
            expect(users).toHaveLength(4)
        });
        it('find user based on id', async () => {
            await Users.findById(4);
            const users = await db('users')
            expect(users[3].username).toBe('Vanya007');
        });
    });
