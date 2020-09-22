import React from 'react';
import { BaseProps, Component } from '../../libs';

type BtnGroup =  {} & BaseProps;

export default class ButtonGroup extends Component<BtnGroup> {
  render() {
    return (
      <div style={this.style()} className={this.className('el-button-group')}>
        {this.props.children}
      </div>
    )
  }
}
