const _ = require('lodash');
const { names, getInitial, line } = require('./constants');

lodashMap = () => _.map(names, getInitial);

vanillaMap = () => names.map(getInitial);

exports.runMap = () => {
    console.log('_.map / Array.prototype.map()\n');
    console.log('Lodash:', lodashMap());
    console.log('Vanilla Javascript:', vanillaMap());
    console.log(line);
}