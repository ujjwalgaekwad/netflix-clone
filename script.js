
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
//question-Answer
let questionHeading = document.querySelector(".question-heading");
let displayHeight = document.querySelector(".ques-section");
let questionOne = document.getElementById("question1");
let answerOne = document.querySelector(".answer1");
let questionTwo = document.getElementById("question2");
let answerTwo = document.querySelector(".answer2");
let questionThree = document.getElementById("question3");
let answerThree = document.querySelector(".answer3");
let questionFour = document.getElementById("question4");
let answerFour = document.querySelector(".answer4");
let questionFive = document.getElementById("question5");
let answerFive = document.querySelector(".answer5");
let questionSix = document.getElementById("question6");
let answerSix = document.querySelector(".answer6");


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
        questionHeading.innerText = translations.english.questionHeading;
        questionOne.innerText = translations.english.firstQuestion;
        questionTwo.innerText = translations.english.secondQuestion;
        questionThree.innerText = translations.english.thirdQuestion;
        questionFour.innerText = translations.english.fourthQuestion;
        questionFive.innerText = translations.english.fivethQuestion;
        questionSix.innerText = translations.english.sixthQuestion;

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
        questionHeading.innerText = translations.hindi.questionHeading;
        questionOne.innerText = translations.hindi.firstQuestion;
        questionTwo.innerText = translations.hindi.secondQuestion;
        questionThree.innerText = translations.hindi.thirdQuestion;
        questionFour.innerText = translations.hindi.fourthQuestion;
        questionFive.innerText = translations.hindi.fivethQuestion;
        questionSix.innerText = translations.hindi.sixthQuestion;
    }
}
//email validation 
let emailParagraph = document.getElementById("email-paragraph");
let emailValidation = document.getElementById("email").value.trim();
let emailDesign = document.getElementById("email");
let startButton = document.getElementById("signup-button");
function emailvalidates() {
    if (emailValidation == "") {
        emailParagraph.style.display = "block";
        emailDesign.style.border = "1px solid #df2c14";
    }
}

//first Validation
startButton.addEventListener("click", () => {
    emailvalidates();
})

//Question answers 

//Events
let display = 0;
//Icons in Questions and answers
let cutIcon = document.getElementById("cut-icon");
let addIcon = document.getElementById("add-icon");
let cutIcon2 = document.getElementById("cut-icon2");
let addIcon2 = document.getElementById("add-icon2");
let cutIcon3 = document.getElementById("cut-icon3");
let addIcon3 = document.getElementById("add-icon3");
let cutIcon4 = document.getElementById("cut-icon4");
let addIcon4 = document.getElementById("add-icon4");
let cutIcon5 = document.getElementById("cut-icon5");
let addIcon5 = document.getElementById("add-icon5");
let cutIcon6 = document.getElementById("cut-icon6");
let addIcon6 = document.getElementById("add-icon6");

questionOne.addEventListener("click", () => {  //Answer-1 
    if(display == 1){
        answerOne.style.display = "block";
        cutIcon.style.display = "block";
        addIcon.style.display = "none";
        displayHeight.style.height = "140vh";
        display = 0;
    }
    else {
        answerOne.style.display = "none";
        cutIcon.style.display = "none";
        addIcon.style.display = "block";
        displayHeight.style.height = "110vh";
        display = 1;
    }
});

questionTwo.addEventListener("click", () => { //Answer-2
   if (display == 1) {
       answerTwo.style.display = "block";
       cutIcon2.style.display = "block";
       addIcon2.style.display = "none";
       display = 0;
   } else {
       answerTwo.style.display = "none";
       cutIcon2.style.display = "none";
       addIcon2.style.display = "block";
       display = 1;
   }
});

questionThree.addEventListener("click", () => { //Answer - 3
    if ( display == 1) {
        answerThree.style.display = "block";
        cutIcon3.style.display = "block";
        addIcon3.style.display = "none";
        display = 0;
    } else {
        answerThree.style.display = "none";
        cutIcon3.style.display = "none";
        addIcon3.style.display = "block";
        display = 1;
    }
})

questionFour.addEventListener("click", () => { //Answer - 4
    if ( display == 1) {
        answerFour.style.display = "block";
        cutIcon4.style.display = "block";
        addIcon4.style.display = "none";
        display = 0;
    } else {
        answerFour.style.display = "none";
        cutIcon4.style.display = "none";
        addIcon4.style.display = "block";
        display = 1;
    }
})

questionFive.addEventListener("click", () => { //Answer - 5
    if ( display == 1) {
        answerFive.style.display = "block";
        cutIcon5.style.display = "block";
        addIcon5.style.display = "none";
        display = 0;
    } else {
        answerFive.style.display = "none";
        cutIcon5.style.display = "none";
        addIcon5.style.display = "block";
        display = 1;
    }
})

questionSix.addEventListener("click", () => { //Answer - 6
    if ( display == 1) {
        answerSix.style.display = "block";
        cutIcon6.style.display = "block";
        addIcon6.style.display = "none";
        display = 0;
    } else {
        answerSix.style.display = "none";
        cutIcon6.style.display = "none";
        addIcon6.style.display = "block";
        display = 1;
    }
})

//Bottom validation
//email validation 
let bottomEmailParagraph = document.getElementById("email-paragraph2");
let bottomEmailValidation = document.getElementById("email2").value.trim();
let bottonEmailDesign = document.getElementById("email2");
let bottonStartButton = document.getElementById("signup-button2");
function bottomEmailvalidates() {
    if (emailValidation == "") {
        bottomEmailParagraph.style.display = "block";
        bottonEmailDesign.style.border = "1px solid #df2c14";
    }
}
//first Validation
bottonStartButton.addEventListener("click", () => {
    bottomEmailvalidates();
})

