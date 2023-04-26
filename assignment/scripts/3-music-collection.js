console.log('***** Music Collection *****')

let Collection = [];

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
        return Collection[Collection.length]
    }
}
addToCollection( 'Forever', 'Lewis Capaldi', '2019' );
addToCollection( 'Hate everything', 'G-soul', '2019' );
addToCollection( 'What About Now', 'Daughtry', '2006' );
addToCollection( 'Lips Of An Angel', 'Hinder', '2005' );
addToCollection( 'Dont Matter', 'Akon', '2006' );
addToCollection( 'I Wont Give Up', 'Jason Mraz', '2012' );
addToCollection( 'Lost On You', 'Lewis Capaldi', '2019' )

console.log( 'This is my song collection', Collection);


function showCollection(listsongs) {
   for ( let songs = 0; Collection.length > songs; songs++) {
        console.log( Collection.length, `songs` );
}
    for ( let songs of Collection) {
        console.log( {title:songs.title}, 'by', {artist:songs.artist}, ', published in', {yearPublished:songs.yearPublished} )
}
}
showCollection(Collection);

