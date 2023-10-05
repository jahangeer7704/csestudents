let tBody = document.querySelector("tbody");
let studentData = [];
//creates row for append
let rowCreater = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
    let row = document.createElement("tr");
    dataCreater(row, array, i);
  }
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
  let data = await fetch("./student.json");
  let value = await data.json();
  await datasetter(value);
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
