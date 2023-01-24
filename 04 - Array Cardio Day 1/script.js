const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

      // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    // The filter method takes an array and do functions on each element of the array.
//   const fifteen=inventors.filter(inventor =>{
//     if(inventor.year >= 1500 && inventor.year <= 1600){
//         return true; // keep the inventor

//     }
//   });

//Another way to do it

const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1600);

  console.table(fifteen)

     // Array.prototype.map()
    // 2. Give us an array of the inventor first and last names

    //What map does is take an array, do something and return an array of the same size as the original array.
  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

  console.table(fullNames)

   // Array.prototype.map()
    // 2. Give us an array of the inventor first and last names

//   const orders=inventors.sort(function(a,b){
//     if (a.year > b.year){
//         return 1;
//     }
//     else{
//         return -1;
//     }
//   }
// );
// Another way to do it
 
const orders=inventors.sort((a,b)=> a.year> b.year? 1 : -1);

console.table(orders)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?


    const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
    
    console.log(totalYears);



    const alpha=people.sort(function(lastone,nextone) {
      const [alast,afirst]=lastone.split(', ');
      const[blast,bfirst]=nextone.split(', ');
      return alast>blast? 1 : -1;
      
    });
    console.log(alpha);


     // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
    const transportation=data.reduce((obj,item)=>{
      if(!obj[item]){
        obj[item]=0;
      }
      obj[item]+=1;
      return obj;
    },{});

    console.log(transportation);



