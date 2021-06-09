let openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
}

let closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
}

// create a new Row and cells;
// get the table by id;
// get value from input text;
// set the values into row cells;


let addHTMLtable = () => {
  
    var Compname = document.getElementById('companyname').value;
    var Contname = document.getElementById('contactname').value;
    var Countname = document.getElementById('countryname').value;

    const pushingData = {
        Company : Compname,
        Contact : Contname,
        Country : Countname, 
     }

    rows.unshift(pushingData);
    clearData();
    loadDataTable();
  }


const rows = [
    {
        Company :'Alfreds Futterkiste',
        Contact :'Maria Anders',
        Country :'Germany',
    },
    {
        Company :'Centro comercial Moctezuma',
        Contact :'Francisco Chang',
        Country :'Mexico',
    },
    {
        Company :'Ernst Handel',
        Contact :'Roland Mendel',
        Country :'Austria',
    },
    {
        Company :'Island Trading',
        Contact :'Helen Bennett',
        Country :'UK',
    },
    {
        Company :'Laughing Bacchus Winecellars',
        Contact :'Yoshi Tannamuri',
        Country :'Canada',
    },
    {
        Company :'Magazzini Alimentari Riuniti',
        Contact :'Giovanni Rovell',
        Country :'Italy',
    },
];

const Delete = index => {
    rows.splice(index,1)
    clearData();
    loadDataTable();
}

const clearData = () => {
    const table = document.getElementById('table')
    while(table.childNodes.length>2){
        const child = table.lastChild;
        table.removeChild(child)

    }
}
let selectedIndex = null;
const Edit = (i) => {
    const modal = new bootstrap.Modal(document.getElementById('mymodal'));
    modal.toggle();
    selectedIndex = i;
}

const save = () => {
    console.log("--check kar rha uhn")
    var Compname = document.getElementById('companyname').value;
    var Contname = document.getElementById('contactname').value;
    var Countname = document.getElementById('countryname').value;
    const pushingData = {
        Company : Compname,
        Contact : Contname,
        Country : Countname, 
     }
     
     rows[selectedIndex] = pushingData;
     clearData();
     loadDataTable();
}


const loadDataTable=() =>{

    const table = document.getElementById('table')
    for(let i=1;i<rows.length;++i){
        const row = document.createElement('tr')
        const columns = `
     <td>${rows[i].Company}</td>
     <td>${rows[i].Contact}</td>
     <td>${rows[i].Country}</td>
     <td><button class="bg-success text-white"; onclick=Edit(${i})>Edit</button>
     <button class="bg-danger text-white"; onclick=Delete(${i})>Delete</button
     `
     row.innerHTML = columns;
     table.appendChild(row);
    }

    
}
loadDataTable();

