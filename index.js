const formDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultsDOM = document.querySelector('.results');

formDOM.addEventListener('submit', (e)=> {
    e.preventDefault();
    const value = inputDOM.value;
    if(!value) {
        resultsDOM.innerHTML = 
        `<div class="error">Please enter Valid Search Term</div>`;
        return;
    }
    fetchPages(value);
});

const fetchPages = async (searchValue) => {
    console.log(searchValue)
}