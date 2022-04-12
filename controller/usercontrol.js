const userM=require('../model/usermodel');

exports.SignUp=(request,response)=>{
    let a=request.body.name;
    let b='http://localhost:4000/images/'+request.file.filename;
    let c=request.body.email;
    let d=request.body.password;
    userM.create({name:a,image:b,email:c,password:d}).then(result=>{
        return response.status(201).json(result);
    }).catch(err=>{
        return response.status(201).json({error:err});
    })
}