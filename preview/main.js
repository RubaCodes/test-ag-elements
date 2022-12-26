const button = document.querySelector("button")
const container = document.querySelector(".container")
isOpen = false;
button.addEventListener("click", () => {
    if (!isOpen) {
        const popup = document.createElement("my-popup")
        popup.addEventListener('closed', (e) => {
            console.log(e)
            isOpen = !isOpen;
        });
        container.appendChild(popup);
        popup.message = "messaggio di evento"
    }
    isOpen = true
})