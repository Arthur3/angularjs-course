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

			let toLowerCaseSpy;
			let replaceSpy;

			before(function () {
				toLowerCaseSpy 	= sinon.spy(String.prototype, 'toLowerCase');
				replaceSpy 		= sinon.spy(String.prototype, 'replace');
			});

			it('should lowercase passed argument', () => {
				let result = MailboxService.getBoxUrlName('TITLE');

				result.should.be.equal('title');

				expect(toLowerCaseSpy.calledOnce).to.be.true;
				expect(replaceSpy.calledOnce).to.be.true;
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

			context('getCachaedMailboxes()', function () {

				it('should return list of mailboxes retrieved on the prev. step', () => {
					let mailboxes = MailboxService.getCachaedMailboxes();

					expect(mailboxes).eql(loadedMailboxesMock);
				})

			});

			context('findBoxIDByName()', function () {

				it('should find id of mailbox', () => {
					let id = MailboxService.findBoxIDByName('first_mailbox');

					expect(id).to.equal('1');
				});

				it('should return null when no mailbox found', () => {
					let id = MailboxService.findBoxIDByName('nonexistent_mailbox');

					expect(id).to.equal(null);
				});

			});

		});

		context('Letters', function () {

			let lettersResponseMock = [
				{
					_id 		: '1',
					mailbox 	: '1',
					subject 	: 'Test',
					body 		: 'Test',
					to 			: 'test@example.com'
				}
			];

			before(function () {
				$httpBackend.when('GET', `${MailboxService.baseUrl}/letters`).respond(lettersResponseMock);
				$httpBackend.when('GET', `${MailboxService.baseUrl}/letters?mailbox=1`).respond(lettersResponseMock);
				$httpBackend.when('GET', `${MailboxService.baseUrl}/letters/1`).respond(lettersResponseMock[0]);
				$httpBackend.when('POST', `${MailboxService.baseUrl}/letters`, lettersResponseMock[0]).respond('OK');
			});	

			context('loadLetters()', function () {

				it('should return letters list', done => {	
					MailboxService.loadLetters().then(letters => {
						expect(letters).eql(lettersResponseMock);
						done();
					}).catch(done);	

					$httpBackend.flush();
				});	

				it('should return letters list for specified mailbox', done => {	
					MailboxService.loadLetters(1).then(letters => {
						expect(letters).eql(lettersResponseMock);
						done();
					}).catch(done);	

					$httpBackend.flush();
				});

			});

			context('loadLetterDetails()', function () {

				it('should return letter details', done => {
					MailboxService.loadLetterDetails(1).then(resp => {
						expect(resp.data).eql(lettersResponseMock[0]);
						done()
					}).catch(done);	

					$httpBackend.flush();
				});
				
			});

			context('sendLetter()', function () {

				it('should send letter', done => {
					MailboxService.sendLetter(lettersResponseMock[0]).then(resp => {
						expect(resp.data).to.equal('OK');
						done()
					}).catch(done);	

					$httpBackend.flush();
				});

			}) 

		});

	});

}