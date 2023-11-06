const mongoose=require("mongoose")

const testCaseSchema=mongoose.Schema({
    problemID:{type:String},
    testcase:[]
})
const TestcaseModel=mongoose.model("testcase",testCaseSchema)
module.exports={
    TestcaseModel
}