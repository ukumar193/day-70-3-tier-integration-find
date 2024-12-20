const mongoose =require("mongoose");
const express = require("express");
const cors =require("cors");


   let app=express();
    app.use(cors());

    app.get("/EmployeesList", async (req,res)=>{

     let employeeArry=await Employee.find();
     res.json(employeeArry);


    });

    app.listen(5678,()=>{
     console.log("port number is 5678");
    });
      /*schema*/

  let employeeSchema = new mongoose.Schema({
     Name:{
       type:String,
       uppercase:true,
       requried:true,
       match:/^[A-Z]+$/,
     },
     employeeID:Number,
     age: {
       type:Number,
       min:[18,'too young'],
       max:[70,'too old']
     },
     email:{
       type:String,
       requried:true,
       match:/^\S+@\S+\.\S+$/
     },
     deparment:String,
     gender:{
       type:String,
       lowercase:true,
       enum:['male','female']
     },
     companyName:String, 
      phone: {
       type: String,
       validate: {
         validator: function(v) {
           return  /^[6-9]\d{9}$/.test(v);
         },
         message: props => `${props.value} is not a valid phone number!`
       },
       required: [true, 'User phone number required']
     }
    });
 
    let Employee = new mongoose.model("Employees",employeeSchema,"ABCemployees");
        /*
      let getDataFromDB = async ()=>{
            let employeeArry =await Employee.find();
            console.log(employeeArry);
       };
        */

      let connectToDB = async ()=>{
     try{
          await mongoose.connect("mongodb+srv://ukumar:ukumar@merndata.ajemg.mongodb.net/kumar?retryWrites=true&w=majority&appName=MernData");
     console.log("connected to MDB");


      /* getDataFromDB(); */
         
     }catch(error){
          console.log("unable to Connecte MDB");
     }
     };
   connectToDB();