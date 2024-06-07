const inputClearer = () => {
    const hElement = document.getElementById("height");
    const wElement = document.getElementById("weight");
    hElement.value = "";
    wElement.value = "";
  };
  
  document.getElementById("sub").addEventListener("click", function () {
    // Get the height and weight values from the input fields
    let h = document.getElementById("height").value;
    let w = document.getElementById("weight").value;
  
    let hVal = parseInt(h);
    let wVal = parseInt(w);
  
    if (h.length === 0 || w.length === 0) {
      alert("Empty inputs detected! Plz enter both height and weight");
      inputClearer();
      return;
    }
    if (hVal === 0) {
      alert("Zero height entered! Enter a valid value");
      inputClearer();
      return;
    }