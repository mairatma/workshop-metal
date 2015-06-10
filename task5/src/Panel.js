'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './Panel.soy';

class Panel extends SoyComponent {
	hide() {
		this.visible = false;
	}
}

Panel.ATTRS = {
	title: {
		value: 'Title'
	},
	body: {
		value: 'Body'
	}
};

Panel.ELEMENT_CLASSES = 'panel panel-default';

ComponentRegistry.register('Panel', Panel);

export default Panel;
