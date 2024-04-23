const express = require('express');
const app = express();
const path = require("path")
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname,'./public/pages/homepage.html'));
})

// app.get("/comingsoon", (req, res)=>{
//     res.sendFile(path.join(__dirname,'./public/pages/index.html'));
// })

app.listen(PORT, "0.0.0.0", () => {
    console.log(`App running on port ${PORT}!!!!!`);
    console.log(`App running on port ${PORT}!!!!!`);
});