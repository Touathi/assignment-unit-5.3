console.log('***** Music Collection *****')

// Created Collection array.
let Collection = [];

// Creating addToCollection Function.
function addToCollection( title1, artist1, yearPublished1 ) {
    if ( Collection.length < 0 ) {
        return undefined
    }
    else {
        Collection.push ({
            title : title1,
            artist : artist1,
            yearPublished : yearPublished1
        });
        return Collection
    }
}
// Adding songs using addToCollection Function.
addToCollection( 'Forever', 'Lewis Capaldi', '2019' );
addToCollection( 'Hate everything', 'G-soul', '2019' );
addToCollection( 'What About Now', 'Daughtry', '2006' );
addToCollection( 'Lips Of An Angel', 'Hinder', '2005' );
addToCollection( 'Dont Matter', 'Akon', '2006' );
addToCollection( 'I Wont Give Up', 'Jason Mraz', '2012' );
addToCollection( 'Lost On You', 'Lewis Capaldi', '2019' )
addToCollection( 'No Surprise', 'Daughtry', '2009')

// Testing Collection to see if addToCollection function added my songs.
console.log( 'This is my song collection', Collection);


function showCollection(listsongs) {
   for ( let songs = 0; Collection.length > songs; songs++) {
        console.log( Collection.length, `songs` );
}
    for ( let songs of Collection) {
        console.log( {title : songs.title} , `by`, { artist : songs.artist }, `, published in`, { yearPublished : songs.yearPublished })
        // Not sure if this is how Im suppose to do it.
    }
}
// Testing showCollection function.
showCollection(Collection)

// Creating findByArtist Function.

function findByArtist( artist ) {
    let match = [];
    for (let i = 0; i < Collection.length; i++) {
        if ( {artist:artist} === {artist: artist} ) {
            match.push(artist.artist)
            return match
        }
        else {
            return match
        }
    }
}
console.log(findByArtist('Daughtry'));

// I had trouble with this question, Please let me know if I am close or if I need more to learn from.