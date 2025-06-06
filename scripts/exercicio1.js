// Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia.


let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];
  
inventarioAlpha.pop();
console.log(`O inventario Alpha após o último elemento removido ficou: ${inventarioAlpha}`);
console.log('----------------------');

// Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.

 let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysiu", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];

inventarioBeta.pop();
console.log(`A lista com o artefato obsoleto ficou: ${inventarioBeta}`);
console.log('----------------------');

// Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final.

inventarioBeta.push(`Areia do Tempo", "Terra", 3100`, `Anel de Chronos", "Terra", 4900`, `Anel de Chronos", "Terra", 4900`);
console.log(`Depois de adicional os três artefatos da Terra, a lista ficou: ${inventarioBeta}`);
console.log('----------------------');
// Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta.

inventarioBeta.push('Fragmento Prismático", "Kepler-22b", 6400', 'Núcleo de Plasma", "Kepler-452b", 9100')
console.log(`Lista depois dos dois artefatos especiais adicionados no final dela: ${inventarioBeta}`);
console.log('----------------------');

// Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine

inventarioAlpha.pop() 
inventarioAlpha.unshift(`Terminal de Dobra", "Alpha Centauri", 10500`)
console.log(`A lista com o item alfa no topo ficou: ${inventarioAlpha}`);
console.log('----------------------');

// Um item da Beta deve ser promovido para o início da lista para estudo prioritário.

inventarioBeta.pop() 
inventarioBeta.unshift(`Terminal de Dobra", "Alpha Centauri", 10500`)
console.log(`A lista com o item beta no topo ficou: ${inventarioBeta}`);
console.log('----------------------');
  
// Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído.

inventarioAlpha.shift();
console.log(`A lista com o primeiro elemento removido ficou: ${inventarioAlpha} `);
console.log('----------------------');

// O primeiro item da Beta pertence a um museu e deve ser removido.

inventarioBeta.shift();
console.log(`A lista com o primeiro elemento removido ficou: ${inventarioBeta} `);
console.log('----------------------');

// Verifique se a “Relíquia de Zordon” está presente no inventário Beta. (nível hard)
const nomesItens = inventarioBeta.map((item) => item[0]);
const reliquiaExiste = nomesItens.includes("Relíquia de Zordon")
console.table(reliquiaExiste)
console.log('----------------------');

// Verifique se o item “Nanofibra Luminosa” ainda está disponível na Alpha. (nível hard)

const nomesItens2 = inventarioAlpha.map((item) => item[0]);
const nanofibraExiste = nomesItens2.includes("Nanofibra Luminosa");
console.log(nanofibraExiste);
console.log('----------------------');

// Gere uma string com todos os planetas do inventário Alpha, separados por um delimitador.

console.log(`String dos planetas do inventário Alpha: ${inventarioAlpha.join(', ')}`);
console.log('----------------------');

// Crie um texto com os nomes dos 10 primeiros itens da Beta, separados por vírgulas.

let primeirosItens = inventarioBeta.splice(0, 10).join(', ')
console.log(primeirosItens);
console.log('----------------------');

// Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.
let itens2 = inventarioBeta.splice(0, 5).join(', ')
console.log(itens2);
console.log('----------------------');


// Separe os 10 últimos itens do inventário Alpha para estudo temporal.

let itens10 = inventarioAlpha.splice(-10)
console.log(itens10);
console.log('----------------------');

// O quinto item da Alpha foi substituído por uma versão mais moderna. Atualize.

inventarioAlpha[4] = undefined
console.log(inventarioAlpha);
console.log('----------------------');

// Dois itens no meio do inventário Beta foram contaminados e precisam ser removidos.
 inventarioBeta.splice(2, 2)
 console.log(inventarioBeta);
 console.log('----------------------');
 