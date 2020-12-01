document.getElementById('search').addEventListener('keyup', pesquisaTabela());

function pesquisaTabela() {
    let filter, table, tr, td, i;
    table = document.getElementById('dados');
    return function () {
        tr = table.querySelectorAll("tbody tr");
        filter = this.value.toUpperCase();
        for (i = 0; i < tr.length; i++) {
            let match = tr[i].innerHTML.toUpperCase().indexOf(filter) > -1;
            tr[i].style.display = match ? "" : "none";

        }
    }
}