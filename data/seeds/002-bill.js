
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bills').del()
    .then(function () {
      // Inserts seed entries
      return knex('bills').insert([
        {
          resturant: "AppleBees",
          NumberOfFriends: 6,
          total: 110.50,
          split: 3
        },
        {
          resturant: "TGI Friday's",
          NumberOfFriends: 12,
          total: 320.10,
          split: 4
        },
        {
          resturant: "Texas RoadHouse",
          NumberOfFriends: 4,
          total: 98.04,
          split: 2
        },
        {
          resturant: "Olive Garden",
          NumberOfFriends: 20,
          total: 640.80,
          split: 5
        },
        {
          resturant: "Red Lobster",
          NumberOfFriends: 8,
          total: 202.52,
          split: 4,
        },
      ]);
    });
};
