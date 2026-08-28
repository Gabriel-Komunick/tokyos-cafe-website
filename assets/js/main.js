/* =========================================================================
   Tokyo's Café — comportamento da página
   Depende de assets/js/menu-data.js (constante global MENU).
   ========================================================================= */
(function () {
  'use strict';

  var semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- util */
  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }

  // Normaliza para busca: minúsculas e sem acentos.
  function chave(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  /* ------------------------------------------------- navegação (mobile) */
  var toggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (toggle && navMenu) {
    toggle.addEventListener('click', function () {
      var aberto = navMenu.classList.toggle('aberto');
      toggle.setAttribute('aria-expanded', String(aberto));
    });
    navMenu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        navMenu.classList.remove('aberto');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ------------------------------------------------------------ cardápio */
  var corpo = document.getElementById('menuBody');
  var navCardapio = document.getElementById('menuNav');
  var busca = document.getElementById('menuSearch');

  if (corpo && navCardapio && typeof MENU !== 'undefined') {
    montarNav();
    montarGrupos();
    ativarScrollspy();

    if (busca) {
      busca.addEventListener('input', function () {
        filtrar(busca.value.trim());
      });
    }
  }

  function montarNav() {
    var familiaAtual = null;

    MENU.forEach(function (grupo) {
      if (grupo.familia !== familiaAtual) {
        familiaAtual = grupo.familia;
        navCardapio.appendChild(el('p', 'menu-familia', familiaAtual));
      }
      var a = el('a', null, grupo.nome);
      a.href = '#grupo-' + grupo.id;
      a.dataset.alvo = 'grupo-' + grupo.id;
      navCardapio.appendChild(a);
    });
  }

  function montarGrupos() {
    var frag = document.createDocumentFragment();

    MENU.forEach(function (grupo) {
      var sec = el('section', 'menu-grupo');
      sec.id = 'grupo-' + grupo.id;

      var head = el('div', 'menu-grupo-head');
      head.appendChild(el('h3', null, grupo.nome));
      head.appendChild(el('span', 'menu-grupo-count',
        grupo.itens.length + (grupo.itens.length === 1 ? ' item' : ' itens')));
      sec.appendChild(head);

      var rule = el('div', 'menu-grupo-rule');
      rule.setAttribute('aria-hidden', 'true');
      sec.appendChild(rule);

      if (grupo.nota) sec.appendChild(el('p', 'menu-nota', grupo.nota));

      grupo.itens.forEach(function (item) {
        var linha = el('div', 'menu-item');
        linha.dataset.busca = chave(item.n + ' ' + (item.d || '') + ' ' + grupo.nome);

        linha.appendChild(el('span', 'menu-item-nome', item.n));

        var preco = el('span', 'menu-item-preco');
        if (/\d/.test(item.p)) {
          preco.appendChild(el('small', null, 'R$'));
          preco.appendChild(document.createTextNode(' ' + item.p));
        } else {
          preco.textContent = item.p;
        }
        linha.appendChild(preco);

        if (item.d) linha.appendChild(el('p', 'menu-item-desc', item.d));

        sec.appendChild(linha);
      });

      frag.appendChild(sec);
    });

    var vazio = el('p', 'menu-vazio', 'Nenhum item encontrado. Tente outro termo.');
    vazio.id = 'menuVazio';
    vazio.hidden = true;
    frag.appendChild(vazio);

    corpo.appendChild(frag);
  }

  function filtrar(termo) {
    var alvo = chave(termo);
    var achou = 0;

    corpo.querySelectorAll('.menu-grupo').forEach(function (sec) {
      var visiveis = 0;

      sec.querySelectorAll('.menu-item').forEach(function (linha) {
        var bate = !alvo || linha.dataset.busca.indexOf(alvo) !== -1;
        linha.hidden = !bate;
        if (bate) visiveis++;
      });

      sec.hidden = visiveis === 0;
      achou += visiveis;
    });

    document.getElementById('menuVazio').hidden = achou > 0;
    navCardapio.parentElement.classList.toggle('buscando', !!alvo);
  }

  function ativarScrollspy() {
    var links = navCardapio.querySelectorAll('a');
    var secoes = corpo.querySelectorAll('.menu-grupo');
    if (!('IntersectionObserver' in window) || !secoes.length) return;

    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('ativo', a.dataset.alvo === e.target.id);
        });
      });
    }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

    secoes.forEach(function (s) { obs.observe(s); });
  }

  /* ------------------------------------------------- aberto / fechado */
  // Usa o relógio do visitante. Se o site receber muito acesso de fora de
  // Pernambuco, trocar por um cálculo fixo em America/Recife.
  var status = document.getElementById('statusAberto');
  if (status) {
    var agora = new Date();
    var dia = agora.getDay();              // 0 = domingo, 1 = segunda
    var hora = agora.getHours() + agora.getMinutes() / 60;
    var aberto = dia !== 1 && hora >= 14 && hora < 22;

    status.hidden = false;
    status.className = 'status ' + (aberto ? 'aberto' : 'fechado-agora');
    status.textContent = aberto ? 'Aberto agora' : 'Fechado agora';
  }

  /* ------------------------------------------------------------ reveal */
  if (!semMovimento && 'IntersectionObserver' in window) {
    var alvos = document.querySelectorAll(
      '.section-head, .hist-text, .foto, .card, .galeria > *, .hero-photo'
    );
    alvos.forEach(function (n) { n.classList.add('reveal'); });

    var obsReveal = new IntersectionObserver(function (entradas, o) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('visivel');
        o.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: .08 });

    alvos.forEach(function (n) { obsReveal.observe(n); });
  }

  /* --------------------------------------------------------------- ano */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = String(new Date().getFullYear());
})();
