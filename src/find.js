const _ = require('lodash');
const { names, line } = require('./constants');

const lodashFind = () => _.find(names, ( name ) => name === 'Mary');

const vanillaFind = () => names.find( name => name === 'Mary');

exports.runFind = () => {
    console.log('_.find / Array.prototype.find()\n');
    console.log('Lodash:', lodashFind()); //'Mary'
    console.log('Vanilla Javascript:', vanillaFind());
    console.log(line);
}