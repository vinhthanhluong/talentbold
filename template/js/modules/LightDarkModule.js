export default function LightDarkModule() {
    // if ($('.box-light-dark')) {
    //     const THEME_LIGHT = 'light'
    //     const THEME_DARK = 'dark'
    //     const switchStateInput = document.querySelector('.switch-state')

    //     const getThemeName = (darkEnabled) => darkEnabled ? THEME_DARK : THEME_LIGHT

    //     const setTheme = (theme) => {
    //         document.body.setAttribute('data-theme', theme)
    //         localStorage.setItem('theme', theme)
    //         switchStateInput.checked = theme === THEME_DARK
    //     }

    //     switchStateInput.addEventListener('change', event => setTheme(getThemeName(event.target.checked)))

    //     const mql = window.matchMedia('screen and (prefers-color-scheme: dark)')
    //     const matchMediaListener = (event) => setTheme(getThemeName(event.matches))

    //     mql.addListener(matchMediaListener)

    //     const storedTheme = localStorage.getItem('theme')
    //     const selectedTheme = storedTheme ? storedTheme : getThemeName(mql.matches)

    //     setTheme(selectedTheme)

    // }
}