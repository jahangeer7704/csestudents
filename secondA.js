let table=document.querySelector("table")
let array=[1,"21TD0489","jahangeer",9976985269,"jahangeerkingj@gmail.com"]

let rowCreater=()=>{
    for(let i=0; i<59; i++){
        let row=document.createElement("tr")
        DataCreater(row)
    }
}
let DataCreater=(row)=>{
for(i=0;i<5;i++){
    let data=document.createElement("td")
    let value=document.createTextNode(array[i])
    data.append(value)
    row.append(data)
}
table.append(row)
}

rowCreater()
