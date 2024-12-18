const btn = document.getElementById("applyColor")
const colorPicker = document.getElementById("colorPicker")

btn.addEventListener('click', () => {
    const selectedColor = colorPicker.value
    document.body.style.backgroundColor = selectedColor
})