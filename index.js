function fetchData() {
  fetch('data.json')
    .then((res) => res.json())
    .then((data) => data);
}

fetchData()
