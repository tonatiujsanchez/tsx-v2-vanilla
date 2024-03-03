const body = document.querySelector('body')
const themeChangeButton = document.querySelector('.button-change-theme')


const themeKey = 'selected-theme-tsx'
const theme = {
    light: 'light-theme',
    dark: 'dark-theme',
}


const onChangeTheme = () => {
    const selectedTheme = localStorage.getItem( themeKey )
    const iconTheme = selectedTheme === theme.light ? `<i class='bx bx-sun' ></i>` : `<i class='bx bxs-moon' ></i>`

    if(!selectedTheme){
        body.classList.add( theme.light ) 
        localStorage.setItem(themeKey, theme.light)
        return
    }

    body.classList.add( selectedTheme )
    themeChangeButton.innerHTML = iconTheme


}
onChangeTheme()



themeChangeButton.addEventListener('click', ()=> {

    
    const isDarkTheme = body.classList.contains(theme.dark)

    body.classList.add(isDarkTheme? theme.light : theme.dark)
    body.classList.remove(isDarkTheme ? theme.dark : theme.light)

    localStorage.setItem(themeKey, isDarkTheme ? theme.light : theme.dark)
    themeChangeButton.innerHTML = isDarkTheme ? `<i class='bx bx-sun' ></i>` : `<i class='bx bxs-moon' ></i>`
})
