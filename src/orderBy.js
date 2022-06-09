const _ = require('lodash');
const { people, line } = require('./constants');

const lodashOrderBy = () => _.orderBy(people, [ 'name' ]);

const lodashMultipleOrderBy = () => _.orderBy(people, [ 'name', 'age' ], [ 'asc', 'desc' ]);

const vanillaOrderBy = () => people.sort(( a, b ) => a.toString().localeCompare( b ));

const vanillaMultipleOrderBy = () =>people.sort(( a, b ) => a.toString().localeCompare( b )) //sorting is definitely clunkier with vanilla Javascript
    .sort(( a, b ) => a.age > b.age);

exports.runOrderBy = () => {
    console.log('_.orderBy / Array.prototype.sort()\n');
    console.log('Lodash:', lodashOrderBy());
    console.log('Vanilla Javascript:', vanillaOrderBy());
    
    console.log('Lodash:', lodashMultipleOrderBy());
    console.log('Vanilla Javascript:', vanillaMultipleOrderBy());

    console.log('\nYou can achieve orderBy using sort, but its a bit clunky. There\'s a valid argument to use lodash here instead.\n');
    console.log(line);
}