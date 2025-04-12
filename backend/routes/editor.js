const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    _id: String,
    name: String,
    data: Object,
});

const Document = new mongoose.model("document", documentSchema);
