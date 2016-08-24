/*jshint expr: true*/ 


export default app => {

	describe('MailboxService', function () {

		window.module.sharedInjector();

		before(window.module(app.name));

		let MailboxService, $httpBackend;

		before(window.inject(function (_MailboxService_, _$httpBackend_) {
			MailboxService 	= _MailboxService_;
			$httpBackend 	= _$httpBackend_;
		}));

		context('getBoxUrlName()', function () {
			// TODO add spies just to "play" with them

			it('should lowercase passed argument', () => {
				let result = MailboxService.getBoxUrlName('TITLE');

				result.should.be.equal('title');
			});

			it('should replace white spaces with low dash', () => {
				let result = MailboxService.getBoxUrlName('some title');

				result.should.be.equal('some_title');
			});

		});

		context('Mailboxes', function () {

			let mailboxesResponseMock = [
				{ _id: '1', title: 'First Mailbox' },
				{ _id: '2', title: 'Second Mailbox' }
			];

			let loadedMailboxesMock = [
				{ _id: '1', title: 'First Mailbox', urlName: 'first_mailbox' },
				{ _id: '2', title: 'Second Mailbox', urlName: 'second_mailbox' }
			];


			context('loadMailBoxes()', function () {	

				before(function () {
					$httpBackend.when('GET', `${MailboxService.baseUrl}/mailboxes`).respond(mailboxesResponseMock);
				});	

				it('should load list of mailboxes from server', done => {
					MailboxService.loadMailBoxes().then(mailboxes => {
						expect(mailboxes).eql(loadedMailboxesMock);
						done();
					}).catch(done);	

					$httpBackend.flush();
				})	

			});

		})

	});

}