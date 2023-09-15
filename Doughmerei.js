// Reveal background Header
const navBar = document.querySelector("header")

window.addEventListener("scroll", function(){
    navBar.classList.toggle("sticky", window.scrollY >80);
})

// Filter Menu Products
const buttons = document.querySelectorAll('.buttons-menu button');
const images = document.querySelectorAll('.images-menu img')

for(let i=1; i < buttons.length; i++){
    buttons[i].addEventListener("click", filterImg);
}

function setActiveMenu(e){
    buttons.forEach(btn =>{
        btn.classList.remove('btn-clicked');
    });

    e.target.classList.add('btn-clicked');
}

function filterImg(e){

    setActiveMenu(e);

    images.forEach(img =>{
        img.classList.remove('img-shrink')
        img.classList.add('img-expand');

        const imageType = parseInt(img.dataset.img);
        const buttonType= parseInt(e.target.dataset.btn);

        if(imageType !== buttonType){
            img.classList.remove('img-expand');
            img.classList.add('img-shrink');
        }
    });
}

buttons[0].addEventListener('click', (e)=>{
    
    setActiveMenu(e);
    
    images.forEach(img =>{
        
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');
    });
});

// Change Active on Header
let pages = document.querySelectorAll('section')
let referencePages1 = document.querySelectorAll('header ul a')
window.onscroll = () =>{
    pages.forEach(divnav => {
        let topref = window.scrollY;
        let pagerefOffset = divnav.offsetTop - 150;
        let heightrefOffset = divnav.offsetHeight;
        let id = divnav.getAttribute('id');

        if(topref >= pagerefOffset && topref < pagerefOffset + heightrefOffset ){
            referencePages1.forEach(divpage => {
                divpage.classList.remove('active');
                console.log(divpage);
                document.querySelector('header ul a[href*='+ id +']').classList.add('active');
            });
        };
    });
};

// Reveal Function
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

// Hamburger Navigation Bar
let hamburgerIcon = document.querySelector('#nav-icon');
let navigationList = document.querySelector('.navBar');

hamburgerIcon.onclick = ()=>{
hamburgerIcon.classList.toggle('bx-x');
navigationList.classList.toggle('open');
};