const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
  }
   // Regular
   console.log('heloo')

    // Interpolated

    console.log('Hello I am %s and I am %d years old', 'Snickers', 2);


    // Styled
    console.log('%c Hello iam great','font-size:20px;color:#BADA55');


    // warning!
    console.warn('This is a warning');
    

    // Error :|
    console.error('This is an error');
    

    // Info
    console.info('This is an info');
    

    // Testing
    console.assert(1===2, 'you did not select the correct option');
  // assert will throw an error if the condition is not met
   

    // clearing
    console.clear();
    

    // Viewing DOM Elements
    // console.log(p);
    // console.dir(p);


    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
      });
      console.clear();

    // counting
    console.count('dogs');
    console.count('dogs');
    console.count('dogs');
    console.count('dogs');
    console.count('dogs');
    console.count('dogs');
    console.count('dogs');
    console.count('dogs');
    console.count('dogs');
    console.count('dogs');
    console.count('dogs');
    console.count('dogs');
    

    // timing

    console.time('fetching data');
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(data=>data.json())
    .then(data=>
        {console.timeEnd('fetching data');
        console.log(data);
});
    


