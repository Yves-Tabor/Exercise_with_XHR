// Assign each user with the todos according to the userId

// Assign each user with the todos according to the userId


// async function fetchUsersWithTodos(){
//     try{
//     function requestProm(url){
//         return new Promise((resolve, reject)=>{
//           const xhr = new XMLHttpRequest();
//           xhr.open("GET", url);
//           xhr.onreadystatechange = () =>{
//               if(xhr.status === 200){
//                   if(xhr.readyState === 4){
//                           resolve(JSON.parse(xhr.responseText));
//                   }
//               }else{
//                   reject("Request Failed !!");
//               }
//           }
//           xhr.onerror = ()=> reject("Network Error !!");
//           xhr.send();
//         })
//     }
    
//         const [userRes, todoRes] = await Promise.all([
//             requestProm("https://jsonplaceholder.typicode.com/users"), 
//             requestProm("https://jsonplaceholder.typicode.com/todos")]);
//         const objectRes = userRes.map(user=>{
//             return{
//                 ...user,
//                 todos: todoRes.filter(todo=>todo.userId === user.id)
//             }
//         })
//         console.log("Combined data: ", objectRes);
//     }catch(error){
//         console.log("An error occured !!", error)
//     }
// }
// fetchUsersWithTodos();