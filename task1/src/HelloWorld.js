class HelloWorld {
	constructor(element) {
		this.element = element;
	}

	hello() {
		this.element.innerHTML = 'Hello World';
	}
}

export default HelloWorld;
