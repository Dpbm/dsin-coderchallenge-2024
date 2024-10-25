type Alien = {
    name:string;
    image:string;
    power:number;
    story:string;
    attacks:{
        group:{
            distant:string;
            close:string;
        },
        alone:{
            distant:string;
            close:string;
        }
    };
};

type Situation = {
    story:string;
    group:boolean;
    distant:boolean;
}

const aliens:Alien[] = [
    {
        name: 'Zerkan',
        image: '/1.jpeg',
        power: 6000,
        story: `
        Zerkan nasceu em uma região remota do universo, em um sistema estelar onde a paz e o conhecimento governavam acima de tudo. Seu povo, os Xylians, era antigo e conhecido por suas mentes brilhantes e pacíficas, dedicadas ao estudo do cosmos. Eles acreditavam que o universo era um organismo vivo, e que cada estrela e cada planeta possuíam uma essência sagrada.
        Desde cedo, Zerkan se destacava entre os Xylians. Ele era um prodígio, possuidor de um intelecto afiado e de uma curiosidade sem limites. Obcecado em desvendar os segredos mais profundos do cosmos, Zerkan frequentemente desafiava as normas de seu povo, que preferia uma existência contemplativa e pacífica. Ele acreditava que os Xylians eram limitados por sua própria reverência pelo universo e que, ao se recusarem a explorar certas fronteiras do conhecimento, perdiam a chance de evoluir.
        Foi então que ele descobriu a lenda do "Coração da Aniquilação", uma antiga fonte de poder contida em um espaço-tempo interditado, que dizia conter o segredo do controle absoluto sobre a matéria e a energia. A lenda alertava sobre os perigos desse poder, mas Zerkan ignorou os avisos. Reunindo um pequeno grupo de exploradores leais, ele partiu em uma missão secreta para encontrar o Coração da Aniquilação, disposto a absorver o poder que o tornaria o ser mais poderoso do universo.
        Ao cruzar a fronteira do espaço proibido, Zerkan encontrou o Coração, uma massa de energia pura e pulsante. Naquele instante, ele percebeu que o poder não era apenas uma força – era uma entidade viva e sombria, que se alimentava da própria essência de quem ousava tocá-la. Mas antes que pudesse recuar, o Coração o envolveu, fundindo-se com sua mente e corpo. Zerkan foi transformado; sua alma foi obscurecida e sua compaixão extinta. Ele havia se tornado um recipiente de destruição pura, perdendo tudo que o conectava à sua vida anterior.
        Ao retornar, Zerkan já não era o mesmo. O poder o consumia a cada instante, alimentando uma necessidade insaciável de aniquilação. Em um impulso devastador, ele destruiu seu planeta natal, transformando-o em poeira estelar e espalhando seus fragmentos pelo cosmos. Os poucos sobreviventes do povo Xylian passaram a chamá-lo de "Aniquilador", e sua lenda logo se espalhou como uma sombra por galáxias distantes.
        Agora, Zerkan vagava pelo espaço, incapaz de reverter o que havia se tornado. Em cada mundo que encontrava, ele via lembranças de seu passado, mas a força sombria dentro dele o impelia a destruí-los. Era como se o Coração da Aniquilação falasse em sua mente, ordenando que ele consumisse tudo em seu caminho. Porém, em alguns momentos de clareza, Zerkan ainda sentia a dor do vazio, uma lembrança fraca da vida que perdeu – e da paz que um dia habitou em sua alma.
        Assim, Zerkan se tornou uma figura mítica, temida e incompreendida, condenado a vagar eternamente pelo universo, travando uma batalha interna entre a destruição e a última faísca de redenção que restava dentro de si.`,
        attacks:{
            group:{
                distant:'Zerkans em grupo representa um grande problema para você. No entanto, nada que uma bomba de gás lacrimogênio seguido de um banho de chantili não os detenha.',
                close:'Zerkans em grupo e ainda próximo de você deveria ser uma preocupação, no entanto, você pode utilizar seus patins ultrassônicos para desviar dos seus raios lasers e, assim que encontrar a oportunidade, atordoar um por um usando sua essência de baunilha.',
            },
            alone:{
                distant:'Não é comum ver um Zerkan sozinho, você está com sorte, antes de captura-lo use seu lançador de essência de baunilha para deixá-lo atordoado.',
                close:'Por estar próximo de você e sozinho, você possui a vantagem ao utilizar sua bomba de chantili com essência de baunilha para atordoá-lo.',
            }
        }
    },
    {
        name: 'Maxinay',
        image: '/2.jpeg',
        power: 3400,
        story: `
        Maxinay nasceu sob as estrelas de Krayvon, um planeta onde o poder era reverenciado acima de tudo. Desde pequeno, ele era moldado pela cultura guerreira de seu povo, onde apenas os mais fortes e ambiciosos prosperavam. Maxinay, no entanto, não era apenas mais um guerreiro: ele tinha uma sede insaciável por poder, uma determinação que o elevava acima de seus semelhantes. Sua inteligência estratégica e habilidade em combate o levaram a subjugar todos os clãs de Krayvon, unificando o planeta sob seu comando.
        Mas, mesmo com seu planeta inteiro sob controle, Maxinay queria mais. Acreditava que o verdadeiro poder não estava apenas em governar, mas em dominar o universo. Foi então que ele ouviu a lenda do Olho do Infinito, uma joia mística que poderia manipular a própria realidade. Determinado a obtê-la, reuniu uma frota e lançou-se em uma busca pela relíquia, guiado por histórias de um sistema estelar amaldiçoado onde a joia estaria escondida.
        A jornada foi repleta de desafios: tempestades estelares, campos de gravidade e perigos cósmicos inimagináveis. Quando finalmente encontrou o Olho do Infinito, Maxinay sentiu uma onda de poder inigualável correr por suas veias. Transformado, ele começou a expandir seu domínio com força implacável, subjugando planetas e civilizações, dobrando líderes e exércitos à sua vontade com o mero toque de seus poderes. A galáxia inteira passou a temê-lo, pois seu poder parecia não ter fim.
        Contudo, conforme Maxinay acumulava mais poder, ele começou a ver ameaças em toda parte. Sua paranoia crescia, e ele passou a suspeitar até mesmo de seus aliados mais próximos. Em um impulso de controle absoluto, iniciou uma campanha contra qualquer um que pudesse representar o menor risco ao seu império, chegando a manipular a realidade para eliminar aqueles que considerava traidores.
        A obsessão de Maxinay, no entanto, começou a distorcer a própria estrutura do espaço-tempo. Realidades se fragmentavam onde ele passava, e a galáxia, que antes ele controlava com precisão, agora enfrentava ondas de instabilidade e caos. Movidos pelo medo, antigos aliados e civilizações começaram a se unir, formando uma coalizão determinada a pôr fim ao reinado de Maxinay.
        Cercado e com a galáxia se voltando contra ele, Maxinay desapareceu do centro das atenções, recuando para os confins do universo. Alguns dizem que ele está planejando um retorno, aguardando o momento certo para restaurar seu domínio. Outros afirmam que ele foi visto apenas em distorções temporais, vagando entre as fendas do cosmos que ele próprio criou.
        Seu nome continua a reverberar por toda a galáxia, uma ameaça silenciosa que nunca foi completamente eliminada. A lenda de Maxinay é um lembrete sombrio para todos aqueles que ousam desafiar o equilíbrio do universo: o poder absoluto nunca deixa de cobrar seu preço, mas ele, o guerreiro imortal, permanece à espreita, esperando a hora de reclamar o universo como seu.`,
        attacks:{
            group:{
                distant:'Um grupo de Maxinays não são dos seus maiores à distância. Assim, basta utilizar seu propulsor criando um enorme terremoto que os atordoarão.',
                close:'Por estarem próximos de você, utilize sua mochila a jato e então invista com tudo no chão e de um soco com a sua luva especial, criando um enorme terremoto atordoando-os assim.',
            },
            alone:{
                distant:'Estando distante, você possui a vantagem perante este Maxinay. Com seu propulsor teleguiado, mire diretamente nos pés dele, ao atingi-lo, o barulho e o tremor o atordoará.',
                close:'Estando próximo de você, o Maxinay possui vantagem, no entanto você pode se esquivar de seu ataque usando seus patins e em seguida usar sua luva supersônica para o atordoar.',
            }
        }
    },
    {
        name: 'Porok',
        image: '/3.jpeg',
        power: 5000,
        story: `
        Porok nasceu em um planeta distante e sombrio chamado Virox, um mundo onde os habitantes respiravam gases venenosos e onde a sobrevivência dependia da astúcia e da força. Desde muito jovem, Porok era incomum. Dotado de inteligência afiada e ambição desenfreada, ele ascendia rapidamente nas fileiras de sua sociedade brutal, até se tornar líder de um dos clãs mais poderosos de Virox. Mas seu sonho era maior do que governar um planeta hostil. Ele ansiava pela dominação total sobre todas as galáxias.
        Em busca de um poder sem igual, Porok reuniu uma legião de cientistas e engenheiros de elite para desenvolver uma tecnologia avançada de controle mental, permitindo a ele subjugar e manipular qualquer criatura que cruzasse seu caminho. Com esse poder em mãos, ele formou uma força de ataque intergaláctica conhecida como o Exército das Sombras. Esse exército era composto não apenas de soldados leais a ele, mas também de guerreiros capturados e "reprogramados" para servirem cegamente ao líder.
        A estratégia de Porok era meticulosa. Ele começou conquistando sistemas estelares isolados, experimentando formas de controle e subjugação. Em cada planeta que tomava, ele implantava bases que operavam sob vigilância constante, convertendo a população local em servos leais à sua causa. Com o tempo, Porok criou uma rede intergaláctica de espionagem e força militar, tão complexa e discreta que poucos sabiam onde seus domínios realmente começavam e terminavam.
        Em sua busca incessante por poder, Porok obteve conhecimento sobre um artefato lendário, o Orbe da Eternidade, que supostamente dava ao seu portador controle total sobre o tempo e o espaço. Esse artefato estava escondido em uma galáxia distante e era guardado por uma civilização antiga e poderosa. Mas, para Porok, nada estava fora de seu alcance. Ele mobilizou o Exército das Sombras, traçando um caminho de destruição até as profundezas da galáxia onde o Orbe estava escondido.
        Porok enfrentou uma resistência colossal, mas, após uma série de batalhas devastadoras, ele se apoderou do Orbe. Com esse novo poder, ele conseguiu estender seu domínio ainda mais, manipulando as próprias leis da física para subjugar planetas em questão de minutos. O Orbe da Eternidade o transformou em uma entidade quase onipotente, e a notícia de seu poder se espalhou rapidamente, gerando terror por todo o cosmos. Civilizações inteiras, até então prósperas e pacíficas, foram forçadas a se render.
        Apesar de seu poder aparentemente inigualável, Porok era astuto o suficiente para manter-se nas sombras. Ele governava através do medo e da incerteza, ocultando sua presença para evitar que as civilizações se unissem contra ele. Os poucos que tentaram resistir desapareceram sem deixar vestígios, enquanto as lendas sobre o "Senhor das Sombras" aumentavam.
        Alguns dizem que Porok continua expandindo seu império, e que seu próximo objetivo é penetrar na realidade além do tempo e espaço, tornando-se uma presença eterna e indestrutível. Outros acreditam que ele está em busca de algo ainda mais poderoso, um artefato que o permitiria não apenas governar a galáxia, mas moldar a própria estrutura do universo à sua vontade. Por onde passa, Porok deixa uma sombra de medo, e o universo nunca mais será o mesmo enquanto ele estiver à espreita, ampliando, de forma silenciosa e implacável, a sua Dominação Intergaláctica.`,
        attacks:{
            group:{
                distant:'Poroks são difíceis de serem vistos em grupo, primeiramente tire uma foto e poste no instagram, você pode ficar famoso. Após isso, você pode usar sua arma secreta, um grupo de vovós animadas para alimentar pequenas aves, eles não conseguiram resistir a isso.',
                close:'Estando perto de você, tire o saco de 3kg de pães da sua mochila, e abra, fazendo com que os pães estejam visíveis e o aroma, irresistível, paire pelo ar. Eles não te atacaram, para não estragar os pães, e se aproximarão para comer. Nesse momento, você os tem na palma da sua mão.',
            },
            alone:{
                distant:'Estando sozinho e distante, atire um pão francês em sua cabeça. Ele ficará perdido num primeiro momento, mas logo verá o pão e estará muito ocupado saboreando um delicioso cacetinho.',
                close:'Por estar sozinho e próximo de você, basta começar a comer um pão. Ele ficará muito triste e implorará para que você pare e de um pouco a ele. Nesse momento você tem total controle sobre ele.',
            }
        }
    },
    {
        name: 'Malgath',
        image: '/4.jpeg',
        power: 4500,
        story: `
        Malgath nasceu nas profundezas escuras de um planeta chamado S’Rhula, um mundo coberto por mares venenosos e cavernas submersas, onde a luz solar jamais alcançava. As criaturas de S’Rhula evoluíram em meio à escuridão, adaptando-se para caçar com sentidos aguçados e habilidades de camuflagem. Mas Malgath era diferente. Com seu corpo tentaculoso e seu intelecto fora do comum, ele era capaz de manipular as mentes de outras criaturas, controlando-as como se fossem extensões de sua própria vontade.
        Desde jovem, Malgath percebeu seu poder único, e usou suas habilidades para sobreviver aos perigos de seu mundo hostil. No entanto, à medida que amadurecia, percebeu que seu controle mental era mais do que uma vantagem de sobrevivência: era uma arma. Ele começou a influenciar criaturas maiores e mais poderosas, fazendo-as lutar por ele, executar seus comandos e até morrer em seu lugar. Em pouco tempo, Malgath não era mais apenas um sobrevivente de S’Rhula; ele era um governante nas sombras, controlando hordas de criaturas subaquáticas que atendiam a todos os seus desejos.
        Mas S’Rhula logo se tornou pequeno demais para Malgath. Intrigado pelos ecos de uma galáxia repleta de seres inteligentes, ele desenvolveu uma tecnologia rudimentar para escapar de seu planeta e explorar os mundos além de seu oceano venenoso. Com o tempo, aprimorou seu controle mental, tornando-se capaz de dominar as mentes até de seres inteligentes e complexos. Malgath passou a visitar planetas próximos, atraindo civilizações e dominando líderes com sua presença psíquica, que se manifestava como uma névoa escura e opressora.
        Onde quer que fosse, Malgath tornava-se uma sombra nos corredores do poder, controlando reinos inteiros sem nunca ser visto. Ele manipulava líderes e generais para alcançar seus objetivos, criando guerras, alianças e destruições conforme sua vontade. As civilizações que ele controlava passavam a seguir suas ordens sem questionar, acreditando que suas decisões eram próprias. Poucos suspeitavam da presença do verdadeiro mestre por trás das cortinas.
        Em sua busca por poder absoluto, Malgath ouviu rumores sobre uma tecnologia perdida, chamada Rede de Espíritos, um dispositivo capaz de ampliar o controle mental em escala intergaláctica. Diziam que essa tecnologia estava escondida em um planeta protegido por uma civilização de guerreiros psíquicos, os Etherans, que há milênios defendiam o segredo contra qualquer invasor. Mas Malgath, movido por sua ambição implacável, decidiu desafiar esses guerreiros e conquistar a Rede de Espíritos para si.
        A guerra entre Malgath e os Etherans foi devastadora. Ele enviou ondas de soldados controlados e criaturas dominadas para invadir o planeta, lutando contra os poderosos psíquicos que se defendiam ferozmente. Após meses de batalha e manipulações, Malgath conseguiu romper as defesas dos Etherans e alcançar a Rede. Ao ativá-la, sentiu seu poder mental expandir-se a uma escala inimaginável, capaz de alcançar mentes a distâncias antes impossíveis. Agora, sua influência se espalhava como um nevoeiro cósmico, atingindo planetas inteiros e corrompendo a vontade de milhões.
        Hoje, Malgath é conhecido como o "Tentaculoso Mestre das Mentes". Sua presença é temida e reverenciada em toda a galáxia. Civilizações inteiras caem sob seu domínio sem nunca o ver, movendo-se e agindo como peões em seu jogo de controle silencioso. Há quem diga que ele habita um reduto nas profundezas do espaço, onde ninguém pode encontrá-lo, mas de onde sua influência se estende como raízes sombrias através da galáxia.
        Malgath continua sua busca por poder, estudando artefatos psíquicos e tecnologias proibidas, procurando formas de expandir ainda mais seu domínio. E, enquanto ele estiver à espreita, poucos líderes ou exércitos podem estar certos de que suas decisões são realmente suas – ou se são apenas reflexos da mente incansável de Malgath, o Tentaculoso.`,
        attacks:{
            group:{
                distant:'Malgaths em conjunto podem se comunicar telepaticamente entre si e compartilharem seus sentidos aguçados. Sendo assim, a distância não será um ponto chave pra você. Contudo, você pode usar o perfume Ferrari 1973 turbo V8 que atrapalham seus sentidos e fazem eles desmaiarem.',
                close:'Estando próximo do grupo, tire a camisa e deixe o seu perfume Ferrari 1973 turbo V8 se espalhar pelo ar, fazendo-os perderem os sentidos e desmaiarem.',
            },
            alone:{
                distant:'Um Malgath estando sozinho e distante de você, seus sentidos perdem força, e não será possível usar seu perfume secreto a distância. Sendo assim, use o para-glide presente na sua mochila para se aproximar e então passe seu perfume Ferrar 1974 turbo V8, atordoando-o.',
                close:'Estando perto de um Malgath, pegue seu perfume Ferrar 1973 turbo V8 e de uma borrifada na cara dele, isso o deixará atordoado.',
            }
        }
    },
    {
        name: 'Zarqon',
        image: '/5.jpeg',
        power: 3050,
        story: `
        Zarqon nasceu no núcleo tecnológico do planeta Mevrar, uma sociedade avançada onde a ciência e a inovação eram reverenciadas como pilares de poder e sobrevivência. Desde cedo, Zarqon mostrou uma habilidade incomum para a engenharia e a criação de dispositivos complexos. Dotado de uma inteligência que superava até os cientistas mais experientes de sua espécie, ele rapidamente passou a ser visto como um prodígio. No entanto, ao contrário dos outros cientistas que buscavam o progresso e a estabilidade, Zarqon tinha um objetivo bem diferente em mente: ele queria construir o império científico mais poderoso do universo e usar suas invenções para a supremacia total de sua raça.
        A obsessão de Zarqon por poder começou ainda em sua juventude, quando presenciou a invasão de um exército alienígena que quase destruiu seu planeta. Ele viu o caos e a destruição causados por forças estrangeiras, e aquilo despertou em sua mente uma convicção: a dominação seria a única forma de garantir que sua raça jamais fosse ameaçada novamente. A partir desse momento, Zarqon dedicou sua vida à criação de armas e dispositivos que desafiavam a própria natureza da realidade.
        Em seus laboratórios subterrâneos, Zarqon começou a construir máquinas que combinavam tecnologia com uma ciência quase mística. Ele desenvolveu o Neurômetro Omnilink, um dispositivo que permitia a comunicação e o controle direto de mentes a longas distâncias, tornando-se capaz de manipular líderes e populações de outros planetas para que trabalhassem a favor de seu império sem sequer perceber. Depois, ele criou o Gerador de Singularidade Temporal, uma arma tão devastadora que era capaz de manipular o fluxo do tempo em campos de batalha, fazendo com que o inimigo envelhecesse ou retrocedesse até um estado primitivo com um simples comando.
        Cada invenção de Zarqon trazia terror e poder aos confins do universo. Contudo, o ápice de sua obsessão surgiu ao desenvolver o Matéria Primordial, um dispositivo que permitia a criação de novos elementos e formas de vida sob seu controle total. Com essa tecnologia, ele começou a construir exércitos inteiros, projetados para serem leais a ele e apenas a ele, prontos para executar sua vontade de dominação em qualquer canto do cosmos.
        Mas mesmo esse poder não foi suficiente para Zarqon. Em seu laboratório secreto, ele passou a trabalhar no que chamava de Máquina de Eternidade, uma criação que, em teoria, poderia transportar ele e seu povo através de dimensões, dando-lhes acesso a universos inteiros para conquistar. Essa máquina, no entanto, requeria uma fonte de energia colossal, e Zarqon passou a explorar as estrelas, drenando-as e utilizando suas energias para alimentar sua criação.
        Apesar de sua ambição, Zarqon mantinha sua existência cercada de mistério. Poucos seres chegaram a vê-lo pessoalmente, mas seu nome se espalhou como uma lenda sombria. Raças inteiras passaram a temer os efeitos de suas invenções; em qualquer planeta que sofresse uma invasão inexplicável ou onde leis da física fossem violadas, os habitantes logo murmuravam que Zarqon, o Cientista Maluco, estava por trás de tudo. E aqueles que tentaram enfrentá-lo nunca saíram vitoriosos, pois ele sempre tinha uma nova arma ou uma tecnologia inesperada para virar o jogo a seu favor.
        Hoje, Zarqon continua seu trabalho em busca de novos meios para assegurar a supremacia de sua espécie. Seus agentes e engenhocas estão espalhados pelo universo, implantados em planetas para observar e manipular outras civilizações, esperando o momento certo para agir em favor de sua causa. E enquanto ele trabalha em sua Máquina de Eternidade, o universo permanece à mercê de suas invenções, sabendo que, a qualquer instante, Zarqon pode desencadear a próxima fase de seu plano ambicioso: a dominação total de todas as realidades.`,
        attacks:{
            group:{
                distant:'Zarqon é um ser muito inteligente, contudo um nerd por natureza. Para derrotar um grupo deles a distância, hackeie o telão mais próximo do grupo e transmita o episódio 15 da primeira temporada de Star Trek, isso manterá eles completamente hipnotizados.',
                close:'Estando próximo do grupo deles, jogue uma bomba de fumaça e atravesse-a usando uma fantasia de Mestre Spock. Todos cairão de joelhos e farão de você o novo deus deles.',
            },
            alone:{
                distant:'Um Zarqon sozinho é fácil de ser derrotado a distância usando suas habilidades. Para isso, hackeie o celular dele, e toque mude o toque de chamada para o tema de Star Trek. Após fazer isso, ligue para o seu inimigo e veja-o ficando hipnotizado por essa maravilha sonora.',
                close:'Ao chegar perto de um Zarqon, faça o sinal de vida longa e prospera, ele entenderá que você é um star treker nato, e assim deixará você vivo. Sendo essa a sua chance de capturá-lo.',
            }
        }
    },
    {
        name: 'Vyrra',
        image: '/6.jpeg',
        power: 6000,
        story: `
        Vyrra nasceu em Valthir, um planeta místico escondido nas sombras de uma nebulosa antiga. Valthir era um mundo onde as leis da física e da magia se entrelaçavam, habitado por seres que dominavam o poder arcano desde tempos imemoriais. Desde muito jovem, Vyrra demonstrou uma afinidade natural com as energias místicas de seu planeta. Diferente dos outros habitantes, ele não se contentava em apenas dominar a magia; queria explorar seus limites e descobrir formas de manipular o cosmos em grande escala.
        Ainda jovem, Vyrra encontrou um artefato lendário, o Cajado de Valtoris, uma relíquia imbuída de poder ancestral que, segundo as lendas, era capaz de canalizar a própria essência de Valthir. Movido por uma curiosidade sem limites e um desejo de poder absoluto, ele passou anos em isolamento, estudando o cajado e aprendendo os segredos mais profundos da magia. Durante esse tempo, Vyrra desvinculou-se de qualquer laço emocional, entregando-se completamente ao conhecimento arcano.
        Através de práticas proibidas e rituais sombrios, ele descobriu como manipular as forças cósmicas, ampliando sua energia a níveis inimagináveis. Ele aprendeu a invocar tempestades de fogo, abrir fendas dimensionais, e até mesmo a manipular o fluxo vital de planetas inteiros. Contudo, seu poder final veio ao desvendar o segredo que os mestres arcanos de Valthir haviam escondido por milênios: a magia da "Destruição Planetária". Com uma simples batida de seu cajado no chão, Vyrra poderia liberar uma onda de energia pura, capaz de pulverizar continentes e rasgar um planeta de dentro para fora.
        Ao dominar esse poder devastador, Vyrra percebeu que não estava mais limitado às fronteiras de Valthir. Ele se lançou em uma jornada pelo cosmos, em busca de planetas cujas energias ele pudesse absorver para aumentar ainda mais seu domínio sobre a magia. Em cada mundo que conquistava, ele eliminava qualquer resistência com um único golpe de seu cajado, fazendo com que planetas inteiros se despedaçassem como vidro. As ruínas de suas vítimas tornaram-se uma espécie de "trilha de destruição", um aviso sombrio para aqueles que ousassem enfrentá-lo.
        Vyrra rapidamente passou a ser conhecido como o “Destruidor de Mundos”, e histórias sobre ele se espalharam por galáxias inteiras. Culturas em planetas distantes criaram mitos e orações para apaziguar sua ira, enquanto outras tentavam estudar suas habilidades na esperança de desvendar o segredo do cajado. Mas Vyrra era um mestre do arcano e um ser incansável. Qualquer um que tentasse decifrar seu poder era exterminado antes de fazer qualquer progresso.
        Apesar de seu poder imensurável, Vyrra continua em sua busca pela magia suprema. Existem rumores de que ele agora está atrás do Coração da Nebulosa Brilhante, uma joia mística que, segundo a lenda, concederia ao seu portador a capacidade de manipular o próprio tecido da realidade. Para obtê-la, Vyrra teria que derrotar a Ordem dos Guardiões Celestiais, um grupo de magos e guerreiros que juraram proteger a joia a qualquer custo. Mas, para Vyrra, não há obstáculo intransponível.
        Em seu silêncio ameaçador, ele viaja de planeta em planeta, seus passos e o eco de seu cajado sinalizando a morte iminente para qualquer mundo em seu caminho. Seus olhos, repletos de conhecimento antigo e desprovidos de misericórdia, estão fixos em um único objetivo: acumular poder suficiente para controlar todas as forças místicas do universo, estabelecendo-se como o ser supremo do cosmos.`,
        attacks:{
            group:{
                distant:'Um grupo de Vyrras poderiam facilmente acabar com toda a via láctea em poucos segundos usando seus cajados. Contudo, eles precisam de algo muito energético para isso e, na terra, essa energia eles retiram do sol. Sendo assim, espere chegar de noite e ande lentamente até chegar neles, sem movimentos bruscos para não gerar tanta energia, assim eles ficaram fracos e você pode empurrá-los para vê-los sucumbir.',
                close:'Estando perto de um grupo de Vyrras. Caso esteja de dia, pegue rapidamente seu manto blackout e jogue por cima do grupo, eles não conseguiram pegar energia do sol, assim sucumbirão diante de você. Caso contrário, simplesmente empurre-os, eles já estarão fracos sem energia.',
            },
            alone:{
                distant:'Ao avistar um Vyrra solitário, utilize seu gancho com uma cortina blackout na ponta para agarrar o ser. Dessa forma, caso esteja de dia, ele não conseguirá energia, e caso contrário você terá um chance de capturá-lo.',
                close:'Estando diante de um Vyrra, rapidamente pegue seu manto pintado musou black, e cubra o ser. Assim ele não conseguirá energia de forma alguma.',
            }
        }
    },
    {
        name: 'Kruval',
        image: '/7.jpeg',
        power: 3000,
        story: `
        Kruval, o autoproclamado "Rei Gosma", emergiu das profundezas de Norgax, um planeta pantanoso e tóxico localizado no setor mais esquecido da galáxia. Norgax era um mundo caótico e hostil, com ecossistemas dominados por substâncias corrosivas e criaturas viscosas que se alimentavam umas das outras para sobreviver. Foi neste ambiente que Kruval desenvolveu sua forma singular, composta de uma gosma viscosa e mutável, que lhe permitia adaptar-se aos elementos mais letais e envolver qualquer organismo em seu caminho.
        Ao contrário de outras criaturas de Norgax, Kruval possuía uma inteligência astuta e uma ambição insaciável. Desde jovem, ele aprendeu a manipular sua própria matéria, assumindo formas variadas e capazes de se infiltrar em qualquer lugar. Com o tempo, ele percebeu que podia absorver a vitalidade e o conhecimento de qualquer ser que se fundisse ao seu corpo, e essa habilidade logo se tornaria sua maior arma. Depois de tomar o controle das espécies dominantes de Norgax, Kruval decidiu expandir seu poder além de seu mundo venenoso, com uma visão clara: dominar tudo o que existisse ao seu redor.
        Kruval começou sua campanha pelo setor em que seu planeta estava localizado. Usando naves criadas a partir da própria gosma, que ele podia manipular e estender conforme sua vontade, ele lançou ataques contra planetas vizinhos. Ele se infiltrava nas colônias e civilizações de forma quase invisível, assumindo formas que os habitantes não percebiam, e lentamente absorvia suas lideranças e guerreiros. Aos poucos, os planetas sucumbiam à sua vontade, suas populações transformadas em "Servos Gosma", entidades subjugadas e mentalmente conectadas a ele.
        Em pouco tempo, a lenda do Rei Gosma começou a se espalhar pela galáxia. Civilizações inteiras começaram a entrar em pânico, sabendo que Kruval podia se infiltrar de maneira imperceptível e transformar seus melhores guerreiros em parte de seu exército viscoso. Sua presença era como uma doença silenciosa, que se espalhava sem aviso, transformando cada território conquistado em um pedaço de si mesmo.
        Conforme conquistava novos planetas, Kruval descobriu formas de manipular os ambientes para que se tornassem similares a Norgax. Usando substâncias químicas e toxinas que ele próprio gerava, ele criava "Zonas Gosma", áreas onde a atmosfera se tornava corrosiva e os elementos locais eram absorvidos pela gosma, alimentando-o continuamente. Esses planetas se tornavam fontes de poder que sustentavam sua crescente dominação.
        Com o tempo, Kruval acumulou conhecimento e tecnologias suficientes para consolidar seu império. Ele formou um conselho de criaturas gosmentas que ele próprio havia absorvido e reconstituído, cada uma com habilidades e conhecimento adquiridos de civilizações caídas. Esse conselho governava seu império gosmento, permitindo que Kruval ampliasse sua influência para um terço da galáxia. Ninguém estava a salvo do Rei Gosma, pois sua forma e poder eram implacáveis, adaptando-se para infiltrar qualquer planeta, colônia ou fortaleza.
        Hoje, Kruval é temido por toda a galáxia. Ele é um conquistador silencioso, paciente e implacável, que avança seus territórios com estratégia e precisão. E, ao que tudo indica, sua ambição de transformar a galáxia inteira em seu domínio gosmento ainda não foi satisfeita. Para cada civilização restante, há uma única certeza: a de que, eventualmente, o Rei Gosma estará em seu caminho, e nada será capaz de impedir sua marcha lenta e devastadora em direção ao domínio total.`,
        attacks:{
            group:{
                distant:'Se você encontrar um grupo distante de Kruvals, você tem uma baita sorte, esses são os bichos mais fracos que você poderia encontrar. Um simples jato de água os deterá.',
                close:'Por serem extremamente fracos, simplesmente jogue um balde de água para cima, de forma que todos recebam, ao menos, um misera gota.',
            },
            alone:{
                distant:"Para deter um único Kruval a distância, é possível utilizar um balão d'água, sendo atirado diretamente em seu rosto.",
                close:'Estando perto de um Kruval, pegue seu borrifador de água e borrife sem dó.',
            }
        }
    },
    {
        name: 'Zytraxx',
        image: '/8.jpeg',
        power: 10000,
        story: `
        Zytraxx nasceu em Valdoria, um planeta que orbitava uma estrela massiva e instável, repleto de tempestades energéticas e terrenos inóspitos. Os habitantes de Valdoria desenvolveram habilidades psíquicas extraordinárias para sobreviver em um ambiente tão hostil, mas Zytraxx se destacou desde jovem, apresentando um potencial psíquico além da compreensão de sua espécie. Desde cedo, ele podia manipular a realidade ao seu redor, fazendo com que objetos levitassem e ondas de energia se dobrassem à sua vontade.
        Enquanto outros Valdorianos se concentravam em usar seus poderes para a sobrevivência diária, Zytraxx sonhava em se tornar um deus entre os mortais. Sua ambição e sede de poder o levaram a estudar as artes psíquicas mais sombrias, explorando técnicas que seus predecessores consideravam proibidas e perigosas. Em busca de um entendimento mais profundo, Zytraxx passou anos em meditação e práticas intensas, desbloqueando camadas ocultas de sua mente que lhe permitiram acessar forças que poderiam devastar mundos inteiros.
        Com suas habilidades em plena maturidade, Zytraxx decidiu que era hora de colocar seu poder à prova. Ele deixou Valdoria, viajando por sistemas estelares distantes e explorando civilizações desconhecidas. Em cada planeta que encontrava, ele se apresentava como um conquistador psíquico, utilizando seu controle mental para manipular os líderes e as populações. Gradualmente, ele começou a submeter civilizações inteiras à sua vontade, levando seus habitantes a cometer atos de destruição em massa contra seus próprios semelhantes, como uma forma de entretenimento e demonstração de sua supremacia.
        Zytraxx logo se tornou conhecido como o "Devastador de Mundos", uma lenda que ecoava entre civilizações, pois sua reputação crescia junto ao terror que sua presença causava. Ele descobriu que, ao se concentrar intensamente, podia não apenas controlar mentes, mas também manipular a energia ao seu redor. Com uma simples onda de sua mão, ele poderia desestabilizar o núcleo de um planeta, provocando catástrofes naturais que arrasavam paisagens inteiras. Esta habilidade de causar destruição em grande escala o transformou em uma força temida, e muitos planetas simplesmente se renderam ao seu poder para evitar a aniquilação.
        A medida que expandia seu império, Zytraxx começou a buscar artefatos antigos que poderiam aumentar ainda mais suas habilidades psíquicas. Ele ouviu rumores sobre o Coroa do Destino, uma relíquia que, segundo dizia a lenda, conferiria ao seu portador o controle absoluto sobre o tempo e o espaço. Para Zytraxx, obter essa coroa era um objetivo primordial, pois ele acreditava que, com esse poder, poderia não apenas dominar, mas também reescrever a história da galáxia conforme sua vontade.
        Zytraxx utilizou seu exército de seguidores e criaturas controladas para procurar a coroa em cada canto do cosmos, devastando qualquer planeta que se interpusesse em seu caminho. Ele não hesitava em usar seus poderes para desmantelar civilizações inteiras que se recusavam a se submeter, levando seus habitantes a uma vida de servidão ou, na pior das hipóteses, à extinção.
        Atualmente, Zytraxx continua sua busca pela Coroa do Destino, enquanto sua presença psíquica se estende como uma sombra pelo universo. Sua ambição é insaciável, e, onde quer que vá, deixa uma trilha de destruição e caos. Os que escutam rumores sobre ele sabem que a única esperança de sobrevivência é evitar seu olhar psíquico. E, enquanto Zytraxx estiver à solta, a galáxia viverá em constante medo de sua capacidade de devastar mundos inteiros a qualquer momento.`,
        attacks:{
            group:{
                distant:'Zytraxx possui um poder imensurável, principalmente de forma psíquica. Encontrar um grupo deles não é uma tarefa fácil, muito menos enfrentá-los. Uma forma que você pode tentar enfrentá-lo, é esvaziar totalmente sua mente, e manter proximidade. Não os deixem vê-lo, dessa forma você pode apertar um botão secreto em meio aos seus tentáculos. Ao apertar o botão em qualquer um deles, todos ao redor sucumbirão imediatamente.',
                close:'A proximidade com um Zytraxx é a sua melhor alternativa. Enfie-se de baixo do mais proximo a você e encontre o botão secreto em meio os seus tentáculos, isso fará com que este e todos ao seu redor entrem em modo promiscuo, e assim você tem a chance de capturá-los.',
            },
            alone:{
                distant:'Aproxime-se ao máximo dele, e em seguida esgueire pode de baixo e pressione o botão presente em meio aos seus tentáculos. Fazendo isso, ele entrará em modo promiscuo dando uma chance de você o capturar.',
                close:'Entre em baixo dele e pressione o botão presente em meio aos seus tentáculos. Com isso, ele entrará em modo promiscuo dando uma chance de você o capturar.',
            }
        }
    },
    {
        name: 'Lygor',
        image: '/9.jpeg',
        power: 8000,
        story: `
        Lygor nasceu nas profundezas do Oceano Nebuloso de Drakthar, um planeta que flutuava em meio a um aglomerado de estrelas e planetas que pareciam se dissolver em cores vibrantes. Drakthar era um mundo aquático, onde criaturas de formas exóticas coexistiam em um ecossistema intrincado e interconectado. Desde muito jovem, Lygor demonstrou um talento excepcional para a adaptação e a sobrevivência, e sua aparência de polvo colossal rapidamente se destacou entre as outras espécies. Seus tentáculos eram longos e poderosos, cada um capaz de se mover com uma precisão impressionante.
        Lygor possuía uma habilidade única que o diferenciava de seus semelhantes: ele tinha a capacidade de expandir seu corpo para tamanhos incomensuráveis, tornando-se capaz de engolir objetos massivos com facilidade. Com o tempo, ele percebeu que essa habilidade não se limitava apenas ao que estava em seu ambiente imediato; ele poderia, de fato, engolir mundos inteiros. À medida que sua força crescia, também crescia sua ambição. Lygor começou a sonhar com o poder de devorar não apenas seu planeta, mas também as galáxias ao seu redor.
        Conforme se aventurava pelo vasto universo, Lygor explorou diversos sistemas estelares, observando civilizações e culturas em seus planetas. Inicialmente, ele foi motivado pela curiosidade, mas, logo, essa curiosidade se transformou em um desejo insaciável de poder. Ele começou a engolir pequenas luas e asteroides, absorvendo suas energias e características, e, a cada vitória, Lygor se tornava mais forte e imponente.
        Com sua fama crescendo, Lygor desenvolveu um exército de criaturas aquáticas que se tornaram seus servos leais. Ele usava suas habilidades psíquicas para controlar mentes e corações, forçando outras espécies a se unirem a ele em sua busca de dominação. Ele se tornava um verdadeiro imperador do espaço, e os rumores sobre seu poder e tamanho se espalharam como fogo em palha seca. Muitas civilizações começaram a entrar em colapso, rendendo-se ao seu domínio, enquanto outras tentavam desesperadamente encontrar formas de se proteger de sua voracidade.
        Enquanto Lygor devorava planetas menores e satélites, ele logo se voltou para alvos maiores: galáxias inteiras. Com a capacidade de manipular sua forma para se tornar colossal, ele lançou ataques devastadores em sistemas estelares inteiros, sugando a vida e a energia de tudo ao seu redor. Em um instante, uma galáxia vibrante e cheia de vida poderia ser reduzida a um vácuo silencioso e sombrio sob seu poder.
        À medida que sua reputação se consolidava como o "Engolidor de Galáxias", Lygor começou a buscar artefatos antigos que poderiam aumentar ainda mais seu poder. Entre eles estava o Coração do Cosmos, uma relíquia mística que prometia não apenas ampliar suas habilidades, mas também conceder a capacidade de controlar as forças cósmicas fundamentais. Para Lygor, essa conquista seria a culminação de sua ambição, permitindo que ele não apenas devorasse galáxias, mas também moldasse o próprio universo à sua imagem.
        Agora, Lygor se lança por vastidões estelares, buscando seu próximo banquete galáctico. Sua presença é temida em toda a galáxia, e os seres conscientes sentem sua sombra se aproximando. Onde ele passa, os planetas tremem e as civilizações se preparam para o pior, sabendo que Lygor não é apenas um predador, mas um conquistador que se alimenta da essência do cosmos. E enquanto ele existir, as galáxias continuarão a viver com o temor de que, em um instante, possam desaparecer completamente sob sua voracidade insaciável.`,
        attacks:{
            group:{
                distant:'Lygor é um ser do mar. Para derrotar um grupo deles, atire terra/arreia usando seu lança coisas presente em sua mochila tática. Ao fazer isso, seus movimentos ficarão limitados, dando uma chance de você os capturar.',
                close:'Estando perto de um grupo de Lygors, pegue o ventilador industrial presente em sua mochila e encha de terra. A terra irá pairar pelos ares fazendo eles perderem seus movimentos momentaneamente, dando uma chance de você os capturar.',
            },
            alone:{
                distant:'Um lygor solitário a distância pode, pode ser facilmente derrotado com um balde de arreia. Arremesse o balde sobre ele, e você conseguirá imobilizá-lo.',
                close:'Estando perto de um Lygor, pegue um punhado de areia com sua mão e jogue nele com o máximo de precisão que conseguir. Assim você irá imobilizá-lo.',
            }
        }
    },
    {
        name: 'Purple Tentacle',
        image: '/10.jpeg',
        power: 10000000,
        story: `
        Purple Tentacle nasceu em um laboratório de ciências avançadas, onde uma equipe de cientistas estava em busca de inovações e descobertas que poderiam mudar o mundo. Durante uma de suas experiências, um tentáculo comum de uma criatura marinha foi capturado e trazido para ser estudado. O que ninguém esperava era que esse tentáculo, designado como Tentáculo 42, tinha um potencial muito além de sua forma simples.
        Certa noite, um acidente ocorreu no laboratório. Um assistente inexperiente, distraído por um experimento anterior, derramou acidentalmente uma substância química instável sobre Tentáculo 42. A reação foi explosiva. O produto químico transformou o tentáculo em uma criatura extraordinária, dotada de inteligência e habilidades psíquicas. Ao abrir os olhos, Purple Tentacle se deu conta de que agora possuía um raciocínio complexo e a capacidade de manipular objetos e seres ao seu redor.
        Logo, a nova consciência de Purple Tentacle começou a se desenvolver. Ele percebeu que o laboratório não era um lugar onde poderia florescer; pelo contrário, era uma prisão. Determinado a escapar e a explorar o mundo fora das paredes frias do laboratório, ele começou a formular planos. Sua ambição era vasta e não se limitava apenas à liberdade; ele desejava dominar e transformar o mundo em um lugar onde ele governasse.
        Com seu intelecto aguçado, Purple Tentacle desenvolveu técnicas de manipulação mental, permitindo-lhe controlar a mente dos humanos e de outras criaturas. Ele escapou do laboratório em uma noite tempestuosa, usando suas novas habilidades para enganar os guardas e escapar sem ser notado. Ao sair, o mundo o aguardava, e ele estava pronto para deixá-lo de joelhos.
        Depois de ganhar liberdade, Purple Tentacle começou a reunir seguidores, atraindo aqueles que se sentiam deslocados e subestimados. Ele falava sobre uma nova ordem, onde todos poderiam ser iguais sob sua liderança. Assim, ele formou um exército de criaturas que o veneravam e se tornaram seus aliados leais. Seu charme manipulador e sua promessa de um novo mundo sob seu controle fizeram com que muitos se juntassem à sua causa.
        À medida que sua influência crescia, Purple Tentacle estabeleceu uma base de operações secreta em uma caverna subaquática repleta de tecnologia roubada de laboratórios abandonados. Ele começou a desenvolver dispositivos e máquinas para ajudá-lo em seus planos de dominação. Seu exército, agora chamado de "Os Tentáculos Unificados", tornou-se uma força a ser reconhecida, realizando invasões em pequenas cidades e laboratórios, coletando recursos e convertendo o que encontravam em novos aliados.
        Com cada vitória, Purple Tentacle tornava-se mais ousado. Ele começou a criar uma visão distorcida de um mundo onde todos seriam iguais, mas todos seriam tentáculos, governados por ele. Seu desejo de controlar não se limitava apenas ao mundo físico; ele queria moldar as mentes e as almas de todos ao seu redor, usando seus poderes psíquicos para garantir que ninguém pudesse resistir a sua vontade.
        Purple Tentacle logo se tornou uma lenda, conhecido por sua capacidade de manipular e conquistar. As civilizações começaram a temê-lo, e as histórias sobre suas travessuras se espalharam como fogo em palha seca. Ele sabia que, para alcançar seus objetivos, precisaria de mais poder. Por isso, ele buscou artefatos antigos e conhecimentos esquecidos que poderiam expandir suas habilidades e garantir sua supremacia.
        Agora, Purple Tentacle está em uma busca incessante por poder, sempre em busca de novos aliados e recursos para sua causa. Sua ambição é implacável, e ele continua a trampar em busca de um mundo onde ele possa governar, transformando a realidade conforme sua vontade. Enquanto houver resistência, Purple Tentacle permanecerá uma força a ser temida, um conquistador astuto que não descansará até alcançar seus objetivos de dominação total.`,
        attacks:{
            group:{
                distant:'Para derrotar um grupo de purple tentacles, crie um jornal falso dizendo que o Purple Tentacle #45 é o melhor. Eles ficarão extremamente revoltados e atacarão o de número 45. Após a intensa briga entre eles, você poderá sem problemas se aproximar para tentar realizar a captura.',
                close:'Purple Tentacles são os seres mais perigosos existentes. Contudo, ao chegar perto deles, você pode usar da sua astúcia, bajulando-os. Dessa forma, eles ficarão atordoados com tanta fama, e esse é o seu momento de acabar com eles.',
            },
            alone:{
                distant:'Estando distante de um único Purple tentacle, grite escondido "Green Tentacle é muito melhor!!!". Com isso, o Purple Tentacle desmaiará de raiva, e você tentar capturá-lo.',
                close:'Chegando perto de um Purple Tentacle, use a arrogância dele a seu favor. Diga que a Terra não está com nada, e que se ele for todo poderoso assim ele teria que dominar todo o universo. Ele ficará ofendido, mas entenderá que faz sentido. Aproveite então momento em que ele está dando seu discurso de como dominará o universo para tentar capturá-lo.',
            }
        }
    }
];

