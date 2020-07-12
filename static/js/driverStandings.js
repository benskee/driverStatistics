const loadData = url => {
    $.get(url, data => {
        var driver = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        for (var i = 0; i < driver.length; i++) {
            var name = `${driver[i].Driver.givenName} ${driver[i].Driver.familyName}`;
            var driverWiki = `${driver[i].Driver.url}`;
            var position = `${driver[i].position}`;
            var wins = `${driver[i].wins}`;
            var nationality = `${driver[i].Driver.nationality}`;
            var constructor = `${driver[i].Constructors[0].name}`;
            var constructorWiki = `${driver[i].Constructors[0].url}`;

        $('#dataChart').append(`<tr><td><a href="${driverWiki}">${name}<a/></td><td>${position}</td><td>${wins}</td><td>${nationality}</td><td><a href="${constructorWiki}">${constructor}<a/></td></tr>`);
        }
    });
};


$('#year-form').on('submit', event => {
    event.preventDefault();
    var yearInput = $('#yearInput').val();

    if (yearInput <= 2019 && yearInput > 1999) {
        $("#textDiv").hide();
        $("#tableDiv").show();
    }
    else {
        $("#errorDiv").show();
    };

    var url = `https://ergast.com/api/f1/${yearInput}/5/driverStandings.json`

    loadData(url);
});

