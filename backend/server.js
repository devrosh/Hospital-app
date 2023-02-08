const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {err} = require('react-native-svg/lib/typescript/xml');

const app = express();

mongoose
  .connect(
    'mongodb+srv://devrosh:rosh@2022@firstcluster.miuw3.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => {
    app.listen(5000);
    console.log('Database is connected');
  })
  .catch(err => {
    console.log(err);
  });
