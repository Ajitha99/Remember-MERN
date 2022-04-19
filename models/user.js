const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true, minlength: 6},
    blogs: [{type:mongoose.Types.ObjectId, ref:"Blog", required: true}],
    codeSnippets: [{type:mongoose.Types.ObjectId, ref:"Code",required:true}],
},
    {timeseries: true}
)

module.exports = mongoose.model("User",userSchema); 