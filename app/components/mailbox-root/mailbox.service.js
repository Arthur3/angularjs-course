'use strict';

export default app => { 

	class MailboxService {
		constructor ($http) {
			this.$http 		= $http;
			this.baseUrl 	= ' http://test-api.javascript.ru/v1/artur3';
			this.mailboxes 	= [];
		}

		getCachaedMailboxes () {
			return this.mailboxes;
		}

		getBoxUrlName (title) {
			return title.toLowerCase().replace(' ', '_');
		}

		loadMailBoxes () {
			return this.$http.get(this.baseUrl + '/mailboxes').then(resp => {
				this.mailboxes = resp.data.sort((boxA, boxB) => (boxA._id > boxB._id));

				this.mailboxes.map(box => {
					box.urlName = this.getBoxUrlName(box.title);
					return box;
				});

				return this.mailboxes;
			});
		}

		findBoxIDByName (urlName) {
			for (let box of this.mailboxes) {
				if (this.getBoxUrlName(box.title) == urlName) {
					return box._id
				}
			}

			return null;
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

		loadLetterDetails (letterID) {
			return this.$http.get(this.baseUrl + '/letters/' + letterID);
		}

		sendLetter (data) {
			return this.$http.post(
				this.baseUrl + '/letters', 
				angular.extend({ mailbox: '57a6cf806baa8d7d1bfe6406' }, data)
			);
		}
	}

	app.service('MailboxService', MailboxService);

}