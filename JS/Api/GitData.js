
export default async function GitData(city = 'NoCity'){
    const section = document.querySelector('section')
    try{
        if(city === 'NoCity'){
            section.innerHTML = `<span class="loader"></span>`
            const ApiKeyLocation = 'b4f3ac49de0f401480cdd80a0b9889cc'
            const GetLocation = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${ApiKeyLocation}`);
            const IpLocation = await GetLocation.json();
            city = IpLocation.state_prov
        }
        const ApiKey = '16feb83910c540d79ef202121252301'
        const getDataApi = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${city}&days=7`)
        const data = await getDataApi.json()
        return data
    }
    catch(e){
        return e
    }
}