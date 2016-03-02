// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

// function html(arry, username, comment) {

// 	comment = comment.replace('&', "&amp;");
// 	comment = comment.replace("'", "&apos;");
// 	comment = comment.replace('"', "&quot;");
// 	comment = comment.replace('<', "&lt;");
// 	comment = comment.replace('>', "&gt;");

// 	var output = arry.join(username);
// 	output = output.replace(username+'"', comment+'"');

// 	return output
// }



// OFFICIAL SOLUTION
//_______________________________________________________________________________//
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...substitutions) {
	var result = pieces[0];
	for (var i = 0; i < substitutions.length; ++i) {
		result += escape(substitutions[i]) + pieces[i + 1];
	}

	return result;
}

function escape(s) {
	return s.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/'/g, "&apos;")
			.replace(/"/g, "&quot;");
}