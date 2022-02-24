// paralax effect

let daun = document.querySelector(".daun-1");
let tulisan = document.querySelector(".tulisan");
let saya = document.querySelector(".pilips");

window.addEventListener("scroll", function () {
  let y = window.scrollY;
  console.log(y);
  daun.style.left = y * 0.9 + "px";
  daun.style.top = y * 0.9 + "px";
  saya.style.top = y * 0.7 + "px";
  tulisan.style.top = y * 1 + "px";

  // maap masi berantakan wajar pemula,navbar window scroll
  if (y <= 200) {
    list[0].classList.add("active");
  }

  if (y >= 600) {
    list[1].classList.add("active");
  }
  if (y >= 1800) {
    list[2].classList.add("active");
  }
  if(y >= 3600){
    list[3].classList.add("active")
  }

  //  home
  if (y >= 600) {
    y >= 200
      ? list[0].classList.remove("active")
      : list[0].classList.remove("active");
  }

  if (y >= 600) {
    y >= 200
      ? list[0].classList.remove("active1")
      : list[0].classList.remove("active1");
  }
  //    about
  if (y >= 1700) {
    list[1].classList.remove("active");
  }
  if (y <= 600) {
    list[1].classList.remove("active");
  }
  if (y <= 900) {
    list[1].classList.remove("active1");
  }

  //    project
  if (y <= 1600) {
    list[2].classList.remove("active");
  }
  if (y >= 3200) {
    list[2].classList.remove("active");
  }
  if (y >= 1600) {
    list[1].classList.remove("active");
  }
  if (y <= 800) {
    list[2].classList.remove("active1");
  }

  // contact
  if (y <= 3600) {
    list[3].classList.remove("active1");
  }
  if (y >= 3200) {
    list[2].classList.remove("active1");
  }
  if (y <= 3600) {
    list[3].classList.remove("active");
  }
});

// nav-bar toogle active
const list = document.querySelectorAll(".nav-link");
const link = document.querySelector(".navbar-nav");
link.addEventListener("click", function (e) {
  if ((e.target.className = "nav-link")) {
    e.target.classList.remove("active");
    list.forEach((e) => {
      if (e.classList.contains("active1")) {
        e.classList.remove("active1");
      }
    });
  }
  e.target.classList.add("active1");
});

// card
const card = document.querySelectorAll('.card')
const content = document.querySelectorAll('.content')
card.forEach((e) => {
  e.addEventListener('click',function(){
    e.classList.toggle('anim');
})
})
  
  card[0].addEventListener('click',function(){
    content[0].classList.toggle('contol')
  })
  card[1].addEventListener('click',function(){
    content[1].classList.toggle('contol')
  })
  card[2].addEventListener('click',function(){
    content[2].classList.toggle('contol')
  })

  // lightnight mode

  const toogle = document.querySelector('.toggle');
  
  toogle.addEventListener('click',function (){
    const dark = 'bg-dark'
    const light = 'bg-light'
    const tdark = 'text-dark'
    const tlight = 'text-light'
    
    const sun = document.querySelector('.sun')

    sun.classList.toggle('bi-brightness-high')
    sun.classList.toggle('bi-moon-stars')
    toogle.classList.toggle(light)
    toogle.classList.toggle(dark)
    sun.classList.toggle(tdark)
    sun.classList.toggle(tlight)

    //body
    document.body.classList.toggle(tlight)
    document.body.classList.toggle(tdark)
    // navbar
    const nav = document.querySelector('.navbar');
    const name = document.querySelector('.pilip')

    nav.classList.toggle(dark)
    nav.classList.toggle(light)
    nav.classList.toggle('navbar-dark')
    nav.classList.toggle('navbar-light')
    name.classList.toggle(tlight)
    name.classList.toggle(tdark)
  // paralax 
    const bgbelakang = document.querySelector('.paralax')

    bgbelakang.classList.toggle(dark)
    bgbelakang.classList.toggle(light)
    tulisan.classList.toggle(tlight)
    tulisan.classList.toggle(tdark)
    // contact
   const contact = document.querySelector('#contact');
   contact.classList.toggle(dark)
   contact.classList.toggle(light)
   
  //  footer 
  const footer = document.querySelector('.f');
  footer.classList.toggle('bgdark')
  footer.classList.toggle(dark)
  // card
   for(let i =0; i < card.length; i++){

     card[i].classList.toggle(dark);
   }
  })