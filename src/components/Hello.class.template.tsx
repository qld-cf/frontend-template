import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

// interface
interface IActions{ // redux的action集中放在这里
}
interface IProps{
  actions: IActions;
}
interface IState{
}

class Name extends Component<IProps, IState> {
  constructor (props: IProps) {
    super(props);
  }

  readonly state: IState = {
  }

  render () {
    return (
      <div>Hello React</div>
    );
  }
}

// connect
const mapStateToProps = (state: any) => {
  return {
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({}, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Name);
