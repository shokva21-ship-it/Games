const openBtn = document.getElementById("sing-app");
const signup = document.getElementById("signup");
const closeBtn = document.getElementById("close");
const createBtn = document.getElementById("create");

openBtn.addEventListener("click", () => {
    signup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    signup.classList.remove("active");
});

signup.addEventListener("click", (e) => {
    if (e.target === signup) {
        signup.classList.remove("active");
    }
});

createBtn.addEventListener("click", () => {
    signup.classList.remove("active");
    alert("Account created successfully!");
});