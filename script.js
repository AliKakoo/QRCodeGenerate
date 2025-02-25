const $ = document

const wrapperElem = $.querySelector(".wrapper");
const inputElem = $.querySelector("input");
const btnElem = $.querySelector("button");  
const imgElem = $.querySelector("img");

btnElem.addEventListener("click", () => {
    let inputValue = inputElem.value.trim();

    if (inputValue) {
        btnElem.innerHTML = "Generating QR Code...";
        imgElem.setAttribute(
          "src",
          `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`
        );

        imgElem.addEventListener('load', ()=> {

            wrapperElem.classList.add("active");
            btnElem.innerHTML = "Generate QR Code";
            inputElem.value = " "

        })
    }
});

// Clear input when user clicks outside the input field

inputElem.addEventListener("keyup", () => {
    if (!inputElem.value.trim()) {
        wrapperElem.classList.remove("active");
    }
});