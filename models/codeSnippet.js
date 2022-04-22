const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const codeSchema = new Schema({
    title: { type: String, required: true},
    snippet: { type: String, required: true},
    user:{ type: mongoose.Types.ObjectId, ref:"User", required: true},
},
    {timeseries: true}
);

module.exports = mongoose.model("Code", codeSchema); 