'use strict';

export default app => {
	app.config($stateProvider => {
		$stateProvider.state('index', {
			url: '/',
			template: '<mailbox-root mailboxes="mailboxes"></mailbox-root>',
			resolve: {
				mailboxes: ['MailboxService', function (MailboxService) {
					return MailboxService.loadMailBoxes().then(function (resp) {
						return resp.data;
					});
				}]
			},
			controller: ['$scope', 'mailboxes', function ($scope, mailboxes) {
				$scope.mailboxes = mailboxes;
			}]
		});
	});
}