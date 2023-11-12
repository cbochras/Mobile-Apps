const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

// get all items
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT * FROM "clothing" WHERE "user_id" = $1;`
    pool.query( queryText, [ req.user.id ] )
    .then( results => {
        res.send( results.rows );
    })
    .catch( error => {
        console.log( 'error in clothing GET', error );
        res.sendStatus( 500 );
    })
  });

// Delete a clothing item
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const query = `DELETE FROM "clothing" WHERE "id"=$1;`
  pool.query(query, [req.params.id])
  .then(() => 
      res.sendStatus(200))
  .catch(error => {
      console.log('ERROR in clothing DELETE:', error);
      res.sendStatus( 500 )
  })
});

// Add a clothing item
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log( 'req.body is:', req.body );
  const query = `INSERT INTO "clothing" ("type", "kind", "brand", "image_url", "color", "material", "description", "date_worn", "user_id") 
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9 );`;
    pool.query(query, [ req.body.type, req.body.kind, req.body.brand, req.body.image_url, req.body.color, req.body.material, req.body.description, req.body.date_worn, req.user.id ])
  .then(result => {
    res.sendStatus( 201 );
  }).catch(err => {
    console.log( 'ERROR in clothing POST:', err );
    res.sendStatus( 500 )
  })
});

/**
 * Update an item
 */
router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log( 'in edit router:', req.body)
  const query = `
    UPDATE "clothing" 
    SET "type" = $1,
    "kind" = $2, 
    "brand" = $3, 
    "image_url" = $4, 
    "color" = $5, 
    "material" = $6, 
    "description" = $7,
    "date_worn" = $8 
    WHERE "id" = $9;
`
  pool.query(query, [ req.body.type, req.body.kind, req.body.brand, req.body.image_url, req.body.color, req.body.material, req.body.description, req.body.date_worn, req.body.id ])
  .then(() => 
      res.sendStatus(200))
  .catch(error => {
      console.log('ERROR:', error);
  })
});

module.exports = router;
