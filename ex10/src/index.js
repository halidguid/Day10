function myFunction() {

    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Ma",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            // Add a record here
            artist: "Billyaw Joel",
            title: "Piano Masdasda",
            release_year: 1974433,
            id: 1,
            formats: {
                1: "srs",
                2: "8Tsdf",
                3: "LPsdfs"
            },
            gold: false
        }
    };

    return myMusic;
}

console.log(myFunction()[2]);

module.exports = myFunction;