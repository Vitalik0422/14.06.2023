const articleForm = document.querySelector('.articleCreate')
const nameAuthorSelect = document.querySelector('.nameAuthorSelect')
const genreSelect = document.querySelector('.genreSelect')

const render = async () => {
    const resultAuthor = await findAuthor();
    const resultGenre = await findGenre();
    nameAuthorSelect.innerHTML = resultAuthor.map(item => `<option value="${item._id.toString()}">${item.author}</option>`).join('')
    genreSelect.innerHTML = resultGenre.map(item => `<option value="${item._id.toString()}">${item.genre}</option>`).join('')
}
articleForm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    createArticle(formData)
})

const findAuthor = async () => {
    const {data} = await axios.get('/findAuthor')
    return data;
}
const findGenre = async () => {
    const { data } = await axios.get('/listgenre')
    return data;
}

const createArticle = async (ev) => {
    const {data} = await axios.post('/createArticle', ev)
    return data;
}

render()
