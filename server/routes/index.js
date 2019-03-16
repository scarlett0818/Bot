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
//   res.json({
//     "response_type": "in_channel",
//     "text": "It's 80 degrees right now.",
//     "attachments": [
//         {
//             "text":"Partly cloudy today and tomorrow"
//         }
//     ]
// })
  res.send("拼命找图中")
send(req.body.response_url,req.body.text)
});

module.exports = router;

async function send(url,text){
  let option_1 = {
    url:"https://www.doutula.com/api/search",
    method:"get",
    json:true,
    qs:{
      keyword:text
    }
  } 
  console.log(option_1)

  let picture_url 
  try {
   let res = await rp(option_1)
   picture_url= res
  } catch (error) {
    console.log(error)
    result = {
      "response_type": "ephemeral",
      "text": "再试一次"
    }
  }

  let result =[]
  let list = picture_url.data.list
  //console.log(list)
  for(var i= 0; i<list.length;i++){
   let item = {
      "type": "image",
      "image_url": list[i].image_url,
      "alt_text": "Example Image"
    }
   result.push(item)
  }
  result.unshift({
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": " *"+text+"* 找到了."
      }
    })
  console.log(result)
    

   let option = {
     url:url,
     method:"post",
     json:true,
     body:{
      "blocks":result
  
     }
   } 
   console.log(option)
   try {
    let res = await rp(option)
   } catch (error) {
     console.log(error)
   }
  

}