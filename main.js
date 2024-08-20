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
    title: 'False Bottom Wagons',
    content: 'Sometimes when conductors were moving runaways from South to North, they used wagons that had "false bottoms" built into the floors of those wagons, where the runaways could hide. The wagons appeared to be loaded with cargo of some sort, but under the floor were spaces where people could hide. There is a wagon like this on display at the Mendenhall Homeplace in Jamestown, NC.',
    image: 'images/false-bottom-wagon.png'
  },
  {
    title: 'Benjamin Benson',
    content: 'In 1817 there was a lengthy legal case in the Guilford County Supreme Court in which a black man named Benjamin Benson was kidnapped in Delaware and sold in Guilford County to a slaveholder. The court decided in his favor eventually, but the backlash from slaveholders sparked the idea of an organized method of helping enslaved people to escape to freedom. Quakers in the New Garden community and other anti-slavery neighbors partnered with local African Americans, both enslaved and free, to provide a significant base of support for fugitives escaping from slavery. Author Fergus Bordewich calls it our "country\'s first racially integrated civil rights movement."(From Bound for Canaan by Fergus Bordewich, 2005)',
    image: 'images/benson-image.png'
  },
  {
    title: 'Levi Coffin Learning About The Lives Of The Enslaved',
    content: '"Runaway slaves used frequently to conceal themselves in the woods and thickets in the vicinity of New Garden, waiting opportunities to make their escape to the North, and I generally learned their places of concealment and rendered them all the service in my power." He fed them scraps of bacon and cornbread meant for hogs, and "many a time I sat in the thickets with them as they hungrily devoured my bounty, and listened to the stories they told of hard masters and cruel treatment. . ." (From Reminiscences by Levi Coffin, 1880)',
    image: 'images/levi-coffin.png'
  },
  {
    title: 'First Passenger On The Underground Railroad - John Dimery in 1819',
    content: 'During the time of the Benjamin Benson trial in Guilford County there was "a free black man named John Dimery [who] became the first known fugitive to be spirited away from Guilford County to the free states." He had been freed by his master elsewhere in North Carolina, and come to live with his wife in New Garden. In 1819 the old master died and his sons came to New Garden to collect Dimery in the night. Dimery enlisted his daughter to "run for \'Mr. Coffin.\' " Vestal and his friend Isaac White caught up with and detained the kidnappers while "the woman of the house" quietly untied Dimery, who "disappeared into the woods." Addison Coffin reports that Dimery "was started on the Underground Railroad that night and soon landed at Richmond, Indiana."( From Life and Travels by Addison Coffin, 1897)',
    image: 'images/dimery-escape.png'
  },
  {
    title: 'Arch & Vina Curry: A New Garden Boarding School Connection',
    content: 'An inspiring story of an African American\'s highly significant contribution to the cause is that of Arch and his wife Vina Curry. Arch was a free black man and was required by law to carry manumission papers, or other proof of being free. Vina was a washerwoman at New Garden Boarding School. When Arch died, his papers stayed with Vina. "She decided to loan these to male slaves bearing some resemblance to her late husband, so they could travel north safely. . ." Levi Coffin, through a courier, returned them to Vina when the slave was safe. "No one knows how many slaves won freedom on Arch Curry\'s papers."(From By Land and By Sea, by Hiram Hilty, 1993)',
    image: 'images/curry-couple.png'
  },
  {
    title: 'How The Underground Railroad Worked',
    content: 'Many escaping on the URR followed the North star on clear nights. Nails in trees (probably driven in by Coffins), etc. helped mark the routes. Levi claimed he walked to Richmond, IN (500 miles each way) 3 times. (From By Land and By Sea, by Hiram Hilty, 1993) In 1826 Levi moved to IN and helped runaways on that end of the "railroad." He and his wife Catharine had a house there that you can visit now and see places where the runaways might have hid.',
    image: 'images/underground-railroad.png'
  },
  {
    title: 'Marking The Underground Railroad',
    content: 'From the starting point in NC to the great turnpike in VA the URR was built, constructed, or marked, as we may call it, by driving nails in trees, fences, and stumps. Where there was a fork in the road there was a nail driven in a tree three and half feet from the ground half way round from front to back, if the right hand road was to be taken the nail was driven on the right hand side, if the left was the road the nail was to the left. If there were fences and no tree, the nail was driven in the middle of the second rail from the top, over on the inside of the fence, to the right, or left as in the trees, if neither tree, nor fence was near then a stake, or a stone was so set as to be unseen by day, but found at night." He then described how the slaves would find the nails or stones in the dark.',
    image: 'images/secret-markings.png'
  }
];

let currentIndex = 0;

