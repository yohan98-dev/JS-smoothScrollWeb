
// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
// linksContainer.classList.toggle('show-links');


//adding dynamic height to the nav bar    
const containerHeght= linksContainer.getBoundingClientRect().height; 
const linksHeight = links.getBoundingClientRect().height;

if(containerHeght === 0){
    linksContainer.style.height = `${linksHeight}px`;
}
else{
    linksContainer.style.height = 0;
}
});


const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// ********** fixed navbar ************
window,addEventListener('scroll', function(){
    const scrollHight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHight > navHeight){
        navBar.classList.add('fixed-nav');
    }
    else{
        navBar.classList.remove('fixed-nav');
    }

    if (scrollHight > 500){
        topLink.classList.add('show-link');
    }
    else{
        topLink.classList.remove('show-link');
    }
})
// ********** smooth scroll ************

// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault(); 
        //navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        //calculte higth
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeght = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');

        let position = element.offsetTop - navHeight;

        if (!fixedNav){
            position = position -navHeight;
        }
        if(navHeight > 82){
            position += containerHeght;
        }

        window.scrollTo({
            left: 0,
            top : position,
        });

        linksContainer.style.height = 0;
    });
});
