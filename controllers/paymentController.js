var express = require('express');
var router = express.Router();

/// --- Code CONTROLLERs
router.use(function timeLog (req, res, next) {
    console.log('\n\t payment controller - Time: ', Date().toString());
    next();
})

/////..................................................
router.get( '/', paymentPage );
function paymentPage(req, res) {
	res.render("payment");
}

/// --- EXports
module.exports = router;

