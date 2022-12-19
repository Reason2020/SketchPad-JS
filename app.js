window.addEventListener("DOMContentLoaded", event => {
    const btn = document.querySelector(".btn");
    const sketchingAreaContainer = document.querySelector(".sketching-area-container");
    const navContainer = document.querySelector(".nav-container");
    const sketchPadContainer = document.querySelector(".sketchpad-container");
    const heroContainer = document.querySelector(".hero-container");
    const imageContainer = document.querySelector(".image-container");

    let coloringMode = true;

    function populateBoard () {
        for (let i = 0; i < 70; i++) {
            const row = document.createElement("div");
            row.style.height = "10px";
            row.style.backgroundColor = "white";
            for (let i = 0; i < 70; i++) {
                const pixel = document.createElement("div");
                pixel.setAttribute("class", "pixel");
                pixel.style.height = "10px";
                pixel.style.width = "10px";
                row.appendChild(pixel);
                row.classList.add("flex");
                // pixel.style.border = "1px solid red";
            }
            sketchPadContainer.appendChild(row);
        }
    }

    document.querySelector("body").addEventListener('click', event => {
        if (coloringMode) {
            coloringMode = false;
        } else {
            coloringMode = true;
        }
    })

    btn.addEventListener('click', event => {
        heroContainer.classList.add("hidden");
        imageContainer.classList.add("hidden");
        sketchingAreaContainer.classList.remove("hidden");
        sketchingAreaContainer.classList.add("flex");

        populateBoard();

        const pixels = document.querySelectorAll('.pixel');
        console.log(pixels);
        pixels.forEach((pixel) => {
            // console.log(pixel);
            pixel.addEventListener('mouseover', event => {
                if (coloringMode) {
                    event.target.style.backgroundColor = "black";
                }
            });
        });
    });
});
