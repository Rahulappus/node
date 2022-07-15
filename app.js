const express=require("express");
const app=express();
courseList=[
    { 
        "courseTitle":"React",
        "courseDescription":"React Course",
        "courseDuration":"4 Months",
        "courseVenue":"ONLINE"

    },
    { 
        "courseTitle":"Angular",
        "courseDescription":"Angular Course",
        "courseDuration":"4 Months",
        "courseVenue":"PHYSICAL"

    },
    { 
        "courseTitle":"JS",
        "courseDescription":"Java Course",
        "courseDuration":"5 Months",
        "courseVenue":"OFFLINE"

    },
    { 
        "courseTitle":"C",
        "courseDescription":"C Course",
        "courseDuration":"6 Months",
        "courseVenue":"OFFLINE"

    }
]
 app.get('/getcourses',function(req,res){
 res.send(courseList);
 })

 app.post('/addcourse',function(req,res){
  console.log(req.body);
  courseList.push(req.body);
  console.log(courseList);
  res.status(200).send(courseList);  
 })

 app.listen(5000);