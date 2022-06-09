const _ = require('lodash');
const { runMap } = require('./src/map');
const { runForEach } = require('./src/forEach');
const { runConcat } = require('./src/concat');
const { runSlice } = require('./src/slice');
const { runFilter } = require('./src/filter');
const { runRemove } = require('./src/remove');
const { runFind } = require('./src/find');
const { runFindIndex } = require('./src/findIndex');
const { runSome } = require('./src/some');
const { runOrderBy } = require('./src/orderBy');
const { runIsEqual } = require('./src/isEqual');
const { runCloneDeep } = require('./src/cloneDeep');
const { runRound } = require('./src/round');
const line = '-'.repeat(process.stdout.columns);

console.log('Lodash vs. Vanilla Javascript');
console.log(line);

/*
* This is a quick comparison of some common lodash functions to their vanilla Javascript equivalents.
* For many array/collection operations, we should use vanilla Javascript whenever possible, but
* there are definitely some cases where lodash is a better alternative.
*/

//----------_.map / Array.prototype.map()-----------------------
runMap();
//----------_.forEach / Array.prototype.map()-----------------------
runForEach();
//----------_.concat / Array.prototype.concat() / ... spread operator -----------------------
runConcat();
//----------_.slice / Array.prototype.slice() -----------------------
runSlice();
//----------_.filter / Array.prototype.filter()-----------------------
runFilter();
//----------_.remove / Array.prototype.filter() -----------------------
runRemove();
//----------_.find / Array.prototype.find()-----------------------
runFind();
//----------_.findIndex / Array.prototype.findIndex()-----------------------
runFindIndex();
//----------_.some / Array.prototype.some()-----------------------
runSome();
//----------_.orderBy / Array.prototype.sort()-----------------------
runOrderBy();
//---------_.isEqual-------------------------------------------------
runIsEqual();
//----------_.cloneDeep / ... spread operator + Array.prototype.map() -----------------------
runCloneDeep();
//----------_.round / Number.prototype.toFixed()-----------------------
runRound();
