class HelloWorld {
	constructor(element) {
		this.element = element;
		this.hello();
	}

	hello() {
		this.element.innerHTML = 'Hello World';
	}
}

export default HelloWorld;
