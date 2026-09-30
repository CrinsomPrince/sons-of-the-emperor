import {
    salvarCadastro,
    carregarCadastro
} from "./armazenamento.js";


export function cadastro(conteudo) {

    conteudo.innerHTML = `

        <section class="inicio">

            <h2>Faça seu cadastro</h2>

            <p>
                Cadastre-se para acompanhar as ações da
                Sons Of The Emperor e demonstrar seu
                interesse em participar dos nossos projetos.
            </p>

        </section>


        <section class="cadastro">

            <form id="formCadastro">

                <fieldset>

                    <legend>Dados pessoais</legend>

                    <div class="campo">

                        <label>Nome completo:</label>

                        <input
                            type="text"
                            name="nome"
                            placeholder="Digite seu nome completo"
                            minlength="3"
                            maxlength="100"
                            required
                        >

                    </div>


                    <div class="campo">

                        <label>E-mail:</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            required
                        >

                    </div>


                    <div class="campo">

                        <label>CPF:</label>

                        <input
                            id="cpf"
                            type="text"
                            name="cpf"
                            placeholder="000.000.000-00"
                            maxlength="14"
                            required
                        >

                    </div>


                    <div class="linha">

                        <div class="campo">

                            <label>Data de nascimento:</label>

                            <input
                                type="date"
                                name="nascimento"
                                required
                            >

                        </div>


                        <div class="campo">

                            <label>Telefone:</label>

                            <input
                                id="telefone"
                                type="tel"
                                name="telefone"
                                placeholder="(00) 00000-0000"
                                maxlength="15"
                                required
                            >

                        </div>

                    </div>

                </fieldset>


                <fieldset>

                    <legend>Endereço</legend>

                    <div class="campo">

                        <label>Endereço:</label>

                        <input
                            type="text"
                            name="endereco"
                            placeholder="Rua, avenida, etc."
                            required
                        >

                    </div>


                    <div class="linha">

                        <div class="campo">

                            <label>Número:</label>

                            <input
                                type="number"
                                name="numero"
                                min="1"
                                required
                            >

                        </div>


                        <div class="campo">

                            <label>CEP:</label>

                            <input
                                id="cep"
                                type="text"
                                name="cep"
                                placeholder="00000-000"
                                maxlength="9"
                                required
                            >

                        </div>

                    </div>


                    <div class="linha">

                        <div class="campo">

                            <label>Cidade:</label>

                            <input
                                type="text"
                                name="cidade"
                                placeholder="Digite sua cidade"
                                required
                            >

                        </div>


                        <div class="campo">

                            <label>Estado:</label>

                            <select name="estado" required>

                                <option value="">
                                    Selecione
                                </option>

                                <option>AC</option>
                                <option>AL</option>
                                <option>AP</option>
                                <option>AM</option>
                                <option>BA</option>
                                <option>CE</option>
                                <option>DF</option>
                                <option>ES</option>
                                <option>GO</option>
                                <option>MA</option>
                                <option>MT</option>
                                <option>MS</option>
                                <option>MG</option>
                                <option>PA</option>
                                <option>PB</option>
                                <option>PR</option>
                                <option>PE</option>
                                <option>PI</option>
                                <option>RJ</option>
                                <option>RN</option>
                                <option>RS</option>
                                <option>RO</option>
                                <option>RR</option>
                                <option>SC</option>
                                <option>SP</option>
                                <option>SE</option>
                                <option>TO</option>

                            </select>

                        </div>

                    </div>

                </fieldset>


                <fieldset>

                    <legend>
                        Interesse em participar
                    </legend>

                    <div class="campo">

                        <label>
                            Como você deseja participar?
                        </label>

                        <select name="participacao" required>

                            <option value="">
                                Selecione uma opção
                            </option>

                            <option>
                                Trabalho voluntário
                            </option>

                            <option>
                                Realizar doações
                            </option>

                            <option>
                                Voluntariado e doações
                            </option>

                        </select>

                    </div>

                </fieldset>


                <button
                    class="botao"
                    type="submit"
                >
                    Enviar cadastro
                </button>

            </form>

        </section>

    `;


    const form =
        document.getElementById("formCadastro");


    /* RECUPERA DADOS SALVOS */

    const dados = carregarCadastro();


    if (dados) {

        form.nome.value = dados.nome;
        form.email.value = dados.email;
        form.cpf.value = dados.cpf;
        form.nascimento.value = dados.nascimento;
        form.telefone.value = dados.telefone;
        form.endereco.value = dados.endereco;
        form.numero.value = dados.numero;
        form.cep.value = dados.cep;
        form.cidade.value = dados.cidade;
        form.estado.value = dados.estado;
        form.participacao.value = dados.participacao;

    }


    /* SALVA O FORMULÁRIO */

    form.addEventListener("submit", function(event) {

        event.preventDefault();


        const dados = {

            nome: form.nome.value,
            email: form.email.value,
            cpf: form.cpf.value,
            nascimento: form.nascimento.value,
            telefone: form.telefone.value,
            endereco: form.endereco.value,
            numero: form.numero.value,
            cep: form.cep.value,
            cidade: form.cidade.value,
            estado: form.estado.value,
            participacao: form.participacao.value

        };


        salvarCadastro(dados);


        alert("Cadastro salvo com sucesso!");

    });


    /* MÁSCARAS */

    const mascara = (id, funcao) => {

        const campo =
            document.getElementById(id);

        campo.addEventListener("input", function() {

            this.value =
                funcao(
                    this.value.replace(/\D/g, "")
                );

        });

    };


    mascara("cpf", valor =>
        valor
            .slice(0, 11)
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    );


    mascara("telefone", valor =>
        valor
            .slice(0, 11)
            .replace(/^(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
    );


    mascara("cep", valor =>
        valor
            .slice(0, 8)
            .replace(/(\d{5})(\d)/, "$1-$2")
    );

}

