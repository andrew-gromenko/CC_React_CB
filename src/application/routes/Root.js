import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

import Routing from '../routes';
import Header from '../components/Header';

import {initializeAction} from '../services/Application/aids/actions';

class RootContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const {initialize} = this.props;

		initialize();
	}

	render() {
		const {location} = this.props;
		const sign = !!location.pathname.match('sign');

		return (
			<div className={sign && 'with-background'}>
				<Header />
				<section className="main-content">
					<Routing />
				</section>

				<footer className="text-center">
					Clockbeats IVS ® 2017 All Rights Reserved | Reg. no. DK 36965339. | <Link to="/terms">Terms of Use</Link>
				</footer>
			</div>
		);
	}
}

export default withRouter(connect(
	null,
	dispatch => ({initialize: () => dispatch(initializeAction())}),
)(RootContainer));