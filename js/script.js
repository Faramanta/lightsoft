

var countryBlock = document.querySelectorAll('.area-country__item');

countryBlock.forEach(function(project) {
	var del = project.querySelector('.delete--country');
	del.addEventListener('click', function (del) {
	        event.preventDefault();
	        project.classList.remove('area-country__item--show');
	    });
});
    



