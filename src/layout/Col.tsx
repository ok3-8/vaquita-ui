/* @flow */

import React from 'react';
import { Component, BaseProps } from '../../libs';

type ColProps = {
  span: number|string,
  offset: number|string,
  pull: number|string,
  push: number|string,
  xs: any,
  sm: any,
  md: any,
  lg: any,
  tag: string
  gutter: number|string,
} & BaseProps;

export default class Col extends Component<ColProps> {

  static defaultProps = {
    span: 24,
  tag: 'div'
  }

  getStyle(): { paddingLeft: string, paddingRight: string } {
    const style:  any = {};

    if (this.context.gutter) {
      style.paddingLeft = `${this.context.gutter / 2}px`;
      style.paddingRight = style.paddingLeft;
    }

    return style;
  }

  render() {
    let classList: any[] = [];

    ['span', 'offset', 'pull', 'push'].forEach((prop: Partial<keyof ColProps>) => {
      if (this.props[prop] >= 0) {
        classList.push(
          prop !== 'span'
          ? `el-col-${prop}-${this.props[prop]}`
          : `el-col-${this.props[prop]}`
        );
      }
    });

    ['xs', 'sm', 'md', 'lg'].forEach((size: Partial<keyof ColProps>) => {
      if (typeof this.props[size] === 'object') {
        let props = this.props[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
            ? `el-col-${size}-${prop}-${props[prop]}`
            : `el-col-${size}-${props[prop]}`
          );
        });
      } else if (this.props[size] >= 0) {
        classList.push(`el-col-${size}-${Number(this.props[size])}`);
      }
    });

    return React.createElement(this.props.tag, {
      className: this.className('el-col', classList),
      style: this.style(this.getStyle())
    }, this.props.children);
  }
}

