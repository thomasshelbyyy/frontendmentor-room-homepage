const heroes = [
    {
        imageUrl: "./images/desktop-image-hero-1.jpg",
        title: "Discover innovative way to decorate",
        description: `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`
    },
    {
        imageUrl: "./images/desktop-image-hero-2.jpg",
        title: "We are available all across the globe",
        description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
    },
    {
        imageUrl: "./images/desktop-image-hero-3.jpg",
        title: "Manufactured with the best materials",
        description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
    }
]

let currentImage = 0

const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")
const imageEl = document.querySelector(".hero-image")
const title = document.getElementById("title")
const description = document.getElementById("description")

nextBtn.addEventListener("click", function () {
    currentImage += 1
    if (currentImage === 3) {
        currentImage = 0
    }
    imageEl.src = heroes[currentImage].imageUrl
    title.textContent = heroes[currentImage].title
    description.textContent = heroes[currentImage].description
})

prevBtn.addEventListener("click", function () {
    currentImage -= 1
    if (currentImage === -1) {
        currentImage = 2
    }
    imageEl.src = heroes[currentImage].imageUrl
    title.textContent = heroes[currentImage].title
    description.textContent = heroes[currentImage].description
})