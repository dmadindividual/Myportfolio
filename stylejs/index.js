let mouse = document.querySelector('.cursor')
let navLinks = document.querySelectorAll('.nav-links ')
let logo = document.querySelector('.logo ')
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const nav = document.querySelector('nav')


window.addEventListener('mousemove', cursor)

function cursor(e) {
    mouse.style.top = e.pageY + 'px'
    mouse.style.left = e.pageX + 'px'
    mouse.style.display = 'block'


}

document.addEventListener('mouseout', () => {
    mouse.style.display = 'none'
})

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouse.classList.add('link-grow')
        link.classList.add('hovered-link')
    })

    link.addEventListener('mouseleave', () => {
        mouse.classList.remove('link-grow')
        link.classList.remove('hovered-link')
    })

})

logo.addEventListener('mouseover', () => {
    mouse.classList.add('link-grow')
    logo.classList.add('hovered-link')
})

logo.addEventListener('mouseleave', () => {
    mouse.classList.remove('link-grow')
    logo.classList.remove('hovered-link')
})



btn.addEventListener('click', () => {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide')
        video.pause()

    } else {
        btn.classList.remove('slide')
        video.play()
    }
})

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset
    const navHeight = nav.getBoundingClientRect().height

    if (scrollHeight > navHeight) {
        nav.classList.add('fixed-nav')
    } else {
        nav.classList.remove('fixed-nav')
    }
})


// new hoverEffect({
//     parent: document.querySelector('.distort'),
//     intensity: 0.2,
//     image1: './img/header1.JPG',
//     image2: './img/header2.JPG',
//     angle: Math.PI / 8,
//     displacementImage: './img/heightMap.png'

// })




// ====================================================================================TIME================================================================================================
function updateTime() {
    var dateInfo = new Date();

    /* time*/
    var hr,
        _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
        sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
        ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

    // replace 0 with 12 at midnight, subject 12 form hour if 13-23

    if (dateInfo.getHours() == 0) {
        hr = 12;
    } else if (dateInfo.getHours() > 12) {
        hr = dateInfo.getHours() - 12;
    } else {
        hr = dateInfo.getHours();
    }


    // current time
    var currentTime = hr + ":" + _min + ":" + sec;

    // print time
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;
    document.getElementsByClassName("ampm")[0].innerHTML = ampm;


    /* date */
    var dow = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"


    ],

        month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        day = dateInfo.getDate();

    //store date
    //  var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;

    // document.getElementsByClassName("date")[0].innerHTML = currentDate; -->


};
// print time and date once, then update them every second
updateTime();
setInterval(function () {
    updateTime()
}, 1000);


const loader = document.getElementById('preloader')

window.addEventListener('load', () => {
    loader.style.display = 'none'
})

const time = ['1', '2', '3', '4', '5' ]
let TimeOut = ['5', '6', '', '4', '5' ]

