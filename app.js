const obsorver = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => obsorver.observe(el));



const obsorverBottem = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show-bottem")
        }
        else{
            entry.target.classList.remove("show-bottem")
        }
    });
});
const hiddenElementsBottem = document.querySelectorAll(".hidden-bottem");
hiddenElementsBottem.forEach((el) => obsorverBottem.observe(el));



const obsorverRight = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show-right")
        }
        else{
            entry.target.classList.remove("show-right")
        }
    });
});
const hiddenElementsRight = document.querySelectorAll(".hidden-right");
hiddenElementsRight.forEach((el) => obsorverRight.observe(el));

