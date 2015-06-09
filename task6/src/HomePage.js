'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './HomePage.soy';
import './Panel';
import 'bower:alloy-modal/src/Modal';

class HomePage extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}
}

HomePage.ATTRS = {
	panelTitle: {
		value: 'Home Page Title'
	}
};

ComponentRegistry.register('HomePage', HomePage);

export default HomePage;
