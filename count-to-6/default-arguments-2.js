module.exports = function makeImportant(str, num = str.length) {
	str = str + "!".repeat(num);
	return str
}