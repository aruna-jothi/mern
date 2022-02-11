let students = new Promise((resolve, reject)=>{
    let attendance = [
        {
            id:1,
            name: 'Arun'
        },
        {
            id:2,
            name:"jo"
        }
    ]
    if(attendance.length>0){
        resolve("Start the Class")
    }
    else
    {
        reject("Inform them to join")
    }
})

students.then((data)=>{
    console.log("Attendance checked",data)
}).catch((error)=>{
    console.log("Class Cancelled",error)
})