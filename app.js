const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const pizzaRouter = require('./routes/pizza');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/pizza', pizzaRouter);
app.post('/order', (req, res) => {
  const orderData = req.body;

  const orderId = Math.floor(Math.random() * 1000000);

  res.status(200).json({ orderId, message: 'Ваше замовлення прийнято' });
});

app.use((req, res) => {
  res.status(404).send('Не знайдено');
});

const port = 3001;
app.listen(port, () => {
  console.log(`Сервер запущено на порті ${port}`);
});

module.exports = app;