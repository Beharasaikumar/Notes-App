const main = document.querySelector(".p-content");
const createbtn = document.querySelector(".btn");
const matter = document.querySelectorAll(".content");

function showNote(){
    main.innerHTML = localStorage.getItem("matter");
}
showNote();

function upadatedstorage(){
    localStorage.setItem("matter" , main.innerHTML);
}

createbtn.addEventListener("click" , () =>{
    let para = document.createElement("p");
    let img = document.createElement("img");
    para.className = "content";
    para.setAttribute("contenteditable" , "true");
    img.src = "delete.png";
    main.appendChild(para).appendChild(img);
})

main.addEventListener("click" , function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        upadatedstorage();
    }
    else if(e.target.tagName === "P"){
        matter = document.querySelectorAll(".content");
        matter.forEach(nt =>{
            nt.onkeyup = function(){
              upadatedstorage();
           }
        })
    }
})

document.addEventListener("keydown" , event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
