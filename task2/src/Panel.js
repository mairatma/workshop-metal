import Attribute from '../bower_components/metal/src/attribute/Attribute';

class Panel extends Attribute {
	constructor(opt_config) {
		super(opt_config);

		this.element.innerHTML = '<div class="panel panel-default">' +
			'<div class="panel-heading">' + this.title + '</div>' +
			'<div class="panel-body">' + this.body + '</div>' +
			'</div>';

		this.on('titleChanged', this.onTitleChanged.bind(this));
		this.on('bodyChanged', this.onBodyChanged.bind(this));
	}

	onTitleChanged() {
		this.element.querySelector('.panel-heading').innerHTML = this.title;
	}

	onBodyChanged() {
		this.element.querySelector('.panel-body').innerHTML = this.body;
	}
};

Panel.ATTRS = {
	element: {
		value: null
	},
	title: {
		value: 'Title'
	},
	body: {
		value: 'Body'
	}
}

export default Panel;
