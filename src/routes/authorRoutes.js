const express= require('express');
const authorsRouter=express.Router();
function router(nav1){
    var authors=[
        {
            name:'William Shakespeare',            
            genre:'English playwright',
            img:"william.jpg"    
        },
        {   name:'Emily dickinson',            
            genre:'American poet',
            img:"emily.jpg"    
        },
        {   name:'Charles Dickens',            
            genre:'Novelist',
            img:"charles.jpg"   
        }
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
            nav1,
            title:'Library',
            authors
    
        });
    });
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("author",{
            // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
            nav1,
            title:'Library', 
            author:authors[id]
        });
    });
    return authorsRouter;
}

// module.exports=booksRouter;
module.exports=router;