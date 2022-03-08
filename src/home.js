// Create the express router to handle our home requests
var express = require('express');
var PropertiesModel = require("../models/properties.model");
var router = express.Router();

router.get('/', async function (req, res) {
  const properties = await PropertiesModel.find({"featured": "true"}).exec();  
  console.log(properties);

  /* PropertiesModel.find({ featured: true }).
    then(properties => {
      console.log(properties); // 'A'
      return properties
    }); */

  // const result = await PropertiesModel.find({"featured": true}).exec(); 
  // console.log(result)

  res.render("index", {});
});

module.exports = router;