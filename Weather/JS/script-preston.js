const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
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
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();

const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

document.getElementById("currentdate").textContent = fulldate;

const date2 = document.querySelector('#currentdate2');

if (dayName == "Friday") {
	var banner = document.createElement("div");
	banner.className = "b";
	banner.innerHTML = "Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";

	document.body.insertBefore(banner,document.body.childNodes[0]).style.fontSize = "x-large";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.textAlign = "center";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.padding = "20px 20px 20px 20px";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.backgroundColor = "#f5cf87";
}

let imagesToLoad = document.querySelectorAll('img[data-srcset]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-srcset'));
  image.onload = () => {
    image.removeAttribute('data-srcset');
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
	
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } 

  else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
