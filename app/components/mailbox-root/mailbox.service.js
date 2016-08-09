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
			});
		}
	}

	app.service('MailboxService', MailboxService);

}