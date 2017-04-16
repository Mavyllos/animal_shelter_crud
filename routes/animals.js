var express = require('express');
var router = express.Router();
var db = require('../db/connection.js')

router.get('/', (req, res, next) => {
  db('animals').select('*').then(animals => {
    res.render('animals/index', { animals });
  }).catch(err => {
    console.log(err);
  })
});

router.get('/new', (req, res, next) => {
  res.render('animals/new');
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id
  db('animals').where({ id }).first().then(animal => {
    res.render('animals/show', { animal });
  }).catch(err => {
    console.log(err);
  })
});

router.post('/', (req, res, next) => {
  var name = req.body.name;
  var animal = {
    name: req.body.name,
    kind: req.body.kind,
    breed: req.body.breed,
    age: req.body.age,
    description: req.body.description,
    image_url: req.body.image_url,
    is_adopted: req.body.is_adopted = 'FALSE'
  }
  if (!name) {
  res.render('animals/new', { error: 'Name cannot be blank', animal })
  } else {
    db('animals').insert(animal, '*').then(newanimal => {
      var id = newanimal[0].id;
      res.redirect(`/animals/${id}/`)
    }).catch(err => {
      console.log(err);
    })
  }
});

router.delete('/:id', (req, res, next) => {
  var id = req.params.id
  db('animals').del().where({ id }).then(() => {
    res.redirect('/animals')
  })
});

router.put('/:id', (req, res, next) => {
  var id = req.params.id
  var name = req.body.name
  var animal = {
    name: req.body.name,
    kind: req.body.kind,
    breed: req.body.breed,
    age: req.body.age,
    description: req.body.description,
    image_url: req.body.image_url,
    is_adopted: req.body.is_adopted
  }
  if (!name) {
  res.render('animals/edit', { error: 'Name is blank', animal })
  } else {
    db('animals').update(animal, '*').where({ id }).then(updatedAnimal => {
      var id = updatedAnimal[0].id;
      res.redirect(`/animals/${id}/`)
    }).catch(err => {
      console.log(err);
    })
  }
})

router.patch('/:id', (req, res, next) => {
  var id = req.params.id
  var animal = {
    is_adopted: req.body.is_adopted = 'TRUE'
  }
  db('animals').update(animal, '*').where({ id }).then(updatedAnimal => {
    var id = updatedAnimal[0].id;
    res.redirect('/animals')
    // or
    // res.redirect(`/animals/${id}/`)
    }).catch(err => {
      console.log(err);
  })
});

router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id
  db('animals').select('*').where({ id }).first().then(animal => {
  res.render('animals/edit', { animal })
  })
});

module.exports = router;
