import * as test from 'tape'
import * as request from 'supertest'
import { OK } from 'http-status-codes'
import app from '../app'

test('get should return 200 and entity list', t => {

  const entities = [{id: 1, name: 't1'}]

  request(app)
    .post('/')
    .send(entities[0])
    .end((err, res) => {
    })


  request(app)
    .get('/')
    .expect(OK)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err, 'No error')
      t.same(res.body, entities, 'response contains all entities')
      t.end()
    })

})
