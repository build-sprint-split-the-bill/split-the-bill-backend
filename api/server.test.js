const request = require('supertest');
const server = require('./server');
const supertest = require('supertest')

describe('testing tests' , () => {
    it('true', () => {
        expect(true).toBe(true)
    })

    describe('GET', () => {
        it('200 for the win', () => {
          return supertest(server)
          .get('/').expect(200)
        })
        it('json format', () => {
            return supertest(server)
            .get('/').expect('Content-Type', /json/i);
        })
        it("responds {api: 'alive'}", async () => {
            await supertest(server).get('/')
            .then(res => {
                expect(res.body).toEqual({ api: 'alive'})
            })
        })
    })
})