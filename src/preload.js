// This file is loaded before the DOM, can be used if needed
// This sample is for dark mode setting, and attaching functionality to window.
const storageKey = 'theme-preference';

function getColorPreference() {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey);
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
}

function setPreference(value) {
    localStorage.setItem(storageKey, value);
    reflectPreference(value);
}

function toggleTheme() {
    const theme = getColorPreference();
    setPreference(theme === "dark" ? "light" : "dark");
}

function reflectPreference(value) {
    document.firstElementChild
        .setAttribute('data-theme', value);

    document
        .querySelector('#themeSwitcher')
        ?.setAttribute('aria-label', value);
}

const theme = getColorPreference();

setPreference(theme);

window.toggleTheme = toggleTheme;