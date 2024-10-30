
const translations = {
    english: {
        signInButton: "Sign in",
        headingOne: "Unlimited movies, TV shows and more",
        headingTwo: "Starts at ₹149. Cancel anytime.",
        headingThree: "Enter your email to create or restart your membership.",
        email: "Email Address",
        email2: "Email Address",
        getStartedLanguage: "Get Started >",
        tvFirstHeading: "Enjoy on your TV",
        tvSecondHeading: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        downloadFirstHeading: "your shows to watch offline",
        downloadSecondHeading: "Save your favourites easily and always have something to watch.",
        laptopFirstHeading: "Watch everywhere",
        laptopSecondHeading: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
        kidFirstHeading: "Create profiles for kids",
        kidSecondHeading: "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
        questionHeading: "Frequently Asked Questions",
        firstQuestion: "What is Netflix?",
        secondQuestion: "How much does Netflix cost?",
        thirdQuestion: "Where can i watch?",
        fourthQuestion: "How do i cancel?",
        fivethQuestion: "What can i watch on Netflix?",
        sixthQuestion: "Is Netflix good for kids?",
    },
    hindi: {
        signInButton: "साइन इन करे",
        headingOne: "असीमित फिल्में, टीवी शो और बहुत कुछ",
        headingTwo: "₹149 से शुरू। किसी भी समय रद्द करें.",
        headingThree: "अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें",
        email: "मेल पता",
        email2: "मेल पता",
        getStartedLanguage: "शुरू करे >",
        tvFirstHeading: "अपने टीवी पर आनंद लें",
        tvSecondHeading: "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.",
        downloadFirstHeading: "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें",
        downloadSecondHeading: "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.",
        laptopFirstHeading: "हर जगह देखें",
        laptopSecondHeading: "बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.",
        kidFirstHeading: "बच्चों के लिए प्रोफ़ाइल बनाएं",
        kidSecondHeading: "बच्चों को अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जाने दें जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.",
        questionHeading: "अक्सर पूछे जाने वाले सवाल",
        firstQuestion: "Netflix क्या है?",
        secondQuestion: "Netflix की कीमत कितनी है?",
        thirdQuestion: "मैं कहां देख सकता हूं?",
        fourthQuestion: "मैं कैसे कैंसिल करूं?",
        fivethQuestion: "मैं Netflix पर क्या देख सकता/सक्ती हूँ?",
        sixthQuestion: "क्या Netflix बच्चों के लिए ठीक है?",
    }
}

let languageSelect = document.querySelector("select");
let signInButton = document.getElementById("login");
//Hero section
let HeroHeadingOne = document.getElementById("heading1");
let HeroHeadingTwo = document.getElementById("heading2");
let HeroHeadingThree = document.getElementById("heading3");
let email = document.getElementById("email");
let getStartButton = document.getElementById("signup-button");
//All sections
let tvHeadingOne = document.querySelector(".tv-headingOne");
let tvHeadingTwo = document.querySelector(".tv-headingTwo");
let downloadHeadingOne = document.querySelector(".d-headingOne");
let downloadHeadingTwo = document.querySelector(".d-headingTwo");
let laptopHeadingOne = document.querySelector(".lap-headingOne");
let laptopHeadingTwo = document.querySelector(".lap-headingTwo");
let kidHeadingOne = document.querySelector(".kid-headingOne");
let kidHeadingTwo = document.querySelector(".kid-headingTwo");
//question-Answer-Languages
let languaeQuestionOne = document.getElementById("quesOne");
let languaeAnswerOne = document.getElementById("ansOne");
let languaeQuestionTwo = document.getElementById("quesTwo");
let languaeAnswerTwo = document.getElementById("ansTwo");
let languaeQuestionThree = document.getElementById("quesThree");
let languaeAnswerThree = document.getElementById("ansThree");
let languaeQuestionFour = document.getElementById("quesFour");
let languaeAnswerFour = document.getElementById("ansFour");
let languaeQuestionFive = document.getElementById("quesFive");
let languaeAnswerFive = document.getElementById("ansFive");
let languaeQuestionSix = document.getElementById("quesSix");
let languaeAnswerSix = document.getElementById("ansSix");


languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
})

