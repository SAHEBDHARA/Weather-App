 const inputeText = document.querySelector(".inputeText");
 var button = document.querySelector(".btn");
 const showData = document.querySelector(".showData");


 // get api key 
  
 const API_Key = "paste your api";


 
 // http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

 button.addEventListener('click',() => {

    const cityinpute =inputeText.value;
    // if inpute value is empty 
    if ( cityinpute == "") {
        alert("Name must be filled out");
        return false;
      }
    // console.log(cityinpute);
    // console.log("hlw");

    // fetch api through get api


    // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityinpute}&appid=${API_Key}`)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityinpute}&appid=6ea21c7869ab90edf510348695ea24ad`)


    .then(res => res.json())
    .then(data =>{
        console.log(data);
       let n = data.main.temp-273;
       let tmpData = n.toFixed(1);
   


        inputeText.value = ""
        showData.innerHTML = `
                            <ul>
                            <li class="desc" >${data.weather[0].description} </li>
                            <li class="city">${data.name} </li>
                            <li class ="tempt">${tmpData}°C </li>
                            <li class ="humidity">Humidity - ${data.main.humidity}%</li>
                            </ul>
        
                             `

    })
 })