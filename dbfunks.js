window.addEventListener('load', carregado)

var db = openDatabase("dbProj1",'1.0','Banco de Teste 1', 2 * 1024 * 1024);

function criar_tabela()
{
    db.transaction(function(tx){
        tx.executeSql('CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY, name TEXT, depoi TEXT)')
        // tx.executeSql('ALTER TABLE test ADD COLUMN depoi TEXT')
    })
}
function adicionar_coluna() {
    db.transaction(function(tx) {
        tx.executeSql('ALTER TABLE test ADD COLUMN depoi TEXT');
    });
}

function carregado()
{
    document.querySelector('.enviar_dados').addEventListener('click', salvar)
    criar_tabela()
    adicionar_coluna()
}

function salvar()
{
    // var nome = document.getElementById('name-field').value
    // var depoi = document.getElementById('depoimento').value
    db.transaction(function(tx){
        tx.executeSql('INSERT INTO test (name, depoi) VALUES(?,?)',[nome.value,depoiment.value])
    })
}

// document.addEventListener("DOMContentLoaded", mostrar);
function mostrar()
{
   db.transaction(function(tx){
    tx.executeSql('SELECT * FROM test', [], function(tx,resultado){
        var rows = resultado.rows;
        for(var i = 0; i < rows.length; i++)
        {
            lista_depoimentos.innerHTML += `<div class="depoi">
            <p>${rows[i].depoi}</p>
          </div>`
        }
        setar_depois()
    }, null)
   })
   
}