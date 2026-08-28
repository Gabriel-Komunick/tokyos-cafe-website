# Imagens temporárias

Nenhuma destas fotos é do Tokyo's Café. São imagens de banco, escolhidas
apenas por terem contexto parecido, para o site poder ser avaliado antes das
fotos reais existirem. **Todas devem ser substituídas antes de publicar.**

Fonte: [Unsplash](https://unsplash.com), sob a
[Unsplash License](https://unsplash.com/license) — uso livre, inclusive
comercial, sem exigência de atribuição. O crédito abaixo existe para
rastreabilidade, não por obrigação.

| Arquivo | O que mostra | ID Unsplash |
|---|---|---|
| `hero.jpg` | balcão com bandejas de frituras | `photo-1781446842582-0c30c427cd66` |
| `1965-fachada.jpg` | fachada com letreiro em japonês e toldo | `photo-1775739778536-cf178d1f0020` |
| `1965-familia.jpg` | retrato de família em preto e branco | `photo-1645968093905-f1d7e7b7995f` |
| `salao-amplo.jpg` | salão com bancos vermelhos e brancos | `photo-1555992457-b8fefdd09069` |
| `maquina-pastel.jpg` | máquina antiga de ferro com manivela | `photo-1778677471571-efef645e07bd` |
| `galeria-1.jpg` | parede de cobogós brancos | `photo-1573510675363-a8dd93d6ab5d` |
| `galeria-2.jpg` | cadeiras vermelhas e parede quadriculada | `photo-1764961759485-655ba38ac12f` |
| `galeria-3.jpg` | vitrine de doces | `photo-1583338917451-face2751d8d5` |
| `galeria-4.jpg` | piso quadriculado em mármore | `photo-1684793219162-8b2e705f0859` |

Para recuperar qualquer uma: `https://unsplash.com/photos/<ID>`.

## Ao substituir

Mantenha os mesmos nomes de arquivo e proporções para não precisar mexer no
HTML — só atualize os atributos `width`/`height` e o `alt` de cada `<img>`
no `index.html`.

| Slot | Proporção |
|---|---|
| `hero.jpg` | 3:2 ou mais largo (é cortado em 21:9) |
| `1965-*.jpg`, `salao-amplo.jpg`, `maquina-pastel.jpg` | 4:3 |
| `galeria-1..4.jpg` | 3:4 (retrato) |

As duas fotos de 1965 são dessaturadas por CSS (`.foto-arquivo img`), então
podem ser enviadas coloridas.
