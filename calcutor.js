// SUM
exports.add = (a, b) => {
	if (arguments.length !== 2) {
		console.log("expected two arguments");
	}

	if(typeof b !== Number) {
		console.log("It's not an number!");
	}

	if(typeof a !== Number) {
		console.log("It's not an number!");
	}
	return a + b;
};

//SUB
exports.sub = (a, b) => {
	if (arguments.length !== 2) {
		console.log("Too much arguments");
	}

	if(typeof b !== Number) {
		console.log("It's not an number!");
	}

	if(typeof a !== Number) {
		console.log("It's not an number!");
	}
	return a - b;
} 

// mult
exports.mult = (a, b) => {
	if (arguments.length !== 2) {
		console.log("Too much arguments");
	}

	if(typeof b !== Number) {
		console.log("It's not an number!");
	}

	if(typeof a !== Number) {
		console.log("It's not an number!");
	}
	return a * b;
} 

//div

exports.div = (a, b) => {
	if (arguments.length !== 2) {
		console.log("Too much arguments");
	}

	if(typeof b !== Number) {
		console.log("It's not an number!");
	}

	if(typeof a !== Number) {
		console.log("It's not an number!");
	}
	return a / b;
}


