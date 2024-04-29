const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Express app', function() {
  it('Should render index page on GET /', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.status, 200);
        done();
      });
  });

  it('Should handle invalid routes with 404 error', function(done) {
    request(app)
      .get('/invalid-route')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.status, 404);
        done();
      });
  });

  it('Should render pizza order page on GET /pizza', function(done) {
    request(app)
      .get('/pizza')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert(res.text.includes('Меню піци'));
        done();
      });
  });

  it('Should handle POST request to order pizza', function(done) {
    const orderData = {
      pizzaName: 'Маргарита',
      name: 'Василь',
      phone: '1234567890',
      address: 'Івано-Франківськ'
    };
  
    request(app)
    .post('/order')
    .send(orderData)
    .expect(200)
    .end(function(err, res) {
      if (err) return done(err);
      assert(res.body.message === 'Ваше замовлення прийнято');
      assert(res.body.orderId);
      done();
    });
});
  
});