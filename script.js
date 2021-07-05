const screenEL=document.querySelector(".screen")
const positiveButton=document.querySelector(".positive")
const negativeButton=document.querySelector(".negative")
console.log(screenEL, positiveButton, negativeButton);
let sayac = 0
positiveButton.addEventListener("click",() => {
sayac = sayac + 1;
screenEL.innerHTML = sayac
    console.log("positive clicked");
});screenEL.innerHTML = sayac

negativeButton.addEventListener("click",() => {
sayac = sayac - 1; 
screenEL.innerHTML = sayac   
    console.log("negative clicked");
});