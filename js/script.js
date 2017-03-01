
//удалить страну
var countryBlock = document.querySelectorAll('.area-country__item');

countryBlock.forEach(function(project) {
	var del = project.querySelector('.delete--country');
	del.addEventListener('click', function (del) {
	        event.preventDefault();
	        project.classList.remove('area-country__item--show');
	    });
});


//очистить поле города
var clearCity = document.getElementById('selection-city');

clearCity.addEventListener('click', function() {
    clearCity.value='';
});


var block = document.querySelector('.slider-range-block');
var range = document.querySelector('.range');


range.addEventListener('focus', function() {
		block.classList.add('slider-block--show');
	});

range.addEventListener('blur', function() {
		block.classList.remove('slider-block--show');
	});


var sliderBlock = document.querySelector('.slider-range-max-block');
var sliderScale = document.querySelector('.num');


sliderScale.addEventListener('focus', function() {
    sliderBlock.classList.add('slider--show');
	});

sliderScale.addEventListener('blur', function() {
    sliderBlock.classList.remove('slider--show');
	});



