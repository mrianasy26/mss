(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:2
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua tombol header accordion
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            // Ambil ID konten dari atribut data-target
            const targetId = header.getAttribute('data-target');
            const content = document.getElementById(targetId);
            const icon = header.querySelector('.icon');
            
            // Toggle class 'active' pada konten
            const isActive = content.classList.contains('active');
            
            // Hapus 'active' dari semua konten lain (untuk accordion satu buka)
            document.querySelectorAll('.accordion-content').forEach(c => {
                 c.classList.remove('active');
                 c.previousElementSibling.setAttribute('aria-expanded', 'false');
                 c.previousElementSibling.querySelector('.icon').textContent = 'v';
            });
            
            // Jika konten ini belum aktif, aktifkan
            if (!isActive) {
                content.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
                icon.textContent = '^'; // Ganti ikon menjadi ke atas
            } else {
                // Jika konten ini sudah aktif, tutup (ini sebenarnya sudah dilakukan di loop atas,
                // tapi ini adalah logika dasar toggle)
                header.setAttribute('aria-expanded', 'false');
                icon.textContent = 'v'; // Ganti ikon menjadi ke bawah
            }
            
            // Pastikan Visi selalu terbuka pertama kali saat halaman dimuat
            // (Ini diatur melalui class 'active' di HTML awal)
        });
    });
});
})(jQuery);

