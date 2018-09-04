

let Pwd = {

	createPassword: function(pwd) {
		bcrypt.hash(pwd, saltRounds, function(err, hash) {
			if (err) {
				return (false);
			}
			else {
				return (hash)
			}
		});
	},

	checkPassword: function(pwd) {

	}
}

module.exports = Pwd;