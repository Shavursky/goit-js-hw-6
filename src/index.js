//=====================завдання 1=========================
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки


// orderedItems.forEach(function (number, index) {
// totalPrice += orderedItems[index];
// }
//       );
//   // Пиши код выше этой строки
//   return totalPrice;
// }

//=====================завдання 2=========================
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   numbers.forEach(function (number) {
//     if(number > value){
//       filteredNumbers.push(number);
//     }
//   });
  
//   // Пиши код выше этой строки
//   return filteredNumbers;
// }
//=====================завдання 3=========================
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

 
//   firstArray.forEach(function(first) {
//     if (secondArray.includes(first)) {
//       commonElements.push(first);
//     }
//   });
//   return commonElements;
//   // Пиши код выше этой строки
// }
// console.log (getCommonElements(["gggg", "bbbb", "ccc"], ["bbbb", "ccc", 'jjjj']));

// numbers.forEach(function(namber) {
//   if (namber > value) {
//         filteredNumbers.push(namber);
//       }
//       });
//=====================завдання 4=========================
// // Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }
//=====================завдання 5=========================
// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;

// // Пиши код выше этой строки
//=====================завдання 6=========================
// Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item)=> {
//     totalPrice += item;
//   });
//   return totalPrice;
// }
// // Пиши код выше этой строки
//=====================завдання 7=========================
// Пиши код ниже этой строки
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach((item)=> {
//     totalPrice += item;
//   });
//   return totalPrice;
// }
// // Пиши код выше этой строки
//=====================завдання 8=========================
// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Пиши код выше этой строки
//   return commonElements;
// }
//=====================завдання 9=========================
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
// const newArray = [];
//   numbers.forEach((number)  => {  
//     if (number % 2 === 0) {    
//         newArray.push(number + value);
//     } else{
//        newArray.push(number);
//     }
//   });
//    return newArray;      
//   // Пиши код выше этой строки
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// // повинно повернути [1, 12, 3, 14, 5]
// //------------------------------------------------------------
// // вирішення задачі другим трішки методом з використанням map
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
// const newArray = numbers.map((number)  => {  
//     if (number % 2 === 0) {    
//         return number + value;
//     } 
//     return number;
//   });
//    return newArray;      
//   // Пиши код выше этой строки
// }
//=====================завдання 10=========================
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);
//=====================завдання 11=========================
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const titles = books.map(book => book.title);
//=====================завдання 12=========================
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика']
//   }
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap(book => book.genres);
//=====================завдання 13=========================
// // Пиши код ниже этой строки
// const getUserNames = users => {
//   return users.map(user => user.name);  
//   };
//   // Пиши код выше этой строки
//=====================завдання 14=========================
// // Пиши код ниже этой строки
// const getUserEmails = users => {
//     return users.map(user => user.email);
// };
// // Пиши код выше этой строки
//=====================завдання 15=========================
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(namber => namber % 2 === 0);
// const oddNumbers = numbers.filter(namber => namber % 2 !== 0);
//=====================завдання 16=========================
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения']
//   }
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index);
//=====================завдання 17=========================
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
//=====================завдання 18=========================
// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
//  };
 // Пиши код выше этой строки
//=====================завдання 19=========================
// Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter(({age}) => age >= minAge && age < maxAge);
// };
// // Пиши код выше этой строки
//=====================завдання 20=========================
// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
//   };
//   // Пиши код выше этой строки
//=====================завдання 21=========================
// Пиши код ниже этой строки
// const getFriends = (users) => {
//   return users.flatMap((user) => user.friends).filter((elem, index, arr) => arr.indexOf(elem) === index)
//  };
//  // Пиши код выше этой строки
//=====================завдання 22=========================
// Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//    return users.filter((user) => user.isActive === true);
// };
// // Пиши код выше этой строки
//=====================завдання 23=========================
// Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//    return users.filter((user) => user.isActive === false);
// };
// // Пиши код выше этой строки

//=====================завдання 24=========================
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

//=====================завдання 25=========================
// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };
// // Пиши код выше этой строки
//=====================завдання 26=========================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);
//=====================завдання 27=========================
// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive);
// };
// // Пиши код выше этой строки

//=====================завдання 28=========================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((value => value % 2 === 0));
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value => value % 2 === 0));
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value => value % 2 === 0));
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

