/* =========================================================================
   CARDÁPIO — Tokyo's Café
   Para atualizar o cardápio, edite apenas este arquivo.
   Cada grupo:  { id, nome, familia, nota?, itens: [ { n, d?, p } ] }
   O preço (p) é texto livre: use "20,80" ou "Consultar".
   ========================================================================= */

const MENU = [
  {
    id: 'pasteis',
    nome: 'Pastéis',
    familia: 'Comer',
    itens: [
      { n: 'Pastel de Carne', p: '20,80' },
      { n: 'Pastel de Queijo Muçarela', d: 'Muçarela e orégano', p: '18,90' },
      { n: 'Pastel de Frango', p: '18,90' },
      { n: 'Pastel de Carne com Muçarela', p: '20,80' },
      { n: 'Pastel de Frango com Catupiry', p: '20,80' },
      { n: 'Pastel de Palmito', p: '21,90' },
      { n: 'Pastel Napolitano', d: 'Muçarela, tomate e orégano', p: '19,90' },
      { n: 'Pastel Bauru', d: 'Presunto, muçarela, tomate e orégano', p: '19,90' },
      { n: 'Pastel de Banana', d: 'Banana, muçarela, açúcar e canela', p: '20,90' },
      { n: 'Pastel Romeu e Julieta', d: 'Muçarela e goiabada', p: '20,90' },
      { n: 'Pastel de Chocolate', p: '21,90' },
      { n: 'Pastel Especial', d: 'Carne, muçarela, tomate e ovo', p: '26,90' },
      { n: 'Pastel de Camarão', p: '27,90' },
      { n: 'Pastel de Shiitake com Queijo', p: '26,90' },
      { n: 'Pastel Japonês', d: 'Pasta de tofu, shiitake e cebolinha', p: '26,90' },
      { n: 'Cestinha de Pastéis de Carne', d: '12 unidades de minipastéis com recheio de carne', p: '30,90' },
      { n: 'Cestinha de Pastéis de Queijo', d: '12 unidades de minipastéis com recheio de muçarela', p: '26,90' },
      { n: 'Cestinha de Pastéis Mista', d: '6 minipastéis de carne e 6 de muçarela', p: '28,90' },
      { n: 'Cestinha de Pastéis de Camarão', d: '12 unidades de minipastéis com recheio de camarão', p: '35,50' }
    ]
  },
  {
    id: 'kids',
    nome: 'Kids',
    familia: 'Comer',
    itens: [
      { n: 'Pastel de Queijo', p: '13,90' },
      { n: 'Pastel de Carne', p: '16,40' },
      { n: 'Pastel de Chocolate', p: '16,40' },
      { n: 'Sanduíche de Queijo', p: '15,30' }
    ]
  },
  {
    id: 'salgados',
    nome: 'Salgados',
    familia: 'Comer',
    itens: [
      { n: 'Coxinha de Frango', p: '19,60' },
      { n: 'Coxinha de Camarão', p: '25,50' },
      { n: 'Empada de Camarão', p: '14,90' },
      { n: 'Empada de Palmito', p: '14,90' },
      { n: 'Empada de Frango', p: '13,90' },
      { n: 'Esfiha de Carne', p: '24,90' },
      { n: 'Esfiha de Frango com Catupiry', p: '23,90' },
      { n: 'Kibe', d: '2 unidades', p: '19,70' },
      { n: 'Gyoza', d: '5 unidades', p: '32,90' }
    ]
  },
  {
    id: 'sanduiches',
    nome: 'Sanduíches',
    familia: 'Comer',
    nota: 'Nossos pães são de fabricação própria. Escolha um deles: pão de caixa, pão de caixa integral ou pão de batata-doce.',
    itens: [
      { n: 'Tostex Queijo', p: '20,80' },
      { n: 'Tostex Misto', p: '21,90' },
      { n: 'Pão na Chapa', p: '9,80' },
      { n: 'Sanduíche gratinado La Tavola', d: 'Pão de caixa, molho branco, muçarela, presunto e gratinado de parmesão', p: '28,50' }
    ]
  },
  {
    id: 'sanduiches-especiais',
    nome: 'Sanduíches Especiais',
    familia: 'Comer',
    itens: [
      { n: 'Hambúrguer de Salmão', d: 'Pão brioche de batata-doce artesanal, hambúrguer de salmão premium, queijo muçarela gratinado, tomate, alface-americana, ovo cozido, cebolinha e maionese de ponzu. Acompanha minissalada de folhas', p: '38,90' },
      { n: 'Big Tuna', d: 'Pão brioche de batata-doce artesanal, maguro katsu burger (milanesa à moda japonesa), maionese de curry, shiitake ao molho teriyaki e alface em tirinhas', p: '37,90' },
      { n: 'Chizu Tuna Burger', d: 'Pão com gergelim extramacio, maguro katsu burger, queijo muçarela e molho especial da casa', p: '25,90' },
      { n: 'X-Salmon', d: 'Pão com gergelim macio, hambúrguer de salmão grelhado, queijo muçarela gratinado, tomate em rodelas e molho especial da casa', p: '29,90' },
      { n: 'Katsu Pan', d: 'Pão brioche de batata-doce artesanal, tonkatsu (filé de porco empanado à moda japonesa), molho tártaro, acelga e alface laminados. Acompanha maionese de ponzu', p: '37,90' }
    ]
  },
  {
    id: 'doces',
    nome: 'Doces',
    familia: 'Comer',
    itens: [
      { n: 'Bolo de chocolate', p: '15,90' },
      { n: 'Bolo de chocolate com cobertura', p: '16,90' },
      { n: 'Bolo de laranja', p: '14,90' },
      { n: 'Bolo de banana com canela', p: '14,90' },
      { n: 'Bolo de cenoura com calda de chocolate', p: '14,90' },
      { n: 'Cheesecake com creme de goiabada cascão', p: '22,90' },
      { n: 'Cheesecake de chocolate', d: 'Com raspinhas de chocolate belga', p: '22,90' },
      { n: 'Cheesecake de frutas vermelhas', d: 'Com amêndoas laminadas', p: '22,90' },
      { n: 'Brigadeiro de copinho', d: 'Com raspinhas de chocolate', p: '10,90' },
      { n: 'Brigadeiro de copinho', d: 'Com granulado colorido', p: '10,90' },
      { n: 'Chuvoso', d: 'Bolinho de chuva em versão churros com açúcar e canela, acompanha doce de leite e creme de goiabada cascão. Receita cedida pelo amigo e competente chef Joca Pontes ao Tokyo’s Café', p: '21,90' },
      { n: 'Pastennoli de creme inglês', d: 'Cannoli em massa crocante de pastel, recheado com creme inglês', p: '15,90' },
      { n: 'Pastennoli de creme de avelã', d: 'Cannoli em massa crocante de pastel, recheado com creme de avelã (Nutella)', p: '16,90' },
      { n: 'Blondie de matcha', d: 'Brownie macio e delicado, feito com chocolate branco e matcha (chá verde japonês), com cobertura de castanhas-do-pará laminadas', p: '17,90' },
      { n: 'Churros Tokyo’s', d: 'Receita especial da casa, recheado com doce de leite', p: '12,90' },
      { n: 'Choux cream', d: 'Massa choux com camada crocante de amêndoas, recheado com nosso creme leve de baunilha', p: '17,90' },
      { n: 'Choux cream de matcha', d: 'Massa choux com camada crocante de amêndoas, recheado com creme leve de matcha', p: '19,90' },
      { n: 'Choux cream de chocolate', d: 'Massa choux com camada crocante de amêndoas, recheado com creme de chocolate', p: '18,90' }
    ]
  },
  {
    id: 'saladas',
    nome: 'Saladas',
    familia: 'Comer',
    itens: [
      { n: 'Salmon Mix', d: 'Filé de salmão grelhado em leve tempero, mix de folhas, acelga laminada, tomates em rodelas, pepinos agridoces e gergelim torrado', p: '56,90' },
      { n: 'Frango Mix', d: 'Filé de frango grelhado em leve tempero, mix de folhas, acelga laminada, tomates em rodelas, pepinos agridoces e gergelim torrado', p: '49,90' }
    ]
  },
  {
    id: 'porcoes',
    nome: 'Porções',
    familia: 'Comer',
    itens: [
      { n: 'Sumo de limão', d: '30 ml', p: '4,20' },
      { n: 'Porção de queijo no pastel', p: '7,90' },
      { n: 'Porção de petit four', d: '10 unidades', p: '6,90' },
      { n: 'Manteiga', p: '4,50' },
      { n: 'Geleia', p: '4,50' },
      { n: 'Ovo', p: '4,50' },
      { n: 'Café Yaguara', d: 'Torra média', p: 'Consultar' },
      { n: 'Café Yaguara', d: 'Torra escura', p: 'Consultar' }
    ]
  },
  {
    id: 'bebidas-quentes',
    nome: 'Bebidas Quentes',
    familia: 'Beber',
    itens: [
      { n: 'Espresso', d: '50 ml', p: '10,90' },
      { n: 'Curto', d: '25 ml', p: '10,90' },
      { n: 'Duplo', d: '100 ml', p: '16,90' },
      { n: 'Carioca', d: '50 ml', p: '10,90' },
      { n: 'Espumone / Macchiato', d: '50 ml — espresso com crema do leite vaporizado', p: '11,90' },
      { n: 'Café com leite / Latte', d: '140 ml — espresso e leite vaporizado', p: '15,90' },
      { n: 'Cappuccino Tradicional', d: '140 ml — espresso, leite, crema do leite vaporizado, chocolate e canela em pó', p: '15,90' },
      { n: 'Caramelo', d: '200 ml — crema do leite vaporizado com calda de caramelo', p: '14,90' },
      { n: 'Leite quente', d: '140 ml', p: '10,90' },
      { n: 'Chás quentes', d: '140 ml — consultar sabores', p: '13,90' },
      { n: 'Café coado', d: '200 ml — método Hario', p: '15,90' }
    ]
  },
  {
    id: 'bebidas-geladas',
    nome: 'Bebidas Geladas',
    familia: 'Beber',
    itens: [
      { n: 'Refrigerantes', d: 'Lata', p: '10,90' },
      { n: 'Água mineral sem gás', d: '330 ml', p: '7,90' },
      { n: 'Água mineral com gás', d: '330 ml', p: '7,90' },
      { n: 'Água de coco', d: 'Copo', p: '11,90' },
      { n: 'Frozzato', d: '200 ml — variação do afogatto: sorvete de creme com espresso', p: '20,90' },
      { n: 'Mini Shake Tokyo’s', d: '250 ml — shake de sorvete de creme com Ovomaltine', p: '19,90' },
      { n: 'Midori Shake', d: '250 ml — shake de sorvete de creme com matcha', p: '20,90' },
      { n: 'Midori Aka Shake', d: '250 ml — shake de sorvete de creme com matcha servido com geleia de frutas vermelhas', p: '22,90' },
      { n: 'Maltado', d: '300 ml — leite batido com chocolate em pó', p: '13,90' },
      { n: 'Soda italiana', d: '300 ml', p: '14,90' },
      { n: 'Kombucha', d: '200 ml', p: '14,90' },
      { n: 'Cold Brew', d: '250 ml', p: '14,90' },
      { n: 'Cold Brew com leite', d: '250 ml', p: '15,90' },
      { n: 'Raspa-raspa', d: '400 ml — consulte os sabores com um de nossos atendentes. Você pode misturar até 2 sabores', p: '16,90' }
    ]
  },
  {
    id: 'sucos',
    nome: 'Sucos',
    familia: 'Beber',
    nota: 'Em qualquer suco com leite será acrescido o valor de R$ 4,50.',
    itens: [
      { n: 'Laranja', d: 'Da fruta — 300 ml', p: '12,90' },
      { n: 'Laranja com cenoura', d: 'Da fruta — 300 ml', p: '14,90' },
      { n: 'Abacaxi', d: 'Da fruta — 300 ml', p: '12,90' },
      { n: 'Abacaxi com hortelã', d: 'Da fruta — 300 ml', p: '13,90' },
      { n: 'Limão', d: 'Da fruta — 300 ml', p: '12,90' },
      { n: 'Uva integral', d: 'Da fruta — 300 ml', p: '17,90' },
      { n: 'Cajá', d: 'De polpa — 300 ml', p: '10,90' },
      { n: 'Maracujá', d: 'De polpa — 300 ml', p: '10,90' },
      { n: 'Graviola', d: 'De polpa — 300 ml', p: '10,90' }
    ]
  },
  {
    id: 'cervejas',
    nome: 'Cervejas',
    familia: 'Beber',
    itens: [
      { n: 'Lagunitas', d: '355 ml', p: '22,90' },
      { n: 'Heineken', d: '330 ml', p: '14,90' },
      { n: 'Heineken 0.0', d: '330 ml', p: '14,90' },
      { n: 'Eisenbahn', d: '355 ml', p: '14,50' },
      { n: 'Blue Moon', d: '355 ml', p: '22,90' }
    ]
  },
  {
    id: 'vinhos',
    nome: 'Vinhos e Licores',
    familia: 'Beber',
    itens: [
      { n: 'León de Tarapacá Sauvignon Blanc', d: '187 ml', p: '29,90' },
      { n: 'León de Tarapacá Cabernet Sauvignon', d: '187 ml', p: '29,90' },
      { n: 'Serviço de Rolha', p: '48,00' },
      { n: 'Cointreau', p: '20,90' },
      { n: 'Licor 43', p: '25,90' },
      { n: 'Frangelico', p: '23,90' },
      { n: 'Peachtree', p: '24,90' }
    ]
  },
  {
    id: 'pra-levar',
    nome: 'Tokyo’s pra Levar',
    familia: 'Pra levar',
    nota: 'Itens adicionais: shoyu (sachê) R$ 0,80 · gengibre (porção) R$ 2,00 · wasabi (porção) R$ 2,00 · molho tarê (porção) R$ 2,50 · hashi R$ 0,50 · molheira descartável R$ 0,50.',
    itens: [
      { n: 'Mix Pirapama', d: '12 peças — 2 uramakis de salmão skin, 6 SalmOnly, 2 uramakis jojo de salmão e 2 sushis de salmão fresco', p: '27,90' },
      { n: 'Mix Tokyo’s', d: '12 peças — 3 salmão maki, 3 uramakis jojo, 3 uramakis de salmão skin e 3 sushis de salmão fresco', p: '30,90' },
      { n: 'Uramaki Mix Salmão', d: '12 peças — 3 SalmOnly, 3 jojo de salmão, 3 de salmão skin e 3 de salmão fresco', p: '25,90' },
      { n: 'Uramaki Shake Salmon', d: '8 peças — salmão grelhado e desfiado, cream cheese e cobertura de salmão fresco com gergelim', p: '21,80' },
      { n: 'Uramaki Fire Salmon', d: '8 peças — salmão grelhado e desfiado, cream cheese e cobertura de salmão maçaricado com gergelim', p: '21,80' },
      { n: 'Uramaki Green Vibes', d: '8 peças — shiitake, cenoura e pepino marinados, envolto em folha de couve', p: '20,90' },
      { n: 'Uramaki Salmão Cream Cheese', d: '8 peças — salmão fresco e cream cheese', p: '21,80' },
      { n: 'Uramaki Jojo Salmão', d: '6 peças — tartare de salmão e cebolinha', p: '16,90' },
      { n: 'Uramaki Premium', d: '8 peças — criação especial do sushiman, com sabores que variam todo dia', p: '24,80' },
      { n: 'Salmão Maki', d: '8 peças — enrolado de alga com arroz e salmão fresco', p: '15,90' },
      { n: 'Sushi Salmão Fresco', d: '4 peças', p: '15,90' },
      { n: 'Sushi Salmão Maçaricado', d: '4 peças', p: '15,90' },
      { n: 'Sushi Salmão Misto', d: '4 peças — 2 de salmão fresco e 2 de salmão maçaricado', p: '15,90' },
      { n: 'Sunomono de Pepino', d: 'Porção — pepinos agridoces laminados com molho especial', p: '11,90' },
      { n: 'Gyoza ao Vapor', d: '2 unidades — pastel em massa fina recheada com carne e legumes temperados', p: '13,20' }
    ]
  }
];
