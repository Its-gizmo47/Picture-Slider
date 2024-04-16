let pics = document.querySelectorAll(".pictures");

pics.forEach((pic) =>{
    pic.addEventListener("click", ()=>{
        removeActive();
        pic.classList.add("active");
    });
});

function removeActive(){
    pics.forEach((pic) =>{
        pic.classList.remove("active");
    });
}