'use strict';


export default app => {

	require('./menu.scss');

	app.component('mailboxMenu', {
		template: require('./menu.html'),
		controller: /*@ngInject*/ function ($state) {

			this.itemClass = function (stateName) {
				return {
					active: $state.includes(stateName)
				}
			}

		}
	});
}