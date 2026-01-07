import { initNav } from './nav.js';

// Initialize Navigation globally
initNav();

// Existing logic for specific pages will be moved or checked here
// For now, we keep the file simple.
// Modal Logic for World Tour
document.addEventListener('DOMContentLoaded', () => {
    const pins = document.querySelectorAll('.map-pin');
    const modal = document.getElementById('city-modal');
    const closeModal = document.querySelector('.close-modal');
    const cityTitle = document.getElementById('modal-city-name');
    const modalMedia = document.querySelector('.modal-media');

    if (pins.length > 0 && modal) {
        pins.forEach(pin => {
            pin.addEventListener('click', () => {
                const city = pin.getAttribute('data-city');
                cityTitle.innerText = city;
                modalMedia.innerHTML = '<p>--- Camcorder Footage Loading... ---</p>';
                modal.classList.remove('hidden');
                // Small timeout to allow display:block to apply before opacity transition
                setTimeout(() => {
                    modal.classList.add('visible');
                }, 10);
            });
        });

        const closeModalFunc = () => {
            modal.classList.remove('visible');
            // Wait for transition to finish before hiding
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        };

        closeModal.addEventListener('click', closeModalFunc);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
    }
});
