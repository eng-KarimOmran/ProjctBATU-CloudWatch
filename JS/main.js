"use strict"
//  navbar
function navbar(){
    const navbarLinks = document.querySelectorAll('.navbar-nav a')
    const sections = document.querySelectorAll('section')
    document.querySelector('.navbar-nav').addEventListener('click',()=>{
        document.querySelector('.navbar-collapse').classList.remove('show')
    })
    function noActiveAllLink(){
        navbarLinks.forEach(element => {
            element.classList.remove('active-nav')
        });
    }
    function bgNavbar(){
        if(window.scrollY < 94){
            document.querySelector('nav').classList.remove('bg-main-nav')
        }
        else{
            document.querySelector('nav').classList.add('bg-main-nav')
        }
    }
    function activeScrol(){
        sections.forEach((section)=>{
            if(section.offsetTop <= window.scrollY + 93.63){
                noActiveAllLink()
                document.querySelector(`nav [href="#${section.id}"]`).classList.add('active-nav')
            }
        })
    }
    window.addEventListener('scroll',()=>{
        bgNavbar()
        activeScrol()
    })
}
// getLocation
async function getLocation() {
    document.querySelector('.loader-section').classList.replace('d-none', 'd-flex');
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const LatLog = `${latitude},${longitude}`;
                resolve(LatLog);
            },
            async () => {
                try{
                    const response = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=b4f3ac49de0f401480cdd80a0b9889cc');
                    const IpLocation = await response.json();
                    resolve(IpLocation.state_prov);
                }catch{
                    resolve('noInternet');
                }
            }
        );
    });
}
//    getDataAPI
let checkData = false
async function getData(city){
    if(city === undefined){
        city = await getLocation()
    }
    try{
        const fetchData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5012145307a44b7a82b82423242012&q=${city}&days=7`)
        if(fetchData.status === 200 && fetchData.ok === true){
            const response = await fetchData.json()
            return response
        }
        else{
            return 'noData'
        }
    }
    catch(e){
        return 'noInternet'
    }
    finally{
        document.querySelector('.loader-section').classList.replace('d-flex','d-none');
    }
}
//   date
function dateObject(dateString){
    const dateObject = new Date(dateString);
    let hours = dateObject.getHours();
    const ampm = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12 || 12;
    const formattedTime = `${hours}${ampm}`;
    const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(dateObject);
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateObject);
    const dataTime = {
        hours:formattedTime,
        day:dayName,
        month:monthName
    }
    return dataTime
}
async function getHourNow(data){
    if(data !== 'noInternet' && data !== 'noData'){
        const fetchTime = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=9B8ZLZ9AFI2G&format=json&by=zone&zone=${data.location.tz_id}`)
        const getHour = await fetchTime.json()
        const hourNow = getHour.formatted.split(' ')[1].split(':')[0]
        if(hourNow < 12){
            return hourNow.split('')[1]
        }else{
            return hourNow
        }
    }
}
// disPlay
async function disPlayHour(city){
    const data = await getData(city)
    if(data === 'noInternet'){
        document.querySelector('.Hour .cards').innerHTML = `<div class="py-5 w-100"><div class="h3 text-center text-danger">No network connection</div></div>`
    }
    else if(data === 'noData'){
        document.querySelector('.Hour .cards').innerHTML = `<div class="py-5 w-100"><div class="h3 text-center text-info">Enter a valid city name</div></div>`
    }
    else{
        const hourNow = await getHourNow(data)
        const card = `
        <div class="px-2 py-4 col-12 col-md-6 col-xl-3 position-relative d-flex justify-content-center align-items-center">
                <div id="card-Hour" class="rounded-top-3 card-full shadow">
                    <div class="head-card d-flex justify-content-between align-items-center px-2 py-2 rounded-top-3">
                            <span class="text-light-gray">${dateObject(data.forecast.forecastday[0].hour[hourNow].time).hours}</span>
                            <span class="text-light-gray">${dateObject(data.forecast.forecastday[0].hour[hourNow].time).day}</span>
                        </div>
                        <div class="body-card card-weather d-flex justify-content-around align-items-center flex-column px-2">
                            <span class="py-2 text-light-gray">${data.location.name}</span>
                            <img src="${data.forecast.forecastday[0].hour[hourNow].condition.icon}" alt="logo">
                            <span class="py-2 text-white temperature">${data.forecast.forecastday[0].hour[hourNow].temp_c}<sup>o</sup>C</span>
                            <span class="py-2 text-info">${data.forecast.forecastday[0].hour[hourNow].condition.text}</span>
                            <div class="d-flex justify-content-around align-items-center w-100">
                                <div><span class="text-light-gray"><i class="fa-solid fa-droplet me-1"></i>${data.forecast.forecastday[0].hour[hourNow].humidity}%</span></div>
                                <div><span class="text-light-gray"><i class="fa-solid fa-wind me-1"></i>${data.forecast.forecastday[0].hour[hourNow].wind_kph}k/m</span></div>
                                <div><span class="text-light-gray"><i class="fa-regular fa-compass me-1"></i>${data.forecast.forecastday[0].hour[hourNow].wind_dir}</span></div>
                            </div>
                        </div>
                    </div>
            </div>
        `
        document.querySelector('.Hour .cards').innerHTML = card
    }
}
async function disPlayToday(city){
    const data = await getData(city)
    if(data === 'noInternet'){
        document.querySelector('.Today .cards').innerHTML = `<div class="py-5 w-100"><div class="h3 text-center text-danger">No network connection</div></div>`
    }
    else if(data === 'noData'){
        document.querySelector('.Today .cards').innerHTML = `<div class="py-5 w-100"><div class="h3 text-center text-info">Enter a valid city name</div></div>`
    }
    else{
        const card = `
        <div class="px-2 py-4 col-12 col-md-6 col-xl-3 d-flex justify-content-center align-items-center">
            <div id="card-Hour" class="rounded-top-3 shadow card-full">
                <div class="head-card d-flex justify-content-between align-items-center px-2 py-2 rounded-top-3">
                        <span class="text-light-gray">${dateObject(data.forecast.forecastday[0].date).day}</span>
                        <span class="text-light-gray">${dateObject(data.forecast.forecastday[0].date).month}</span>
                    </div>
                    <div class="body-card card-weather d-flex justify-content-around align-items-center flex-column px-2">
                        <span class="py-2 text-light-gray">${data.location.name}</span>
                        <img src="${data.current.condition.icon}" alt="logo">
                        <span class="py-2 text-white temperature">${data.current.temp_c}<sup>o</sup>C</span>
                        <span class="py-2 text-info">${data.current.condition.text}</span>
                        <div class="d-flex justify-content-around align-items-center w-100">
                            <div><span class="text-light-gray"><i class="fa-solid fa-droplet me-1"></i>${data.current.humidity}%</span></div>
                            <div><span class="text-light-gray"><i class="fa-solid fa-wind me-1"></i>${data.current.wind_kph}k/m</span></div>
                            <div><span class="text-light-gray"><i class="fa-regular fa-compass me-1"></i>${data.current.wind_dir}</span></div>
                        </div>
                    </div>
                </div>
        </div>
`
document.querySelector('.Today .cards').innerHTML = card
    }
}
async function disPlayThreeDay(city) {
    const data = await getData(city)
    if(data === 'noInternet'){
        document.querySelector('.ThreeDay .cards').innerHTML = `<div class="py-5 w-100"><div class="h3 text-center text-danger">No network connection</div></div>`
    }else if(data === 'noData'){
        document.querySelector('.ThreeDay .cards').innerHTML = `<div class="py-5 w-100"><div class="h3 text-center text-info">Enter a valid city name</div></div>`
    }else{
        let cards = ``
    for(let i = 0;i < 3;i++){
        cards += `<div class="px-2 py-4 col-12 col-md-6 col-xl-3 d-flex justify-content-center align-items-center">
                <div class="rounded-top-3 shadow card-full">
                    <div class="head-card d-flex justify-content-between align-items-center px-2 py-2 rounded-top-3">
                        <span class="text-light-gray">${dateObject(data.forecast.forecastday[i].date).day}</span>
                        <span class="text-light-gray">${dateObject(data.forecast.forecastday[i].date).month}</span>
                    </div>
                    <div class="body-card card-weather d-flex justify-content-around align-items-center flex-column px-2">
                        <span class="py-2 text-light-gray">${data.location.name}</span>
                        <img src="${data.forecast.forecastday[i].day.condition.icon}" alt="logo">
                        <span class="pt-2 pb-1 text-white temperature">${data.forecast.forecastday[i].day.maxtemp_c}<sup>o</sup>C</span>
                        <small class="text-white">${data.forecast.forecastday[i].day.mintemp_c}<sup>o</sup>C</small>
                        <span class="py-2 text-info">${data.forecast.forecastday[i].day.condition.text}</span>
                        <div class="d-flex justify-content-around align-items-center w-100">
                            <div><span class="text-light-gray"><i class="fa-solid fa-droplet"></i>${data.forecast.forecastday[i].day.avghumidity}%</span></div>
                            <div><span class="text-light-gray"><i class="fa-solid fa-wind"></i> ${data.forecast.forecastday[i].day.maxwind_kph}k/m</span></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    document.querySelector('.ThreeDay .cards').innerHTML = cards
    }
}
async function disPlayWeek(city) {
    const data = await getData(city)
    if(data === 'noInternet'){
        document.querySelector('.Week .cards').innerHTML = `<div class="py-5 w-100"><div class="h3 text-center text-danger">No network connection</div></div>`
    }
    else if(data === 'noData'){
        document.querySelector('.Week .cards').innerHTML = `<div class="py-5 w-100"><div class="h3 text-center text-info">Enter a valid city name</div></div>`
    }else{
        let cards = ``
        for(let i = 0;i < 7;i++){
            cards += `<div class="px-2 py-4 col-12 col-md-6 col-xl-4 d-flex justify-content-center align-items-center d-flex justify-content-center align-items-center">
                    <div class="rounded-top-3 shadow card-full">
                        <div class="head-card d-flex justify-content-between align-items-center px-2 py-2 rounded-top-3 w-100">
                            <span class="text-light-gray">${dateObject(data.forecast.forecastday[i].date).day}</span>
                            <span class="text-light-gray">${dateObject(data.forecast.forecastday[i].date).month}</span>
                        </div>
                        <div class="body-card card-weather d-flex justify-content-around align-items-center flex-column px-2 w-100">
                            <span class="py-2 text-light-gray">${data.location.name}</span>
                            <img src="${data.forecast.forecastday[i].day.condition.icon}" alt="logo">
                            <span class="pt-2 pb-1 text-white temperature">${data.forecast.forecastday[i].day.maxtemp_c}<sup>o</sup>C</span>
                            <small class="text-white">${data.forecast.forecastday[i].day.mintemp_c}<sup>o</sup>C</small>
                            <span class="py-2 text-info">${data.forecast.forecastday[i].day.condition.text}</span>
                            <div class="d-flex justify-content-around align-items-center w-100">
                                <div><span class="text-light-gray"><i class="fa-solid fa-droplet"></i>${data.forecast.forecastday[i].day.avghumidity}%</span></div>
                                <div><span class="text-light-gray"><i class="fa-solid fa-wind"></i> ${data.forecast.forecastday[i].day.maxwind_kph}k/m</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
        document.querySelector('.Week .cards').innerHTML = cards
    }
}
disPlayHour()
disPlayToday()
disPlayThreeDay()
disPlayWeek()
// Search
function Search(section,disPlay){
    const inputSearch = document.querySelector(`.${section} input`)
    inputSearch.addEventListener('input',()=>{
        if(inputSearch.value == ''){
            disPlay()
        }
        else if(inputSearch.value.length < 3){
        }
        else{
            document.querySelector('.loader-section').classList.replace('d-none', 'd-flex');
            disPlay(inputSearch.value)
        }
    })
}
// Contact
function Contact(){
    const btnContact = document.querySelector('.Contact form button')
    const email = document.querySelector('.Contact form input')
    const message = document.querySelector('.Contact form textarea')
    btnContact.addEventListener('click',async (e)=>{
        e.preventDefault()
        if (navigator.onLine){
            if(check(email) && check(message)){
                cleardata(email)
                cleardata(message)
                check(email)
                check(message)
                document.querySelector('.Contact form .NoNetwork').classList.remove('MessageSend-ok')
                document.getElementById('MessageSend').classList.add('MessageSend-ok')
            }
            setInterval(()=>{
                document.getElementById('MessageSend').classList.remove('MessageSend-ok')
            },3000)
        }else{
            document.querySelector('.Contact form .NoNetwork').classList.add('MessageSend-ok')
        }
    })
    const regex = {
        email:/^[a-zA-Z0-9-\.]+@[\w]+\.[\w]+$/,
        message:/^[a-zA-Z]+/
    }
    function check(elm){
        if(elm.value == ''){
            elm.classList.remove('valid-value','in-valid-value')
            return false
        }else if(regex[elm.id].test(elm.value)){
            elm.classList.remove('in-valid-value')
            elm.classList.add('valid-value')
            return true
        }else{
            elm.classList.add('in-valid-value')
            elm.classList.remove('valid-value')
            return false
        }
    }
    email.addEventListener('input',()=>{
        check(email)
    })
    message.addEventListener('input',()=>{
        check(message)
    })
    function cleardata(elm){
        elm.value = ''
    }
}
// coll fun
navbar()
Search('Hour',disPlayHour)
Search('Today',disPlayToday)
Search('ThreeDay',disPlayThreeDay)
Search('Week',disPlayWeek)
Contact()