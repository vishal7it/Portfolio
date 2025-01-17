const pages = document.querySelectorAll('.page');
let currentPageIndex = 0;

const showPage = (index) => {
    pages.forEach((page, i) => {
        if (i === index) {
            page.classList.add('visible');
        } else {
            page.classList.remove('visible');
        }
    });
};

showPage(currentPageIndex);

document.querySelectorAll('#next').forEach(button => {
    button.addEventListener('click', () => {
        currentPageIndex = (currentPageIndex + 1) % pages.length;
        showPage(currentPageIndex);
    });
});

document.querySelectorAll('#prev').forEach(button => {
    button.addEventListener('click', () => {
        currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
        showPage(currentPageIndex);
    });
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});