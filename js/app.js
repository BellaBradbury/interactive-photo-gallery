// ---------- RUN GALLERY PLUGIN ---------- //
baguetteBox.run('.gallery');


// ---------- BUTTON LIMIT FUNCTIONALITY ---------- //
const galleryCot = document.getElementsByClassName('gallery')[0];
const modalOverlay = document.getElementById('baguetteBox-overlay');
const photoModal = document.getElementById('baguetteBox-slider');
const modalBtns = Array.from( modalOverlay.getElementsByTagName('button') );

const backBtn = document.getElementById('previous-button');
const nextBtn = document.getElementById('next-button');

function hideNav() {
    let modalCheck = photoModal.style.transform;
    console.log(modalCheck);

    if (modalCheck === 'translate3d(0%, 0px, 0px)') {
        backBtn.style.display = 'none';
    } else if (modalCheck === 'translate3d(-1100%, 0px, 0px)') {
        nextBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'inline-block';
        nextBtn.style.display = 'inline-block';
    }
}

galleryCot.addEventListener('click', hideNav);
galleryCot.addEventListener('keyup', (e)=> {
    if (e.key === 'Enter') {
        hideNav();
    }
});

modalBtns.forEach(btn => {
    btn.addEventListener('click', hideNav);
    btn.addEventListener('keyup', (e)=> {
        if (e.key === 'Enter') {
            hideNav();
        }
    });
});

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
