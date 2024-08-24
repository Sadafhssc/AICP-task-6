
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
function showLoginScreen() {
    hideAllScreens();
    document.getElementById('login-screen').classList.add('active');
}

// Function to show sign up screen
function showSignUpScreen() {
    hideAllScreens();
    document.getElementById('signup-screen').classList.add('active');
}
function login() {
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;
    const users = getUsersFromStorage();
    const user = users.find(user => user.username === loginUsername && user.password === loginPassword);

    if (user) {
        alert("You Login Successfully");
        if (user.role === "admin") {
            showAdminViewScreen();
        } else if (user.role === "teacher" || user.role === "student") {
            showTeacherStudentViewScreen();
        }
    } else {
        alert("Invalid username or password");
    }
}
// Function to handle sign up
function signUp() {
    const signUpUsername = document.getElementById("signup-username").value;
    const signUpPassword = document.getElementById("signup-password").value;
    const signUpRole = document.getElementById("signup-role").value;
    const users = getUsersFromStorage();
    

    if (signUpUsername && signUpPassword) {
        users.push({ username: signUpUsername, password: signUpPassword, role: signUpRole });
        localStorage.setItem('users', JSON.stringify(users));
        showLoginScreen();
        displayUsers();
    }
}


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".explore__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".job__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".offer__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});
