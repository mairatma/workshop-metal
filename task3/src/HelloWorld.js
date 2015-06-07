import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './HelloWorld.soy';

class HelloWorld extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}
};

HelloWorld.ATTRS = {
	name: {
		value: 'unknown'
	}
}

ComponentRegistry.register('HelloWorld', HelloWorld);

export default HelloWorld;
