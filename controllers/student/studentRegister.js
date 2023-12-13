const CustomError = require('../../Utils/CustomError');
const asyncErrorHandler=require('./../utiles/async')
const jwt = require('jsonwebtoken');

exports.signUp = asyncErrorHandler(async(req,res,next)=>{
    const newUser =await Student.create(req.body)
    const token =jwt.sign({id: newUser._id},process.env.SECRET_STR 
,{expiresIn:process.env.LOGIN_EXPIRES})
    res.status(201).json({

    status:"success",
    token, 
    data:{
        user:newUser
    }
})

})
exports.login = asyncErrorHandler(async(req,res,next)=>{
   const email = req.body.email;
   const password = req.body.password;
   if(!email|| !password){
    const error = new customerError('Please provide email ID & Password for login',400)
   return next(error)

}
  const user  =await Student.findone({email}).select('+password')
//const isMatch = 
    
if(!user||!(await Student.comparePasswordInDb(password, user.password))){
      const error = new customerError(' incorrect email or password',400)
      return next(error)

} 
 const token = signtoken(user_id)
    res.status(200).json({

    status:"success",
    token, 
    data:{
        user:newUser
    }
})

})
exports.protect = asyncErrorHandler(async(req,res,next)=>{
//read token and chek if its exit
  const testToken = req.header.authorization
  let token;
  if(testToken&& testToken.startWith('bearer'))
  {
    token = testToken.split(' ')[1];
  }
  if(!token){
    next(new CustomError("your not loged in", 400  ))
  }

  //2 validate the token 
  const decodeToken =await util.promisify(jwt.verify)(token,process.env.SECRET_STR)
console.log(decodeToken)
})