# Tokyo's Café — site

Site institucional do Tokyo's Café (Recife/PE). A primeira pastelaria de
Pernambuco, fundada em 1965 como Tokyo Lanche.

HTML, CSS e JavaScript puros — sem build, sem dependências. Basta abrir
`index.html` ou servir a pasta.

## Rodar localmente

```bash
python -m http.server 5173
```

Depois acesse `http://localhost:5173`.

> Abrir o `index.html` direto pelo `file://` também funciona, mas alguns
> navegadores bloqueiam parte dos recursos. Prefira o servidor.

## Estrutura

```
index.html               página única (hero, história, cardápio, salão, visite)
assets/css/style.css     sistema visual completo
assets/js/menu-data.js   ⭐ o cardápio — edite só este arquivo
assets/js/main.js        cardápio dinâmico, busca, scrollspy, menu mobile
assets/img/              fotos — temporárias, ver CREDITOS.md
```

## Atualizar o cardápio

Tudo fica em `assets/js/menu-data.js`. Cada grupo segue este formato:

```js
{
  id: 'pasteis',          // usado na âncora #grupo-pasteis — não repita
  nome: 'Pastéis',
  familia: 'Comer',       // agrupa na barra lateral: Comer | Beber | Pra levar
  nota: 'texto opcional', // aparece em destaque no topo do grupo
  itens: [
    { n: 'Pastel de Carne', p: '20,80' },
    { n: 'Pastel Japonês', d: 'Pasta de tofu, shiitake e cebolinha', p: '26,90' }
  ]
}
```

- `n` — nome do item
- `d` — descrição (opcional)
- `p` — preço como texto: `'20,80'` vira **R$ 20,80**; qualquer texto sem
  número aparece como está (ex.: `'Consultar'`)

Salvou o arquivo, recarregou a página, cardápio atualizado. A busca já
funciona sem acento (`camarao` acha "camarão").

## Sistema visual

| Papel | Cor |
|---|---|
| Laranja assinatura | `#E5601F` |
| Laranja escuro | `#C44A12` |
| Vermelho | `#C0322B` |
| Branco quente | `#FBF7F0` |
| Tinta | `#1C1917` |
| Terracota (seção Presente) | `#B4644A` |
| Verde piso (rodapé) | `#3E6B52` |

O **cobogó** (quadrado com furo redondo, em referência ao edifício Pirapama)
é o elemento estrutural do site. Ele existe como três variáveis CSS
(`--cobogo-laranja`, `--cobogo-branco`, `--cobogo-tinta`) e reaparece no
padrão do hero, no divisor entre seções, na régua de cada grupo do cardápio,
no bloco da relíquia e no favicon.

Tipografia: **Anton** nos títulos (letreiro condensado, pegada anos 60) e
**Archivo** no texto.

A **marca** é puramente tipográfica: "TOKYO'S" em tinta e "CAFÉ" em laranja,
assentados sobre uma régua laranja que evoca a barra de um letreiro. Não há
símbolo — o nome é a assinatura. Quando a fonte oficial da casa estiver
disponível, basta trocar `--fonte-display` ou aplicar a fonte só em
`.brand-word`.

## Pendências antes de publicar

- [ ] **Endereço real.** Hoje há um placeholder marcado em vermelho na seção
      "Visite" (`index.html`) e no JSON-LD no fim do arquivo. Os dois precisam
      ser trocados.
- [ ] **Fotos reais.** As imagens em `assets/img/` são **temporárias** — fotos
      de banco escolhidas só por terem contexto parecido. Nenhuma é do
      Tokyo's Café. Ver [`assets/img/CREDITOS.md`](assets/img/CREDITOS.md)
      para a lista, a procedência e as proporções esperadas. Mantendo os
      mesmos nomes de arquivo, a troca não exige mexer no layout.

- [ ] **Domínio.** Atualizar a `url` no JSON-LD e a `og:url`.
- [ ] **Delivery / reserva.** Se houver iFood, Rappi ou link de reserva,
      vale um botão no hero e um card na seção "Visite".
- [ ] **Telefone / WhatsApp**, se a casa quiser receber contato direto.

## Detalhes de implementação

- O selo "Aberto agora / Fechado agora" usa o relógio do visitante
  (`assets/js/main.js`). Se o site receber muito acesso de fora de Pernambuco,
  troque por um cálculo fixo em `America/Recife`.
- Horário configurado: segunda fechado, terça a domingo das 14h às 22h.
  Está em dois lugares — a tabela no `index.html` e o cálculo no `main.js`.
- SEO local via JSON-LD `schema.org/Restaurant` no fim do `index.html`.
- Acessibilidade: skip link, foco visível, `prefers-reduced-motion` respeitado.
- Há uma folha de impressão: `Ctrl+P` gera só o cardápio, sem navegação.
