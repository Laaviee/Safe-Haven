function search() {
    const query = document.getElementById('search-bar').value;
    const results = document.getElementById('search-results');
    results.innerHTML = '';
  
    // search logic goes here
  
    results.innerHTML = 'No results found.';
  }