const caixaPrincipal = document.querySelector (".caixa-principal");
const caixaPerguntas = document.querySelector (".caixa-perguntas");
const caixaAlternativas = document.querySelector (".caixa-alternativas");
const caixaResultado = document.querySelector (".caixa-resultado");
const textoResultado = document.querySelector (".texto-resultado");




const perguntas = [
    {
        enunciado: "Você acha que a IA vai ajudar na tomada de decisões da empresa?",
        alternativas: [
            {
                texto: "Sim, pois ela vai tomar decisões da empresa?",
                afirmacao: "Você é uma pessoa que acredita na tecnologia e num futuro próspero com a IA",
            },
            {
                texto: "Não, só um ser humano sabe da total situação da empresa e como lidar com ela",
                afirmacao: "Você é uma pessoa que prefere os metódos tradicionais e acredita que precisa pensar no emocional dos clientes e não vê-los apenas como números",
            }
        ]
    },
    {
        enunciado: "Você acha que a IA influencia nos processos criativos",
        alternativas: [
            {
                texto: "Sim, porque ela consegue te dar vários pontos de vista diferente sobre determinada ideia",
                afirmacao: "Você é uma pessoa que tem dificuldade com o processo criativo e utiliza a IA para auxilia-lo e dar o ponta pé inicial",
            },
            {
                texto: "Não, ela limita sua critividade, pois te da sempre respostas prontas sem você ter que pensar",
                afirmacao: "Você é uma pessoa que acredita que as melhores ideias vem da mente humana pois somente a mente humana consegue ligar coisas 'sem sentido' e criar ideias únicas e inovadoras",
            }
        ]
    },
    {
        enunciado: "Você acredita que a inteligência artificial será um fator decisivo na transformação dos modelos de negócios nos próximos cinco anos?",
        alternativas: [
            {
                texto: "Sim, sua capacidade de automatizar processos, analisar grandes volumes de dados e personalizar experiências promete revolucionar diversas indústrias",
                afirmacao: "Você é uma pessoa que acredita no potencial transformador da IA e vê a tecnologia como um motor de inovação",
            },
            {
                texto: "Não, acredito que a IA será importante, mas não será o fator decisivo na transformação nos modelos de negócios nos próximos 5 anos",
                afirmacao: "Você é uma pessoa cautelosa em relação ao impacto da IA, acreditando que outros fatores também serão cruciais na transformação dos negócios",
            }
        ]
    },
    {
        enunciado: "Você acredita que a inteligência artificial poderá substituir a maior parte das funções humanas em empresas no futuro próximo? ",
        alternativas: [
            {
                texto: "Sim, acredito que a inteligência artificial poderá substituir a maior parte das funções humanas em empresas no futuro próximo, especialmente em áreas que envolvem tarefas repetitivas e baseadas em dados.",
                afirmacao: "Você é uma pessoa que vê a IA como uma força poderosa o suficiente para automatizar uma grande parte das funções empresariais. Você acredita que as tecnologias estão avançando rapidamente e que as empresas precisarão se adaptar a um cenário onde o trabalho humano será cada vez mais automatizado.",
            },
            {
                texto: "Não, acredito que a inteligência artificial não substituirá a maior parte das funções humanas no futuro próximo. Muitas tarefas exigem criatividade, empatia e julgamento humano, que a IA ainda não consegue replicar plenamente.",
                afirmacao: "Você é uma pessoa que reconhece as limitações da inteligência artificial e valoriza o papel insubstituível dos seres humanos em diversas funções. Você tende a acreditar que, mesmo com os avanços tecnológicos, o componente humano continuará sendo essencial em muitas áreas dentro das empresas.",
            }
        ]
    },
    {
        enunciado: "Você acredita que a adoção da inteligência artificial pelas empresas resultará em um aumento significativo na produtividade global?",
        alternativas: [
            {
                texto: "Sim, acredito que a adoção da inteligência artificial pelas empresas resultará em um aumento significativo na produtividade global, pois a IA pode otimizar processos, reduzir erros e aumentar a eficiência em uma ampla gama de setores.",
                afirmacao: "Você é uma pessoa que confia no impacto positivo da inteligência artificial para melhorar a eficiência e a produtividade das empresas. Você provavelmente vê a IA como uma ferramenta poderosa para superar limitações humanas e transformar a maneira como os negócios operam, promovendo um futuro mais produtivo.",
            },
            {
                texto: "Não, acredito que, apesar dos avanços em inteligência artificial, a adoção dessa tecnologia por si só não resultará em um aumento significativo na produtividade global. Fatores como a adaptação da força de trabalho e a integração adequada da IA nos processos empresariais serão cruciais para qualquer ganho real em produtividade.",
                afirmacao: "Você é uma pessoa que vê a produtividade como resultado de uma combinação complexa de fatores, não apenas da tecnologia. Você provavelmente acredita que, para que a inteligência artificial contribua significativamente para a produtividade, as empresas precisam primeiro focar em questões como treinamento, integração tecnológica e adaptação cultural.",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResposta();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativas));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();