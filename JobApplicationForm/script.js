document.getElementById("jobForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    let ok = true;

    const name = document.getElementById("name");
    if (!/^[A-Za-z ]+$/.test(name.value)) {
        ok = false;
        document.getElementById("nameErr").style.display = "block";
    } else document.getElementById("nameErr").style.display = "none";

    const email = document.getElementById("email");
    if (!email.value.includes("@")) {
        ok = false;
        document.getElementById("emailErr").style.display = "block";
    } else document.getElementById("emailErr").style.display = "none";

    const phone = document.getElementById("phone");
    if (!/^\d{10}$/.test(phone.value)) {
        ok = false;
        document.getElementById("phoneErr").style.display = "block";
    } else document.getElementById("phoneErr").style.display = "none";

    const position = document.getElementById("position");
    if (position.value === "") {
        ok = false;
        document.getElementById("posErr").style.display = "block";
    } else document.getElementById("posErr").style.display = "none";

    const cover = document.getElementById("cover");
    if (cover.value.length < 20) {
        ok = false;
        document.getElementById("coverErr").style.display = "block";
    } else document.getElementById("coverErr").style.display = "none";

    if (ok) alert("Application Submitted Successfully!");
});


document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    let ok = true;

    const email = document.getElementById("loginEmail");
    const pass = document.getElementById("loginPassword");

    if (!email.value.includes("@")) {
        ok = false;
        document.getElementById("loginEmailErr").style.display = "block";
    } else document.getElementById("loginEmailErr").style.display = "none";

    if (pass.value.length < 6) {
        ok = false;
        document.getElementById("loginPassErr").style.display = "block";
    } else document.getElementById("loginPassErr").style.display = "none";

    if (ok) alert("Login Successful!");
});
