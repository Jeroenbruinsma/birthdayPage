console.log("hello from the comments js file")


function addComment(event){
    event.preventDefault()  //remember!!
    console.log("hello from addcomment fn",event)
   

    const name = document.getElementsByClassName('nameField')
    console.log("name",name[0].value)

    const commentContainer = document.createElement("div")
    const nameTag = document.createElement("h3")
    nameTag.innerHTML = name[0].value

    commentContainer.classList.add("comment")
    commentContainer.appendChild(nameTag)

    const section = document.getElementById(8888)
    section.appendChild(commentContainer)
    



}
const submitButton = document.getElementsByClassName("sendMessageButton")

submitButton[0].addEventListener("click", addComment);