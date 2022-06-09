exports.names = ['Bob', 'Sharon', 'John', 'Mary', 'Donald'];
exports.people = [
	{ name: 'Bob', age: 42, school: 'Akron' },
	{ name: 'Sharon', age: 33, school: 'Kent' },
	{ name: 'John', age: 24, school: 'Ohio State' },
	{ name: 'Mary', age: 28, school: 'Miami' },
	{ name: 'Donald', age: 55, school: 'Bowling Green' },
];
exports.newPeople = [
	{ name: 'Jill', age: 44, school: 'Toledo' },
	{ name: 'Joe', age: 35, school: 'Ohio' },
];

exports.getInitial = (name) => {
	return name.length > 0 ? name[0] : '';
}

exports.printAge = (person) => {
	console.log(person?.age ?? -1);
}
exports.line = '-'.repeat(process.stdout.columns);