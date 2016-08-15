'use strict';

import composerModal from './composer-modal/email-form.component';

export default app => {

	composerModal(app);

	require('./sidebar.scss');

	app.component('sidebar', {
		template: require('./sidebar.html'),
		bindings: {
			items: '<'
		},
		controller: /*@ngInject*/ function ($state, $stateParams, $uibModal) {

			this.itemClass = item => {
				return {
					active: $state.includes('index.mailbox') 
									&& ($stateParams.boxID == item._id || $stateParams.boxName == item.urlName)
				}
			};

			this.compose = () => {
				$uibModal.open({
					template: 
						`<div class="modal-header text-center">
						 	<h4>Create New Letter</h4>
						 </div>
						 <div class="modal-body">
							<email-form on-submit="sendLetter(letter)"></email-form>
						</div>
						<div class="modal-footer">
							<button class="btn btn-default" ng-click="$close()">Close</button>
						</div>`,
					controller: /*@ngInject*/ function ($scope, MailboxService, toastr) {
						$scope.sendLetter = letter => {
							return MailboxService.sendLetter(letter).then(() => {
								toastr.success('Letter Sent');
								$scope.$close();
							});
						}
					}
				})
			}

			this.$onInit = () => {
				if (this.items.length && !$state.is('index.mailbox.letter')) {
					let item = this.items[0];
					$state.go('index.mailbox.box', { boxName: item.urlName, boxID: item._id });
				}
			};

		}
	})

}