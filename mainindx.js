let ok = document.getElementById("ok");
let container = document.getElementById("container");
let heading = document.getElementById("heading");
const form = document.getElementById("myForm");
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
// const form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // يمنع الإرسال التلقائي
    const formData = new FormData(form);
    fetch("https://formsubmit.co/zyad62951@gmail.com", {
        method: "POST",
        body: formData
    })
        .then(response => {
            if (response.ok) {
                // لو تم الإرسال بنجاح، نروح لصفحة Home.html
                window.location.href = "Home.html";
            } else {
                alert("حدث خطأ في الإرسال");
            }
        })
        .catch(error => {
            alert("لم يتم الإرسال. حاول مرة أخرى.");
        });
});
