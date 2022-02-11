fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        createCardData(json)
    })
    .catch((error) => {
        console.log(error)
    })

const createCardData = (data) => {
    const container = document.getElementsByClassName('container')[0]
    data.map(user => {
        /*console.log("ID" , user.id)
        console.log("User Id" , user.userid)
        console.log("Title", user.title)*/

        /*create card wrapper*/
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        //userid
        const userid = document.createElement('p')
        userid.innerHTML = user.userId
        card.appendChild(userid)


        /*create p & appendchild of card*/
        const id = document.createElement('p')
        id.innerHTML = user.id
        card.appendChild(id)


        //title
        const title = document.createElement('p')
        title.innerHTML = user.title
        card.appendChild(title)

        //create appendchild of container
        container.appendChild(card)
    })
}