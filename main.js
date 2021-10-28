let task  =document.querySelector("input");
let add   =document.getElementById("add");
let list  =document.getElementById("list");
let clear =document.getElementById("clear");
let empty =document.getElementById("empty");

let text = "DEVLOGS TO DO LIST";
let index = 1;



function autowrite(){
   document.getElementById("title").textContent=text.slice(0,index);
   index++;
   if(index>text.length){
       index=1;
   }
   
}

setInterval(function()  {
    autowrite();
}, 900);


window.onload=task.focus();
window.onload=testtask();
add.onclick = newtask;


function newtask(e){

    task.focus();
    if(task.value===" "||task.value===""){
       
        enter.innerHTML=`<p class="enter1">Enter Valid Task</p>`;
     
     
       setTimeout(()=>{
        let enteer=document.querySelector(".enter1");
        enteer.style.height=0;
        enteer.style.padding=0;
        setTimeout(()=>{enteer.remove()},100);
            
        },1000);
    }else{
        let taskupeer =task.value.substr(0,1).toUpperCase()+task.value.substr(1,task.value.length);
      let listitem=document.createElement("li");
       listitem.classList.add("list-item")
       listitem.innerHTML=`
       <span class="task">${taskupeer}</span>
       <i class="fas fa-times" id="font"></i>
       `      
      
       list.appendChild(listitem);
       counttask(list.children.length);
       task.value="";
       testtask();
       let close=document.querySelectorAll(".fas");
       
       close.forEach(function(e){
        e.onclick = canceltask;
       });

       let done =document.querySelectorAll("span");
       done.forEach(function(e){
           e.onclick=donetask;
       });

    }
};

function canceltask(e){
    e.target.parentNode.remove();
    counttask(list.children.length);
    taskdone();
    
  
};

clear.onclick = cancelalltasks;

function cancelalltasks(){
    list.innerHTML="";
    testtask();
    task.focus();
    counttask(list.children.length);    
    taskdone();
   
   
    
};


function testtask(){
    if(list.children.length===0){
        empty.innerHTML="Task Empty";
    }else{
        empty.innerHTML="";
    }
}

function donetask(ele){
   
    ele.target.classList.toggle("done");
    taskdone();
  
   
};

function counttask(count){
    let ciecle1=document.getElementById("ciecle1");
    ciecle1.innerHTML=count;
   
};


function taskdone(){
    let donelength=document.querySelectorAll(".done").length;

    
    document.getElementById("ciecle2").innerHTML=donelength;
  


}
