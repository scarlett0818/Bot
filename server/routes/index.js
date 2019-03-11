var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/bot",function(req, res, next) {
  let data={
    key:"Naigai",
    list:[
      {
        a: '33',
        b: '344'
      },
      {
        a: '33',
        b: '344'
      },
      {
        a: '33',
        b: '344'
      }
    ]
  }
  res.json(data)
});
module.exports = router;
