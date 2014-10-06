module.exports.init = function(app, bus) {
	console.log('Sample Extension Loaded');

	app.get('/hello', function(req, res){
		res.send('{"hello": "world"}');
	});
}