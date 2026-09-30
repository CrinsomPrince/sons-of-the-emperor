
export function salvarCadastro(dados) {

    localStorage.setItem(
        "cadastro",
        JSON.stringify(dados)
    );

}


export function carregarCadastro() {

    const dadosSalvos =
        localStorage.getItem("cadastro");

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}