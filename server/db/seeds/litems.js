/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('litems').del()
  await knex('litems').insert([
    {id: 1,
     item: 'baby wipes',
     amount: '1',
     price: '4.50',
     compleated: false,
    },
    {id: 2,
      item: 'pasta',
      amount: '1',
      price: '2.00',
      compleated: false,
     },
     {id: 3,
      item: 'Kitchen roll',
      amount: '1',
      price: '4.00',
      compleated: false,
     },
  ]);
};
