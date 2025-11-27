const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Sacramento California",
    location: "Sacramento, California",
    dedicated: "2006, September, 3",
    area: 19500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sacramento-california/400x250/sacramento-temple-769989-wallpaper.jpg"
  },
  {
    templeName: "Oakland California",
    location: "Oakland, California",
    dedicated: "1964, November, 17",
    area: 95000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/400x250/01-Oakland-Temple-Exterior-2236889.jpg"
  },
  {
    templeName: "Detroit Michigan",
    location: "Detroit, Michigan",
    dedicated: "1999, October, 23",
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/detroit-michigan/400x250/detroit-temple-766397-wallpaper.jpg"
  },
];

// Navigation Logic
const hamButton = document.querySelector("#menu");
const navItems = document.querySelector("nav ul");
const title = document.querySelector("h1");
const navContainer = document.querySelector(".nav-container");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle('show');
    navItems.classList.toggle('show');
    title.classList.toggle('show');
    navContainer.classList.toggle('show');
});

// Remove the .show when screen larger than mobile width
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        hamButton.classList.remove('show');
        navItems.classList.remove('show');
        title.classList.remove('show');
        navContainer.classList.remove('show');
    }
});

const imageContainer = document.querySelector(".container");
const homeTemplesLink = document.querySelector("#home");
const oldTemplesLink = document.querySelector("#old");
const newTemplesLink = document.querySelector("#new");
const largeTemplesLink = document.querySelector("#large");
const smallTemplesLink = document.querySelector("#small");

createTempleCard(temples);

homeTemplesLink.addEventListener("click", () => {  
  createTempleCard(temples);
});
oldTemplesLink.addEventListener("click", () => {  
  createTempleCard(temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) < 1900));
});
newTemplesLink.addEventListener("click", () => {  
  createTempleCard(temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) > 2000));
});
largeTemplesLink.addEventListener("click", () => {  
  createTempleCard(temples.filter((temple) => temple.area > 90000));
});
smallTemplesLink.addEventListener("click", () => {  
  createTempleCard(temples.filter((temple) => temple.area < 10000));
});

function createTempleCard(temples) {
  // Image dynamic image loading
document.querySelector(".container").innerHTML = "";
const figuresHTML = temples.map((temple) => `
<figure>
  <figcaption>${temple.templeName}</figcaption>
  <ul>
    <li><span>Location: </span>${temple.location}</li>
    <li><span>Dedicated: </span>${temple.dedicated}</li>
    <li><span>Size: </span>${temple.area}</li>
  </ul>  
  <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
    
</figure>
`).join('');

imageContainer.innerHTML = figuresHTML;
}


// Footer Logic
const today = new Date();
document.getElementById("currentYear").innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").innerHTML = "Last modification: " + document.lastModified;

