import express from 'express';
import InterviewMessage from '../models/interview';
const router = express.Router();

router.get('/',async(req,res)=>{
    try{
        const list = await InterviewMessage.find();
        // console.log(list);
        res.status(200).json(list);
    }catch(error){
        res.status(400).json({message: error.message});
    }
})

router.post('/',async(req,res)=>{
    const { participants, startTime, endTime } = req.body;
    console.log("Posted");
    console.log(req.body);
    const newInterview = new InterviewMessage({ participants, startTime, endTime });
    try{
        await newInterview.save();
        res.status(201).json(newInterview);
    }catch(error){
        res.status(409).json({message: error.message})
    }
})
export default router;