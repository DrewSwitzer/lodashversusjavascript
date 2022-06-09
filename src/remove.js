const _ = require('lodash');
const { names, line } = require('./constants');

const lodashRemove = () => _.remove( names, name => name.includes( 'o' ));

const vanillaRemove = () => names.filter( name => !name.includes( 'o' ));

exports.runRemove = () => {
    console.log('_.remove / Array.prototype.filter()\n');
    console.log('Lodash:', lodashRemove()); //['Mary']
    console.log('Vanilla Javascript:', vanillaRemove());
    console.log(line);
}