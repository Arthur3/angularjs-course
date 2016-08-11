'use strict';

export default app => { 

	class MailboxService {
		constructor ($http) {
			this.$http = $http;
			this.baseUrl = ' http://test-api.javascript.ru/v1/artur3';
		}

		loadMailBoxes () {
			return this.$http.get(this.baseUrl + '/mailboxes');
		}

		loadLetters (boxID) {
			return this.$http.get(this.baseUrl + '/letters', {
				params: { mailbox: boxID }
			}).then(resp => {
				let letters = resp.data;

				if(boxID) {
					/*
					* Hack: API does not filter letters
					* So we need to filter them manually
					*/
					return letters.filter(l => (l.mailbox == boxID));
				} else {
					return letters;
				}
			})
		}
	}

	app.service('MailboxService', MailboxService);

}