import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Button extends Markdown {
  document(locale: string) {
    return require(`../../docs/${locale}/button.md`);
  }
}
