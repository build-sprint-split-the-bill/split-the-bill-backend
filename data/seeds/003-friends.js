exports.seed = function(knex) {
  return knex('friends').del()
    .then(function () {
      return knex('friends').insert([
       {
         name: "Zach",
         email: "zach@hotmail.com"
       },
       {
        name: "Amy",
        email: "amy@gmail.com"
      },
      {
        name: "Bob",
        email: "bob@yahoo.com"
      },
      {
        name: "Tim",
        email: "tim@myspace.com"
      },
      {
        name: "Cook",
        email: "cook@gmail.com"
      },
      ]);
    });
};
