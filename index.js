/* ///
/// B1. Create "project"
/// 	npm  init  -y
/// B2. INSTALL
/// 	npm install express  body-parser  cookie-parser multer ejs mongodb mongoose  express-session cookie-session qrcode  qrcode-svg  --save
/// B3. RUN - server
/// 	node   index.js
*/// 	

/// ................................................................
/// 					 Khai báo LIB Thêm Vào để sử dụng
/// ................................................................
var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var serveIndex = require('serve-index')

/// ................................................................
/// 					 		Engine EJS
/// ................................................................
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');


/// ................................................................
/// 					 		Config
/// ................................................................
/// Tham số
const PORT = process.env.PORT || 8080;
/// ------------------ Khai bao cac Folder Tĩnh, Session, Cookies
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/// ................................................................
/// 						ROUTer - ROUTing
/// ................................................................
/*--- Home ---*/
var homeControl = require('./controllers/homeController');
app.get( '/', homeControl );

/*--- Admin ---*/
var adminControl = require('./controllers/adminController');
app.use('/admin', adminControl );

/*--- User ---*/
var userControl = require('./controllers/userController');
app.use('/user', userControl );

/*--- Product ---*/
var productControl = require('./controllers/productController');
app.use('/product', productControl );

/*--- Order ---*/
var orderControl = require('./controllers/orderController');
app.use('/order', orderControl );

/*--- Report ---*/
var reportControl = require('./controllers/reportController');
app.use('/report', reportControl );
/*--- payment ---*/
var paymentControl = require('./controllers/paymentController');
app.use('/payment', paymentControl );
/*--- login ---*/
var loginControl = require('./controllers/loginController');
app.use('/login', loginControl );
/*--- WEB QR Code ---*/
var qrcodeControl = require('./controllers/qrcodeController');
app.use('/qr', qrcodeControl );

/// ................................................................
/// 						RUNNING SERVER
/// ................................................................

app.listen( PORT, 
    () => {
        console.log("\n\n--------- Server running ! PORT: ", PORT);
    }
);

