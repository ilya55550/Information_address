let basic_information = {
    'country': 'Страна',
    'postal_code': 'Индекс',
    'federal_district': 'Федеральный округ',
    'city': 'Город',
    'city_district': 'Район',
    'street': 'Улица',
    'house': 'Дом',
    'flat': 'Квартира',
};
let Additional_Information = {
    'fias_level': 'Уровень по ФИАС',
    'region_iso_code': 'ISO-код',
    'region_kladr_id': 'Код КЛАДР',
    'fias_id': 'Код ФИАС',
    'okato': 'Код ОКАТО',
    'oktmo': 'Код ОКТМО',
    'tax_office': 'Код ИФНС',
};

$("#id_address").suggestions({
    token: "cdd4deeba2d083721f1a57a2bb900e4c727aef51",
    type: "ADDRESS",

    onSelect: function(suggestion) {
        let sub_address = document.getElementById("sub_address");
        let response_data = document.querySelector(".clean-demo-result");

        sub_address.onclick = function(){
            console.log(suggestion.data);
            response_data.innerHTML = '<h2 class="clean-demo-result__title">' + 'Результат проверки' +'</h2>'

            for (const [key, value] of Object.entries(suggestion.data)) {
                if (key in basic_information && value != null) {
                    response_data.innerHTML += '<div class="clean-demo-result__item frow">'+'<div class="clean-demo-result__item-key">'+ basic_information[key] + ':' +'</div>'+' <div data-ref="country" class="clean-demo-result__item-value">'+'<div>'+ value +'</div>' +'</div>'+'</div>'
                }
            }
            response_data.innerHTML += '<h2 class="clean-demo-result__title">' + 'Дополнительная информация' +'</h2>'
            for (const [key, value] of Object.entries(suggestion.data)) {
                if (key in Additional_Information) {
                    response_data.innerHTML += '<div class="clean-demo-result__item frow">'+'<div class="clean-demo-result__item-key">'+ Additional_Information[key] + ':' +'</div>'+' <div data-ref="country" class="clean-demo-result__item-value">'+'<div>'+ value +'</div>' +'</div>'+'</div>'
                }
            }
            let linkkoord = 'http://yandex.ru/maps/?text='+ suggestion.data.geo_lat + '%2C' + suggestion.data.geo_lon;
            response_data.innerHTML += '<div class="clean-demo-result__item frow">'+'<div class="clean-demo-result__item-key">'+ 'Геокоординаты' + ':' +'</div>'+' <div data-ref="country" class="clean-demo-result__item-value">'+'<div>'+ suggestion.data.geo_lat + '  '+ suggestion.data.geo_lon + '<a href="'+ linkkoord +'">' +  '  На карте' +'</a>' +'</div>' +'</div>'+'</div>'

        }
    }
});


