"use strict";
var screenSize;

var addImages = function () {


    var innerWidth = window.innerWidth;


    if (innerWidth <= 760 && screenSize != "mobile") {

        screenSize = "mobile";
        console.log ('mobile');

        CreateSlider (1, 1, 0);


    } else if (innerWidth > 760 && innerWidth <= 1150 && screenSize != "tablet") {
        screenSize = "tablet";
        console.log ('tablet');

        CreateSlider (2, 1, 0);

    } else if (innerWidth > 1140 && screenSize != "PC") {
        screenSize = "PC";
        console.log ('wideScreen');

        CreateSlider (3, 1, 0);

    }


};

var createSliderButtons = function (buttonsNumber, activeButtonNumber) {

    var sliderButton = [];
    var sliderButtonsElement = document.createElement ('div');
    var createdButton;
    var Id;

    sliderButtonsElement.setAttribute ("class", "slider-buttons");


    // var sliderButtonActive = document.createElement ("button");
    // sliderButtonActive.setAttribute ("class", "slider-button slider-button-active");
    // sliderButtonActive.setAttribute ("id", "slider-button-0");
    // sliderButtonActive.onclick = sliderButtonClicked;
    //
    // sliderButtonsElement.appendChild (sliderButtonActive);

    if (buttonsNumber > 1) {

        for (var i = 0; i < buttonsNumber; i++) {
            createButton (sliderButtonsElement, i, activeButtonNumber);
        }
    }

    return sliderButtonsElement;
};

var CreateSlider = function (imagesToDisplay, startNumber, activeButtonNumber) {

    // imagesToDisplay - how many images in slider to display depends on the screen size

    var sliderWrapper = document.getElementById ("slider-wrapper");
    var sliderButtons;
    var image = [];
    var imagePath = "";
    var maxImageNumber = getImagesQuantity ();

    sliderWrapper.innerHTML = "";

    // Create wrapper around slider's images to add slide effect when switch button
    var sliderImgWrapper = document.createElement('div');
    sliderImgWrapper.setAttribute('class','slider-images-wrapper');
    // sliderImagesWrapper = document.getElementsByClassName('slider-images-wrapper');
    // sliderImgWrapper.style.left = "1500px";

    for (var i = 0; i < imagesToDisplay; i++) {

        imagePath = "assets/image/slider/" + (
                i + startNumber
            ) + ".png";

        image[i] = document.createElement ('img');
        image[i].setAttribute ("src", imagePath);
        image[i].setAttribute ("class", "slider-img");
        image[i].setAttribute ("alt", "order example " + i);
        image[i].setAttribute ("id", "img" + i);

        sliderImgWrapper.appendChild(image[i]);

    }

    sliderWrapper.appendChild (sliderImgWrapper);
    sliderButtons = createSliderButtons (maxImageNumber/imagesToDisplay, activeButtonNumber);


    sliderWrapper.appendChild (sliderButtons);

};

var createButton = function (sliderButtons, Id, activeButtonNumber) {


    var sliderButton = document.createElement ("button");


    if (Id == activeButtonNumber) {
        sliderButton.setAttribute ("class", "slider-button slider-button-active");
    } else {
        sliderButton.setAttribute ("class", "slider-button");
    }

    sliderButton.setAttribute ("id", "slider-button-" + Id);
    sliderButton.onclick = sliderButtonClicked;

    sliderButtons.appendChild (sliderButton);

};

var sliderButtonClicked = function () {
    var imagePath;
    var buttonIdNumber;
    var images = [];
    var startNumber;
    var sliderImagesWrapper;

    buttonIdNumber = +this.id[this.id.length - 1];

    images = document.getElementsByClassName ('slider-img');
    // sliderImagesWrapper = document.getElementsByClassName('slider-images-wrapper');
    // console.log('sliderImagesWrapper[0]=',sliderImagesWrapper[0]);


    var firstImageId = images[0].id.slice (3);

    startNumber = (
        (
            buttonIdNumber * images.length
        ) + 1
    );
    CreateSlider (images.length, startNumber, buttonIdNumber);

    // sliderImagesWrapper[0].setAttribute("class","slider-images-wrapper-slide");
    // sliderImagesWrapper[0].style.left = "0";


};

var getImagesQuantity = function () {

    var quantity = 6; //here should be function to get number of images in slider directory

    return quantity;
};