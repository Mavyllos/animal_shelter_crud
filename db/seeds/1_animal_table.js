exports.seed = (knex) => {
   return knex('animals').del()
     .then(() => {
       return knex('animals').insert([
         {
           id: 1,
           image_url: 'http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-FwsgxoJBD4C1qJrqA8EfaP7jL8gZYg0MJlb9NNBxrHhmaSdwF/',
           name: 'Papa Legbird',
           kind: 'Bird',
           breed: 'Haitian Voodoo Death Bird',
           age: 5,
           description: 'This bird uses its colorful plummage to lure people close so that it may devour their souls to prolong its own lifespan. ',
           is_adopted: false
         },
         {
           id: 2,
           image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGfOhZBvpHGiPyKAzH_UkXQtZvcy6EHDKrTd7wdVAB82julzkrA',
           name: 'Judge Judie',
           kind: 'Frog',
           breed: 'Judgemental Tree Frog',
           age: 3,
           description: 'No matter how successful you are, she will always be here. Watching. Waiting. Looking at you with her super judgy eyes.',
           is_adopted: false
         },
         {
           id: 3,
           image_url: 'http://www.geekedoutnation.com/wp-content/uploads/2014/02/Decapi.jpg',
           name: 'Stompy Jr.',
           kind: 'Lizard',
           breed: 'Godzilla',
           age: 1,
           description: 'Loves to climb. May cause great destruction once full grown.',
           is_adopted: false
         },
         {
           id: 4,
           image_url: 'https://s-media-cache-ak0.pinimg.com/736x/00/f1/18/00f118e74e7676840264d3372522eece.jpg',
           name: 'Ralph',
           kind: 'Turtle',
           breed: 'Red-eared Slider',
           age: 16,
           description: 'Teenaged, non-mutant, non-ninja turtle.',
           is_adopted: false
         },
         {
           id: 5,
           image_url: 'https://www.campshane.com/wp-content/uploads/2011/03/Weight_Lifting_Hamster-300x222.jpg',
           name: 'Pauley the V',
           kind: 'Rat',
           breed: 'Gyn Rat',
           age: 16,
           description: 'Enjoys getting swole. Comes with miniture weight set and bro approved workout cd.',
           is_adopted: false
         },
       ])
     }).then(() => {
       return knex.raw(
         "SELECT setval('animals_id_seq', (SELECT MAX(id) FROM animals));"
       )
     })
 }
