let btn=document.getElementById('button');
let input=document.getElementById('myInput');
let list=document.getElementById('list');
var myNodelist = document.querySelectorAll("li");

let icon=document.querySelectorAll('i');
btn.addEventListener("click",function(){
    if (input.value){
        let listitem=document.createElement('li');
        let i =document.createElement('i');
        i.className="fa fa-trash";
        listitem.append(input.value);
        listitem.append(i);
        list.appendChild(listitem);
        input.value='';
    }
    else{
        alert("you must enter input");
    };
})
icon.forEach(function(el){
    let parent=el.parentElement;
    el.addEventListener('click',function(){
        parent.style.display='none';
    })
})
myNodelist.forEach(function(e){
    e.addEventListener('click',function(){
        e.style.textDecorationLine = "line-through";
//        console.log(e);
    })
})