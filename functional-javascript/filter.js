// function getShortMessages(messages) {
// 	var shortMessages = [];
// 	messages = messages.filter(filterFifty);
// 	// console.log(messages);
// 	shortMessages = messages.map(returnStr);
// 	// console.log(shortMessages);
// 	return shortMessages
// }

// function returnStr(obj) {
// 	return obj.message
// }

// function filterFifty(obj) {
// 	// console.log(obj.message.length < 50);
// 	return obj.message.length < 50
// }

// module.exports = getShortMessages

// OFFICIAL ANSWER
//_______________________________________//
module.exports = function getShortMessages(messages) {
	return messages.filter(function(item) {
		return item.message.length < 50
	}).map(function(item) {
		return item.message
	})
}
