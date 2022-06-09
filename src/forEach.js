const _ = require('lodash');
const { people, printAge, line } = require('./constants');

lodashForEach = () => _.forEach(people, printAge);

vanillaForEach = () => people.forEach(printAge);

exports.runForEach = () => {
    console.log('_.forEach / Array.prototype.map()\n');
    console.log('Lodash:');
    lodashForEach();
    console.log('Vanilla Javascript:');
    vanillaForEach();
    console.log(line);
}