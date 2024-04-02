console.log("hola mundo");

let contador = document.getElementById('contador');//contador es igual a cero

if (localStorage.pagecount)
{
    localStorage.pagecount=Number(localStorage.pagecount) +1;
}
else
{
    localStorage.pagecount=1;
}
contador.innerHTML = `<p>${localStorage.pagecount}</p>`;