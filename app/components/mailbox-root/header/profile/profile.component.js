'use strict';

export default app => {

	require('./profile.scss');
	let profileImgPath = require('./profile.jpg');

	app.component('profile', {
		template: require('./profile.html'),
		controller: function () {
			this.profileImg = profileImgPath;
		}
	});

}