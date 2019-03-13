const container = document.querySelector('.container');
const imageBig = document.querySelector('.image-gallery__image-big');
const thumbnails = document.querySelectorAll('.image-gallery__thumbnail-items');

container.addEventListener('click', function(e) {
    // checking the clicked is thumbnail-items
    if(e.target.className == 'image-gallery__thumbnail-items') {
        imageBig.src = e.target.children[0].src;
        imageBig.classList.add('image-gallery__image-fade');

        setTimeout(function() {
            imageBig.classList.remove('image-gallery__image-fade');
        }, 500);

        thumbnails.forEach(function(thumb) {
            if(thumb.classList.contains('image-gallery__image-opacity-active')) {
                thumb.classList.remove('image-gallery__image-opacity-active');
            }
        });
        e.target.classList.add('image-gallery__image-opacity-active');
    }
});