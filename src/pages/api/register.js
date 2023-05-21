import User from "../../../models/User";
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res) =>{
    console.log('errr>>>',req.body)
    if(req.method === 'POST'){
        let u = new User(req.body);
        res.status(200).json({success:"success"});
        await u.save()
    }
    else{
        res.status(400).json({error:"This method is not allowed"})
    }
}

export default connectDb(handler);
