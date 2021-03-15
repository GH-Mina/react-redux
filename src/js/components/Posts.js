import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.error);
  }

  render() {
    return null;
  }
}

export default connect(null, { getData })(Post);
