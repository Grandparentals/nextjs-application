import React from "react";
import { useTranslation } from "react-i18next";
function LanguageSwitcher() {
    const { i18n } = useTranslation();
    return (
        <div className="w-20 m:w-32">
            <select
                className="block rounded-md border-gray-300 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                value={i18n.language}
                onChange={(e) =>
                    i18n.changeLanguage(e.target.value)
                }
            >
                <option value="en">EN</option>
                <option value="pl-PL">PL</option>
            </select>
        </div>
    );
}
export default LanguageSwitcher;