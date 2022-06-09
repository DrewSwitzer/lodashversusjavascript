const _ = require('lodash');
const { people, names, line } = require('./constants');

const lodashFilter = () =>  _.filter(names, ( name ) => name.includes( 'a' ));

const lodashCollectionFilter = () => _.filter( people, { age: 24 })

const vanillaFilter = () => names.filter( name => name.includes( 'a' ));

const vanillaCollectionFilter = () => people.filter( person => person.age === 24 );

exports.runFilter = () => {
    console.log('_.filter / Array.prototype.filter()\n');
    console.log('Lodash:', lodashFilter()); //['Sharon', 'Mary', 'Donald']
    console.log('Vanilla Javascript:', vanillaFilter());
    
    console.log('Lodash:', lodashCollectionFilter());
    console.log('Vanilla Javascript:', vanillaCollectionFilter());
    console.log(line);
}