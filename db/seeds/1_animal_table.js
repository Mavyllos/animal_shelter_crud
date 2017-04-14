exports.seed = (knex) => {
   return knex('animals').del()
     .then(() => {
       return knex('animals').insert([
         {
           id: 1,
           image_url: 'http://www.yourpurebredpuppy.com/dogbreeds/photos-AB/americanpitbullterriersf6.jpg',
           name: 'King Kong',
           kind: 'American Pitbull',
           age: 1,
           description: 'Sleek, smart, and ready for a new home',
           is_adopted: false
         },
         {
           id: 2,
           image_url: 'https://vetstreet-brightspot.s3.amazonaws.com/46/2d1f90a0d711e0a2380050568d634f/file/Great-Danes-3-645mk062111.jpg',
           name: 'Roscoe',
           kind: 'Great Dane',
           age: 3,
           description: 'Beautiful coloring and very friendly',
           is_adopted: false
         },
         {
           id: 3,
           image_url: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/shih-tzu-dog-breed-pictures/shih-tzu-breed-picture-1.jpg',
           name: 'Precious',
           kind: 'Shih Tzu',
           age: 6,
           description: 'Small and dumb, but kinda cute',
           is_adopted: false
         },
       ])
     }).then(() => {
       return knex.raw(
         "SELECT setval('animals_id_seq', (SELECT MAX(id) FROM animals));"
       )
     })
 }
