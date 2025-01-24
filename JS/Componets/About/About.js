export default function About(){
    const section = document.querySelector('section')
    section.innerHTML = `
        <h2 class="text-center text-white">About Us</h2>
        <div class="text-center text-white text-About p-1 shadow rounded-4 m-1">
            We are a team of weather enthusiasts and experts dedicated to providing you with accurate and comprehensive weather forecasts.
            Our mission is to offer reliable and easily accessible information to help you stay informed about the weather in your area,
            so you can make the best decisions for your daily activities, travel plans, and more.Using the latest technology and tools in meteorology,
            we ensure to deliver up-to-date, precise predictions when you need them most. We're here to be your trusted guide for everything weather-related,
            helping you adapt to changing conditions with confidence and ease.
        </div>`
}