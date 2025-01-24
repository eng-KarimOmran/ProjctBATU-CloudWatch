import GitData from "../../Api/GitData.js";
import Search from './../Search/Search.js';
import CardWeather from './../CardWeather/CardWeather.js';

export default async function Hour(){
    let Data = await GitData()
    const section = document.querySelector('section')
    section.innerHTML = `${Search('Hour')}
    <div id="disPlayCard" class="d-flex align-items-center flex-wrap justify-content-center mt-3">
        ${Data.forecast.forecastday[0].hour.map((hour)=>{
            return CardWeather(hour.time.split(' ')[1],hour.time.split(' ')[0].split('-').reverse().join('-'),Data.location.name,hour.condition.icon,hour.temp_c,hour.condition.text,hour.humidity,hour.gust_kph)
        }).join('')}
    </div>
    `
    document.getElementById('Search').addEventListener('input',async function InputSearch(){
         Data = await GitData(this.value)
         document.getElementById('disPlayCard').innerHTML = `
         ${Data.forecast.forecastday[0].hour.map((hour)=>{
            return CardWeather(hour.time.split(' ')[1],hour.time.split(' ')[0].split('-').reverse().join('-'),Data.location.name,hour.condition.icon,hour.temp_c,hour.condition.text,hour.humidity,hour.gust_kph)
        }).join('')}
        `
    })
}