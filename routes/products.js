const express = require(' express')
const router = express.Router();

router.get('/', (req, resp)=>{
    const productsList=[
        {
        name:'seesh 1',
        id:123
  
    },
    
      { 
         name:'see',
        id:1230
      
},
{  
    name:'san',
id:12345

}
]
   
    console.log('product sent..')
    resp.send(productsList);
})
module.exports = router;