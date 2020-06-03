$(document).ready(function(){
	function show_places(places){
    	$('.child').remove()	
    	let parent_element = $('.info')
    	let element = $('.place')

        for(let i = 0; i < places.length; i++){
            element.find('.location').text(places[i].location)
            element.find('.description').text(places[i].description)
            element.find('.name').text(places[i].name)
            element.find('img').attr('src', places[i].image)

            let location = places[i].location
        	element.find('.location').text(location)
    	    let html = '<div class="child place col-lg-6 col-md-12 col-sm-12">' +
    	                    element.html() +
    	                    '</div>'
            parent_element.append(html)
        }
    }
    
    

    function find_info(id_country){
        let country;
        for (let i = 0; i < countries.length; i++){
            if (countries[i].id == id_country){
                country = countries[i]
                break;
            }
        }
        $('.country').text(country.country)
        $('.country_descr').text(country.description)
        console.log(country)
        let all_cities = [];
        for (i = 0; i < cities.length; i++){
            if (cities[i].id_country == id_country){
                all_cities.push(cities[i])
            }
        }
        show_places(all_cities);
    }
    $(document).on('click', '.country-link', function(event){
        event.preventDefault();
        let id_country = $(this).data('country')
        find_info(id_country)
    })

    find_info(5);

})
