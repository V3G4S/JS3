function calcularSalariosMinimos() {
    const salarioMinimo = 1293.20
    let salarioUsuario = 5000
    let quantidadeSalariosMinimos = salarioUsuario / salarioMinimo;
    console.log(`Você ganha aproximadamente ${quantidadeSalariosMinimos.toFixed(2)} salários mínimos.`);
}
calcularSalariosMinimos();
