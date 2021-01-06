const express= require('express');
//const booksRouter=express.Router();
const app=new express();
//var Regex = require("regex");
const nav= [
    // {
    //     link:'/books',name:'Books'
    // },
    // {
    //     link:'/authors',name:'Authors'  
    // },
    {
        link:'/signup',name:'SignUp'  
    },
    {
        link:'/signin',name:'SignIn'  
        
    },
    // {
    //     link:'/addbook',name:'Add Book'
    // }
];
const nav1=[
     {
         link:'/books',name:'Books'
     },
     {
        link:'/authors',name:'Authors'  
    },
    {
        link:'/addbook',name:'Add Book'
    },
    {
        link:'/',name:'Log Out'
    }
]

const booksRouter=require('./src/routes/bookRoutes')(nav1);
const authorsRouter=require('./src/routes/authorRoutes')(nav1);
const signupRouter=require('./src/routes/signupRouter')(nav);
const signinRouter=require('./src/routes/signinRouter')(nav);
const addbookRouter=require('./src/routes/addbookRouter')(nav1);
const welcomeRouter=require('./src/routes/welcomeRouter')(nav1);


app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}))
//template engine
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/signin',signinRouter);
app.use('/addbook',addbookRouter);
app.use('/welcome',welcomeRouter);


app.get('/',function(req,res){
    // res.send("Hello World! welcome");
    //res.sendFile(__dirname+"/src/views/index.html")
    //res.render("index",{books:['book1','book2'],title:'library'});
    res.render("index",
    {
        //nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        nav,
        title:'Library'

    })
});
// app.get('/books',function(req,res){
//     res.render("books",
//     {
//         nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
//         title:'Library'

//     });
// });
// var books=[
//     {
//         title:'Tom and Jerry',
//         author:'Joseph Barbera',
//         genre:'Cartoon',
//         img:"tom.jpg"    
//     },
//     {  title:'Harry Potter',
//        author:'J K Rowling',
//        genre:'Fantasy',
//        img:"Harry.jpg" 
//     },
//     {   title:'Pathummayude Aadu',
//         author:'Basheer',
//         genre:'Drama',
//         img:"Basheer.jpg" 
//     }
// ]
// booksRouter.get('/',function(req,res){
//     res.render("books",
//     {
//         nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
//         title:'Library',
//         books

//     });
// });
// booksRouter.get('/single',function(req,res){
//     res.send("Hey I am a single book")
// })
// booksRouter.get('/:id',function(req,res){
//     const id=req.params.id;
//     res.render("book",{
//         nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
//         title:'Library', 
//         book:books[id]
//     })
// })

app.listen(5000);