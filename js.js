let map;
      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 26.4772748, lng: 81.6943877 },
          zoom: 14,
        });
      }

    //   Smooth Scrolling
    $('#navbar a, .btn').on('click',function(event) {
        if(this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top - 100
                },
                900
            )
        }
    })

    // navbar transparent when scroll down
    window.addEventListener('scroll', function() {
        if(window.scrollY > 150) {
            document.querySelector('#navbar').style.opacity = 0.9;
        } else {
            document.querySelector('#navbar').style.opacity = 1;
        }
    }) 