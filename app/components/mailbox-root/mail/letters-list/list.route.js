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
				letters: ['MailboxService', '$stateParams', '$state', 'MaillistService', lettersResolve]
			},
			controller: ['$scope', 'letters', function ($scope, letters) {
				$scope.letters = letters;
			}]
		});

	});

	function lettersResolve (MailboxService, $stateParams, $state, MaillistService) {
		let boxID = $stateParams.boxID || MailboxService.findBoxIDByName($stateParams.boxName);

		$stateParams.boxID = boxID;

		if(!boxID) {
			$state.go('index.mailbox');
		} else {
			return MailboxService.loadLetters(boxID).then(function (letters) {

				MaillistService.initSelection(letters.map(l => l._id));
				
				return letters;
			});
		}
	}
}