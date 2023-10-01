let btnCalcular = document.getElementById('btnCalcular');

btnCalcular.onclick = function() {

    // Obter os valores do input e do select
    let inputHora = document.getElementById("logue").value;
    let selectHora = document.getElementById("cargaHoraria").value;
    let he = document.getElementById("he").value;

    // Converter os valores para objetos de data
    let dataInput = new Date("2000-01-01T" + inputHora + ":00Z");
    let dataSelect = new Date("2000-01-01T" + selectHora + ":00Z");
    let heInput = new Date("2000-01-01T" + he + ":00Z");
    // Adicionar as horas
    let resultado = new Date(dataInput.getTime() + dataSelect.getTime() + heInput.getTime());
    let resultadoFormatado = resultado.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });

    function exibirResultado() {
            // Exibir o resultado
            document.getElementById('deslogue').value = resultadoFormatado;
    }


    if(inputHora == '00:00') {
        document.getElementById("logue").style.border = '3px red double';
        alert('Favor preencher o horário de logue no ponto!');
        document.getElementById('deslogue').value = '';

    } else {
        document.getElementById("logue").style.border = '3px #c6c6c6 double';
        exibirResultado()
    }

    if(selectHora == 'Selecione') {
        document.getElementById("cargaHoraria").style.border = '3px red double';
        alert('Favor preencher a carga horária');
        document.getElementById('deslogue').value = '';
    } else {
        document.getElementById("cargaHoraria").style.border = '3px #c6c6c6 double';
        exibirResultado()
    }


}