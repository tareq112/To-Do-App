
//................reset all....................................

const reset = document.getElementById('resetButton');
const ul = document.getElementById('ull');

reset.addEventListener('click', function (e) {


  ul.innerHTML = '';
});

//....................Show Date........................................

let today = new Date();
let CustomDate = today.getDate() + "-" + (today.getMonth() + 01) + "-" + today.getFullYear();

let customtime = today.getHours() + ":" + today.getMinutes();
const tDate = document.getElementById('date').innerHTML += CustomDate;
const ttime = document.getElementById('time').innerHTML += customtime;


//.......................add item.......................................


const addItem = document.getElementById('addItembutton');

addItem.addEventListener('click', function (e) {
  const itemvalue = document.getElementById('addNewItem').value;

  let li = document.createElement('li');
  let sp1 = document.createElement('span');
  let sp2 = document.createElement('span');


  sp1.id = 'liContent';
  sp2.id = 'dltbtn';
  sp1.textContent = itemvalue;
  sp2.textContent = ' Delete';

  ul.appendChild(li);
  li.appendChild(sp1);
  li.appendChild(sp2);


});

//.................delete item one by one..........................

let deleteli = document.querySelector(".content #ull");


deleteli.addEventListener('click', function (e) {

  if (e.target.id == 'dltbtn') {
    let li = e.target.parentElement;
    let ul = li.parentElement;

    ul.removeChild(li);


  }

});


//................Search Bar..........

const search = document.getElementById('searchBar');

search.addEventListener('keyup', function (e) {
  let term = e.target.value.toLowerCase();
  console.log(term);
  const books = document.getElementsByTagName('li');
  Array.from(books).forEach(book => {
    let title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = 'block';

    }
    else {
      book.style.display = 'none';
    }


  });
});






