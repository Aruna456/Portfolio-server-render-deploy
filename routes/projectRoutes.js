const express = require('express');
const router = express.Router();
const Projects = require('../models/projectModel');

// Get all projects
router.get('/all', async (req, res) => {
    try {
        const fetchedProjects = await Projects.find();
        res.status(200).json(fetchedProjects);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});

// Add a new project
router.post('/add', async (req, res) => {
    try {
        const newProjectData = new Projects(req.body);
        const { title, desc } = newProjectData;
        
        if (!title || !desc) {
            return res.status(400).json({ message: "Title & Description are required" });
        }

        const savedData = await newProjectData.save();
        res.status(201).json(savedData);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});

// Edit an existing project
router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const currentRecord = await Projects.findOne({ _id: id });

        if (!currentRecord) {
            return res.status(404).json({ message: "Project not found!" });
        }

        const updatedProject = await Projects.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});

// Delete a project
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const currentRecord = await Projects.findOne({ _id: id });

        if (!currentRecord) {
            return res.status(404).json({ message: "Project not found!" });
        }

        await Projects.findByIdAndDelete(id);
        return res.status(200).json({ message: "Project Deleted!" });
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});

module.exports = router;
