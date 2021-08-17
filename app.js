var input = document.getElementById('input_text');
var main = document.getElementById('name');
var temp = document.getElementById('temp');
var desc = document.getElementById('desc');
var btn = document.getElementById('submit');
btn.addEventListener('click',function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=143d73a848468c9219eebe4a53a88013')
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp']
        var nameValue = data['name']
        var descValue = data['weather'][0]['description']
    
        var tempInCelsius = Math.floor('tempValue' - 273.15)
        main.innerHTML = nameValue
        desc.innerHTML = "Description - " + descValue
        temp.innerHTML = "Temperature - "+ tempInCelsius+ "degree celsuis"
        input.value = ""
    })
})
