const express= require('express');
const addbookRouter=express.Router();
function router(nav1){
    
    addbookRouter.get('/',function(req,res){
        res.render("addbook",
        {
            // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
            nav1,
            title:'Library',
            
    
        });
    });
    addbookRouter.get('/books',function(req,res){
       
        res.render("signin",{
            // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
            nav1,
            title:'Library', 
            
        });
    });
    return addbookRouter;
}

// module.exports=booksRouter;
module.exports=router;