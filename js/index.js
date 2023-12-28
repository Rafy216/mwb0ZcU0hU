let data = "";
let urlList = "https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json";
let urlSurah = "https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/1.json";

$(document).ready(function () {
    loadData();
    searchData();
    $("#refresh").click(function () {
        $("#search").val("");
        loadData();
    });
});

function loadData() {
    var xhttp = new XMLHttpRequest(); // Create variable for XHTMLRequest
    // Function if get data
    xhttp.onload = function () {
        data = JSON.parse(xhttp.response); // Parsing data to JSON object
        $("#tab-body").html(""); // Remove table
        for (let x = 0; x < data.length; x++) {
            let row = `<tr>
                <td id="num">${data[x]["number_of_surah"]}</td>
                <td id="name" class="table-left">${data[x]["name"]}</td>
                <td id="trans" class="table-left">${data[x]["name_translations"]["id"]}</td>
                <td id="ayah">${data[x]["number_of_ayah"]}</td>
                <td id="place">${data[x]["place"]}</td>
                <td id="type">${data[x]["type"]}</td></tr>`; // Create row
            $("#tab-body").append(row); // Append row to tbody
        }
    }; // Function if get data
    xhttp.open("GET", urlList); // Open route for GET
    xhttp.send(); // Send command
}

function searchData() {
    // Check every keyboard stroke   
    $("#search").keyup(function () {
        let srcField = $(this).val();

        // Check search field value
        if (srcField === "") {
            loadData();
        } else {
            $("#tab-body").html(""); // Remove table
            let regex = new RegExp(srcField, "i");
            $.each(data, function (key, vals) {
                // Check value in search field
                if (vals.name.search(regex) != -1) {
                    let row = `<tr>
                        <td id="num">${vals.number_of_surah}</td>
                        <td id="name" class="table-left">${vals.name}</td>
                        <td id="trans" class="table-left">${vals.name_translations.id}</td>
                        <td id="ayah">${vals.number_of_ayah}</td>
                        <td id="place">${vals.place}</td>
                        <td id="type">${vals.type}</td></tr>`; // Create row
                    $("#tab-body").append(row); // Append row to tbody
                }
            });
        }
    });
}
