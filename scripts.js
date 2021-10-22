async function getpeopel() {
  const images = document.getElementsByClassName("img");
  const res = await fetch("https://randomuser.me/api/?results=5");
  results = await res.json();

  results.results.forEach((person, idx) => {
    images[idx].src = person.picture.large;
  });
}
getpeopel();
