'use strict';

export default app => {

	class MaillistService {
		constructor ($log) {
			this.$log 		= $log;
			this.selection 	= {};
		}

		getSelection () {
			return this.selection;
		}

		toggleAll (isSelected) {
			
			this.$log.log('Selection toggle');

			Object.keys(this.selection).forEach(itemID => {
				this.selection[itemID] = isSelected;
			});
		}

		getSelected () {

			this.$log.log('Returning selected items');

			return Object.keys(this.selection).filter(itemID => !!this.selection[itemID]);
		}

		initSelection (IDs) {
			this.$log.log('Reinitializing selection');

			this.selection = {};

			IDs.forEach(id => {
				this.selection[id] = false;
			})
		}
	}

	app.service('MaillistService', ['$log', MaillistService])

}