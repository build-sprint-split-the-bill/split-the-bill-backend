exports.seed = function(knex) {
  return knex('friends').del()
    .then(function () {
      return knex('friends').insert([
       {
         name: "Zach",
         email: "zach@gmail.com"
       },
       {
        name: "Amy",
        email: "amy@gmail.com"
      },
      {
        name: "Bob",
        email: "bob@gmail.com"
      },
      {
        name: "Tim",
        email: "tim@gmail.com"
      },
      {
        name: "Cook",
        email: "cook@gmail.com"
      },
      ]);
    });
};
