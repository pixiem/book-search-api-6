function preLoad(){
document.getElementById('sectionOne').innerHTML =
`<div style="background-color: #ff871e;
             height: 300px;
             align-items: center;
             justify-content: space-evenly;" class="mx-auto d-flex first-sectionn">
 <div>
      <h1> FIND YOUR BOOK HERE </h1>
 </div>
 <div> 
       <img width="300" src="ebook.jpg" alt="">
 </div>
 </div>`;
}
preLoad();

const searchBook = () => {
    searchField = document.getElementById('search');
    searchFieldText = searchField.value;
    const url = `https://openlibrary.org/search.json?q=${searchFieldText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayResult(data));

}

const displayResult = data => {
    
    document.getElementById('search').value = "";
    document.getElementById('total-result').innerHTML = `<h2 style="text-align: center;" > ${data.numFound} Result Found </h2>` ;
    const result = data.docs;
    const main = document.getElementById('main');
    main.innerText ="";
    result.forEach(book => {
    const div = document.createElement('div');
    div.classList.add("col");
    div.innerHTML = `
 
                 <div class="card rounded shadow-lg">
                    
                  <img style="width="250px" height="315px"" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">

                 <div style="width: 100% " class="card-body">
                   <h5 class="card-title "><b>${book.title}</b></h5>
                   <span> Author Name: ${book.author_name} </span>
                   <br> <br>
                   <span> Publisher: ${book.publisher}</span>
                   <br> <br>
                   <span> Publish Year: ${book.first_publish_year}</span>
                  </div>
                 </div>`;
    main.appendChild(div);})
}