// settimeout function


//const wrapper = document.querySelector('#wrapper')
//const adds = document.createElement('div')
//adds.innerHTML = <button id='crossBtn'>Click</button>

//adds.querySelector('#crossBtn').addEventListener('click')

//adds.classList.add('adds')

//setTimeout(() => {
  //  wrapper.append(adds)
//}, 5000);


//callback Hell function......................

//function first(callback){
  //  console.log("This is my first Function....")
    //console.log(callback)
    //callback()
//}


//function second(){
  //  console.log("This is second function.......")
//}

//first(()=>{
 //   second()
//})




//function first(callback) {
  //  setTimeout(()=> {
    //   console.log('First')
     //  callback()
    //}, 5000);
//}


//function second(callback) {
  //  setTimeout(()=> {
    //   console.log('second')
      //  callback()  
    //}, 3000);
//}

//function third() {
  //  setTimeout(()=> {
    //   console.log('third')
    //}, 1000);
//}

//first(()=>{
//second(()=>{
  //  third()
   //})
//})



//Promise function......................

// function first() {
//     // setTimeout(()=> {
//     //    console.log('First')
       
//     // }, 5000);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> {
//             try{
//                 console.log('first')
//                 resolve('first completed')
//             } catch(error){
//                 reject('error in first ', error)
//             }}, 6000);

//     })
// }



// function second() {
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         try{
//             console.log('second')
//             resolve('second complete')

//         }catch(error){
//             reject('error in second',error)
//         }
//        },4000); 
//     })
    
//     }

// function third() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             try{
//                 console.log('third')
//                 resolve('third completed')
//             }
//             catch(error){
//                 reject('error in third',error)
//             }

//         })
//     }, 2000);
// }


// first().then((data)=>{
//     console.log(data)
//     return second()
// }).then((data) =>{
//     console.log(data)
//     return third()
// }).then ((data) =>{
//     console.log(data)
// }
// ).catch((data)=>{
//     console.log(data)
// })
 
// async function promiseChain(){
//     await first()

//     await second()

//     await third()
// }
// promiseChain()








// Event Loop
// Example 1

// console.log('first')

// setTimeout(() =>{
//     console.log('third')
// }, 0);

// console.log('second')




//Example 2
// console.log('first')

//  setTimeout(() =>{
//      console.log('third')
//  }, 0);

//  console.log('second')

//  new Promise((resolve,reject) =>{
//     resolve()
//  }).then(() =>{
//     console.log('forth')
//  })



//Fetch API----->>>>>

// let parent = document.querySelector('#parent')

// let api = 'https://dummyjson.com/products'

// async function getData() {
//   try{
//     let response = await fetch(api)
//     let data = await response.json()
//     console.log(data)
//     data.products.forEach(element => {

//       let div = document.createElement('div')
//       div.innerHtml ='
//       <img src=${element.images[0]} />
//       <p>${element.title}</p>
//       '
//       parent.append(div)
//       console.log(div)
//     });
//   }catch(error) {
//     console.log(error)
//     console.log('error in code')
//   }
// }
// getData()      
