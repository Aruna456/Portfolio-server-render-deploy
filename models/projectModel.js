const mongoose = require('mongoose')
//image:Khelospot,
//   link:"https://github.com/Aruna456/Expense-Tracker-Using-MERN-STACK.git",
//   title: "KheloSpot",
//   description: "Online sport event registration platform using HTML,CSS"
// 

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true

    },
    link: {
        type: String,
        required: false
    },
    coverimg: {

        type: String,
        required: true

    }


})

const Projects = mongoose.model("Projects", projectSchema)
module.exports = Projects;
