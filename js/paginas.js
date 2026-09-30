export function inicio(conteudo) {

    conteudo.innerHTML = `

        <section class="inicio">

            <h2>
                Juntos podemos fazer a diferença
            </h2>

            <img
                src="./img/logo.png"
                alt="Logo da ONG Sons Of The Emperor"
            >

            <p>
                A Sons Of The Emperor é uma ONG que
                trabalha para transformar vidas e ajudar
                pessoas em situação de vulnerabilidade.
                E trazer a paz para o Universo.
            </p>

            <a href="#sobre" class="botao">
                Conheça nossa ONG
            </a>

        </section>


        <section class="sobre" id="sobre">

            <div class="container">

                <h2>Sobre a ONG</h2>

                <p>
                    Nossa organização nasceu com o objetivo
                    de ajudar pessoas que precisam de apoio
                    e criar oportunidades para uma vida melhor.
                    Através de projetos sociais, buscamos levar
                    educação, alimentação e esperança para
                    diferentes comunidades em diferentes
                    planetas pela Galáxia.
                </p>

                <img
                    src="./img/doacao.png"
                    alt="Voluntários da ONG Sons Of The Emperor ajudando a comunidade"
                >

            </div>

        </section>

    `;
}


export function projetos(conteudo) {

    conteudo.innerHTML = `

        <section class="inicio">

            <h2>Nossos Projetos</h2>

            <p>
                Conheça as principais ações da
                Sons Of The Emperor e descubra
                como você pode ajudar a nossa missão.
            </p>

            <img
                src="./img/acao.png"
                alt="Ação social realizada pela ONG"
            >

        </section>


        <section>

            <div class="container">

                <h2>Projetos da ONG</h2>

                <div class="projetos">

                    <article class="projeto">

                        <h3>Alimentação</h3>

                        <p>
                            Nosso projeto de alimentação busca
                            ajudar famílias e pessoas que estão
                            passando por situações de dificuldade.
                        </p>

                        <ul>
                            <li>Arrecadação de alimentos</li>
                            <li>Montagem de cestas básicas</li>
                            <li>Distribuição para famílias</li>
                        </ul>

                    </article>


                    <article class="projeto">

                        <h3>Educação</h3>

                        <p>
                            Trabalhamos para proporcionar
                            oportunidades de aprendizado para
                            crianças e jovens.
                        </p>

                        <ul>
                            <li>Materiais escolares</li>
                            <li>Atividades educativas</li>
                            <li>Apoio aos estudantes</li>
                        </ul>

                    </article>


                    <article class="projeto">

                        <h3>Apoio Social</h3>

                        <p>
                            Nosso objetivo é oferecer apoio
                            para pessoas que precisam de
                            ajuda e orientação.
                        </p>

                        <ul>
                            <li>Apoio às comunidades</li>
                            <li>Campanhas sociais</li>
                            <li>Ações de solidariedade</li>
                        </ul>

                    </article>

                </div>

            </div>

        </section>


        <section class="doacoes">

            <div class="container">

                <div class="doacoes-conteudo">

                    <h2>Faça uma Doação</h2>

                    <p>
                        As doações são muito importantes
                        para que a Sons Of The Emperor
                        consiga continuar realizando seus
                        projetos e ajudando pessoas.
                    </p>

                    <a href="#cadastro" class="botao">
                        Quero ajudar
                    </a>

                </div>

            </div>

        </section>

    `;
}
