'use strict';

import Panel from '../src/Panel';

describe('Panel', function() {
	it('should set visible to false when "hide" method is called', function() {
		var panel = new Panel().render();
		panel.hide();
		assert.ok(!panel.visible);
	});
});
