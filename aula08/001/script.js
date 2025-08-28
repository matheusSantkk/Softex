function gerarSaudacao(nome) {
    return `Olá, ${nome}! Seja bem-vindo.`
}

document.getElementById("gredding").onclick = () => {
    const nome = document.getElementById("name").value.trim();
    document.getElementById("res").textContent = gerarSaudacao(nome || "Anonimo");
}
