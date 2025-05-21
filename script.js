let scrollSpeed = 1;
let scrollInterval;

function startAutoScroll() {
    scrollInterval = setInterval(() => {
        window.scrollBy(0, scrollSpeed);


        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            clearInterval(scrollInterval);
        }
    }, 10);
}


function stopAutoScroll() {
    clearInterval(scrollInterval);
}