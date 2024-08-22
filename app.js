const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const authController = require('./controllers/auth-controller');

app.use(express.json());
app.use('/auth',authController);


const clientsRouts = require('./routers/clients-routs');
app.use('/clients',clientsRouts);

const PORT = 3001;
app.use(express.static('public'));


app.listen(PORT, function () {
    console.log(`My app is listening on port ${PORT}!`);
});


