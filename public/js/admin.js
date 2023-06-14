const authorForm = document.querySelector('.authorForm')
const authorListBlock = document.querySelector('.authorListBlock')

authorForm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    authorData(formData);
    authorListLoad();
})

const authorData = async (ev) => {
    const { data } = await axios.post('/createAuthor', ev)
}

const authorLoad = async () => {
    const  { data }  = await axios.get('/authorLoad')
    console.log(data)
    return data;
}


const authorListLoad = async () => {
    const data = await authorLoad()
    console.log(data);
    authorListBlock.innerHTML = data.map(item => `<div>${item.author}</div>`).join('')
}
authorListLoad()