import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res)=>{
    res.send("<h1>Contact Page</h1><p>My name is Saurabh</p>");
});

app.get("/about", (req, res)=>{
    res.send("<h1>About Me</h1><p>Phone: 6201930729</p>");
});

app.listen(port, ()=> {
    console.log(`Server started on port ${port}`);
})