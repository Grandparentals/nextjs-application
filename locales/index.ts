import i18next from 'i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en'
import plPL from './translations/pl-PL'

const acceptableLanguages = ["en", "pl-PL"]

i18n
    .use(initReactI18next)
    .init(() => {

        const result =
        {
            resources: {
                en: en,
                "pl-PL": plPL
            },
            lng: 'en',
            interpolation: {
                escapeValue: false
            }
        }

        if (typeof window !== 'undefined') {
            const language = acceptableLanguages.indexOf(window.navigator.language) > -1 ? window.navigator.language : 'en';
            result.lng = language
        }

        return result;
    });


export default i18n;