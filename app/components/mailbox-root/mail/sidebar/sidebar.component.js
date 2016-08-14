'use strict';

export default app => {

	require('./sidebar.scss');

	app.component('sidebar', {
		template: require('./sidebar.html'),
		bindings: {
			items: '<'
		},
		controller: /*@ngInject*/ function ($state, $stateParams) {

			this.itemClass = item => {
				return {
					active: $state.includes('index.mailbox') 
									&& ($stateParams.boxID == item._id || $stateParams.boxName == item.urlName)
				}
			};

			this.$onInit = () => {
				if (this.items.length && !$state.is('index.mailbox.letter')) {
					let item = this.items[0];
					$state.go('index.mailbox.box', { boxName: item.urlName, boxID: item._id });
				}
			};

		}
	})

}