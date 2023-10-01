let btnCalcular = document.getElementById('btnCalcular');

btnCalcular.onclick = function() {

    // Obter os valores do input e do select
    let inputHora = document.getElementById("logue").value;
    let selectHora = document.getElementById("cargaHoraria").value;

    // Converter os valores para objetos de data
    let dataInput = new Date("2000-01-01T" + inputHora);
    let dataSelect = new Date("2000-01-01T" + selectHora);

    // Adicionar as horas
    let resultado = new Date(dataInput.getTime() + dataSelect.getTime());

    // Exibir o resultado
    let resultadoFormatado = resultado.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('deslogue').value = resultadoFormatado;

}