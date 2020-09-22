import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Menu extends Markdown {
  document(locale: string) {
    return require(`../../docs/${locale}/menu.md`);
  }
}
