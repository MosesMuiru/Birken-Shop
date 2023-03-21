const head = document.querySelector("#head")

// the toggle element
const images = document.querySelectorAll(".image")

// setInterval(() =>{
//     console.log("interval")
// },)

const inter = 1;
// setTimeout(() =>{
//         image.classList.toggle =".disappear"
        
        
// },100)


const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        console.log("here")
    })
})

const hiddenElement = document.querySelectorAll(".entries")
hiddenElement.forEach((el) => observer.observe(el))

// head.Child.forEach(element => {
//     console.log(element)
    
// });

// console.log(head.innerText)
// head.onfullscreenchange

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"



head.onmouseover = event => {
    console.log("mouse hhover")
    let interation = 0;

   const interval= setInterval (() =>{


        event.target.innerText = event.target.innerText.split("")
        .map((letter,index) =>{
            if(index < interation) return event.target.dataset.value[index]

            return letters[Math.floor(Math.random()*26)]}).join("")
        if(interation >= event.target.dataset.value.length) clearInterval(interval)
        interation+=2;

        // console.log(head.length)

    },50)
}

// head.Child.forEach(element => {
//     console.log(element)
    
// });



