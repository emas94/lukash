const possitionFixef = () => {
  const divTop = document.querySelector('.topDiv').clientHeight;
  const scrollSize = window.scrollY;
  const nav = document.querySelector('nav');
  if (scrollSize > divTop) {
    nav.classList.add("sticky");

  } else {
    nav.classList.remove("sticky");
  }
}
window.addEventListener('scroll', possitionFixef);




const scrollToSection = () => {
  btnHome = document.querySelector('nav  ul .home');
  btnServices = document.querySelector('nav  ul .services');
  btnPrice = document.querySelector('nav  ul .price');
  btnAbout = document.querySelector('nav  ul .about');
  btnContact = document.querySelector('nav  ul .contact');
  home1 = document.querySelector('.home1');
  homeSize = document.querySelector('div.home').offsetTop;
  servicesSize = document.querySelector('div.services').offsetTop;
  priceSize = document.querySelector('div.price').offsetTop;
  aboutSize = document.querySelector('div.about').offsetTop;
  contactSize = document.querySelector('div.contact').offsetTop;


  btnHome.addEventListener('click', () => {
    window.scrollTo(0, 0);
    //add

  })
  btnServices.addEventListener('click', function () {
    window.scrollTo(0, servicesSize);

  })
  btnPrice.addEventListener('click', function () {
    window.scrollTo(0, priceSize);

  })
  btnAbout.addEventListener('click', function () {
    window.scrollTo(0, aboutSize);

  })
  btnContact.addEventListener('click', function () {
    window.scrollTo(0, contactSize);

  })
}
scrollToSection();
window.addEventListener('scroll', scrollToSection);

const sectionArea = () => {
  home = document.querySelector('div.home').clientHeight;
  services = document.querySelector('div.services').clientHeight;
  price = document.querySelector('div.price').clientHeight;
  about = document.querySelector('div.about').clientHeight;
  contact = document.querySelector('div.contact').clientHeight;
  btnHome = document.querySelector('nav  ul .home');
  btnServices = document.querySelector('nav  ul .services');
  btnPrice = document.querySelector('nav  ul .price');
  btnAbout = document.querySelector('nav  ul .about');
  btnContact = document.querySelector('nav  ul .contact');
  const spaceBetweemSecondAndFirst = document.querySelector('div.services').offsetTop;
  const spaceBetweemSecondAndSecond = document.querySelector('div.price').offsetTop;
  const spaceBetweemSecondAndThird = document.querySelector('div.about').offsetTop;
  const spaceBetweemSecondAndFourth = document.querySelector('div.contact').offsetTop;
  const scrollSize = window.scrollY;
  if (scrollSize < home) {
    //add
    btnHome.classList.add('active');
    //remove
    btnServices.classList.remove('active');
    btnPrice.classList.remove('active');
    btnAbout.classList.remove('active');
    btnContact.classList.remove('active');

  } else if (scrollSize < services + spaceBetweemSecondAndFirst) {
    //add
    btnServices.classList.add('active');
    //remove
    btnHome.classList.remove('active');
    btnPrice.classList.remove('active');
    btnAbout.classList.remove('active');
    btnContact.classList.remove('active');

  } else if (scrollSize < price + spaceBetweemSecondAndSecond) {
    //add
    btnPrice.classList.add('active');
    //remove
    btnHome.classList.remove('active');
    btnServices.classList.remove('active');
    btnAbout.classList.remove('active');
    btnContact.classList.remove('active');
  } else if (scrollSize < about + spaceBetweemSecondAndThird) {
    //add
    btnAbout.classList.add('active');
    //remove
    btnHome.classList.remove('active');
    btnServices.classList.remove('active');
    btnPrice.classList.remove('active');
    btnContact.classList.remove('active');
  } else {

    //add
    btnContact.classList.add('active');
    //remove
    btnHome.classList.remove('active');
    btnServices.classList.remove('active');
    btnPrice.classList.remove('active');
    btnAbout.classList.remove('active');
  }
}
sectionArea();
window.addEventListener('scroll', sectionArea);

const sizeOfH = () => {
  const divH = document.querySelectorAll('div.h1');
  const nav = document.querySelector('nav').clientHeight;
  divH.forEach((h) => {
    h.style.paddingTop = nav + 10 + "px";

  })

}
sizeOfH();

const spanYear = document.querySelector('.footer span');
const year = new Date().getFullYear();

const addYear = () => {
  spanYear.textContent = year;
}
addYear();


const btnOffert = () => {
  const btn = document.querySelectorAll('.price button');
  btn.forEach((b) => {
    b.addEventListener('click', () => {
      window.scrollTo(0, servicesSize);

    })
  })
}
btnOffert();