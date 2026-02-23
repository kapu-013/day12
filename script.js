// DOM Elements select karo
const heading = document.getElementById("heading");
const text = document.getElementById("text");
const changeBtn = document.getElementById("changeBtn");
const colorBtn = document.getElementById("colorBtn");

// Text change event
changeBtn.addEventListener("click", function() {
    text.textContent = "DOM Manipulation Working 🚀";
});

// Color change event
colorBtn.addEventListener("click", function() {
    heading.style.color = "blue";
    document.body.style.backgroundColor = "lightyellow";
});