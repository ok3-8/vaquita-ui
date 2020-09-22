import React from 'react';
import { Component, BaseProps } from '../../libs';

type IconProps = {
  name: string
} & BaseProps;
export default class Icon extends Component<IconProps> {
  render() {
    return <i style={this.style()} className={this.className(`el-icon-${this.props.name}`)}></i>;
  }
}
