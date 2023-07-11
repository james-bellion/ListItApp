/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {id: 1,
     item: 'baby wipes',
     amount: '1',
     price: '4.50',
    },
    {id: 2,
      item: 'pasta',
      amount: '1',
      price: '2.00',
     },
     {id: 3,
      item: 'Kitchen roll',
      amount: '1',
      price: '4.00',
     },
  ]);
};
