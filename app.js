const express = require('express');
const expressLayouts = require('express-ejs-layouts')

const mongoose = require('mongoose');
//Set up default mongoose connection

const app = express();
const db = require('./config/keys').MongoURI;

mongoose.connect(db, { useUnifiedTopology: true })
    .then(() => console.log('Database connected...'))
    .catch(err => console.log(err))

app.use(expressLayouts);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/index'));

app.use('/users', require('./routes/users'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
