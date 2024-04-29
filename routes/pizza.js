const express = require('express');
const router = express.Router();

const pizzas = [
    { name: "Маргарита" },
    { name: "Пепероні" },
    { name: "Гавайська" },
    { name: "Чотири сири" },
    { name: "Карбонара" },
    { name: "Вегетаріана" },
    { name: "М'ясна" },
    { name: "Грибна" },
    { name: "Морська" },
    { name: "Капрічоза" }
];

router.get('/', (req, res) => {
  res.render('pizza', { title: 'Меню піци', pizzas: pizzas });
});

router.post('/order', (req, res) => {
  const pizzaName = req.body.pizzaName;
  const name = req.body.name;
  const phone = req.body.phone;
  const address = req.body.address;
  
  const orderId = Math.floor(Math.random() * 1000000);

  const responseHTML = `
    <h2>Дякуємо за замовлення, ${name}!</h2>
    <p>Ви замовили піцу "${pizzaName}" на адресу "${address}". Ми зв'яжемося з вами за номером ${phone}</p>
    <p>Номер вашого замовлення: ${orderId}</p>
  `;

  res.status(200).send(responseHTML);
});

module.exports = router;