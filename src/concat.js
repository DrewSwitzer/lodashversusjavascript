const _ = require('lodash');
const { people, newPeople, line } = require('./constants');

const lodashConcat = () => _.concat( people, newPeople );

const vanillaConcat = () => people.concat( newPeople );

const vanillaConcatSpreadOperator = () => [ ...people, ...newPeople ];

exports.runConcat = () => {
    console.log('_.concat / Array.prototype.concat() / ... spread operator\n');
    console.log('Lodash:', lodashConcat());
    console.log('Vanilla Javascript:', vanillaConcat());
    console.log('Vanilla Javascript (Spread Operator):', vanillaConcatSpreadOperator());
    console.log(line);
}