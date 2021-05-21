
const loginForm = document.getElementById("loginForm");
const langSection = document.getElementById("langSection");

const { StorageService, ApiService, LangService } = window;
const userToken = StorageService.read(window.USER_TOKEN_KEY);

// translated
const formTitle = document.querySelector(".formTitle");
formTitle.textContent = "ACCOUNT LOGIN";
const inputEmailLabel = document.querySelector('label[for="inputEmail"]');

// const TRANSLATION = {
//   GE: {
//     formTitle: "რეგისტრაცია/ავტორიზაციის აპლიკაცია",
//     emailLabelText: "ელ.ფოსტა",
//   },
//   EN: {
//     formTitle: "ReqRes.In Application",
//     emailLabelText: "Email address",
//   },
// };

/**
 * 
 * 
 * {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
 */
if (userToken) {
  navigateToDashboard(userToken);
}

const generateLangButtons = (lang) => {
  const div = document.createElement("div");
  div.className = "col-auto";

  const button = document.createElement("button");
  button.className = "btn btn-info";
  button.dataset.lang = lang;
  button.textContent = lang;

  div.appendChild(button);

  return div;
};

// const translatePage = (lang) => {
//   formTitle.textContent = TRANSLATION[lang].formTitle;
//   inputEmailLabel.textContent = TRANSLATION[lang].emailLabelText;
// };

const onSubmit = async (event) => {
  event.preventDefault();
  const inputEmail = document.getElementById("inputEmail");
  const inputPassword = document.getElementById("inputPassword");
  const rememberMe = document.getElementById("remember-me");

  const errors = [];

  if (inputEmail.value === "") {
    errors.push("email is missing");
  }
  if (inputPassword.value === "") {
    errors.push("password is missing");
  }

  if (errors.length) {
    console.error(errors);
    return;
  }

  const loginData = {
    email: inputEmail.value,
    password: inputPassword.value,
  };

  const result = await ApiService.login(loginData);
  if (result && result.token) {
    navigateToDashboard(result.token);
  }
};


// LangService.onChange(({ activeLang }) => {
//   translatePage(activeLang);
// });

// translatePage(LangService.activeLang);
loginForm.addEventListener("submit", onSubmit);





// var slideIndex = 1;
// showSlides(slideIndex);


// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }


// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
// const searchButton = document.getElementById('search-button');
// const searchInput = document.getElementById('search-input');
// searchButton.addEventListener('click', () => {
//   const inputValue = searchInput.value;
//   alert(inputValue);
// });





// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }





// var slideIndex = [1,1];
// /* Class the members of each slideshow group with different CSS classes */
// var slideId = ["mySlides1", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   var i;
//   var x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex[no]-1].style.display = "block";
// }