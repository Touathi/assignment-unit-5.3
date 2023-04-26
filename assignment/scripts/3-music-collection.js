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
        return Collection[Collection.length - 1]
    }
}
console.log(addToCollection('Forever', 'Lewis Capaldi', '2019' ));

