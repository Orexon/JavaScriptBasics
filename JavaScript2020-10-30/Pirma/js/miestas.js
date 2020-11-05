let miestas = new XMLHttpRequest();

miestas.onreadystatechange = function() {
    if(miestas.readyState === 4){
        let miestuinfo = JSON.parse(miestas.responseText);
        let list = '';
        for(let i = 0; i < miestuinfo.length; i++){
            list += '<option value="'+ miestuinfo[i].name +'">' + miestuinfo[i].code + '</option>';
        }
        document.querySelector('.ltmiestai').innerHTML = list;
    }
};
miestas.open('GET', 'https://api.meteo.lt/v1/places');
miestas.send();







//Pasirinkus miestą, turime gauti šios dienos orus.Labai svarbu teisingai atvaizduoti oro sąlygas su font awesome ikonomis(sauleta, lyja, debesuota ir t.t.)
//Create div element in addStatus function.


