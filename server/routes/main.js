const express = require('express');
const router = express.Router();
const Post = require('../models/Post');



// Routes, GET, HOME
router.get('/', async (req, res) => {
    
    try{
        const locals = {
            title: "Nodejs-blog",
            description: "Simple Blog Created with NodeJs, Express & MongDb."
        }

        let perpage = 5;
        let page = req.query.page || 1;
        const data = await Post.aggregate([ { $sort: { createdAt: -1 }} ])
        .skip(perpage * page - perpage)
        .limit(perpage)
        .exec();

        const count = await Post.countDocuments();
        const nextPage = parseInt(page) + 1;
        const hashNextPage = nextPage <= Math.ceil(count / perpage);
        
        res.render('index', {
            locals,
            data,
            current: req.query.page || 1,
            nextPage : hashNextPage ? nextPage : null,
            currentRoute : '/'
        });
    
    
    
    
    } catch (error) {
        console.log(error);
    }
});




//GET POST: ID
router.get('/post/:id', async (req, res) => {
    try {
      let slug = req.params.id;
  
      const data = await Post.findById({ _id: slug });
  
      const locals = {
        title: data.title,
        description: "Simple Blog created with NodeJs, Express & MongoDb.",
     }
  
      res.render('post', { 
        locals,
        data,
        
      });
    } catch (error) {
      console.log(error);
    }
  
  });



//POST POST: SEARCHTERM

router.post('/search', async (req, res) => {
    try {
      const locals = {
        title: "Seach",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
      }
  
      let searchTerm = req.body.searchTerm;
      const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "")
  
      const data = await Post.find({
        $or: [
          { title: { $regex: new RegExp(searchNoSpecialChar, 'i') }},
          { body: { $regex: new RegExp(searchNoSpecialChar, 'i') }}
        ]
      });
  
      res.render("search", {
        data,
        locals,
        
      });
  
    } catch (error) {
      console.log(error);
    }
  
  });























/*function insertPostData() {
    Post.insertMany([
        {
        title: "Frist Interview",
        body: "This is how i get my frist interview"
    },
    {
        title: "Second Task",
        body: "I get my frist task in nodejs"
    },
    {
        title: "Third Thing",
        body: "I get stuck in project"
    },
    {
        title: "Try",
        body: "I try to solve the problem"
    },
    
])
}

insertPostData();*/









router.get('/about', (req, res) => {
    res.render('about');
});





module.exports = router;