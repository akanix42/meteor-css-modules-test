Package.describe({
	name: 'test',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: '',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: null
});

Package.onUse(function (api) {
	api.versionsFrom('1.2.1');
	api.use('nathantreid:css-modules');
	api.use('templating', 'client');
	api.addFiles([
		'test.mss',
		'test.html',
		'test.js'
	], 'client');
});
