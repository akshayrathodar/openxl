const express = require('express');
const router = express.Router();
const todos = require('../service/lang');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await todos.getMultiple(req.query.page));
  } catch (err) {
    console.error(`error in fetching todo `, err.message);
    next(err);
  }
});


router.post('/', async function(req, res, next) {
    try {
      res.json(await todos.create(req.body));
    } catch (err) {
      console.error(`Error while creating todo`, err.message);
      next(err);
       }
});


router.post('/update', async function(req, res, next) {
    try {
      res.json(await todos.update(req.body.id, req.body));
    } catch (err) {
      console.error(`Error while updating programming language`, err.message);
      next(err);
    }
});

router.post('/delete', async function(req, res, next) {
    try {
      res.json(await programmingLanguages.remove(req.body.id));
    } catch (err) {
      console.error(`Error while deleting programming language`, err.message);
      next(err);
    }
});

module.exports = router;