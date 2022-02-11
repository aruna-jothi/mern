/*let h1 = document.createElement('h1');
h1.innerHTML = 'test para';
document.body.appendChild(h1);

let p = document.createElement('p');
p.innerHTML = 'test 1';
document.body.appendChild(p);*/

let students = ['jo', 'arun', 'raj'];

let list = document.getElementById('list');

students.map(student => {
    let li = document.createElement('li');
    li.innerHTML = student;
    document.body.appendChild(li);
    
})

