const bookList = document.getElementById('book-list');

// const searchBookName = searchResult => {
  
  
//     const url = `http://openlibrary.org/search.json?q=${search}`;
//     return url;
// }

const books = () =>{
    const searchText=document.getElementById('search-text');
    const search=searchText.value;
    const teet = `http://openlibrary.org/search.json?q=${search}`;
    //   const url=searchBookName(searchText);
    //   searchText.value='';
   // const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(teet)
    .then(res => res.json())
    .then(data =>booksDetails(data));
}
const booksDetails = books =>{
   //  console.log(book.key);
   let count=0;
   console.log(books.numFound);
   let c=0;
   bookList.textContent='';
   const book=books.docs;
//    if(book.length===0){
//        document.getElementById('show-result').style.display='block';
//        document.getElementById('count-book').style.display='none';
//    }
    book.forEach(item => {
        count++;
        const booksUrl = `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`;
        // console.log(item ,c++);
        //console.log(burl);
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="col">
         <div class="card"> 
            <img  src="${booksUrl}"  alt="...">
            
       <div class="card-body">
       <h5 class="card-title">${item.title}</h5>
       <p class="card-text">${item.author_name}</p>
     </div>
     <div class="card-footer">
      <p> ${item.first_publish_year} </br> ${count}</p>
     </div>
   </div>
          </div>
        `;
        bookList.appendChild(div);
        // document.getElementById('show-result').style.display='none';
        // document.getElementById('count-book').style.display='block';
        // document.getElementById('count-book').innerText=`displaying 1 - ${count} of about ${books.numFound} results`;
    });
    // console.log(book.docs[0].title);
}