const topbar = document.querySelector('.topbar');

let isDown = false;
let startX;
let scrollLeft;

topbar.addEventListener('mousedown', (e) => {
    isDown = true;
    topbar.classList.add('active'); // optional, for styling while dragging
    startX = e.pageX - topbar.offsetLeft;
    scrollLeft = topbar.scrollLeft;
});

topbar.addEventListener('mouseleave', () => {
    isDown = false;
    topbar.classList.remove('active');
});

topbar.addEventListener('mouseup', () => {
    isDown = false;
    topbar.classList.remove('active');
});

topbar.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - topbar.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast multiplier
    topbar.scrollLeft = scrollLeft - walk;
});