let index = 1;
const total = 13;

function showContent(idx) {
    document.querySelectorAll('.content').forEach((el, i) => {
        el.classList.toggle('active', i === idx - 1);
    });
}

document.getElementById('prev').addEventListener('click', function () {
    if (index > 1) {
        index--;
        showContent(index);
    }
});

document.getElementById('next').addEventListener('click', function () {
    if (index < total) {
        index++;
        showContent(index);
    }
});

showContent(index);
