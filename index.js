console.log("person1: shows ticket");
console.log("person2: shows ticket");

const promiseWifeBringingticks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ticket");
    },3000)
});
const popcorn=promiseWifeBringingticks.then((t)=>{
     console.log("wife:i got the tickets");
     console.log("husband:We should go in");
     console.log("wife:No i am hungry");
     return new Promise((resolve,reject)=>{
       resolve(`${t} popcorn`);
      })
    });
 const butter=popcorn.then((t)=>{
     console.log("husband:i got some popcorn");
     console.log("husband:We should go in");
     console.log("wife:No i need butter on my popcorn");
     return new Promise((resolve,reject)=>{
         resolve(`${t} butter`);
      })
    });
    const getColdDrinks=butter.then((t)=>{
     console.log("husband:i got some butter");
     console.log("husband:We should go in");
     console.log("wife:No i need a cold drink");
     return new Promise((resolve,reject)=>{
         resolve(`${t} Cold Drink`);
      })
    });
    // Promise.all([promiseWifeBringingticks(t),popcorn(t),butter(t),getColdDrinks(t)]);
    getColdDrinks.then((t)=>{
    console.log(t);
    console.log("husband:i have got a coldrink");
     console.log("husband:We should go in now");
     console.log("wife:ok then lets go");
    }
    );

    //  console.log(t)
    // );
console.log("person4: shows ticket");
console.log("person5: shows ticket");