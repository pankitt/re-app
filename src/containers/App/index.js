import React, { Component } from 'react';
import './style.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../../components/User'
import Page from '../../components/Page'
import * as pageActions from '../../actions/PageActions';

const mapStateToProps = (state) => ({
    user: state.user,
    page: state.page
});

class App extends Component {
  render() {
    const { user, page } = this.props;
    const { setYear } = this.props.pageActions;

    return (
      <div className="App">
          <p className="App-intro">
              <span className="square"></span>
          </p>
          <User name={user.name} surname={user.surname} age={user.age}/>
          <Page photos={page.photos} year={page.year} setYear={setYear} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
        pageActions: bindActionCreators(pageActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
