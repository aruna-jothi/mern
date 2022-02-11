
let cleanRoom = new Promise((resolve,reject)=>{
    let data
    setTimeout(()=>{
        data = true
        if(data){
            resolve("resolved")
        }
        else{
            reject("rejected")
        }
    

    },2000)
})

cleanRoom.then(()=>{
    console.log("give some gifts")
}).catch(()=>{
    console.log("First clean the room")
})