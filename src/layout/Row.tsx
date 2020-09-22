import React from 'react';
import { Component, BaseProps } from '../../libs';

type RowProps = {
  gutter: number | string,
  type: string,
  justify: string,
  align: string,
  tag: string
} & BaseProps;

export default class Row extends Component<RowProps> {
  static defaultProps = {
    justify: 'start',
    align: 'top',
    tag: 'div'
  }
  getChildContext(): { gutter: number | string } {
    return {
      gutter: this.props.gutter
    };
  }

  getStyle(): { marginLeft: string, marginRight: string } {
    const style: any = {};

    if (this.props.gutter) {
      style.marginLeft = `-${+this.props.gutter / 2}px`;
      style.marginRight = style.marginLeft;
    }

    return style;
  }

  render() {
    return React.createElement(this.props.tag, {
      className: this.className('el-row',
        this.props.justify !== 'start' && `is-justify-${this.props.justify}`,
        this.props.align !== 'top' && `is-align-${this.props.align}`, {
          'el-row--flex': this.props.type === 'flex'
        }
      ),
      style: this.style(this.getStyle())
    }, this.props.children);
  }
}
