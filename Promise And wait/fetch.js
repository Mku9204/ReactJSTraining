document.getElementById("btn").addEventListener('click',makerreq);

// function makerreq(){
//     console.log("Button clicked")
//     const promiseObj=fetch('data.txt')
//     console.log(promiseObj)
//    promiseObj.then((res)=>{ 
//     console.log(res);return res.text()
// }).then((data)=>console.log(data))
// }

// function makerreq(){
//     console.log("Button clicked")
//     fetch('data.txt')
//     .then((res)=>{
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//         console.log(res)
//     return res.text()})
//     .then((data)=>{
//         console.log(data)
//         document.getElementById('btndata').innerText=data
//     })
//     .catch((Error)=>{ console.log(Error)})
// }

async function makerreq(){
   try{
    console.log('Button clicked')
    const res=await fetch('data1.txt');
    console.log(res)
    if(!res.ok){
        throw Error(res.statusText)
    }
    const data=await res.text();
    console.log(data)
   
    document.getElementById('btndata').innerText=data;
   }catch(Error){
    document.getElementById('btndata').innerText=Error;
   }


}