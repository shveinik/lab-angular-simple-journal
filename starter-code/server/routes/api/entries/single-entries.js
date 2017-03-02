const express       = require('express');
const router        = express.Router();
const Journal       = require('../../../models/journal-entry');
const mongoose      = require('mongoose');



router.get('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }

  Journal.findById(req.params.id, (err, Journals) => {
      if (err) {
        return res.send(err);
      }

      return res.json(Journals);
    });
});



module.exports = router;
