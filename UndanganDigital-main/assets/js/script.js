// URL PARAMETERIZATION
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const guestName = params.get("to");
    const nameElement = document.getElementById("nameTerUndang");

    if (nameElement) {
        nameElement.textContent = guestName ? decodeURIComponent(guestName) : "Nama Tujuan";
    }
};

// Audio controls
const playAudio = document.getElementById('playAudio');
const audio = document.getElementById('audioSrc');

if (playAudio && audio) {
    playAudio.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playAudio.innerHTML = '<i class="fa-regular fa-circle-pause"></i>';
        } else {
            audio.pause();
            playAudio.innerHTML = '<i class="fa-regular fa-circle-play"></i>';
        }
    });
}

// Close modal
const modal = document.getElementById('modalContainer');
const buttonClose = document.getElementById('buttonCloseModal');
const main = document.getElementById('mainContent');
const footer = document.getElementById('footerMenu');

function toggleDisplay() {
    if (modal && main && footer) {
        setTimeout(() => {
            modal.style.display = "none";
            main.style.display = "flex";
            footer.style.display = "flex";
            audio.play();
        }, 200);
    }
}

if (buttonClose) {
    buttonClose.addEventListener('click', toggleDisplay);
}

// Countdown timer
const countDownDate = new Date("Jan 10, 2025 10:00:00").getTime();
setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance >= 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countDays").innerHTML = days;
        document.getElementById("countHours").innerHTML = hours;
        document.getElementById("countMinute").innerHTML = minutes;
        document.getElementById("countSecond").innerHTML = seconds;
    }
}, 1000);

// Image gallery
document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'assets/images/IMG-20241017-WA0000.jpg',
        'assets/images/IMG-20241017-WA0001.jpg',
        'assets/images/IMG-20241017-WA0004.jpg',
        'assets/images/IMG-20241017-WA0005.jpg',
        'assets/images/IMG-20241017-WA0007.jpg',
        'assets/images/IMG-20241017-WA0008.jpg'
    ];

    let currentIndex = 0;
    const imgElement = document.getElementById('highlight-img');
    let autoChangeInterval;
    let resetTimer;

    function changeImageAutomatically() {
        if (imgElement) {
            imgElement.src = images[currentIndex];
            currentIndex = (currentIndex + 1) % images.length;
        }
    }

    function startAutoChange() {
        autoChangeInterval = setInterval(changeImageAutomatically, 3000);
    }

    function stopAutoChange() {
        clearInterval(autoChangeInterval);
    }

    function changeImageWithTransition(newSrc) {
        stopAutoChange();

        if (resetTimer) clearTimeout(resetTimer);
        resetTimer = setTimeout(startAutoChange, 10000);

        if (imgElement) {
            imgElement.style.opacity = 0;
            imgElement.style.transform = 'scale(0.95)';

            setTimeout(() => {
                imgElement.src = newSrc;
                imgElement.style.opacity = 1;
                imgElement.style.transform = 'scale(1)';
            }, 500);
        }
    }

    const galleryItems = document.querySelectorAll('.galery-item img');
    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            changeImageWithTransition(item.src);
        });
    });

    startAutoChange();
});

// Pop-up visibility animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.6 });

document.querySelectorAll('.pop-up').forEach(element => {
    observer.observe(element);
});

// Modal for "No Rekening"
const tampilRek = document.getElementById("noRekening");
const modalRek = document.getElementById("modalGift");

function clickRek() {
    if (modalRek) {
        modalRek.style.display = "flex";
    }
}

function clickOutside(event) {
    if (event.target === modalRek) {
        modalRek.style.display = "none";
    }
}

if (tampilRek) {
    tampilRek.addEventListener("click", clickRek);
}

if (modalRek) {
    modalRek.addEventListener("click", clickOutside);
}
