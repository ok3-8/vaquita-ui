/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */

const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;

/**
 * format
 *
 * @param {String} string
 * @param {Array} ...args
 * @return {String}
 */

export default function(str: string, ...args: any[]) {
  if (args.length === 1 && typeof args[0] === 'object') {
    args = args[0];
  }

  if (!args || !args.hasOwnProperty) {
    // args = {};
  }

  return str.replace(RE_NARGS, (match, prefix, i, index) => {
    let result;

    if (str[index - 1] === '{' &&
      str[index + match.length] === '}') {
      return i;
    } else {
      result = Object.prototype.hasOwnProperty.call(args, i) ? args[i] : null;
      if (result === null || result === undefined) {
        return '';
      }

      return result;
    }
  });
}
