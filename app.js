let skateboard = [
    {
        name: "MATRIX 1999 DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/matrix-1999-1.jpg"
    },

    {
        name: "RAEDA DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Raeda-Deck.jpg"
    },

    {
        name: "MUSTY DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Musty-Deck.jpg"
    },

    {
        name: "TRISTIQUE DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Tristique-deck.jpg"
    },

    {
        name: "FIELD TRIP DECK",
        price: "780.000đ - 1.470.000đ",
        image: "images/Fied-Trip-deck.jpg"
    },

    {
        name: "TARO RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-5.jpg"
    },

    {
        name: "NEON RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-1.jpg"
    },

    {
        name: "ORANAGE RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-2.jpg"
    },

    {
        name: "BLUE RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-3.jpg"
    },

    {
        name: "WHITE RAINBOW LOGO DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/web-4.jpg"
    },

    {
        name: "CUTIS MODEL DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/cutis.jpg"
    },

    {
        name: "CAM VU MODEL DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/cam-vu.jpg"
    },

    {
        name: "SON NGUYEN MODEL DECK",
        price: "780.000đ - 1.670.000đ",
        image: "images/son-nguyen.jpg"
    },
]
let product=document.getElementById("skateboard")
for (let index = 0; index < skateboard.length; index++) {
    let info = document.createElement("div")
    info.classList = "col-6 col-md-4 col-lg-3 skateboard-detail"
    product.appendChild(info)

    let info1 = document.createElement("div")
    info.appendChild(info1)

    let img = document.createElement("img")
    img.setAttribute("src", skateboard[index].image)
    info1.appendChild(img)

    let name = document.createElement("h1")
    name.innerText = skateboard[index].name
    info.appendChild(name)

    let price=document.createElement("h2")
    price.innerText=skateboard[index].price
    info1.appendChild(price)
}
