import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enEN from './en-EN';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: enEN
        },
        lng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;