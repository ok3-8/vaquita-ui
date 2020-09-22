import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CodeMirror from 'codemirror'

import 'codemirror/mode/jsx/jsx'
import 'codemirror/keymap/sublime'
import 'codemirror/addon/comment/comment'

import 'codemirror/lib/codemirror.css'
import './style.scss'

interface EditorProps {
  onChange:(val: string)=>void;
  value: string
}

export default class Editor extends Component<EditorProps> {
  cm: any;
  editor: any;
  timeout:any;
  componentDidMount() {
    const { onChange, value } = this.props

    this.cm = CodeMirror(this.editor, {
      mode: 'jsx',
      theme: 'react',
      keyMap: 'sublime',
      viewportMargin: Infinity,
      lineNumbers: false,
      dragDrop: false
    });

    this.cm.setValue(value)

    this.cm.on('changes', (cm: any) => {
      if (onChange) {
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
          onChange(cm.getValue());
        }, 300);
      }
    })
  }

  render() {
    return <div className="editor" ref={ref => (this.editor = ref)} />
  }
}

