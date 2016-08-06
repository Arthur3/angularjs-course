'use strict';

import searchbox from './searchbox/searchbox.component';

export default app => {
	/* deps */
	searchbox(app);

	require('./header.scss');

	app.component('mbHeader', {
		template: require('./header.html')
	});

}