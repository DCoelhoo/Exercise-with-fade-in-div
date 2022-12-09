function calcularSalario() {
    const valorH = document.getElementById("valor").value;
    let horas = document.getElementById("horas").value;
    const numTrabalhador = document.getElementById("numero").value;
    const nomeTrabalhador = document.getElementById("nome").value;
    let salarioBruto;
    let IRS;
    let segurancaSocial;
    let salarioLiquido;
    let horasExtras;
    let totalHorasExtras;

    if (horas > 35) {
        horasExtras = horas - 35;
        //console.log(horasExtras);
        totalHorasExtras = horasExtras * 0.5;
        //console.log(totalHorasExtras);
        horas = (horas - horasExtras) + (horasExtras + totalHorasExtras);
        //console.log(horas);
    }

    salarioBruto = valorH * horas;

    //Calcular IRS
    if (salarioBruto >= 2000) {
        IRS = salarioBruto * 0.25;
    } else if (salarioBruto >= 1000 && salarioBruto < 2000) {
        IRS = salarioBruto * 0.20;
    } else if (salarioBruto >= 700 && salarioBruto < 1000) {
        IRS = salarioBruto * 0.15;
    } else {
        IRS = salarioBruto * 0.08;
    }

    //Calcular Segurança Social
    segurancaSocial = salarioBruto * 0.11;

    salarioLiquido = salarioBruto - (IRS + segurancaSocial);

    document.getElementById("description salarioB").innerHTML = "Salário Bruto Mensal: " + salarioBruto.toFixed(2) + " €";
    document.getElementById("description salarioL").innerHTML = "Salário Liquido Mensal: " + salarioLiquido.toFixed(2) + " €";

    if (valorH == "" || horas == "" || numTrabalhador == "" || nomeTrabalhador == "") {
        alert("Preencha todos os campos.");
    } else {
        //animação fade in 
        document.getElementById('results').style.visibility = "visible";
        document.getElementById('results').style.opacity = "1";
    }
}