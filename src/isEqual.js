const _ = require('lodash');
const { people, line } = require('./constants');

const bob = { name: 'Bob', age: 42, school: 'Akron' };

const lodashIsEqual = () => _.isEqual(people[0], bob);

exports.runIsEqual = () => {
    console.log('_.isEqual\n');
    console.log('Lodash:', lodashIsEqual()) //true
    console.log('\nVanilla javascript object equivalence is a mess. Just use lodash for object comparison\n');
    console.log(line);
    // The vanilla javascript equivalent is a mess. Just use lodash for object comparison.
}