const express=require("express")
const { QuestionModel } = require("../model/question.model")
const { TestcaseModel } = require("../model/testcase.model")
const questionRouter=express.Router()



questionRouter.post("/problems",async(req,res)=>{
    const{question,testcase}=req.body
    try {
        const problem=new QuestionModel(question)
        await problem.save()
        const tcase=new TestcaseModel({problemID:problem._id,testcase})
        await tcase.save()
        res.send("question added!")
    } catch (error) {
        res.send(error)
    }
})
questionRouter.get("/problems",async(req,res)=>{
    try {
        const problemList=await QuestionModel.find().sort({_id:-1})
        res.send(problemList)
    } catch (error) {
        res.send(error)
    }
})
questionRouter.get("/problems/:id",async(req,res)=>{
    const {id}=req.params
    try {
        const problem=await QuestionModel.findOne({_id:id})
        res.send(problem)
    } catch (error) {
        res.send(error)
    }
})

//get testcase
questionRouter.get('/testcase/:id',async(req,res)=>{
    const {id}=req.params
    try {
        const testcase=await TestcaseModel.findOne({problemID:id})
        res.send(testcase)
        
    } catch (error) {
        res.send(error)
    }
})

module.exports={
    questionRouter
}