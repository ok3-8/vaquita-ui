import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Color extends Markdown {
  document(locale: string) {
    return require(`../../docs/${locale}/color.md`);
  }
}
