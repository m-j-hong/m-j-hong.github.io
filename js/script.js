
function scrollToSection(target) {
    let element = document.getElementById(target);
    let y = element.offsetTop + -150
    window.scrollTo({top: y, behavior: "smooth"});
}