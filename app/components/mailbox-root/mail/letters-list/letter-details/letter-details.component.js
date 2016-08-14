'use strict';

import route from './letter-details.route';

export default app => {

	route(app);

	require('./letter-details.scss');

	app.component('letterDetails', {
		template: require('./letter-details.html'),
		bindings: {
			letter: '<'
		},
		controller: /*@ngInject*/ function ($sce) {

			this.getLetterBody = () => {
				return $sce.trustAsHtml(this.letter.body);
			};

		}
	});

}