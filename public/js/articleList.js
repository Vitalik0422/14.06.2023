const articleList = document.querySelector('.articleList')
const searchArticle = document.querySelector('.searchArticle')
//ajax
const articleListLoad = async () => {
  const { data } = await axios.get('/articleloadlist')
  console.log(data);
  renderArticleList(data)
}

const searchRender = async (formData) => {
  const {data}  = await axios.post('/searchArticle', formData)
  renderArticleList(data)
}

//view
const renderArticleList = async (data) => {
  const html = data.map(elem => `
        <div class="articleBlock">
            <div class="articleName">${elem.nameArticle}</div>
            <div class="articleAuthor">Автор: ${elem.author[0].author}</div>  
            <div class="articleGenre">Жанр: ${elem.genre[0].genre}</div>   
            <div class="articleText">${elem.textArticle}</div>
        </div>
    `).join('');

  articleList.innerHTML = html;

  const articleBlocks = document.querySelectorAll('.articleBlock');

  articleBlocks.forEach(articleBlock => {
    const articleName = articleBlock.querySelector('.articleName');

    articleName.addEventListener('click', () => {
      articleBlocks.forEach(block => {
        if (block !== articleBlock) {
          block.classList.remove('on');
        }
      });

      articleBlock.classList.toggle('on');
    });
  });
};
articleListLoad();


searchArticle.addEventListener('submit', (ev) => {
  ev.preventDefault()
  const formData = new FormData(ev.target)
  const inputValue = formData.get('search').trim();

  if (inputValue === '') {
    console.log('Поле вводу порожнє');
    articleListLoad()
  } else {
    searchRender(formData)
  }
})