//=====================завдання 29=========================
// // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//    return users.some((user) => user.isActive);
// };
// // Пиши код выше этой строки
//=====================завдання 30=========================
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((a, b) => a + b, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;
//=====================завдання 31=========================
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.map((play) => play.playtime / play.gamesPlayed).reduce((total, time) => total + time, 0);
// console.log(totalAveragePlaytimePerGame);
//=====================завдання 32=========================
// Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//    return users.reduce((balance, value) => balance + value.balance, 0);
// };
// // Пиши код выше этой строки
//=====================завдання 33=========================
// Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//   return users.reduce((friend, user) => friend + user.friends.length, 0); };
// // Пиши код выше этой строки
//=====================завдання 34=========================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
//=====================завдання 35=========================
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((b, a) => {
//   if (a > b) {
//     return 1;
//   } if (a < b) {
//     return -1;
//   }
//   return 0;
// });
//=====================завдання 36=========================
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
//   'Говард Лавкрафт'
// ];
// // Пиши код ниже этой строки

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
//=====================завдання 37=========================
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstBook, socondBook) => firstBook.author.localeCompare(socondBook.author));

// const sortedByReversedAuthorName = [...books].sort((firstBook, socondBook) => socondBook.author.localeCompare(firstBook.author));

// const sortedByAscendingRating = [...books].sort((firstBook, socondBook) => {
//   if (firstBook.rating > socondBook.rating) {
//       return 1;
//     } if (firstBook.rating < socondBook.rating) {
//       return -1;
//     }
//     return 0;
// });

// const sortedByDescentingRating = [...books].sort((firstBook, socondBook) => {
//   if (firstBook.rating < socondBook.rating) {
//     return 1;
//   } if (firstBook.rating > socondBook.rating) {
//    return -1;
//   }
//   return 0;
// });
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);
//=====================завдання 38=========================
// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
//    return users.sort((a, b) => a.balance - b.balance);
// };
// // Пиши код выше этой строки
// console.log(sortByAscendingBalance);
//=====================завдання 39=========================
// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
//    return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// // Пиши код выше этой строки
//=====================завдання 40=========================
// // Пиши код ниже этой строки
// const sortByName = users => {
//    return [...users].sort((a, b) => {
//      if (a.name < b.name) {
//        return -1;
//      }
//      if (a.name > b.name) {
//        return 1;
//      }
//      return 0
//    })
// };
// // Пиши код выше этой строки
//=====================завдання 41=========================
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки
// const names = books.filter((book) => book.rating > MIN_BOOK_RATING)
// .map(book => book.author)  
// .sort((a, b) => a.localeCompare(b));
// console.log(names);
//=====================завдання 42=========================
// Пиши код ниже этой строки
// const getNamesSortedByFriendCount = (users) => {
//    return [...users].sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name)};
// console.log(getNamesSortedByFriendCount(users));
// // Пиши код выше этой строки
//=====================завдання 43=========================
// Пиши код ниже этой строки
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]
// const getSortedFriends = users => {
//    return users.flatMap(user => user.friends)
//     .sort((a, b) => a.localeCompare(b))
//     .filter((e, i, arr) => {
//       return arr.lastIndexOf(e) === i;
//     });
// };
// console.log(getSortedFriends(users));
// Пиши код выше этой строки
//=====================завдання 44=========================
// Пиши код ниже этой строки
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]
const getTotalBalanceByGender = (users, gender) => {
   return users.filter((user) => user.gender === gender)
   .reduce((balansSum, user) => balansSum + user.balance, 0);
};
console.log(getTotalBalanceByGender(users, 'male'));
// Пиши код выше этой строки