const setLanguage = (language) => { 
    if (language == "english") {
        signInButton.innerHTML = translations.english.signInButton;
        HeroHeadingOne.innerText = translations.english.headingOne;
        HeroHeadingTwo.innerText = translations.english.headingTwo;
        HeroHeadingThree.innerText = translations.english.headingThree;
        email.innerText = translations.english.email;
        getStartButton.innerText = translations.english.getStartedLanguage;
        tvHeadingOne.innerText = translations.english.tvFirstHeading;
        tvHeadingTwo.innerText = translations.english.tvSecondHeading;
        downloadHeadingOne.innerText = translations.english.downloadFirstHeading;
        downloadHeadingTwo.innerText = translations.english.downloadSecondHeading;
        laptopHeadingOne.innerText = translations.english.laptopFirstHeading;
        laptopHeadingTwo.innerText = translations.english.laptopSecondHeading;
        kidHeadingOne.innerText = translations.english.kidFirstHeading;
        kidHeadingTwo.innerText = translations.english.kidSecondHeading;
        //questions
        languaeQuestionOne.innerText = translations.english.firstQuestion;
        languaeQuestionTwo.innerText = translations.english.secondQuestion;
        languaeQuestionThree.innerText = translations.english.thirdQuestion;
        languaeQuestionFour.innerText = translations.english.fourthQuestion;
        languaeQuestionFive.innerText = translations.english.fivethQuestion;
        languaeQuestionSix.innerText = translations.english.sixthQuestion;
      

    } else if (language == "hindi") {
        signInButton.innerText = translations.hindi.signInButton;
        HeroHeadingOne.innerText = translations.hindi.headingOne;
        HeroHeadingTwo.innerText = translations.hindi.headingTwo; 
        HeroHeadingThree.innerText = translations.hindi.headingThree;
        email.innerText = translations.hindi.email;
        getStartButton.innerText = translations.hindi.getStartedLanguage;
        tvHeadingOne.innerText = translations.hindi.tvFirstHeading;
        tvHeadingTwo.innerText = translations.hindi.tvSecondHeading;
        downloadHeadingOne.innerText = translations.hindi.downloadFirstHeading;
        downloadHeadingTwo.innerText = translations.hindi.downloadSecondHeading;
        laptopHeadingOne.innerText = translations.hindi.laptopFirstHeading;
        laptopHeadingTwo.innerText = translations.hindi.laptopSecondHeading;
        kidHeadingOne.innerText = translations.hindi.kidFirstHeading;
        kidHeadingTwo.innerText = translations.hindi.kidSecondHeading;
        //questions
        languaeQuestionOne.innerText = translations.hindi.firstQuestion;
        languaeQuestionTwo.innerText = translations.hindi.secondQuestion;
        languaeQuestionThree.innerText = translations.hindi.thirdQuestion;
        languaeQuestionFour.innerText = translations.hindi.fourthQuestion;
        languaeQuestionFive.innerText = translations.hindi.fivethQuestion;
        languaeQuestionSix.innerText = translations.hindi.sixthQuestion;
    }
}

//form 
function validateEmail(){
    const email = document.getElementById('email')
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value.trim() === ''){
        email.style.border = "1.4px solid #EB3942";
        email.focus();
    } else if(emailPattern.test(email.value)){
        email.style.border = "1.4px solid green"
    } 
}

function secondValidate(){
    const email = document.getElementById('bottom-email')
    const errorMessage = document.getElementById("errorMessage");
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value.trim() === ''){
        email.style.border = "1.4px solid #EB3942";
        email.focus();
    } else if(emailPattern.test(email.value)){
        email.style.border = "1.4px solid green"
        if(!emailPattern.test(email.value)) {
            errorMessage.innerText = "Invalid Email"
        }
    } 
}
document.getElementById("signup-button").addEventListener("click", () => {
    validateEmail();
})
document.getElementById("getstart").addEventListener("click", () => {
     secondValidate();
})


//Question answers  
document.querySelectorAll(".questions").forEach((question) => {
    question.addEventListener("click", () => {
        const activeItem = document.querySelector(".item.active")
        if(activeItem && activeItem !== question.parentElement) {
            activeItem.classList.remove('active')
        }
        question.parentElement.classList.toggle('active')
    })
})

