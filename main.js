// Last Updated 
const lastUpdated = "2024-07-17"; // YYYY-MM-DD format

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('lastUpdated').textContent = lastUpdated;
});

// Visit button animation
const visitButton = document.getElementById('visit-button');
const arrowImg = visitButton.querySelector('img');
const defaultSrc = arrowImg.src;
const hoverSrc = 'images/visit-arrow-max.svg';

visitButton.addEventListener('mouseenter', () => {
  arrowImg.src = hoverSrc;
});

visitButton.addEventListener('mouseleave', () => {
  arrowImg.src = defaultSrc;
});


// Cards underline
document.addEventListener('DOMContentLoaded', function () {
  const plantCards = document.querySelectorAll('.plant-card');

  plantCards.forEach(card => {
    let isClicked = false;

    card.addEventListener('click', function () {
      this.classList.add('clicked');
      isClicked = true;
    });

    card.addEventListener('mouseleave', function () {
      this.classList.remove('clicked');
      isClicked = false;
    });

    card.addEventListener('mouseenter', function () {
      if (!isClicked) {
        this.classList.remove('clicked');
      }
    });
  });
});
// #region Carousel //

// Carousel data
const carouselData = [
  {
    title: "False Bottomed Wagons",
    content: `In 1817 there was a lengthy legal case in the Guilford County Supreme Court in which a black man named Benjamin Benson was kidnapped in Delaware and sold in Guilford County to a slaveholder. The court decided in his favor eventually, but the backlash from slaveholders sparked the idea of an organized method of helping enslaved people to escape to freedom.

Quakers in the New Garden community and other anti-slavery neighbors partnered with local African Americans, both enslaved and free, to provide a significant base of support for fugitives escaping from slavery. Author Fergus Bordewich calls it our "country's first racially integrated civil rights movement." (From Bound for Canaan by Fergus Bordewich, 2005)`,
    image: "images/false-bottom-wagon.png"
  },
  {
    title: "Benjamin Benson",
    content: "In 1817 there was a lengthy legal case in the Guilford County Supreme Court in which a black man named Benjamin Benson was kidnapped in Delaware and sold in Guilford County to a slaveholder. The court decided in his favor eventually, but the backlash from slaveholders sparked the idea of an organized method of helping enslaved people to escape to freedom. The journey of John Dimery of New Garden in 1819 is the earliest one clearly documented and tied to New Garden as a part of what we now know as the Underground Railroad. Local Quaker Vestal Coffin was a leader in this work and collaborated with his cousin, Levi, who much later gained the popular designation as “President of the Underground Railroad.” Members of the Coffin family who lived in the New Garden community were actively assisting fugitives (both enslaved and free blacks) to gain freedom. Quakers in the New Garden community and other anti-slavery neighbors partnered with local African Americans, both enslaved and free, to provide a significant base of support for fugitives escaping from slavery. Author Fergus Bordewich calls it our “country’s first racially integrated civil rights movement.” ",
    image: "images/benson-image.png"
  },
  {
    title: "Levi Coffin Learning About The Lives Of The Enslaved",
    content: " “Runaway slaves used frequently to conceal themselves in the woods and thickets in the vicinity of New Garden, waiting opportunities to make their escape to the North, and I generally learned their places of concealment and rendered them all the service in my power.” He fed them scraps of bacon and cornbread meant for hogs, and “many a time I sat in the thickets with them as they hungrily devoured my bounty, and listened to the stories they told of hard masters and cruel treatment. . .” (From Reminiscences by Levi Coffin, 1880)",
    image: "images/levi-coffin.png"
  }
];

let currentIndex = 0;

function updateCarousel() {
  const textContent = document.getElementById('carousel-text-content');
  const image = document.querySelector('#carousel-content img');
  const counter = document.querySelector('#carousel-controls p');
  const navSections = document.querySelectorAll('#carousel-descriptions > div');
  const progressBar = document.querySelector('#carousel-progress');

  if (!textContent || !image || !counter || navSections.length === 0 || !progressBar) {
    console.error('One or more carousel elements not found');
    return;
  }

  // Update main content
  textContent.innerHTML = `
    <h3 class="light">${carouselData[currentIndex].title}</h3>
    <p class="light">${carouselData[currentIndex].content}</p>
  `;
  image.src = carouselData[currentIndex].image;
  counter.textContent = `${currentIndex + 1}/${carouselData.length}`;

  // Update nav sections
  navSections.forEach((section, index) => {
    if (index === currentIndex) {
      section.classList.remove('inactive-section');
      section.classList.add('active-section');
    } else {
      section.classList.add('inactive-section');
      section.classList.remove('active-section');
    }
  });

  // Update progress bar
  const progress = ((currentIndex + 1) / carouselData.length) * 100;
  progressBar.style.width = `calc(1rem + ${progress}% - 1rem)`;

  console.log('Carousel updated to index:', currentIndex);
}

function initCarousel() {
  console.log('Initializing carousel');
  const leftBtn = document.querySelector('#carousel-controls .btn#left');
  const rightBtn = document.querySelector('#carousel-controls .btn#right');
  const navSections = document.querySelectorAll('#carousel-descriptions > div');

  if (!leftBtn || !rightBtn) {
    console.error('Carousel navigation buttons not found');
    return;
  }

  leftBtn.addEventListener('click', () => {
    console.log('Left button clicked');
    currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel();
  });

  rightBtn.addEventListener('click', () => {
    console.log('Right button clicked');
    currentIndex = (currentIndex + 1) % carouselData.length;
    updateCarousel();
  });

  // Add click event listeners to nav sections
  navSections.forEach((section, index) => {
    section.addEventListener('click', () => {
      console.log('Nav section clicked:', index);
      currentIndex = index;
      updateCarousel();
    });
  });

  // Initialize carousel
  updateCarousel();
}


// Wait for the DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', initCarousel);

//#endregion

// #region Hamburger Menu //

const hamburger = document.querySelector(".closed");
const menu = document.querySelectorAll("#links-quote-container");
const openMenuSrc = "images/menu-toggle-closed.svg"; 
const defaultMenuSrc = "images/menu-toggle.svg"; 
let menuOpen = true;
function toggleMenu() {
  menuOpen = !menuOpen;

  menu.forEach(element => {
    element.style.display = menuOpen ? "none" : "flex";
  });
  
  menu.forEach(element => {
    element.classList.toggle("open", menuOpen);
  });

  hamburger.src = menuOpen ? openMenuSrc : defaultMenuSrc;
}

function handleScreenSize(mediaQuery) {
  if (mediaQuery.matches) {
    // Screen width is 800px or less
    hamburger.addEventListener("click", toggleMenu);
    menu.forEach(element => {
      element.style.display = "none";
    });
  } else {
    // Screen width is more than 800px
    hamburger.removeEventListener("click", toggleMenu);
    menu.forEach(element => {
      element.style.display = "flex";
    });
  }
}

// Create a media query
const mediaQuery = window.matchMedia("(max-width: 800px)");

// Initial check
handleScreenSize(mediaQuery);

// Add listener for window resize
mediaQuery.addListener(handleScreenSize);
//#endregion