'use strict';

export default app => {

	require('./letter.scss');

	app.component('letter', {
		template: require('./letter.html'),
		bindings: {
			letter: '<item'
		},
		transclude: true,
		controller: /*@ngInject*/ function ($state, $stateParams) {
			this.showDetails = () => {
				$state.go('index.mailbox.letter', { letterID: this.letter._id, boxName: $stateParams.boxName });
			};
		}
	})

}