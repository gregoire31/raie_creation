var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
var reservationRouter = require('./routes/reservation');
var photosRouter = require('./routes/photos')


var app = express();

// view engine setup
app.set('views', './src/views');
app.set('view engine', 'pug');
// app.disable('etag');
app.use(cors({
  origin: "*"
}))

app.use(bodyParser.json({limit: '150mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '150mb', extended: true}))
// app.use(cookieParser());
app.use(express.static( './src/public'));


app.use('/reservation', reservationRouter);
app.use('/photos', photosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app;
