const test = require('jest')
const request = require('supertest')

const app = require('../../src/app')

const {  User } = require('../../src/app/models')

describe('Authentication', () => {
    it('should authenticate with valid credentials', async () => {
       const user = await User.create({ name: 'André Salles', 
       email: 'andre@sales.com', 
       password_hash: '123456'})

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: '123456'

        })

        expect(response.status).toBe(200)
    })
})
