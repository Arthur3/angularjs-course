'use strict';

export default app => {

	app.config($stateProvider => {

		$stateProvider.state('index.mailbox.letter', {
			url: '/:boxName/:letterID',
			template: '<letter-details letter="letter"></letter-details>',
			resolve: {
				letter: /*@ngInject*/ function (MailboxService, $stateParams) {
					return MailboxService.loadLetterDetails($stateParams.letterID)
					.then(resp => resp.data);
				}
			},
			controller: /*@ngInject*/ function ($scope, letter) {
				$scope.letter = letter;
			}
		});
	});

}