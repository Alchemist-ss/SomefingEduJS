// Обычный вариант.
const normalizeUrl = (inputURL) => {
    const updateURL = 'https://';
    if (!inputURL.startsWith(updateURL)) {
        return updateURL + inputURL;
    }
    return inputURL;
}


console.log(normalizeUrl('ttk.kz'))