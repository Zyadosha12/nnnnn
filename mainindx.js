let ok = document.getElementById("ok");
let container = document.getElementById("container");
let heading = document.getElementById("heading");
const form = document.getElementById("muForm");
ok.onclick = function () {
    ok.style.display = "none"
    heading.style.display = "none"
    container.style.display = "block"
}
function Check() {
    let name = document.getElementById("name");
    let farh = document.getElementById("farh");
    if (name.value !== "" && farh.value !== "") {
        location.href = "Home.html"
    } else {
        alert(' يجب ملئ جميع المدخلات')
    }
}
