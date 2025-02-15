const http = require('http');

const apiUrl = 'http://localhost:3000/products/';

const products = [
    {
        "name": "Gabinete Gamer Aerocool Window Preto RGB Lateral Acrílico - Mundomax",
        "price": 489.18,
        "imageUrl": "https://static.mundomax.com.br/produtos/68557/550/1.webp",
        "productCategory": "Gabinetes",
        "description": "O Gabinete Gamer Aerocool Window é um modelo que permite uma visualização nítida de até três ventoinhas de 12cm rgb (incluídas). Vem equipado com painel lateral de acrílico completo para mostrar o interior do seu equipamento. Linhas limpas e um design moderno proporcionam um visual sofisticado, dando à sua configuração uma borda elegante e elegante. As aberturas de ventilação ao longo de ambos os lados do painel frontal proporcionam fluxo de ar e circulação superiores. Capaz de instalar um radiador de 240x 27mm para suporte de refrigeração líquida",
        "isEnable": true
    },
    {
      "name": "Gabinete Gamer Hayom, Com 4 Fan, Sem Fonte, Atx, Lateral Em Vidro Temperado, Preto - Gb1713",
      "price": 319.00,
      "imageUrl": "https://images7.kabum.com.br/produtos/fotos/sync_mirakl/278407/Gabinete-Gamer-Hayom-Com-4-Fan-Sem-Fonte-Atx-Lateral-Em-Vidro-Temperado-Preto-Gb1713_1731681532_g.jpg",
      "productCategory": "Gabinetes",
      "description": "Projetado para quem procura desempenho, estilo e durabilidade o gabinete gamer gb1713 - hayom foi projetado para o jogador exigente. Ele se destaca por seu design arrojado que dão toda a personalidade que um produto gamer deve ter. Botão controlador rgb localizado na parte frontal do gabinete e acompanhado com psu cover, para melhor organização dos cabos.",
      "isEnable": true
    },
    {
        "name": "Gabinete Gamer Asus ROG Hyperion GR701, E-ATX, Full Tower, Lateral em Vidro Temperado, 4x Cooler Fan, Preto - 90DC00F0-B30000",
        "price": 2799.99,
        "imageUrl": "https://images4.kabum.com.br/produtos/fotos/427914/gabinete-gamer-asus-rog-hyperion-gr701-mid-tower-e-atx-atx-micro-atx-mini-itx-lateral-em-vidro-temperado-4x-cooler-fan-preto-90dc00f0-b30000_1688473607_g.jpg",
        "productCategory": "Gabinetes",
        "description": "Gabinete Gamer Asus ROG Hyperion GR701 Resfriamento: Suporte para radiador duplo de 420 mm, quatro ventoinhas de 140 mm e um hub de ventilador oferece possibilidades de fluxo de ar massivas. Espaço extra: As placas gráficas mais robustas têm muito espaço; gerenciamento de cabos recebe uma câmara expansiva que tem 34 mm de profundidade, com um canal de roteamento de 46 mm de largura. Conveniência: Painéis laterais articulados sem ferramentas, uma gaveta de armazenamento embutida e um integrado titular da placa gráfica se unem para ampliar a experiência de construção. Poder: Duas portas USB Type-C, carregamento rápido de 60 watts, reforço de alumínio quadro e alças fornecem potência e robustez premium. Ultra Estiloso: O hub do ventilador e o painel de iluminação suportam o Aura Sync e o chassi é decorado com metal anodizado e acabamentos finos.",
        "isEnable": true
      },
      {
        "name": "Gabinete Gamer K-Mex Infinity Polygon, Sem Fonte, Com Coolers, RGB - CG-08G8",
        "price": 341.99,
        "imageUrl": "https://images1.kabum.com.br/produtos/fotos/sync_mirakl/173571/Gabinete-Gamer-K-Mex-Infinity-Polygon-Sem-Fonte-Com-Coolers-RGB-CG-08G8_1727216389_g.jpg",
        "productCategory": "Gabinetes",
        "description": "Principais Características: - PSU cover  - Painel de vidro fumê temperado 4mm - Chapa lateral full acrílico transparente - Filtro anti-poeira inferior de encaixe e superior magnético.",
        "isEnable": true
      },
      {
        "name": "Gabinete Gamer ASUS ROG Hyperion GR701, Full Tower, E-ATX, Lateral em Vidro Temperado, 4x Cooler Fan, Branco - 90DC00F3-B30000",
        "price": 2799.99,
        "imageUrl": "https://images8.kabum.com.br/produtos/fotos/533078/gabinete-gamer-asus-rog-hyperion-gr701-full-tower-e-atx-lateral-em-vidro-temperado-4x-cooler-fan-branco-90dc00f3-b30000_1725566445_g.jpg",
        "productCategory": "Gabinetes",
        "description": "Refrigeração Superior para Performance Extrema: O ROG Hyperion GR701 é projetado para oferecer uma refrigeração excepcional. Com suporte para um radiador duplo de 420 mm e quatro ventoinhas de 140 mm, você terá um fluxo de ar incomparável. Mantenha seu sistema sempre fresco e otimizado, mesmo durante as sessões de jogos mais intensas. Eleve sua performance com um resfriamento que faz a diferença!",
        "isEnable": true
      },
      {
        "name": "Gabinete Gamer Arbaton Vidro Temperado ARGB Branco Draxen",
        "price": 475.47,
        "imageUrl": "https://images1.kabum.com.br/produtos/fotos/sync_mirakl/676331/Gabinete-Gamer-Arbaton-Vidro-Temperado-ARGB-Branco-Draxen_1732015457_g.jpg",
        "productCategory": "Gabinetes",
        "description": "Transforme seu setup com o Gabinete Gamer Arbaton, a combinação perfeita de desempenho, estilo e versatilidade. Com acabamento branco e tampas de vidro temperado frontal e lateral, este gabinete combina elegância e funcionalidade, destacando seu hardware de forma impactante. Personalize seu setup com a iluminação ARGB integrada, com controladora inclusa, garantindo um visual único e customizável. O design Midtower de Câmara Dupla oferece organização superior, separando os cabos e a fonte de alimentação dos demais componentes para uma montagem mais limpa e eficiente. Os filtros magnéticos anti-poeira ajudam a manter o interior limpo, protegendo os componentes e facilitando a manutenção. Com amplo espaço interno e suporte para expansão, o Arbaton permite uma montagem prática e organizada, ideal para gamers e entusiastas que buscam funcionalidade e elegância em um só produto.",
        "isEnable": true
      },
      {
        "name": "Placa-Mãe MSI A520M-A PRO, AMD AM4, mATX, DDR4, Preto - A520M-A PRO",
        "price": 999.99,
        "imageUrl": "https://images5.kabum.com.br/produtos/fotos/114335/placa-mae-msi-mpg-b550-gaming-plus-amd-am4-atx_1594999681_g.jpg",
        "productCategory": "Placas Mãe",
        "description": "Eleve seus jogos com a série MPG! Experimente uma imersão completa com controle avançado de iluminação RGB e uma faixa de LED frontal que te mantém informado em tempo real. Personalize seu setup do seu jeito e domine as partidas com estilo.",
        "isEnable": true
      },
      {
        "name": "Placa-Mãe ASUS TUF Gaming B450M-Plus II, AMD AM4, mATX, DDR4, Preto - 90MB1620-M0EAY0",
        "price": 709.99,
        "imageUrl": "https://images7.kabum.com.br/produtos/fotos/128437/placa-mae-asus-tuf-b450m-plus-ii_1601898339_g.jpg",
        "productCategory": "Placas Mãe",
        "description": "Com fornecimento de energia atualizado e opções abrangentes de refrigeração para alimentar as CPUs mais recentes AMD Ryzen, além de suporte para memória e armazenamento mais rápidos, a TUF GAMING B450M-PLUS II é a base perfeita para sua próxima plataforma de batalha.",
        "isEnable": true
      },
      {
        "name": "Placa-Mãe ASRock B450M-HDV R4.0, AMD AM4, Micro ATX, DDR4, Preto - 90-MXB9N0-A0UAYZ",
        "price": 399.99,
        "imageUrl": "https://images7.kabum.com.br/produtos/fotos/111107/placa-mae-asrock-b450m-hdv-r4-0-amd-am4-micro-atx-ddr4-_1590689801_g.jpg",
        "productCategory": "Placas Mãe",
        "description": "Placa Mãe ASRock B450M-HDV R4.0, AMD AM4, Micro ATX, DDR4.",
        "isEnable": true
      },
      {
        "name": "Placa-Mãe Gigabyte B550M Aorus Elite Rev. 1.3, AMD AM4, Micro ATX, DDR4, Preto - B550M AORUS ELITE",
        "price": 829.99,
        "imageUrl": "https://images1.kabum.com.br/produtos/fotos/114781/placa-mae-gigabyte-b550m-aorus-elite-amd-am4-micro-atx-ddr4_1594908595_g.jpg",
        "productCategory": "Placas Mãe",
        "description": "Libere todo o potencial dos processadores AMD Ryzen de 3ª e 4ª geração com a placa-mãe Gigabyte B550M Aorus Elite. Projetada para oferecer desempenho excepcional, ela conta com recursos avançados como VRM digital de alta qualidade, slots DDR4 de alta velocidade, e conectividade ultrarrápida. Ideal para gamers que buscam uma plataforma sólida para construir um PC poderoso e personalizável.",
        "isEnable": true
      },
      {
        "name": "Placa de Vídeo RTX 4060 Ti Windforce OC Gigabyte NVIDIA GeForce, 16GB GDDR6, DLSS, Ray Tracing - GV-N406TWF2OC-16GD",
        "price": 3799.99,
        "imageUrl": "https://images0.kabum.com.br/produtos/fotos/587380/placa-de-video-rtx-4060-ti-windforce-oc-gigabyte-nvidia-geforce-16gb-gddr6-dlss-ray-tracing-gv-n406twf2oc-16gd_1721841604_g.jpg",
        "productCategory": "Placas de Vídeo",
        "description": "O sistema de resfriamento WINDFORCE conta com duas ventoinhas de lâmina exclusivas de 90 mm, rotação alternada, 3 tubos de calor de cobre composto que tocam diretamente na GPU, ventoinhas ativas 3D e resfriamento de tela, que juntos proporcionam dissipação de calor de alta eficiência.",
        "isEnable": true
      },
      {
        "name": "Placa de Vídeo RTX 4070 Ti Super Gigabyte Eagle OC NVIDIA GeForce, 16GB GDDR6, DLSS, Ray Tracing - GV-N407TSEAGLE OC-16GD",
        "price": 7499.99,
        "imageUrl": "https://images8.kabum.com.br/produtos/fotos/517738/placa-de-video-rtx-4070-ti-super-gigabyte-eagle-oc-nvidia-geforce-16gb-gddr6-dlss-ray-tracing-gv-n407tseagle-oc-16gd_1706014321_g.jpg",
        "productCategory": "Placas de Vídeo",
        "description": "Possui três ventiladores de lâmina exclusivos de 80 mm, rotação alternada, 8 tubos de calor de cobre composto, uma placa de cobre que toca diretamente a GPU, ventiladores 3D ativos e resfriamento de tela, que juntos fornecem dissipação de calor de alta eficiência.",
        "isEnable": true
      },
      {
        "name": "Placa de Video RTX 4070 Super Jetstream OC Palit NVIDIA GeForce, 12GB GDDR6X, DLSS, Ray Trancing, G-Sync - NED407ST19K9-1043J",
        "price": 5111.99,
        "imageUrl": "https://images5.kabum.com.br/produtos/fotos/520735/placa-de-video-rtx-4070-super-jetstream-oc-palit-nvidia-geforce-12gb-gddr6x-dlss-ray-trancing-g-sync-ned407st19k9-1043j_1711371910_g.jpg",
        "productCategory": "Placas de Vídeo",
        "description": "Com padrões de blocos geométricos demonstra um design focado no desempenho que continua sendo a essência para alcançar qualquer aplicação de jogos e mídia. Sua abordagem furtiva pretende atender usuários que preferem a função à forma ou que desejam manter seus PCs em locais escuros. Equipado com módulo térmico feito sob medida, o novo ventilador Gale Hunter e base de cobre ultra-larga, o JetStream oferece resfriamento impecável e operação de baixo ruído para os jogadores enfrentarem os desafios que estão por vir. Equipado com NVIDIA DLSS 3, arco Ada Lovelace ultraeficiente e ray tracing completo.",
        "isEnable": true
      },
      {
        "name": "Placa de Vídeo ASUS ROG Strix NVIDIA GeForce RTX 4070 SUPER 12GB GDDR6X Edition OC, 12GB GDDR6X, ARGB, DLSS, Ray Trancing - 90YV0KD0-M0NA00",
        "price": 6699.90,
        "imageUrl": "https://images5.kabum.com.br/produtos/fotos/520495/placa-de-video-rtx-4070-s-asus-rog-strix-o12g-gaming-12gb-gddr6x-argb-dlss-ray-trancing-90yv0kd0-m0na00_1711463423_g.jpg",
        "productCategory": "Placas de Vídeo",
        "description": "A ROG Strix GeForce RTX 4070 SUPER traz um significado totalmente novo para acompanhar o fluxo. Por dentro e por fora, cada elemento da placa dá à monstruosa GPU espaço para respirar livremente e alcançar o melhor desempenho . O reinado desencadeado da arquitetura NVIDIA Ada Lovelace chegou.",
        "isEnable": true
      },
      {
        "name": "Memória RAM Corsair Vengeance, 32GB (2x16GB), 5200MHz, DDR5, CL40, para Intel XMP, Preto - CMK32GX5M2B5200C40",
        "price": 819.99,
        "imageUrl": "https://images3.kabum.com.br/produtos/fotos/286773/memoria-corsair-vengeance-32gb-2x16gb-5200mhz-ddr5-cl40-preto-cmk32gx5m2b5200c40_1639586487_g.jpg",
        "productCategory": "Memórias RAM",
        "description": "Vá além dos limites do seu sistema com a memória DDR5, aproveitando frequências de 5200MHz, capacidade de 32GB (2x16GB) e melhor desempenho do que as gerações anteriores.",
        "isEnable": true
      },
      {
        "name": "Memória RAM Rise Mode Z, 16GB, 4800MHz, DDR5, CL40, Preto - RM-D5-16G-4800Z",
        "price": 359.99,
        "imageUrl": "https://images0.kabum.com.br/produtos/fotos/442740/memoria-rise-mode-z-16gb-4800mhz-ddr5-cl40-preto-rm-d5-16g-4800z_1686598322_g.jpg",
        "productCategory": "Memórias RAM",
        "description": "Uma das peças mais importante para deixar seu computador rápido. a Memória Ram Rise Mode Z é o que você precisa para não ter seu Pc travando enquanto você usa seus programas favoritos.",
        "isEnable": true
      },
      {
        "name": "Teclado Gamer Mecânico Neologic Precision Pro Dark 60% RGB Hot Swap 61 Teclas Switch Red Preto Cabo Tipo C - Prodrk-red.",
        "price": 219.99,
        "imageUrl": "https://images9.kabum.com.br/produtos/fotos/sync_mirakl/658989/Teclado-Gamer-Mec-nico-Neologic-Precision-Pro-Dark-60-RGB-Hot-Swap-61-Teclas-Switch-Red-Preto-Cabo-Tipo-C-Prodrk-red-_1731027393_g.jpg",
        "productCategory": "Periféricos",
        "description": "Eleve sua performance ao máximo com o Neologic Precision Pro Dark! Projetado para gamers exigentes, o modelo 60% compacto oferece uma experiência de jogo ágil e precisa, com 61 teclas mecânicas equipadas com switches Red, ideal para quem busca velocidade e toques silenciosos durante as partidas.",
        "isEnable": true
      },
      {
        "name": "Teclado Mecânico Gamer Fallen Pantera, Switch Blue, Anti Ghosting, ABNT2, Preto - TE-FA-PA-PR-SA",
        "price": 369.99,
        "imageUrl": "https://images1.kabum.com.br/produtos/fotos/497611/teclado-mecanico-gamer-fallen-pantera-switch-blue-anti-ghosting-abnt2-preto-te-fa-pa-pr-sa_1703246234_g.jpg",
        "productCategory": "Periféricos",
        "description": "A selva competitiva nunca mais será a mesma, graças ao novo Teclado Fallen Pantera. Este periférico foi projetado especialmente para ajudar você a dominar o ambiente competitivo do Counter-Strike ou de seus jogos favoritos. A equipe da Fallen Gear utilizou toda a sua experiência em desenvolvimento de produtos para criar um teclado que oferece não apenas desempenho, mas também conforto e estabilidade. Com um tempo de resposta de menos de 1 milissegundo, você poderá movimentar-se como um verdadeiro profissional. Este é o mesmo teclado que Gabriel FalleN Toledo usou para se classificar para os playoffs da ESL Pro League 18. Agora é a sua vez de colocar suas mãos nele e experimentar a movimentação que o levará à vitória!",
        "isEnable": true
      },
      {
        "name": "Processador Intel Core i7-12700KF, 3.6GHz (5.0GHz Max Turbo), Cache 25MB, 12 Núcleos, 20 Threads, LGA 1700 - BX8071512700KF",
        "price": 1999.99,
        "imageUrl": "https://images9.kabum.com.br/produtos/fotos/241049/processador-intel-core-i7-12700kf-cache-25mb-3-6ghz-5-0ghz-max-turbo-lga-1700-bx8071512700kf_1634829835_g.jpg",
        "productCategory": "Processadores",
        "description": "Realize mais, com maior desempenho. Velocidades do clock incrivelmente rápidas e uma arquitetura de núcleo revolucionária permitem que você converse com estabilidade, transmita e grave sem sacrificar a jogabilidade. Até 5,0 GHz velocidade máxima do clock com 12 núcleos e 20 threads.",
        "isEnable": true
      },
      {
        "name": "Processador Intel Core i9-14900K, 14ª Geração, 6GHz Max Turbo, Cache 36MB, 24 Núcleos, 32 Threads, LGA1700 - BX8071514900K",
        "price": 3900.00,
        "imageUrl": "https://images3.kabum.com.br/produtos/fotos/497573/processador-intel-core-i9-14900k-bx8071514900k_1697721913_g.jpg",
        "productCategory": "Processadores",
        "description": "O Intel Core i9-14900K é um processador de alto desempenho, ideal para gamers e criadores de conteúdo. Ele possui 24 núcleos e 32 threads, o que garante um desempenho excepcional em tarefas multitarefa.",
        "isEnable": true
      },
];

const sendProducts = () => {
    products.forEach((product) => {
      const data = JSON.stringify(product);
  
      const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/products/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data),
        },
      };
  
      const req = http.request(options, (res) => {
        let responseData = '';
  
        res.on('data', (chunk) => {
          responseData += chunk;
        });
  
        res.on('end', () => {
          console.log(`Produto "${product.name}" enviado com sucesso!`);
          console.log('Resposta da API:', responseData);
        });
      });
  
      req.on('error', (error) => {
        console.error(`Erro ao enviar produto "${product.name}":`, error);
      });
  
      req.write(data);
      req.end();
    });
  };
  
  sendProducts();
