'use strict';

export default app => {

	app.component('emailForm', {
		template: require('./email-form.html'),
		bindings: {
			onSubmit: '&'
		},
		controller: function () {
			this.letter = {};

			this.sendLetter = () => {
				this.onSubmit({ letter: this.letter }).catch(() => {
					this.letterForm.$setPristine();
				});
			}

			this.isSubmitDisabled = () => {
				return this.letterForm.$invalid || this.letterForm.$submitted;
			}

		}
	});

}