import I18n from 'i18n-js';

import en from './en.json';

I18n.fallbacks = true;

I18n.translations = {
  en,
};

I18n.locale = 'en';

export const availableTranslations = {
  en,
};

export default I18n;
