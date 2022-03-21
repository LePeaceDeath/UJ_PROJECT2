var express = require('express');
var router = express.Router();
// var app = express();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('calories', {calories: 0, caloriesGain:0, caloriesLose: 0});
});

router.post('/', (req,res)=>{
    console.log(req.body);
    var calories = 0;
    if(req.body.sex === 'Male'){
        console.log("From Male");
        calories += 66.5+13.75*req.body.weight+5.003*req.body.height-6.775*req.body.age;
        console.log("Calories: ",calories);
    } else{
        console.log("From female");
        calories += 655.1+9.563*req.body.weight+1.85*req.body.height-4.676*req.body.age;
        console.log("Calories: ",calories);
    }
    switch (req.body.activity){
      case 'low':
        console.log("From low");
        calories*=1.2;
        break;
      case 'middle':
        console.log("From mid");
        calories*=1.375;
        break;
      case 'high':
        console.log("From high");
        calories*=1.55;
        break;
      case 'sport':
        console.log("From SPORT");
        calories*=1.725;
        break;
      case 'extra sport':
        console.log("From extrasport");
        calories*=1.9;
        break;
      default:
        console.log("From def");
        calories*=1.55;
    }
    console.log("Calories = ", calories);
    res.render('calories', {calories:calories, caloriesGain: calories*1.2, caloriesLose: calories*0.8})
});

module.exports = router;
