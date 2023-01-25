 // ## Array Cardio Day 2

 const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];


    // Some and Every Checks
    
    // Array.prototype.some() // is at least one person 19 or older?
    const isAdult=people.some(function(person){
        const currentyear=(new Date()).getFullYear();
        if(currentyear -person.year>=19){
            return true;
        }
    });
    // Another way to do it
    const isAdult2=people.some(person=>{
        const currentyear=(new Date()).getFullYear();
        return currentyear -person.year>=19;
    });
    console.log({isAdult2});

    // Array.prototype.every() // is everyone 19 or older?
    const isAdult3=people.every(person=>{
    const currentyear=(new Date()).getFullYear();
    return currentyear- person.year>=19;    
    });

    console.log({isAdult3});

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    const comment=comments.find(comment=>{
        return comment.id===823423;
        });
    // Another way of doing it

    const comment2=comments.find(comment=>comment.id===823423);
    


    console.log(comment);
    console.log(comment2);

  

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    const comment3=comments.findIndex(comment=>comment.id===823423);

    console.log(comment3);
    // Now if I want to delete the comment with the ID of 823423
    comments.splice(comment3,1)

    

