// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(function(response){
        const data = response.data;
        console.log(data);
        return data;
    })
    .then(function(data){
        const articles = data.articles;
        console.log(articles);
        return articles;
    })
    .then(function(articles){
        cardMaker(articles);
    })
    .catch(function(error){
        console.log(error);
    })

function cardMaker(articles){
    const cardContainer = document.querySelector('.cards-container');

    let article1 = articles.javascript;
    let article2 = articles.bootstrap;
    let article3 = articles.technology;
    let article4 = articles.jquery;
    let article5 = articles.node;

    let article = [article1, article2, article3, article4, article5]

    article1.forEach(element => {
        const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
        const imageContainer = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imageContainer.classList.add('img-container');

        headline.textContent = element.headline;
        image.src = element.authorPhoto;
        name.textContent = `By ${element.authorName}`;
        
        cardContainer.appendChild(card)
        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imageContainer)
        imageContainer.appendChild(image);
        author.appendChild(name);
    })

    article2.forEach(element => {
        const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
        const imageContainer = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imageContainer.classList.add('img-container');

        headline.textContent = element.headline;
        image.src = element.authorPhoto;
        name.textContent = `By ${element.authorName}`;
        
        cardContainer.appendChild(card)
        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imageContainer)
        imageContainer.appendChild(image);
        author.appendChild(name);
    })

    article3.forEach(element => {
        const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
        const imageContainer = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imageContainer.classList.add('img-container');

        headline.textContent = element.headline;
        image.src = element.authorPhoto;
        name.textContent = `By ${element.authorName}`;
        
        cardContainer.appendChild(card)
        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imageContainer)
        imageContainer.appendChild(image);
        author.appendChild(name);
    })

    article4.forEach(element => {
        const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
        const imageContainer = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imageContainer.classList.add('img-container');

        headline.textContent = element.headline;
        image.src = element.authorPhoto;
        name.textContent = `By ${element.authorName}`;
        
        cardContainer.appendChild(card)
        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imageContainer)
        imageContainer.appendChild(image);
        author.appendChild(name);
    })

    article5.forEach(element => {
        const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
        const imageContainer = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imageContainer.classList.add('img-container');

        headline.textContent = element.headline;
        image.src = element.authorPhoto;
        name.textContent = `By ${element.authorName}`;
        
        cardContainer.appendChild(card)
        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imageContainer)
        imageContainer.appendChild(image);
        author.appendChild(name);
    })
}