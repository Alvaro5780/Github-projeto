(async () => {
    response = await fetch('https://arquivos.workdoc.com.br/estagio/movieData.js')
        .then(response => {
            return response.text();     
        }) 
        .then(response => {
            var text = response.replace('export const search = ', '').split('export const movieDetail = ');
            text[1] = text[1].replace(new RegExp('"Website": "N/A",', 'g'), '"Website": "N/A"');
            return [JSON.parse(text[0]), JSON.parse(text[1])];
        });

    const postsContainer  = document.querySelector("#posts-container");

    const search = await response[0];
    
    search.map((post) => {
        const div    = document.createElement ("div");
        const title  = document.createElement ("h4");
        const type   = document.createElement ("h5");
        const year   = document.createElement ("h5");
        const link   = document.createElement ("a");

        title.innerText  = post.Title;
        year.innerText   = post.Type + ". Ano de lançamento: "+post.Year;
        link.innerText   = "Mais informações";

        link.setAttribute("href", `./post.html?id=${post.imdbID}`);

        div.appendChild(title);
        div.appendChild(type);
        div.appendChild(year);
        div.appendChild(link);

        postsContainer.appendChild(div);
    })

    const movieDetail = await response[1];

    movieDetail.map((post) => {
        const div    = document.createElement ("div");
        const title  = document.createElement ("h4");
        const type   = document.createElement ("h5");
        const year   = document.createElement ("h5");
        const link   = document.createElement ("a");

        title.innerText  = post.Title;
        year.innerText   = post.Type + ". Ano de lançamento: "+post.Year;
        link.innerText   = "Mais informações";

        link.setAttribute("href", `./post.html?id=${post.imdbID}`);

        div.appendChild(title);
        div.appendChild(type);
        div.appendChild(year);
        div.appendChild(link);

        postsContainer.appendChild(div);
    })
  
})();