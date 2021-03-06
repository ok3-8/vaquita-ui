import Markdown from '../../../libs/markdown';

import './style.scss';

export default class i18n extends Markdown {
  document(locale: string) {
    return require(`../../docs/${locale}/i18n.md`);
  }
}
