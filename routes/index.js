var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: "Home" , welcome: "Welcome to the Home page"});
});

router.get('/aboutMe', function(req, res, next) {
    res.render('aboutMe', { title: "About Me", welcome: "Welcome to About Me" });
});

router.get('/tester', function(req, res, next) {
    res.render('tester');
});

router.get('/projectTemp', function(req, res, next) {
    var cat = req.param('cat');
    var project = req.param('project')
    res.render('projects/projectTemp', {catagory: cat, project:project});
});

router.get('/projectSel', function(req, res, next) {
    var cat = req.param('cat');
    res.render('projects/projectSelTem', {catagory: cat});
});

router.get('/Dissertation', function(req, res, next) {
    res.redirect("https://devweb3000.cis.strath.ac.uk/~xpb16190/TruthTableGame/");
});



module.exports = router;
