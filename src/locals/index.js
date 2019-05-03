import EN from './en';

// eslint-disable-next-line import/no-mutable-exports, import/prefer-default-export
export let TEXT;

const language = process.env.LANGUAGE || 'en';

if (language === 'en') {
  TEXT = EN;
}
