const apiUrl='http://api.openweathermap.org/data/2.5/weather?';
const apikey='6e35551bfec9d1937e361cc08183aca1';
var ul=document.getElementById('cards');
const btn=document.getElementById('btn');
const list=document.createElement('li');
btn.addEventListener('click',function(){
let city=document.getElementById('myInput').value;
    
fetch(apiUrl+`q=${city}&appid=${apikey}&units=metric`)
.then(response=>response.json())
.then(data=>{
    const{name,sys,weather,main}=data;
    const icon = `https://openweathermap.org/img/wn/${
  weather[0]["icon"]
}@2x.png`;
    
    list.className='city';
    const content=`<h3 data-name="${name}">${name}<sup class='sys'>${sys.country}</sup></h3>
    <h2>${main.temp}<sup>°C</sup></h2>
    <h2><span>FEELS LIKE: </span>${main.feels_like}<sup>°C</sup></h2>
    <div><figure>
    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
    <figcaption>${weather[0]["description"]}</figcaption>
  </figure></div>`;

    list.innerHTML=content;
   ul.appendChild(list);
      
    })
    
.catch((error) => {
  console.error('Error:', error);
});
    
});