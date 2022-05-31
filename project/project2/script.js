let mercadoria = document.getElementById("goods");
let unidades = document.getElementById("goods-numbers");
let operacao = document.getElementById("movement");
let valorCompra = document.getElementById("buy-value");
let valorVenda = document.getElementById("sell-value");

function addRow() {
    console.log(mercadoria);
    let getTable = document.getElementById('table');

    let rowCount = getTable.rows.length;
    let row = getTable.insertRow(rowCount);

    let cell1 = row.insertCell(0);
    cell1.innerText = mercadoria.value;

    let cell2 = row.insertCell(0);
    cell2.innerText = unidades.value;

    let cell3 = row.insertCell(0);
    cell3.innerText = operacao.value;

    let cell4 = row.insertCell(0);
    cell4.innerText = valorCompra.value;

    let cell5 = row.insertCell(0);
    cell5.innerText = valorVenda.value;

}