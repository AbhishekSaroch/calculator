let string="";
let buttons=document.querySelectorAll(".button");
let input=document.querySelector('.input');

Array.from(buttons).forEach((button)=>{
    
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
          string = eval(string);
          document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
          string = "data cleared";
          document.querySelector('input').value = string;
        }
        else{ 
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
          }
    })
})