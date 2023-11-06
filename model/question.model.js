const mongoose=require("mongoose")


const questionSchema=mongoose.Schema({
    title:{type:String},
    description:{type:String},
    description:{type:String},
    inputFormat:{type:String},
    constrains:{type:String},
    Output:{type:String},
    sampleInput:{type:String},
    sampleOutput:{type:String},
    hint:{type:String},
    level:{type:String},
})

const QuestionModel=mongoose.model("problem",questionSchema)
module.exports={
    QuestionModel
}