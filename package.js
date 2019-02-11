Package.describe({
  name: 'pauli:linkedin-config-ui',
  version: '4.0.0',
  summary:
    'Blaze configuration templates for LinkedIn OAuth, use with Meteor 1.6.1 & up',
  git:
    'https://github.com/PoBuchi/pauli-linkedin-config-ui',
  documentation: 'README.md',
})

Package.onUse(api => {
  api.versionsFrom('1.6.1')
  api.use('ecmascript')
  api.use('templating@1.2.13', 'client')

  api.addFiles('linkedin-login-button.css', 'client')
  api.addFiles(
    ['linkedin-configure.html', 'linkedin-configure.js'],
    'client',
  )
})
