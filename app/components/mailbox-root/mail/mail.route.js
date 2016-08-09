'use strict';

export default app => {

	app.config($stateProvider => {

		$stateProvider.state('index.mailbox', {
			url: 'mailbox',
			template: `<mail mailboxes="mailboxes"></mail>`,
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