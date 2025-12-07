let slownik = {};

fetch("./slownik.json") // <- Upewnij się, że jest "./"
  .then(res => res.json())
  .then(data => slownik = data)
  .catch(err => console.error("Błąd ładowania słownika", err));

function szukaj() {
  const slowo = document.getElementById("slowo").value.toLowerCase().trim();
  const wynikDiv = document.getElementById("wynik");

  if (!slowo) {
    wynikDiv.innerText = "Wpisz słowo.";
    return;
  }

  if (slownik[slowo]) {
    wynikDiv.innerHTML = `<strong>${slowo}</strong>: ${slownik[slowo]}`;
  } else {
    wynikDiv.innerText = "Nie znaleziono słowa.";
  }
}
