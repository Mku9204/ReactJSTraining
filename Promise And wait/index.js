// console.log('start time');
// setTimeout(()=>{
//     console.log("inside start and end time")
// },2000)
// console.log("end time")

// console.log("Start")
// const roll=[1,2,3,4,5,6,7,8];
// roll.forEach(r=>{
//     console.log(r)
// });
// console.log("end time")

//callback
// console.log("start")
// function getName(name,callback){
//     setTimeout(()=>{
//         console.log("inside setTimeout")
//     callback(name)
//     },2000)
// }

// function getHobbies(name,callback){
// setTimeout(()=>{
//     console.log("set time out");
//     callback(['crciket','singing','dancing'])
// },1000)
// }

// const nm=getName("Abhi",(nm)=>{
//     console.log(nm);
//     getHobbies(nm,(hooby)=>{
//         console.log(hooby)
//     })
// })
// console.log("end")

//PROMISE catch
// const promiseObj=new Promise((res,rej)=>{
//     let req=true;
//     if(req==true){
//         res('Request Success')
//     }else{
//         rej('Request rejected')
//     }
// }).then(
//     (value)=>{console.log(value)},
// //(error)=>{ console.log(error)}
// ).catch((error)=>{ console.log(error)
// }).finally(()=>{ console.log("end")})

// console.log("start")
// function getName(name,callback){
//     setTimeout(()=>{
//         console.log("inside setTimeout")
//     callback(name)
//     },2000)
// }

//Promise
// console.log("start")
// function getName(name){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("inside setTimeout")
//         res(name)
//         },2000);
//     })
// }
// function getHobbies(name){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("set time out");
//             res(['crciket','singing','dancing'])
//         },1000);
//     })
// }
// getName('Abhi')
// .then((nm => getHobbies(nm)))
// .then(hobby=>console.log(hobby))

// console.log("end")


//async and await
// console.log("start")
// function getName(name){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("inside setTimeout")
//         res(name)
//         },2000);
//     })
// }
// function getHobbies(name){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("set time out");
//             res(['crciket','singing','dancing'])
//         },1000);
//     })
// }
// async function showHobbies(){
// const nm=await getName('Abhi')
// const hobby=await getHobbies(nm)
// console.log(hobby)
// }
// showHobbies();
// console.log('end')