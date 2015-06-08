class Panel {
	constructor(element, title, body) {
		element.innerHTML = '<div class="panel panel-default">' +
			'<div class="panel-heading">' + title + '</div>' +
			'<div class="panel-body">' + body + '</div>' +
			'</div>';
	}
}

export default Panel;
