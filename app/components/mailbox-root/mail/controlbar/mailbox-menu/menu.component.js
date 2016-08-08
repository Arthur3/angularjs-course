'use strict';


export default app => {

	require('./menu.scss');

	app.component('mailboxMenu', {
		template: require('./menu.html')
	});
}