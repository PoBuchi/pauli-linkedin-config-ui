Template.configureLoginServiceDialogForLinkedIn.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForLinkedIn.fields = function () {
  return [
    {property: 'clientId', label: 'API Key'},
    {property: 'secret', label: 'Secret Key'}
  ];
};
