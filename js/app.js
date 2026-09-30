import {
    inicio,
    projetos
} from "./paginas.js";

import {
    cadastro
} from "./formulario.js";


const conteudo =
    document.getElementById("conteudo");


/* CONTROLA A NAVEGAÇÃO */

document.addEventListener("click", function(event) {

    const link =
        event.target.closest("a");

    if (!link) return;


    const destino =
        link.getAttribute("href");


    if (!destino || !destino.startsWith("#")) {
        return;
    }


    event.preventDefault();


    if (destino === "#inicio") {

        inicio(conteudo);

    }

    else if (destino === "#projetos") {

        projetos(conteudo);

    }

    else if (destino === "#cadastro") {

        cadastro(conteudo);

    }

    else if (destino === "#sobre") {

        inicio(conteudo);

        setTimeout(() => {

            document
                .getElementById("sobre")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }, 10);

    }

});


/* ABRE A PÁGINA INICIAL */

inicio(conteudo);
