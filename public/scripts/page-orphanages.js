//tipos de dados
//string ""
// Number 01
// Object {}
// Boolean true or false
// Array []

//verify in 1:51:43


//create map
const map = L.map('mapid').setView([-8.0570869,-34.9252356], 18);

// create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

// create and add marker
L
.marker([-8.0570869,-34.9252356], { icon })
.addTo(map)


// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('lar das meninas <a href="orphanage.html?id=1"class="choose-orphanage"> <img src="./public/images/arrow-white.svg" ></a>')


/* image gallery */
function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {

    }

    // selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de image
    imageContainer.src = image.src

    //adicionar a classe .active para este botão
    button.classList.add('active')
    
}