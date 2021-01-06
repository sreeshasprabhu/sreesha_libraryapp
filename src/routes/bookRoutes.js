const express= require('express');
const booksRouter=express.Router();
function router(nav1){
    var books=[
        {
            title:'Tom and Jerry',
            author:'Joseph Barbera',
            genre:'Cartoon',
            img:"tom.jpg"    
        },
        {  title:'Harry Potter',
           author:'J K Rowling',
           genre:'Fantasy',
           img:"Harry.jpg" 
        },
        {   title:'Pathummayude Aadu',
            author:'Basheer',
            genre:'Drama',
            img:"Basheer.jpg" 
        }
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
            nav1,
            title:'Library',
            books
    
        });
    });
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("book",{
            // nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
            nav1,
            title:'Library', 
            book:books[id]
        })
    })
    return booksRouter;
}

// module.exports=booksRouter;
module.exports=router;