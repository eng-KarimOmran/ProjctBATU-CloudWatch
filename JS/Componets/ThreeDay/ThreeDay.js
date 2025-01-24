import GitData from "../../Api/GitData.js";
import Search from './../Search/Search.js';
import CardWeather from './../CardWeather/CardWeather.js';

export default async function ThreeDay(){
    let Data = await GitData()
    console.log()
    const section = document.querySelector('section')
    let cards = ``
    let date = ``
    let formattedDate = ``
    for (let i = 0; i < 3; i++) {
        date = new Date(Data.forecast.forecastday[i].date);
        formattedDate = date.toLocaleDateString("en-US", {weekday: "long",month: "long",});
        cards += `${CardWeather(formattedDate.split(' ')[1],formattedDate.split(' ')[0],Data.location.name,Data.forecast.forecastday[i].day.condition.icon,Data.forecast.forecastday[i].day.avgtemp_c,Data.forecast.forecastday[i].day.condition.text,Data.forecast.forecastday[i].day.avghumidity,Data.forecast.forecastday[i].day.avgvis_km)}`
    }
    section.innerHTML = `${Search('Today')}
    <div id="disPlayCard" class="d-flex align-items-center flex-wrap justify-content-center mt-3 w-100">
        ${cards}
    </div>`
    document.getElementById('Search').addEventListener('input',async function InputSearch(){
         Data = await GitData(this.value)
         cards = ``
         for (let i = 0; i < 3; i++) {
            date = new Date(Data.forecast.forecastday[i].date);
            formattedDate = date.toLocaleDateString("en-US", {weekday: "long",month: "long",});
            cards += `${CardWeather(formattedDate.split(' ')[1],formattedDate.split(' ')[0],Data.location.name,Data.forecast.forecastday[i].day.condition.icon,Data.forecast.forecastday[i].day.avgtemp_c,Data.forecast.forecastday[i].day.condition.text,Data.forecast.forecastday[i].day.avghumidity,Data.forecast.forecastday[i].day.avgvis_km)}`
        }
         document.getElementById('disPlayCard').innerHTML = `${cards}`
   })
}