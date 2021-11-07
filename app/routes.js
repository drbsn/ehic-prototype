// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
  res.locals.currentURL = req.originalUrl; //current screen
  res.locals.prevURL = req.get('Referrer'); // previous screen
  req.folder = req.originalUrl.split('/')[1]; //folder, e.g. 'current'
  req.subfolder = req.originalUrl.split('/')[2]; //sub-folder e.g. 'service'
  res.locals.folder = req.folder; // what folder the url is
  res.locals.subfolder = req.subfolder; // what subfolder the URL is in
console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );
  console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
  next();
});


// current sprint, remember to add older sprint when adding a new folder!
router.use('/current', require('./views/current/_routes'));
router.use('/current/apply', require('./views/current/apply/_routes'));
router.use('/current/replacement', require('./views/current/replacement/_routes'));
router.use('/current/file-upload', require('./views/current/file-upload/_routes'));

// router.use('/current_v2/apply', require('./views/current_v2/apply/_routes'));
// router.use('/current/prereg', require('./views/current/prereg/_routes'));
// router.use('/current/postjan', require('./views/current/postjan/_routes'));


// Start folder specific routes
// ----------------------------

// Basic journeys
router.use('/sprint1', require('./views/sprint1/_routes'));
router.use('/sprint2', require('./views/sprint2/_routes'));
router.use('/sprint3', require('./views/sprint3/_routes'));
router.use('/sprint4', require('./views/sprint4/_routes'));
router.use('/sprint5', require('./views/sprint5/_routes'));
router.use('/sprint6', require('./views/sprint6/_routes'));
router.use('/sprint7', require('./views/sprint7/_routes'));

// Pre-registration and post-january application journeys
router.use('/sprint8/prereg', require('./views/sprint8/prereg/_routes'));
router.use('/sprint8/postjan', require('./views/sprint8/postjan/_routes'));

router.use('/sprint9/prereg', require('./views/sprint9/prereg/_routes'));
router.use('/sprint9/postjan', require('./views/sprint9/postjan/_routes'));

router.use('/sprint10/prereg', require('./views/sprint10/prereg/_routes'));
router.use('/sprint10/postjan', require('./views/sprint10/postjan/_routes'));

router.use('/sprint11/prereg', require('./views/sprint11/prereg/_routes'));
router.use('/sprint11/postjan', require('./views/sprint11/postjan/_routes'));

router.use('/sprint12/prereg', require('./views/sprint12/prereg/_routes'));
router.use('/sprint12/postjan', require('./views/sprint12/postjan/_routes'));

router.use('/sprint13/prereg', require('./views/sprint13/prereg/_routes'));
router.use('/sprint13/postjan', require('./views/sprint13/postjan/_routes'));

router.use('/sprint14/prereg', require('./views/sprint14/prereg/_routes'));
router.use('/sprint14/postjan', require('./views/sprint14/postjan/_routes'));

router.use('/sprint15/prereg', require('./views/sprint15/prereg/_routes'));
router.use('/sprint15/postjan', require('./views/sprint15/postjan/_routes'));

// One application journeys
router.use('/sprint19-20/apply', require('./views/sprint19-20/apply/_routes'));
router.use('/sprint21/apply', require('./views/sprint21/apply/_routes'));
router.use('/sprint22/apply', require('./views/sprint22/apply/_routes'));
router.use('/sprint23-24/apply', require('./views/sprint23-24/apply/_routes'));
router.use('/sprint26/apply', require('./views/sprint26/apply/_routes'));
router.use('/sprint27/apply', require('./views/sprint27/apply/_routes'));
router.use('/sprint28/apply', require('./views/sprint28/apply/_routes'));

// Separated application and 'get replacement' journeys
router.use('/sprint33', require('./views/sprint33/_routes'));
router.use('/sprint33/apply', require('./views/sprint33/apply/_routes'));
router.use('/sprint33/replacement', require('./views/sprint33/replacement/_routes'));

// Separated application, 'get replacement' and file upload journeys
router.use('/sprint34', require('./views/sprint34/_routes'));
router.use('/sprint34/apply', require('./views/sprint34/apply/_routes'));
router.use('/sprint34/replacement', require('./views/sprint34/replacement/_routes'));
router.use('/sprint34/file-upload', require('./views/sprint34/file-upload/_routes'));

router.use('/sprint35', require('./views/sprint35/_routes'));
router.use('/sprint35/apply', require('./views/sprint35/apply/_routes'));
router.use('/sprint35/replacement', require('./views/sprint35/replacement/_routes'));
router.use('/sprint35/file-upload', require('./views/sprint35/file-upload/_routes'));

router.use('/sprint36', require('./views/sprint36/_routes'));
router.use('/sprint36/apply', require('./views/sprint36/apply/_routes'));
router.use('/sprint36/replacement', require('./views/sprint36/replacement/_routes'));
router.use('/sprint36/file-upload', require('./views/sprint36/file-upload/_routes'));

router.use('/sprint37', require('./views/sprint37/_routes'));
router.use('/sprint37/apply', require('./views/sprint37/apply/_routes'));
router.use('/sprint37/replacement', require('./views/sprint37/replacement/_routes'));
router.use('/sprint37/file-upload', require('./views/sprint37/file-upload/_routes'));
//


//pulling data through


// Experimental //
// ----------------------------

// tasklist format //
router.use('/tasklist/prereg', require('./views/tasklist/prereg/_routes'));
router.use('/tasklist/postjan', require('./views/tasklist/postjan/_routes'));



module.exports = router;




