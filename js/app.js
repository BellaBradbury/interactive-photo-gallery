// ---------- RUN GALLERY PLUGIN ---------- //
baguetteBox.run('.gallery');


// ---------- SEARCH BAR FUNCTIONALITY ---------- //
const input = document.getElementById('search');
const empty = document.getElementById('no-results');

const galleryItems = document.getElementsByTagName('a');
let galleryArr = Array.from(galleryItems);

function searchGallery(arrFrom, value) {
    let counter = 0;

    for (const itm of arrFrom) {
        let caption = itm.dataset.caption.toLowerCase();

        if ( caption.includes(value) ) {
            itm.style.display = 'flex';
            counter ++;
        } else {
            itm.style.display = 'none';
        }
    }
    console.log(counter);
    if (counter === 0) {
        empty.style.display = 'block';
    } else {
        empty.style.display = 'none';
    }
}

input.addEventListener('keyup', e => {
    let value = input.value.toLowerCase();
    searchGallery(galleryArr, value);
});
