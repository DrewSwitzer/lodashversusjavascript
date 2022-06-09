const _ = require('lodash');
const { names, line } = require('./constants');

const lodashFindIndex = () => _.findIndex(names, ( name ) => name === 'Mary');

const vanillaFindIndex = () => names.findIndex( name => name === 'Mary');

exports.runFindIndex = () => {
    console.log('_.findIndex / Array.prototype.findIndex()\n');
    console.log('Lodash:', lodashFindIndex()); //3
    console.log('Vanilla Javascript:', vanillaFindIndex());
    console.log(line);
}