const mainContent = document.getElementById('main-content');
const homeLink = document.getElementById('home-link')
const aboutLink = document.getElementById('about-link');
const aboutContent = document.getElementById('about');
const contactLink = document.getElementById('contact-link');

// Menampilkan halaman utama
homeLink.addEventListener('click', function() {
  mainContent.classList.remove('d-none');
  aboutContent.classList.add('d-none');
});

// Menampilkan halaman about
aboutLink.addEventListener('click', function() {
  mainContent.classList.add('d-none')
  aboutContent.classList.remove('d-none');
});

contactLink.addEventListener('click', () => {
  // Menampilkan bagian Contact
  document.getElementById('contact').classList.add('show');
  // Menyembunyikan bagian Home dan About Me
  document.getElementById('home').classList.remove('show');
  document.getElementById('about').classList.remove('show');
});