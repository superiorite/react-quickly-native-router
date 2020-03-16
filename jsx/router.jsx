import React from 'react';


class Router extends React.Component {
	constructor(props) {
		super(props)
		//Присваивает исходное значение идентификатора фрагмента
		this.state = {hash: window.location.hash}
		this.updateHash = this.updateHash.bind(this)
	}
	updateHash(event) {
		this.setState({hash: window.location.hash})
	}
	//Предоставляет новые значения идентификатора фрагмента
	componentDidMount() {
		window.addEventListener('hashchange', this.updateHash, false)
	}
	componentWillUnmount() {
		window.removeEnetListener('hashchange', this.updateHash, false)
	}
	render() {
		//Выполняет рендер контента, соответствующего идентификатору фрагмента
		if (this.props.mapping[this.state.hash])
			return this.props.mapping[this.state.hash]
		else
			return this.props.mapping['*']
	}
}

export default Router;