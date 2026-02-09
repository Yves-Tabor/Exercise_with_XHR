async function getOnlyFive(){
    function returnProm(url){
        return new Promise((resolve, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onload = () => {
                if(xhr.status === 200){
                    if(xhr.readyState === 4){
                        resolve(JSON.parse(xhr.responseText))
                    }
                }else{
                    reject("Request Failed !!");
                }
            }
            xhr.onerror = ()=> reject ("Network Error !!");
            xhr.send();
        });
    }
    const data = await returnProm("https://jsonplaceholder.typicode.com/posts");
    const fivePosts = data.filter(user=>user.id < 6);
    console.log(fivePosts)
}
getOnlyFive();