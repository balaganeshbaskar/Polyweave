

var exampleModal = document.getElementById('modal_types')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var part_type = button.getAttribute('data-bs-part_type')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.

  var modalTitle = exampleModal.querySelector('.modal-title-type')
  var body_content = exampleModal.querySelector('.body_content')
  var img1 = exampleModal.querySelector('#img1')

  if(part_type == 'Polysteel')
  {
    modalTitle.textContent = "Ropes (Braided & Twisted) - " + part_type
    body_content.textContent = "Unrivaled strength for every cast, ensuring durability and reliability in any fishing expedition. Crafted from premium Polysteel material, these ropes offer exceptional durability and reliability, ensuring optimal performance in any marine environment. With superior resistance to abrasion and stretching, our Polysteel ropes provide anglers with the confidence to tackle even the toughest catches."
    img1.src = "images/Product Photos/Original/own/polysteel.jpg"
  }
  else if(part_type == 'Nylon')
  {
    modalTitle.textContent = "Ropes (Braided & Twisted) - " + part_type
    body_content.textContent = "With superior strength and resistance to abrasion, these ropes ensure optimal performance, setting the standard for fishing gear reliability. Elevate your fishing experience with the resilience and versatility of our nylon ropes, crafted to withstand the rigors of every cast."
    img1.src = "images/Product Photos/Original/own/nylon.jpg"
  }
  else if(part_type == 'HDPE')
  {
    modalTitle.textContent = "Ropes (Braided & Twisted) - " + part_type
    body_content.textContent = " Revolutionize your fishing experience with our high-density polyethylene ropes, designed for unparalleled durability and strength. Engineered to withstand harsh marine conditions, these ropes offer superior performance, ensuring reliability with every cast. Elevate your angling game with the resilience and longevity of our HDPE ropes, setting new standards in fishing gear excellence."
    img1.src = "images/Product Photos/Original/own/hdpe.jpg"
  }
  else if(part_type == 'Dyneema')
  {
    modalTitle.textContent = "Ropes (Braided & Twisted) - " + part_type
    body_content.textContent = " Redefining the boundaries of fishing gear, our Dyneema ropes are crafted from cutting-edge materials to deliver unmatched strength and performance. Engineered with Dyneema fiber technology, these ropes offer exceptional durability, surpassing traditional materials while maintaining a lightweight and flexible design."
    img1.src = "images/Product Photos/Original/own/dyneema.jpg"
  }
  else if(part_type == 'Polyester')
  {
    modalTitle.textContent = "Ropes (Braided & Twisted) - " + part_type
    body_content.textContent = " Elevate your angling prowess with our premium polyester ropes, meticulously crafted for durability and reliability. Engineered to withstand the rigors of the open waters, these ropes offer exceptional strength and resistance to abrasion, ensuring optimal performance with every cast. Dive into the next level of fishing gear excellence with our polyester ropes, designed to empower anglers on their quest for the perfect catch."
    img1.src = "images/Product Photos/Original/own/polyester.png"
  }
  else if(part_type == 'Raffia')
  {
    modalTitle.textContent = "Ropes (Braided & Twisted) - " + part_type
    body_content.textContent = " Embrace tradition with a modern twist. Our raffia ropes offer a natural and eco-friendly alternative for fishing enthusiasts. Crafted from sustainable materials, these ropes provide reliable strength and flexibility, perfect for a variety of angling needs. Explore the simplicity and versatility of raffia ropes, bringing a touch of authenticity to your fishing adventures."
    img1.src = "images/Product Photos/Original/own/raffia.png"
  }
  else if(part_type == 'Polypropylene')
  {
    modalTitle.textContent = "Ropes (Braided & Twisted) - " + part_type
    body_content.textContent = " Engineered for performance, our polypropylene ropes are the ultimate companion for every fishing expedition. With unparalleled strength and durability, these ropes offer reliable support in challenging marine environments. Lightweight and resistant to water, our polypropylene ropes ensure smooth casting and effortless retrieval, empowering anglers to reel in their biggest catches with confidence."
    img1.src = "images/Product Photos/Original/own/polypropylene.jpg"
  }
  else if(part_type == 'Monofilament')
  {
    modalTitle.textContent = "Nylon Nets - " + part_type
    body_content.textContent = "Discover the strength and reliability of our monofilament nylon rope, meticulously crafted for precision and durability. Engineered from a single continuous strand of high-quality nylon material, this rope boasts exceptional tensile strength and resistance to abrasion, ensuring optimal performance in any marine environment. "
    img1.src = "images/Product Photos/Original/own/nylon - monofilament - net.jpg"
  }
  else if(part_type == 'Mono-multi-filament')
  {
    modalTitle.textContent = "Nylon Nets - " + part_type
    body_content.textContent = "Dive into the epitome of fishing net innovation with our mono multi-filament nylon nets. Crafted with precision and expertise, these nets seamlessly blend the strength of monofilament with the flexibility of multifilament nylon fibers. Engineered to withstand the rigors of the open waters, our nets offer unparalleled durability and performance, ensuring a successful catch every time."
    img1.src = "images/Product Photos/Original/own/mono multi-filament.jpg"
  }
  else if(part_type == 'Multifilament')
  {
    modalTitle.textContent = "Nylon Nets - " + part_type
    body_content.textContent = "Experience the pinnacle of fishing net technology with our multifilament nets. Crafted with precision and expertise, these nets are engineered from multiple intertwined nylon fibers, ensuring exceptional strength, flexibility, and durability. Designed to withstand the demands of the open waters, our multifilament nets offer superior knot strength and abrasion resistance, making them the perfect choice for anglers of all levels. "
    img1.src = "images/Product Photos/Original/own/multifilament.jpg"
  }
  else if(part_type == 'Lengthway stretching')
  {
    modalTitle.textContent = "Nylon Nets - " + part_type
    body_content.textContent = "Discover the ultimate in precision and performance with our Lengthway Stretching Nylon Nets. Engineered for excellence, these nets are meticulously crafted from high-quality nylon fibers, designed to stretch lengthwise for optimal tension and strength. Perfect for a wide range of applications, from fishing to sports and beyond, our Lengthway Stretching Nylon Nets offer unparalleled durability and reliability. "
    img1.src = "images/Product Photos/Original/own/length-stretching.jpg"
  }
  else if(part_type == 'Depthway stretching')
  {
    modalTitle.textContent = "Nylon Nets - " + part_type
    body_content.textContent = "Dive into innovation with our Depthway Stretching Nylon Nets, meticulously engineered for superior performance in any aquatic environment. Crafted from high-quality nylon fibers, these nets stretch depthwise to provide optimal tension and durability. Whether you're fishing in deep waters or setting up for aquaculture applications, our Depthway Stretching Nylon Nets offer unmatched strength and resilience."
    img1.src = "images/Product Photos/Original/own/width-stretching.jpg"
  }
  else
  {
    modalTitle.textContent = "Ropes (Braided & Twisted) - " + part_type
    body_content.textContent = part_type
  }

  

  
})



// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

