$(document).ready(function () {
    $win = $(window);
    $navbar = $('#header');
    $width = $navbar.width();
    $toggle = $('.toggle-button');

    toggel_onclick($win, $navbar, $width);

    $win.resize(function () {
        toggel_onclick($win, $navbar, $width);
    });

    $toggle.click(function () {
        $navbar.toggleClass('toggle-left')
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.skills').offset().top - 500) {
            $('.skills .bar1 .progress .progress-bar').addClass('active');
        }

        $(".block").each(function () {

            if ($(window).scrollTop() >= $(this).offset().top - 10) {

                $("#header a").removeClass("active");

                $('#header a[data-scroll="' + $(this).attr("id") + '"]').addClass("active");

            }

        });
    })
});

function toggel_onclick($win, $navbar, $width) {
    if ($win.width() <= 767) {
        $navbar.css({ left: `-${$width}px` });
    } else {
        $navbar.css({ left: '0%' });

    }
}

var typed = new Typed('#typed', {
    strings: [
        'Web Developer',
        'Freelancer.'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})

var typed2 = new Typed('#typed-2', {
    strings: [
        'Web Developer !',
        'Freelancer !'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})

document.querySelectorAll('#header a').forEach(anc => {
    anc.addEventListener('click', function (e) {
        e.preventDefault();

        removeAll();

        anc.classList.add('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    })
})

function removeAll() {
    document.querySelectorAll('#header a').forEach(ele => {
        ele.classList.remove('active');
    })
}

/*******Show imgs********/
let imgs = Array.from(document.querySelectorAll('.card img'));
imgs.forEach(img => {
    img.onclick = function () {
        document.querySelector('.show-imgs').style.display = 'block';
        document.querySelector('.show-imgs img').src = this.src
    };
});

document.querySelector('.show-imgs').onclick = function () {
    this.style.display = 'none'
}

document.querySelector('.show-imgs img').onclick = function (e) {
    e.stopPropagation();
}

document.querySelector('.show-imgs i').addEventListener('click', function () {
    this.parentElement.style.display = 'none';
});
/*******Show imgs********/


