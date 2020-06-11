const elements = {
    download: id('download')
}

elements.download.addEventListener('click', () => {
    const version = 'latest'
    const platform = 'win32'

    axios({
        url: `api/releases/launcher/${platform}/${version}.zip`,
        method: 'GET',
        responseType: 'blob'
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'file.zip')
        document.body.appendChild(link)
        link.click()
    })
})