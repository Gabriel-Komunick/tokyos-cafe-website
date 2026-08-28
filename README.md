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

Tipografia: **Baloo 2** nos títulos e na marca, **Archivo** no texto. A
escolha segue o logotipo — uma fonte condensada dura (era Anton) brigava com
o desenho arredondado da logo.

A **marca** reproduz a logo da casa: placa laranja de cantos arredondados,
"Tokyo's" em branco na fonte arredondada, "CAFÉ" em versalete alinhado à
direita, e o salpicado claro do fundo original (feito em SVG, sem imagem).
Ela é dimensionada pelo `font-size` do elemento pai — `.header-inner .marca`
usa 15px, `.marca-grande` no rodapé usa 21px; todo o resto escala junto.

Se a casa fornecer o arquivo da fonte real do logotipo, basta apontar
`--fonte-display` para ela.

## Pendências antes de publicar

- [ ] **Endereço real.** Hoje há um placeholder marcado em vermelho na seção
      "Visite" (`index.html`) e no JSON-LD no fim do arquivo. Os dois precisam
      ser trocados. Obs.: a URL do iFood termina em `tokyos-cafe-gracas`, o que
      sugere o bairro das **Graças** — mas um slug não é endereço, então o
      placeholder segue como está até alguém confirmar.
- [ ] **Fotos reais.** As imagens em `assets/img/` são **temporárias** — fotos
      de banco escolhidas só por terem contexto parecido. Nenhuma é do
      Tokyo's Café. Ver [`assets/img/CREDITOS.md`](assets/img/CREDITOS.md)
      para a lista, a procedência e as proporções esperadas. Mantendo os
      mesmos nomes de arquivo, a troca não exige mexer no layout.

- [ ] **Domínio.** Atualizar a `url` no JSON-LD e a `og:url`.
- [ ] **Reserva**, se a casa aceitar.

## Detalhes de implementação

- O selo "Aberto agora / Fechado agora" usa o relógio do visitante
  (`assets/js/main.js`). Se o site receber muito acesso de fora de Pernambuco,
  troque por um cálculo fixo em `America/Recife`.
- Horário configurado: segunda fechado, terça a domingo das 14h às 22h.
  Está em dois lugares — a tabela no `index.html` e o cálculo no `main.js`.
- SEO local via JSON-LD `schema.org/Restaurant` no fim do `index.html`.
- Acessibilidade: skip link, foco visível, `prefers-reduced-motion` respeitado.
- Há uma folha de impressão: `Ctrl+P` gera só o cardápio, sem navegação.

## Links externos

Estão espalhados pelo `index.html` — se algum mudar, procure pela URL:

| Onde | Destino |
|---|---|
| Botão do topo e cartão "Delivery" | iFood |
| Botão flutuante (`.whats`) e cartão "Contato" | WhatsApp `+55 81 3426-1610` |
| Cartão "Contato" e rodapé | Instagram `@tokyosrecife` |
| Cartão "Endereço" | Google Maps |

O Instagram aparece só no fim da página e no rodapé — o botão de destaque do
cabeçalho é o do iFood.