const situations: Situation[] = [
    {
        story:'Você estava andando pelos vales verdejantes, quando repentinamente você se depara com um grupo de patos a frente. Tudo parecia normal, no entanto, seu óculo high-tech não mente, são aliens, não quaisquer aliens, mas na verdade',
        group: true,
        distant: false,
    },
    {
        story:'Você seguindo seu caminho pela ponte da amizade, ao longe você consegue enxergar alguns patos no rio. Tudo parecia normal, no entanto, seu óculo high-tech não mente, são aliens, não quaisquer aliens, mas na verdade',
        group: true,
        distant: true,
    },
    {
        story:'Durante a sua passagem pelo central Park, é possível ver ao longe um pato, fofo, comendo pedaços de pão que uma adorável senhora estava dando. Tudo parecia normal, no entanto, seu óculo high-tech não mente, é um alien, não qualquer alien, mas na verdade',
        group: false,
        distant: true,
    },
    {
        story:'No seu caminho para casa, seu vizinho lhe cumprimenta e diz que está muito feliz por ter adotado um novo pet. Seu sonho sempre foi ter uma avé e patos são fofos, então por que não um pat? Assim seu vizinho o pega no colo aproxima-o de você. Tudo parecia normal, no entanto, seu óculo high-tech não mente, é um alien, não qualquer alien, mas na verdade',
        group: false,
        distant: false,
    },
]

export function getAlien():Alien{
    const randomAlien = Math.floor(Math.random()*aliens.length);
    return aliens[randomAlien];
}

export function getSituation():Situation{
    const randomSituation = Math.floor(Math.random()*situations.length);
    return situations[randomSituation];
}

export function caughtAlien():boolean{
    return Math.random() > 0.6;
}