import GitData from "../../Api/GitData.js";
import Search from './../Search/Search.js';
import CardWeather from './../CardWeather/CardWeather.js';

export default async function Today(){
    let Data = await GitData()
    let date = new Date(Data.forecast.forecastday[0].date);
    const formattedDate = date.toLocaleDateString("en-US", {weekday: "long",month: "long",});
    const section = document.querySelector('section')
    section.innerHTML = `${Search('Today')}
    <div id="disPlayCard" class="d-flex align-items-center flex-wrap justify-content-center mt-3 w-100">
        ${CardWeather(formattedDate.split(' ')[1],formattedDate.split(' ')[0],Data.location.name,Data.forecast.forecastday[0].day.condition.icon,Data.forecast.forecastday[0].day.avgtemp_c,Data.forecast.forecastday[0].day.condition.text,Data.forecast.forecastday[0].day.avghumidity,Data.forecast.forecastday[0].day.avgvis_km)}
    </div>`
    document.getElementById('Search').addEventListener('input',async function InputSearch(){
         Data = await GitData(this.value)
         date = new Date(Data.forecast.forecastday[0].date);
         document.getElementById('disPlayCard').innerHTML = `${CardWeather(formattedDate.split(' ')[1],formattedDate.split(' ')[0],Data.location.name,Data.forecast.forecastday[0].day.condition.icon,Data.forecast.forecastday[0].day.avgtemp_c,Data.forecast.forecastday[0].day.condition.text,Data.forecast.forecastday[0].day.avghumidity,Data.forecast.forecastday[0].day.avgvis_km)}`
        })

}