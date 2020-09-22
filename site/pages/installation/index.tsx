import Markdown from '../../../libs/markdown';

export default class Installation extends Markdown {
  document(locale: string) {
    return require(`../../docs/${locale}/installation.md`);
  }
}
