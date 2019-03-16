const express = require('express');
const router = express.Router();
const rp = require("request-promise")

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

router.post('/picture', function(req, res, next) {
  console.log(req.body)
  res.json({
    "response_type": "in_channel",
    "text": "It's 80 degrees right now.",
    "attachments": [
        {
            "text":"Partly cloudy today and tomorrow"
        }
    ]
})
send(req.body.response_url)
});
module.exports = router;

async function send(url){
   let option = {
     url:url,
     method:"post",
     json:true,
     body:{
      "response_type": "in_channel",
      "text": "It's 80 degrees right now.",
      "attachments": [
        {
            "text":"Partly cloudy today and tomorrow"
        }
    ]
     }
   } 
   console.log(option)
   try {
    let res = await rp(option)
   } catch (error) {
     console.log(error)
   }
  

}