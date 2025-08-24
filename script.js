// Currently no complex JavaScript needed;
// Add some simple interactive animations if you want in future.

// This script is left minimal to keep portfolio light and fast.

// For example, you could add scroll animations or dark mode toggle here.

// Example: animate skill badges on page load
window.addEventListener('load', () => {
  const skillItems = document.querySelectorAll('#skills li');
  skillItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    setTimeout(() => {
      item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 150);
  });
});
