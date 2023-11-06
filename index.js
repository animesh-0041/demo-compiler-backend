const express = require("express");
const { generateFile } = require("./generateFile");
const { executeCpp } = require("./executeCpp");
const { executePython } = require("./excecutePython");
const { excecuteJs } = require("./excecuteJs");
var cors = require('cors');
const { connection } = require("./db");
const { questionRouter } = require("./route/problems.route");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use('/admin',questionRouter)

app.post("/run", async (req, res) => {
  const { language, code } = req.body;
  try {
    const filepath = await generateFile(language, code);
    let output;
    if(language=="cpp"){

       output= await executeCpp(filepath)
      res.send(output)
    }
    else if(language=="py"){
       output= await executePython(filepath)
      res.send(output)
    }
    else if(language=="js"){
       output= await excecuteJs(filepath)
      res.send(output)
    }
  } catch (error) {
    console.log(error);
    res.send(error.stderr);
  }
});

app.listen(8080, async() => {
  try {
    await connection
    console.log("Connected to DB");
    
  } catch (error) {
    console.log(error);
  }
  console.log("server runing at 8080");
});
