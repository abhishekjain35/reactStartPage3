export function ghAuth(code) {
    return new Promise((resolve, reject) => {
        fetch('https://ngstartpage.uk/gh-auth.php?code=' + code,{
            method: 'POST'
        }).then(data => {
            return data.text()
        }).then(text => {
            resolve(text)
        })
    })
}
