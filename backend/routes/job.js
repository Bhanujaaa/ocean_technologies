const express = require('express');
const Job = require('../models/job');
const router = new express.Router();

// // Create a Job
router.post('/jobs', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    // const token = await user.generateAuthToken();
    res.status(201).send({ job });
  } catch (e) {
    res.send(e);
  }
});

router.get('/jobs',async (req, res)=> {
  try {
      const job = await Job.find({});
      res.send(job);
    } catch (e) {
      res.status(400).send(e);
    }
});

// // Login User
router.post('/users/login', async (req, res) => {
  const email=req.body.email
  const password=req.body.password
  try {
    const user = await User.findByCredentials(email, password);
    // const token = await user.generateAuthToken();
    // const refresh=await user.generateRefreshToken();
    res.send({ user});
  } catch (e) {
    res.status(400).send({
      error: { message: 'You have entered an invalid email or password' },
    });
  }
});


module.exports = router;
