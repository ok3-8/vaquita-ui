import React, { SyntheticEvent } from 'react';
import { Component, BaseProps } from '../../libs';
import ButtonGroup from './ButtonGroup';

export default class Button extends Component<ButtonPropTypes> {

  static defaultProps = {
    type: 'default',
    nativeType: 'button',
    loading: false,
    disabled: false,
    plain: false
  };

  static Group: typeof ButtonGroup

  onClick(e: SyntheticEvent<any>): void {
    if (!this.props.loading) {
      this.props.onClick && this.props.onClick(e);
    }
  }

  render() {
    return (
      <button style={this.style()} className={this.className('el-button', this.props.type && `el-button--${this.props.type}`, this.props.size && `el-button--${this.props.size}`, {
          'is-disabled': this.props.disabled,
          'is-loading': this.props.loading,
          'is-plain': this.props.plain
      })} disabled={this.props.disabled} type={this.props.nativeType} onClick={this.onClick.bind(this)}>
        { this.props.loading && <i className="el-icon-loading" /> }
        { this.props.icon && !this.props.loading && <i className={`el-icon-${this.props.icon}`} /> }
        <span>{this.props.children}</span>
      </button>
    )
  }
}

type ButtonPropTypes = {
  onClick: Function,
  type: string,
  size: string,
  icon: string,
  nativeType: "button" | "submit" | "reset",
  loading: boolean,
  disabled: boolean,
  plain: boolean
} & BaseProps;
