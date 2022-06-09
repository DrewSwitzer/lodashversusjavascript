const _ = require('lodash');
const { names, line } = require('./constants');

const lodashRound = () => _.some(names, ( name ) => name === 'Mary');

const vanillaRound = () => names.some( name => name === 'Mary');

exports.runSome = () => {
    console.log('_.some / Array.prototype.some()\n');
    console.log('Lodash:', lodashRound()); //true
    console.log('Vanilla Javascript:', vanillaRound());
    console.log(line);
}