let data = "";
$(document).ready(function () {
    var xhttp = new XMLHttpRequest(); // Create variable for XHTMLRequest
    xhttp.onload = function () {
        data = JSON.parse(xhttp.response); // Parsing data to JSON object
        for (let x = 0; x < data.length; x++) {
            let row = `<tr>
                <td id="num">${data[x]["number_of_surah"]}</td>
                <td id="name" class="table-left">${data[x]["name"]}</td>
                <td id="trans" class="table-left">${data[x]["name_translations"]["id"]}</td>
                <td id="ayah">${data[x]["number_of_ayah"]}</td>
                <td id="place">${data[x]["place"]}</td>
                <td id="type">${data[x]["type"]}</td></tr>`;
            $("#tab-body").append(row);
        }
    }; // Function if get data
    xhttp.open("GET", "https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json"); // Open route for GET
    xhttp.send(); // Send command
});