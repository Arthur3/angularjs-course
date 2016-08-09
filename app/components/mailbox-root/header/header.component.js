'use strict';

import searchbox from './searchbox/searchbox.component';
import profile from './profile/profile.component';

export default app => {
	/* deps */
	searchbox(app);
	profile(app);

	require('./header.scss');
	let googleImgPath = require('./google.png');

	app.component('mbHeader', {
		template: require('./header.html'),
		controller: function () {
			this.googleImg = googleImgPath;
		}
	});

}