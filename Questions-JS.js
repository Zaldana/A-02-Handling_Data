const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

let objectArray = userData.map(obj => ({
  id: obj.id,
  favoriteFoods: obj.favorites.food.length
}))


// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const pizzaUsers = userData.reduce((accumulator, obj) => {

  if (Object.values(obj.favorites.food).includes("pizza")) {
    return [ ...accumulator, obj.name ]
  }
  return accumulator;
}, [])

// 7. Show us an example of a switch statement being used

const food = 'apple';

switch ('apple') {
  case 'burger': console.log('this food is not healthy');
    break;

  case 'apple': console.log('this food is sweet and healthy');
    break;

  default: console.log('we dont know this food')
}