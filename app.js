const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { PORT = 3000 } = process.env;
const app = express();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: true });

mongoose.connect('mongodb://localhost:27017/mestodb');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', require('./routes/users.js'));


app.post('/', urlencodedParser, (req, res) => {
  res.send(
    `<html>
    <body>
        ${req.body}
    ${JSON.stringify(req.body)}

        <p>Ответ на сигнал из далёкого космоса</p>
    </body>
    </html>`
  );
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});