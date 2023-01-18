//your code here
const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");



checkbox.disabled= true;
submitBtn.disabled = true;


const elements = document.querySelectorAll(".element");
const SelectColor = document.getElementById("SelectColor")

function getRandomColor(){
    const  letter  = "1234567890ABCDEF";
    let color = "#"
    for (let i = 0; i <6; i++){
        color += letter[Math.floor(Math.random() *16)];
    }
    return color;
    
    
 }
let colorArray= [];
elements.forEach (function (element){
const color = getRandomColor();
colorArray.push(color);
element.style.backgroundColor = color;
});


SelectColor.innetHTML =
 colorArray[Math.floor(Math.random()* colorArray.length)];
 
 elements.forEach((element)=> {
 element.addEventListener("click", () => {
         if (element.innerHTML === SelectColor.innerHTML) {
             alert("You are Human");
             checkbox.checked = true;
             submitBtn.disabled = false;
             submitBtn.classList.remove("btn-light");
             submitBtn.classList.add("btn-success");
         }
         else {
             alert("Please verify you are human");
         }
     })});