function scrollActiveToMiddle() {
  const container = document.getElementById('carousel-descriptions');
  const activeTab = container.querySelector('.active-section');
  
  if (container && activeTab) {
    const containerHeight = container.offsetHeight;
    const tabHeight = activeTab.offsetHeight;
    const tabTop = activeTab.offsetTop;
    
    const middlePosition = tabTop - (containerHeight / 2) + (tabHeight / 2);
    
    container.scrollTo({
      top: middlePosition,
      behavior: 'smooth'
    });
  }
}

function populateCarouselDescriptions() {
  const container = document.getElementById('carousel-descriptions');
  
  // Clear existing content
  container.innerHTML = '';
  
  // Create new content based on carouselData
  carouselData.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'descriptions-wrapper' + (index === currentIndex ? ' active-section' : ' inactive-section');
    
    div.innerHTML = `
      <div>
        <h3 class="light">${item.title}</h3>
        <p class="light">${item.content.substring(0, 100)}...</p>
      </div>
    `;
    
    // Add click event listener
    div.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
    
    container.appendChild(div);
  });
}

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

  scrollActiveToMiddle();

  console.log('Carousel updated to index:', currentIndex);
}

function initCarousel() {
  console.log('Initializing carousel');
  const leftBtn = document.querySelector('#carousel-controls .btn#left');
  const rightBtn = document.querySelector('#carousel-controls .btn#right');

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

  // Populate carousel descriptions
  populateCarouselDescriptions();

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

// #region For Testing 

let isOutlined = false;

// Function to convert OKLab to RGB
function oklabToRgb(okl, oka, okb) {
    // Convert OKLab to linear sRGB
    const l = okl + 0.3963377774 * oka + 0.2158037573 * okb;
    const m = okl - 0.1055613458 * oka - 0.0638541728 * okb;
    const s = okl - 0.0894841775 * oka - 1.2914855480 * okb;

    const l_ = l ** 3;
    const m_ = m ** 3;
    const s_ = s ** 3;

    const r = 4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_;
    const g = -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_;
    const b = -0.0041960863 * l_ - 0.7034186147 * m_ + 1.7076147010 * s_;

    // Convert linear sRGB to sRGB
    const toSrgb = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);

    return `rgb(${Math.round(toSrgb(r) * 255)}, ${Math.round(toSrgb(g) * 255)}, ${Math.round(toSrgb(b) * 255)})`;
}

// Function to generate a rainbow color for a given depth
function getRainbowColor(depth) {
    const hues = [0, 30, 60, 120, 240, 275, 300]; // Approximate hues for red, orange, yellow, green, blue, indigo, violet
    const hue = hues[depth % hues.length];
    const l = 0.8; // Lightness
    const a = Math.cos((hue * Math.PI) / 180) * 0.3;
    const b = Math.sin((hue * Math.PI) / 180) * 0.3;
    return oklabToRgb(l, a, b);
}

// Function to apply outline color based on hierarchy depth
function applyOutline(element, depth = 0) {
    element.style.outline = isOutlined ? `2px solid ${getRainbowColor(depth)}` : 'none';
    Array.from(element.children).forEach(child => applyOutline(child, depth + 1));
}

document.addEventListener('keydown', function(event) {
    
    // Toggle the outline state
    isOutlined = !isOutlined;

    // Select all elements and toggle the outline style
    applyOutline(document.body);

});

// #endregion

document.addEventListener('DOMContentLoaded', () => {
  // Initial order assignment
  assignOrders();

  // Add click event listeners to all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.addEventListener('click', (e) => {
      // Remove active class from all sections
      sections.forEach(s => s.classList.remove('active-section'));
      
      // Add active class to clicked section
      e.currentTarget.classList.add('active-section');
      
      // Reassign orders
      assignOrders();
    });
  });
});

function assignOrders() {
  const container = document.querySelector('.section-container');
  const activeSection = container.querySelector('.active-section');
  if (!activeSection) return;

  // Remove the order-1 class from all sections
  container.querySelectorAll('section').forEach(section => {
    section.classList.remove('order-1');
  });

  let order = 1;
  activeSection.style.order = order;
  activeSection.classList.add('order-1');  // Add class to active section

  // Assign orders to previous siblings
  let prevSibling = activeSection.previousElementSibling;
  while (prevSibling) {
    prevSibling.style.order = --order;
    prevSibling = prevSibling.previousElementSibling;
  }

  // Reset order for next siblings
  order = 1;
  let nextSibling = activeSection.nextElementSibling;
  while (nextSibling) {
    nextSibling.style.order = ++order;
    nextSibling = nextSibling.nextElementSibling;
  }

  // In the assignOrders function:
if (order === 1 && section !== activeSection) {
  section.classList.add('order-1-hidden');
} else {
  section.classList.remove('order-1-hidden');
}
}

