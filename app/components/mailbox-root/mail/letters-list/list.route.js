'use strict';

export default app => {

	app.config($stateProvider => {

		$stateProvider.state('index.mailbox.box', {
			url: '/:boxName',
			params: {
				boxID: null
			},
			template: `<letters-list letters="letters"></letters-list>`,
			resolve: {
				letters: ['MailboxService', '$stateParams', '$state', function (MailboxService, $stateParams, $state) {
					if(!$stateParams.boxID) {
						$state.go('index.mailbox');
					} else {
						return MailboxService.loadLetters($stateParams.boxID).then(function (resp) {
							return resp.data;
						});
					}
				}]
			},
			controller: ['$scope', 'letters', function ($scope, letters) {
				$scope.letters = letters;
			}]
		});

	});


}