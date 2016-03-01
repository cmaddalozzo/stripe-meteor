Package.describe({
  summary: "Stripe.js and Node-Stripe v4 brought to Meteor. Based on mrgalaxy:stripe",
	version: "1.0.0",
	name: "leisure:stripe",
	git: "https://github.com/cmaddalozzo/stripe-meteor.git"
});

Npm.depends({ "stripe": "4.4.0" });

Package.onUse(function(api) {
	api.versionsFrom('1.0.1');
	if (api.export) api.export('STRIPEMETEOR');
	api.use(['templating'], 'client');
	api.addFiles('stripe_client.html', 'client');
	api.addFiles('stripe_server.js', 'server');
});

Package.on_test(function(api) {
	api.use(['tinytest','leisure:stripe']);
	api.add_files([ "tests/client.js", "tests/checkout.js" ], 'client');
	api.add_files([ "tests/server.js" ], 'server');
});
