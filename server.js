const express = require("express");
const app = express();


app.use(requestTime);

app.set("view engine","ejs");


app.get("/", (req, res) => {
    res.render("HomePage");
});

const userRouter = require("./routes/route");
app.use("/", userRouter);


var curDate = new Date();


function requestTime(req, res, next){
    console.log(req.originalUrl, curDate.getDay());
    if((curDate.getHours()>9) && (curDate.getHours()<17) && (curDate.getDay()>0) && (curDate.getDay()<6))
    {
        next();
    }};

app.listen(3000);