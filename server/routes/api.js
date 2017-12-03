const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('API WORKS YET NOTHING TO SEE HERE');
});

module.exports = router;