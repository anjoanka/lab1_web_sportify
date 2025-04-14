let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px"
    }else{
        menuList.style.maxHeight = "0px"
    }
}

document.addEventListener("DOMContentLoaded", function () {

    let productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card, index) => {
        if (index % 2 === 1) {
            let badge = document.createElement("div");
            badge.textContent = "NEW";
            badge.style.position = "absolute";
            badge.style.top = "10px";
            badge.style.left = "10px";
            badge.style.backgroundColor = "#c4a484";
            badge.style.color = "white";
            badge.style.padding = "5px 10px";
            badge.style.fontSize = "12px";
            badge.style.fontWeight = "bold";
            badge.style.borderRadius = "5px";
            card.style.position = "relative";
            card.appendChild(badge);
        }
    });

    let prices = document.querySelectorAll(".product-price");
    prices.forEach((price) => {
        price.style.color = "#b28d63"; 
        price.style.fontWeight = "bold";
    });

    let images = document.querySelectorAll(".product-card img");
    images.forEach((img) => {
        img.style.transition = "transform 0.3s ease";
        img.addEventListener("mouseover", function () {
            img.style.transform = "scale(1.05)";
        });
        img.addEventListener("mouseout", function () {
            img.style.transform = "scale(1)";
        });
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".promotion-btn");

    buttons.forEach((button, index) => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); 
            const info = document.querySelectorAll(".promotion-text")[index];

            if (info.style.display === "none" || info.style.display === "") {
                info.style.display = "block";
            } else {
                info.style.display = "none";
            }
        });
    });
});

document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let comment = document.getElementById("comment").value.trim();
    
    if (name === "" || email === "" || comment === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    let commentList = document.getElementById("commentsList");
    let newComment = document.createElement("li");
    newComment.textContent = `${name}: ${comment}`;
    commentList.appendChild(newComment);
    
    document.getElementById("commentForm").reset();
});
