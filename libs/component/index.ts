import React from 'react';
import classnames from 'classnames';

export interface BaseProps {
  className?: string;
  style?: object;
}

export default class Component<P extends BaseProps,S={}> extends React.Component<P,S> {
  classNames(...args:any[]) {
    return classnames(args);
  }

  className(...args: any[]) {
    const { className } = this.props;
    return this.classNames.apply(this, args.concat([className]));
  }

  style(args?: object) {
    const { style } = this.props;
    return Object.assign({}, args, style)
  }
}
