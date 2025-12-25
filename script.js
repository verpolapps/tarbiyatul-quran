        // Initialize Lucide Icons
        lucide.createIcons();

        // 1. Mobile Menu Toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function () {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });


        // 2. FAQ Accordion Toggle
        function toggleAccordion(id) {
            const content = document.getElementById(`content-${id}`);
            const icon = document.getElementById(`icon-${id}`);

            // Close all other open accordions
            for (let i = 1; i <= 3; i++) {
                if (i !== id) {
                    document.getElementById(`content-${i}`).classList.add('hidden');
                    document.getElementById(`icon-${i}`).classList.remove('rotate-180');
                }
            }

            // Toggle the clicked accordion
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        }

        // 3. Slideshow/Carousel Logic
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
        const intervalTime = 5000; // 5 seconds

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
            });
            slides[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        // Auto transition
        let slideInterval = setInterval(nextSlide, intervalTime);

        // Manual Navigation
        document.getElementById('next-slide').addEventListener('click', () => {
            clearInterval(slideInterval); // Stop auto-play on manual navigation
            nextSlide();
            slideInterval = setInterval(nextSlide, intervalTime); // Resume auto-play
        });

        document.getElementById('prev-slide').addEventListener('click', () => {
            clearInterval(slideInterval); // Stop auto-play on manual navigation
            prevSlide();
            slideInterval = setInterval(nextSlide, intervalTime); // Resume auto-play
        });

        // Ensure the first slide is shown on load
        window.onload = function () {
            showSlide(currentSlide);
        };
        // Tombol back-to-top
        const backToTopBtn = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Pastikan ikon lucide diperbarui
        if (window.lucide) window.lucide.createIcons();

                // Tampilkan popup saat halaman dimuat
        window.addEventListener('load', () => {
            const popup = document.getElementById('popup-brosur');
            popup.classList.add('active');
        });

        // Tutup popup saat klik tombol silang
        function closePopup() {
            const popup = document.getElementById('popup-brosur');
            popup.classList.remove('active');
        }