const express = require('express')
// const { count } = require('../schemas/user.js')
const router = express.Router()
const User = require('../schemas/user.js')

router.get('/',(req,res)=>{
    res.render('index.ejs',{ele:""})
})

router.get('/login',(req,res)=>{
    res.render('login.ejs',{ele:""})
})

router.post('/login2',async(req,res)=>{
    const user = await User.findOne({email:req.body.Email})
    if(user){
        if(user.password === req.body.Password){
            const count = await User.count({option : "Breakfast"})
            const count2 = await User.count({option : "Snack"})
            res.render('optionpage.ejs',{useremail : user._id.toString(), c1:count,c2:count2})
        }
        else{
            res.render('login.ejs',{ele : "Wrong password..!"})
        }
    }
    else{
        res.render('register.ejs',{ele:"You are not a registered user..!"})
    }
})

router.get('/register',(req,res)=>{
    res.render('register.ejs',{ele:""})
})
router.post('/register2', async(req,res)=>{
    const u = await User.find({email: req.body.Email})
    if(u.length>=1){
        res.render('register.ejs',{ele:"Email already exists..!"})
    }
    else if(req.body.Password === req.body.CfmPass){
        const user = new User({
            name:req.body.Name,
            email:req.body.Email,
            password:req.body.Password
        })
        await user.save((err)=>{
            if(err){if(err.errors){
                if(err.errors.password){
                    if(err.errors.password.kind === "minlength"){
                        res.render('register.ejs',{ele:"Required Password with min 8 characters..!"})
                    }
                }
            }}
            })
    const count = await User.count({option : "Breakfast"})
    const count2 = await User.count({option : "Snack"})
    res.render('optionpage.ejs',{useremail:user._id.toString(),c1:count,c2:count2})
    }
    else{
        res.render('register.ejs',{ele:"Passwords don't match..!"})
    }
})
router.post('/option/:id',async(req,res)=>{
    const user = await User.findById(req.params.id)
    if(user){
        user.option = req.body.Option
        await user.save()
    }
    res.render('index.ejs',{ele:"Your choice is noted..:)"})
})
router.get('/file',(req,res)=>{
    res.render('textfile.ejs')
})
module.exports = router