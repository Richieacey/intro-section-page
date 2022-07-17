function toggleMenu() {
    navDisplay = document.getElementById("features-menu").style.display;
    arrowUp = document.getElementById("arrow-down").style.opacity;
    arrowDown = document.getElementById("arrow-up").style.opacity;
    darkenWord = document.querySelector(".features-dropdown").style.color;
    if (navDisplay == "none") {
        return revealMenu();
    } return hideMenu()
}




function hideMenu() {
    document.getElementById("features-menu").style.display = "none";
    document.getElementById("arrow-down").style.opacity = "1";
    document.getElementById("arrow-up").style.opacity = "0";
    document.querySelector(".features-dropdown").style.color = "hsl(0, 0%, 41%)";
}
function revealMenu() {
    document.getElementById("features-menu").style.display = "block";
    document.getElementById("arrow-down").style.opacity = "0";
    document.getElementById("arrow-up").style.opacity = "1";
    document.querySelector(".features-dropdown").style.color = "black";
}



function toggleCompanyMenu() {
    navDisplay = document.getElementById("company-menu").style.display;
    arrowUp = document.getElementById("arrow-down2").style.opacity;
    arrowDown = document.getElementById("arrow-up2").style.opacity;
    darkenWord = document.querySelector(".company-dropdown").style.color;
    if (navDisplay == "none") {
        return revealCompanyMenu();
    } return hideCompanyMenu()
}
function hideCompanyMenu() {
    document.getElementById("company-menu").style.display = "none";
    document.getElementById("arrow-down2").style.opacity = "1";
    document.getElementById("arrow-up2").style.opacity = "0";
    document.querySelector(".company-dropdown").style.color = "hsl(0, 0%, 41%)";

}
function revealCompanyMenu() {
    document.getElementById("company-menu").style.display = "block";
    document.getElementById("arrow-down2").style.opacity = "0";
    document.getElementById("arrow-up2").style.opacity = "1";
    document.querySelector(".company-dropdown").style.color = "black"
}
