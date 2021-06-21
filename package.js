"use strict";

Package.describe({
  summary: "Support anonymous logins",
  version: "0.3.2",
  name: "brettle:accounts-anonymous",
  git: "https://github.com/brettle/meteor-accounts-anonymous.git"
});

Package.onUse(function(api) {
  api.versionsFrom(['1.0.4', '2.3']);
  api.use(['accounts-base'], 'client');
  api.use(['accounts-base', 'callback-hook'], 'server');
  api.use('underscore', 'server');
  api.use('brettle:accounts-multiple@0.3.1', 'server');
  api.addFiles('accounts-anonymous.js', ['client', 'server']);
  api.export('AccountsAnonymous');
  api.addFiles('accounts-anonymous-server.js', 'server');
  api.addFiles('accounts-anonymous-client.js', 'client');
});

Package.onTest(function(api) {
  api.versionsFrom(['1.0.4', '2.3']);
  api.use(['brettle:accounts-anonymous@0.3.1', 'accounts-base', 'tinytest'],
    ['client', 'server']);
  api.use('brettle:accounts-multiple@0.3.1');
  api.use('accounts-password', 'server');
  api.use('ddp', 'server');
  api.addFiles('accounts-anonymous-server-tests.js', 'server');
  api.addFiles('accounts-anonymous-client-tests.js', 'client');
});
