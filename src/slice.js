const _ = require('lodash');
const { names, line } = require('./constants');

const lodashSlice = () => _.slice( names, 0, 2 );

const vanillaSlice = () => names.slice( 0, 2 );

exports.runSlice = () => {
    console.log('_.slice / Array.prototype.slice()\n');
    console.log('Lodash:', lodashSlice()); //['Bob', 'Sharon']
    console.log('Vanilla Javascript:', vanillaSlice());
    console.log(line);
}