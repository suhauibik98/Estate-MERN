



const signIn  =async (req,res)=>{
    const {email,password}=req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({message:"User not found"});
        }
}


module.exports = {signIn}