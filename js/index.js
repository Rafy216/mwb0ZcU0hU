let data = "";
let urlList = "https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json";

$(document).ready(function () {
    loadData();
    searchData();
    $("#refresh").click(function () {
        $("#search").val("");
        loadData();
    });
});

function loadData() {
    setTimeout(function () {
        $(".loader").remove();
        $.ajax({
            url: urlList,
            async: true,
            success: function (res) {
                data = JSON.parse(res);
                $("#tab-body").html("");
                for (let x = 0; x < data.length; x++) {
                    let row = `<tr>
                <td id="num">${data[x]["number_of_surah"]}</td>
                <td id="name" class="table-left">${data[x]["name"]}</td>
                <td id="trans" class="table-left">${data[x]["name_translations"]["id"]}</td>
                <td id="ayah">${data[x]["number_of_ayah"]}</td>
                <td id="place">${data[x]["place"]}</td>
                <td id="type">${data[x]["type"]}</td>
                <td id="recitation">
                <audio controls src="${data[x]["recitation"]}"></audio>
                </td></tr>`;
                    $("#tab-body").append(row);
                }
            }
        });
    }, 2500);

}

function searchData() {
    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#tab-body tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
}
