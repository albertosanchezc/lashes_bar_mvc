//require("./includes/database.php");

const app = require("express")();
const port = process.env.PORT || 5000;

//cors
const cors = require('cors');
app.use(cors());
const UserRouter = require("../src/js/app.js");

const bodyParser = require("express").json;
app.use(bodyParser());

app.use("/index", UserRouter);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});