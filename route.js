const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myData', {useNewUrlParser: true, useUnifiedTopology: true});

let data = ["workout" , "diet" , "code" , "sleep"];

module.exports = (app) =>{

    // Get routes
    app.get('/' , (req,res)=>{
        res.render('index' , {routine:data})
    });

    app.get('/about' , (req, res)=>{
        res.render('about');
    });

    app.get('/profile/:id',(req, res)=>{
        res.status(200).send("requested user number is: " + req.params.id)
    })

    app.get('/login' , (req , res)=>{
        res.render('login')
    });

    app.get('/signup' , (req , res)=>{
        res.render('signup');
    });

    // Post routes

    app.post('/sent' , (req , res)=>{
        console.log(req.body.item);
        data.push(req.body.item);
        res.send(data);
    })

    // Delete Routes

    app.delete('/remove/:id' , (req , res)=>{
        data = data.map(item=>{
            if(item != req.params.id){
                return item;
            }
        })
        res.send(data);
    })
}