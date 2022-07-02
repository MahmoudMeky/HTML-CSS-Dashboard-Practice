//Declaring Variables of elements
let body = document.querySelector("body"),
    sidebar = document.querySelector("#sidebar"),
    toggle = document.querySelector(".toggle"),
    // searchBtn = document.querySelector("#search-button"),
    modeSwitch = document.querySelector("#switch"),
    modeText = document.querySelector(".switch-text"),
    sunIcon = document.querySelector("#sun"),
    moonIcon = document.querySelector("#moon"),
    dashboardBody = document.querySelector("#home"),
    dashboardBodyText = document.querySelector("#home h3");


//Switching to Dark 
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        modeText.innerHTML = "Light Mode";
        sunIcon.style.cssText = "display:block";
        moonIcon.style.cssText = "display:none";
    } else {
        modeText.innerHTML = "Dark Mode";
        moonIcon.style.cssText = "display:block"
        sunIcon.style.cssText = "display:none"
    }
})

//Sidebar close

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
    dashboardBody.classList.toggle("closed")
})


//Clicking any Item to clear Closed Sidebar
let menuLinks = document.querySelectorAll(".menu-links li");
let logOutLinks = document.querySelectorAll(".log-out li");
let sideBarItems = [...menuLinks, ...logOutLinks];

sideBarItems.forEach((el => {
    el.addEventListener("click", () => {
        if (sidebar.classList.contains("closed")) {
            sidebar.classList.remove("closed");
            dashboardBody.classList.remove("closed");
        }
    })
}));

let menuLinksWithoutSearch = document.querySelectorAll(".menu-links li:not(:first-of-type)");
menuLinksWithoutSearch.forEach((el) => {
    el.addEventListener("click", () => {
        dashboardBodyText.style.cssText = "opacity:0;transform:translateX(-20px);"
        setTimeout(() => {
            dashboardBodyText.style.cssText = "opacity:1;transform:translateX(0px);"
            dashboardBodyText.innerHTML = el.lastElementChild.innerHTML;
        }, 100)


    })


})

//adding Active to Items
menuLinksWithoutSearch.forEach((el) => {



    el.addEventListener("click", () => {
        menuLinksWithoutSearch.forEach((el) => {
            el.classList.remove("active")
        })
        el.classList.add("active");
    })

})





