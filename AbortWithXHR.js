
//1. abort method -> Aborting with SetTimeout and XHR

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/comments");

// const timeout = setTimeout(()=>{
//     xhr.abort();
//     console.log("Request Timeout !!");
// }, 1000);

// xhr.onreadystatechange = ()=>{
//     if(xhr.readyState === 4){
//         if(xhr.status === 200){
//             console.log("Request successful : ", xhr.responseText);
//             clearTimeout(timeout);
//         }
//     }
// }
// xhr.send();

//2. abort event -> Aborting with SetTimeout and XHR

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/comments");
// xhr.addEventListener("abort", ()=>{
//    console.log("Request aborted due to time !!"); 
// });

// const timeout = setTimeout(()=>{
//     xhr.abort();
// }, 2000);


// xhr.onreadystatechange = () =>{
//     if(xhr.status === 200){
//         if(xhr.readyState === 4){
//             setTimeout(()=>{
//                 console.log("Request Successful : ", xhr.responseText)
//             },1000);
//         }else{
//                 console.log("Request loading...")
//         }
//     }
// }

// xhr.send();


//3. ontimeout property -> Aborting with SetTimeout and XHR

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/comments");

// xhr.timeout = 1000;

// xhr.ontimeout = ()=>{
//     console.log("Request aborted due to time!!");
// }

// xhr.onreadystatechange = ()=>{
//     if(xhr.status === 200){
//         if(xhr.readyState === 4){
//             setTimeout(()=>{
//                 console.log("The request was successfull: ", xhr.responseText);
//             },1000)
//         }else{
//             console.log("Request loading...")
//         }
//     }
// }
// xhr.send();

