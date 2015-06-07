import Attribute from '../bower_components/metal/src/attribute/Attribute';

class HelloWorld extends Attribute {
	constructor(element, opt_config) {
		super(opt_config);
		this.element = element;

		this.hello();
		this.on('nameChanged', this.hello.bind(this));
	}

	hello() {
		this.element.innerHTML = 'Hello ' + this.name;
	}
};

HelloWorld.ATTRS = {
	name: {
		value: 'World'
	}
}

export default HelloWorld;
