
export default app => {

	describe('mailboxRoot', function () {

		window.module.sharedInjector();

		before(window.module(app.name));

		it('should do nothing', () => {
			true.should.be.true;
		});

	});

};
