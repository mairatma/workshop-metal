import Attribute from '../bower_components/metal/src/attribute/Attribute';

class HelloWorld extends Attribute {
	constructor(opt_config) {
		super(opt_config);

		this.hello();
		this.on('nameChanged', this.hello.bind(this));
	}

	hello() {
		this.element.innerHTML = 'Hello World!<div>My name is ' +  this.name + '</div>';
	}
};

HelloWorld.ATTRS = {
	element: {
		value: null
	},
	name: {
		value: 'unknown'
	}
}

export default HelloWorld;
