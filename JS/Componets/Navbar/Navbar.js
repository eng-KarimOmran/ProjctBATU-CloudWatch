import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import Hour from '../Hour/Hour.js';
import ThreeDay from '../ThreeDay/ThreeDay.js';
import Today from '../Today/Today.js';
import Week from '../Week/Week.js';
import Home from './../Home/Home.js';
import Services from './../Services/Services.js';
export default function Navbar(){
    const textLinkNav = [
        'Home',
        'Services',
        'Hour',
        'Today',
        'ThreeDay',
        'Week',
        'About',
        'Contact',
        
    ]
    document.querySelector('nav div').innerHTML = `
        <a href="https://eng-karimomran.github.io/ProjctBATU-CloudWatch/" class="text-decoration-none">
            <div class="d-flex align-items-center">
                <img class="d-block" src="Imgs/logo@2x.png" alt="logo">
                <span class="text-white ms-2">CloudWatch</span>
            </div>
        </a>
        <button class="d-block d-lg-none btn"><i class="fa-solid fa-list text-white"></i></button>
        <ul class="d-flex ps-0 list-style-none col-12 col-lg-auto flex-column flex-lg-row overflow-hidden mt-2 mt-lg-0 mb-0">
            ${textLinkNav.map((TextLink)=>{
                return `<li class="ms-0 ms-lg-3 text-center"><a class="text-white text-decoration-none ${TextLink == 'Home' ? 'active' : ''}" href="#${TextLink}">${TextLink}</a></li>`
            }).join('')}
        </ul>`
        const ulNav = document.querySelector('nav ul')
        const btnNav = document.querySelector('nav button')
        btnNav.addEventListener('click',()=>{
            ulNav.classList.toggle('click-nav')
        })
    const linksNav = Array.from(document.querySelectorAll('nav ul a'))
    linksNav.map((link)=>{
        link.addEventListener('click',()=>{
            linksNav.map((link)=>{
                link.classList.remove('active')
            })
            link.classList.add('active')
            switch(link.textContent){
                case 'Home':
                    Home()
                    break;
                case 'Services':
                    Services()
                    break;
                case 'Hour':
                    Hour()
                    break;
                case 'Today':
                    Today()
                    break;
                case 'ThreeDay':
                    ThreeDay()
                    break;
                case 'Week':
                    Week()
                    break;
                case 'About':
                    About()
                    break;
                case 'Contact':
                    Contact()
                    break;
            }
            ulNav.classList.toggle('click-nav')
        })
    })
    document.addEventListener('scroll',()=>{
        if(window.scrollY >= 40){
            document.querySelector('nav').classList.add('Bg-nav')
        }else{
            document.querySelector('nav').classList.remove('Bg-nav')
        }
    })
    
}
