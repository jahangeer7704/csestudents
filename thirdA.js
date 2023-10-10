let tBody = document.querySelector("tbody");
let studentData = [];
//creates row for append
let rowCreater = (array) => {
  for (let i = 0; i < array.length; i++) {
    let row = document.createElement("tr");
    dataCreater(row, array, i);
  }
  search(array);
};
let dataCreater = (row, array, i) => {
  for (let j = 0; j < 5; j++) {
    let data = document.createElement("td");
    let value = document.createTextNode(array[i][j]);
    data.append(value);
    row.append(data);
  }
  tBody.append(row);
};

//fetch the data student.json
let dataGetter = async () => {
  let data = await fetch("./thirdA.json");
  let value = await data.json();
  datasetter(value);
  return 0;
};

//set the data fetched from json
function datasetter(value) {
  let finalDAta = Object.entries(value).map((entry) => {
    let [key, value] = entry;
    let fproduct = Object.values(value);
    return fproduct;
  });
  studentData = finalDAta;
  rowCreater(studentData);
}

dataGetter();
//activate the focus on input

let searchBarSize = document.getElementById("search-bar-size");
let searchBox = document.getElementById("search-box");
searchBarSize.addEventListener("click", () => {
  if (searchBarSize.checked) {
    searchBox.focus();
  }
});

let search = (array) => {
  let row = tBody.getElementsByTagName("tr");

  searchBoxValue = () => {
    inputValue = searchBox.value.toUpperCase();

    for (let i = 0; i < row.length; i++) {
      let tDataName = row[i].getElementsByTagName("td")[2];
      let tDataReg = row[i].getElementsByTagName("td")[1];
      tDataName.innerText.toUpperCase().includes(inputValue) ||
      tDataReg.innerText.toUpperCase().includes(inputValue)
        ? (row[i].style.cssText = "")
        : (row[i].style.display = "none");
    }

    //listener is here
  };
  searchBox.addEventListener("keyup", searchBoxValue);
};
