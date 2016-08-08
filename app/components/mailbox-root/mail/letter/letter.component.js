'use strict';

export default app => {

	require('./letter.scss');

	app.component('letter', {
		template: require('./letter.html'),
		bindings: {
			letter: '<item'
		},
		transclude: true,
		controller: function () {

		}
	})

}