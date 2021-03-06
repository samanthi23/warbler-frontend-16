import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";

const Main = props => {
  const { authUser } = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => <Homepage {...props} />} />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default withRouter(connect(mapStateToProps)(Main));
