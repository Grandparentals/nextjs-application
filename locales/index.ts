import i18next from 'i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en'
import plPL from './translations/pl-PL'

const acceptableLanguages = ["en", "pl-PL"]

i18n
    .use(initReactI18next)
    .init(() => {
        const language = acceptableLanguages.indexOf(window.navigator.language) > -1 ? window.navigator.language : 'en';

        const result =
        {
            resources: {
                en: en,
                "pl-PL": plPL
            },
            lng: language,
            interpolation: {
                escapeValue: false
            }
        }

        return result
    });


export default i18n;