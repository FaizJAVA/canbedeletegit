const express=require('express');
const userRouter=express.Router();
const multer=require('multer');

const storage=multer.diskStorage({
    destination:'public/images',
    filename:(request,file,cb)=>{
        cb(null,Date.now()+'_'+file.originalname);
    }
});

const upload=multer({storage:storage});

const userControl=require('../controller/usercontrol');

userRouter.post('/signup',upload.single('image'),userControl.SignUp);

module.exports=userRouter;