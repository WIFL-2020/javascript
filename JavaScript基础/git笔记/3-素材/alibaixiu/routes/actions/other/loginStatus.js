module.exports = async (req, res) => {
	if (req.session && req.session.userInfo) {
		res.send({login: true});
	}else {
		res.send({login: false});
	}
};
