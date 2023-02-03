// start with strings, numbers and booleans

    let age=100;
    let age2=age;
    console.log(age,age2);
    age=200;
    console.log(age,age2);
    
    //Same goes for strings

    let name="John";
    let name2=name;
    console.log(name,name2);
    name="Mary";
    console.log(name,name2);


    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team=players;
    console.log(players,team);    

    // You might think we can just do something like this:
    team[3]='lux';

    //converting the array back to a string
  


    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    const team2=players.slice();
    console.log(team2);
    

    // one way

    // or create a new array and concat the old one in
    const team3=[].concat(players);
    console.log(team3);
    
    // or use the new ES6 Spread
    const team4=[...players];
    console.log(team4);
    

    //Check if the const array can be modified

    const team6=["a","b","c","d"];
    console.log(team6);

    team6.push("e");
    console.log(team6);
    
    const team7=Array.from(players);
    console.log(team7,players);
    team7[3]="Arham";
    console.log(team7,players);



    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    const captain = person;
    captain.Number=99;

    // and think we make a copy:

    // how do we take a copy instead?
    const cap2=Object.assign({},person,{Number:99});

    // We will hopefully soon see the object ...spread

    // const cap3={...person};


    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.


    const wes={
        name:'arham',
        age:19,
        social:{
            twitter:'arham',
            facebook:'arham.8x',
        }
    }
    console.log(wes);
    const usman=Object.assign({},wes);

    usman.social={
        insta:'usmanyousuf'

    }

    console.log(usman);


    