const _ = require('lodash');
const number = 12.3456;

const lodashRound = () => _.round( number, 2 );

const vanillaRound = () => number.toFixed( 2 );

exports.runRound = () => {
    console.log('_.round / Number.prototype.toFixed()\n');
    console.log('Lodash:', lodashRound()); //12.35
    console.log('Vanilla Javascript:', vanillaRound());
}