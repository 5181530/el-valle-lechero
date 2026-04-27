// ========== SCRIPT ==========
// DOM ready
document.addEventListener('DOMContentLoaded', function() {
  init();
});

function init() {
  // Set current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Initialize components
  initMobileNav();
  initProducts();
  initGallery();
  initNews();
  initForm();
  initScrollReveal();
  initSectionControls();
  initFilters();
}

// ========== MOBILE NAVIGATION ==========
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');

  toggle.addEventListener('click', function() {
    const isOpen = mobile.style.display === 'flex';
    mobile.style.display = isOpen ? 'none' : 'flex';
    toggle.setAttribute('aria-expanded', !isOpen);
  });

  // Close mobile nav when clicking a link
  mobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobile.style.display = 'none';
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ========== PRODUCTS ==========
function initProducts() {
  const container = document.getElementById('products');
  const filters = document.querySelectorAll('.filter');

  if (!container || filters.length === 0) {
    return;
  }

  function renderProducts(filter = 'todos') {
    const filtered = filter === 'todos' ? products : products.filter(p => p.category === filter);

    container.innerHTML = filtered.map(product => `
      <article class="product reveal">
        <div class="product__media">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="product__body">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="product__price">
            <span class="display">$${product.price}</span>
            <span class="overline">por ${product.unit}</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  renderProducts();

  filters.forEach(filter => {
    filter.addEventListener('click', function() {
      filters.forEach(f => f.classList.remove('is-active'));
      this.classList.add('is-active');
      renderProducts(this.dataset.filter);
    });
  });
}

// ========== GALLERY ==========
function initGallery() {
  const container = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');

  if (!container || !lightbox || !lbImage || !lbCaption || !lbClose || !lbPrev || !lbNext) {
    return;
  }

  let currentIndex = 0;

  container.innerHTML = gallery.map((item, index) => `
    <img src="${item.src}" alt="${item.alt}" data-index="${index}" />
  `).join('');

  container.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
      currentIndex = parseInt(e.target.dataset.index);
      showLightbox(currentIndex);
    }
  });

  function showLightbox(index) {
    const item = gallery[index];
    lbImage.src = item.src;
    lbImage.alt = item.alt;
    lbCaption.textContent = item.caption;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function hideLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  lbClose.addEventListener('click', hideLightbox);

  lbPrev.addEventListener('click', function() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : gallery.length - 1;
    showLightbox(currentIndex);
  });

  lbNext.addEventListener('click', function() {
    currentIndex = currentIndex < gallery.length - 1 ? currentIndex + 1 : 0;
    showLightbox(currentIndex);
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.getAttribute('aria-hidden') === 'false') {
      hideLightbox();
    }
  });
}

// ========== NEWS ==========
function initNews() {
  const container = document.getElementById('news');

  if (!container) {
    return;
  }

  container.innerHTML = news.map(item => `
    <article class="news-item reveal">
      <div class="news-item__media">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <div class="news-item__body">
        <time class="overline" datetime="${item.date}">${formatDate(item.date)}</time>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <a href="#" class="btn btn--ghost">Leer más →</a>
      </div>
    </article>
  `).join('');
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// ========== FORM ==========
function initForm() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');
  const errorMsg = document.getElementById('formError');

  if (!form || !successMsg || !errorMsg) {
    return;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';

    const formData = new FormData(form);
    let isValid = true;
    let errors = [];

    if (!formData.get('nombre').trim()) {
      errors.push('Nombre es requerido');
      isValid = false;
    }

    if (!formData.get('email').trim()) {
      errors.push('Correo es requerido');
      isValid = false;
    }

    if (!formData.get('asunto').trim()) {
      errors.push('Asunto es requerido');
      isValid = false;
    }

    if (!formData.get('mensaje').trim()) {
      errors.push('Mensaje es requerido');
      isValid = false;
    }

    if (!isValid) {
      errorMsg.textContent = errors.join('. ');
      errorMsg.style.display = 'block';
      return;
    }

    setTimeout(() => {
      successMsg.style.display = 'block';
      form.reset();
    }, 1000);
  });
}

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  function reveal() {
    reveals.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('revealed');
      }
    });
  }

  window.addEventListener('scroll', reveal);
  reveal(); // Initial check
}

// ========== SECTION CONTROLS ==========
function initSectionControls() {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const prevButton = document.getElementById('prevSection');
  const nextButton = document.getElementById('nextSection');
  const label = document.getElementById('sectionLabel');

  if (!prevButton || !nextButton || !label || sections.length === 0) {
    return;
  }

  let currentIndex = 0;

  function updateControls(index) {
    const section = sections[index];
    label.textContent = section.querySelector('h2')?.textContent?.trim() || section.id;
    prevButton.disabled = index === 0;
    nextButton.disabled = index === sections.length - 1;
    currentIndex = index;
  }

  function scrollToSection(index) {
    const section = sections[index];
    if (!section) return;
    const offset = 90;
    const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
      scrollToSection(currentIndex - 1);
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentIndex < sections.length - 1) {
      scrollToSection(currentIndex + 1);
    }
  });

  function detectCurrentSection() {
    const scrollMiddle = window.scrollY + window.innerHeight / 3;
    const foundIndex = sections.findIndex(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      return scrollMiddle >= top && scrollMiddle < bottom;
    });
    updateControls(foundIndex === -1 ? 0 : foundIndex);
  }

  window.addEventListener('scroll', debounce(detectCurrentSection, 50));
  detectCurrentSection();
}

// ========== FILTERS ==========
function initFilters() {
  // Already handled in initProducts
}

// ========== UTILITIES ==========
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}