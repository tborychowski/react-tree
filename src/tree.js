import React, { Component } from 'react';

class Tree extends Component {
	onItemClick (e) {
		e.stopPropagation();
		e.target.closest('li').classList.toggle('expanded');
	}

	arrayToTree (data, parentId) {
		return data
			.filter(i => i.parentId === parentId)
			.map(item => {
				const items = this.arrayToTree(data, item.id);
				if (items && items.length) item.items = items;
				return item;
			});
	}

	getItemHtml (item) {
		const chevron = item.items ? <i className="chevron">›</i> : '';
		const sub = item.items ? this.getItemsHtml(item.items) : '';
		return (
			<li className="nav-item" key={item.id} onClick={this.onItemClick.bind(this)}>
				<span className="nav-item-name">{item.name}{chevron}</span>
				{sub}
			</li>
		);
	}

	getItemsHtml (data) {
		const items = data.map(this.getItemHtml.bind(this));
		return <ul className="nav-items">{items}</ul>;
	}

	render () {
		const data = this.arrayToTree(this.props.data);
		return this.getItemsHtml(data);
	}
}

export default Tree;
