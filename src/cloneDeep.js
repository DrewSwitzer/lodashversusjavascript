const _ = require('lodash');
const { people, line } = require('./constants');

const lodashCloneDeep = () => _.cloneDeep( people );

const vanillaCloneDeep = () => people.map( person => { return { ...person } });

const vanillaCloneDeepWithJSONFunctions = () => JSON.parse( JSON.stringify( people ) );

exports.runCloneDeep = () => {
    console.log('_.cloneDeep / ... spread operator + Array.prototype.map()\n');
    const peopleClone = lodashCloneDeep();
    const peopleVanillaClone = vanillaCloneDeep();
    const weirdVanillaClone = vanillaCloneDeepWithJSONFunctions(); // Have to be careful with this one, will experience data loss if object properties have complex types (Date, undefined, functions, etc)
    
    console.log('Lodash:', peopleClone[0] === people[0]); //false
    console.log('Vanilla Javascript:', peopleVanillaClone[0] === people[0]);
    console.log('Vanilla Javascript (JSON parse/stringify):', weirdVanillaClone[0] === people[0]);
    console.log(line);
}