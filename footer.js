/* ============================================================
   FRAMATICS FOOTER — self-injecting module
   Served via Cloudflare Pages → referenced in Webflow Custom Code footer
   Colors bound to Webflow Variables (CSS custom props)
   Double-injection guarded. Naming: footer-* prefix, no BEM.
   ============================================================ */
(function () {
  if (window.__framaticsFooterInit) return;
  window.__framaticsFooterInit = true;

  var CSS = `
  .footer{
    --fr-footer-bg: var(--gray--800);
    --fr-footer-fg: var(--gray--white);
    --fr-footer-fg-muted: var(--footer-fg-muted);
    --fr-footer-border: var(--footer-border);
    --fr-footer-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    --fr-footer-display: var(--_typography---main);
    --footer-section-x: 1.5rem;
    --footer-spotlight-x: -300px;
    --footer-spotlight-y: -300px;
    --footer-spotlight-r: 50px;
    --footer-spotlight-active: 0;
    position: relative; width: 100%; max-width: 100vw;
    background: var(--fr-footer-bg); color: var(--fr-footer-fg);
    font-family: var(--fr-footer-font);
    overflow: hidden; z-index: 30; box-sizing: border-box;
  }
  .footer *, .footer *::before, .footer *::after{ box-sizing: border-box; }
  .footer ul{ list-style: none; margin: 0; padding: 0; }
  .footer a{ color: inherit; text-decoration: none; }
  .footer p{ margin: 0; }
  .footer-inner{ position: relative; z-index: 2; }
  .footer-sr-only{ position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }

  .footer-heading{ margin:0; font-size:18px; font-weight:500; letter-spacing:0; color:var(--fr-footer-fg-muted); }
  .footer-heading-newsletter{ margin-top:1.5rem; }

  .footer-brand{ display:inline-flex; align-items:baseline; line-height:1; color:var(--fr-footer-fg); }
  .footer-brand-name{ font-family:var(--fr-footer-display); font-size:28px; font-weight:800; letter-spacing:0.01em; }
  .footer-brand-dot{ font-family:var(--fr-footer-display); color:var(--fr-footer-fg); font-size:28px; font-weight:800; margin-left:1px; }
  .footer-brand-tagline{ margin-top:1rem; font-size:16px; line-height:1.5; color:var(--fr-footer-fg); max-width:32ch; }

  .footer-underline{ position:relative; display:inline-block; transform-origin:center; transition:transform .15s ease; }
  .footer-underline::after{ content:""; position:absolute; left:0; bottom:-2px; height:1px; width:100%; background:currentColor; transform:scaleX(0); transform-origin:left center; transition:transform .35s cubic-bezier(.65,0,.35,1); pointer-events:none; }
  .footer-underline:hover::after{ transform:scaleX(1); }
  .footer-underline:active{ transform:scale(.9); }

  .footer-top{ display:grid; grid-template-columns:repeat(2,1fr); gap:2rem 1rem; padding:2.5rem var(--footer-section-x) 0; }
  .footer-col{ min-width:0; }
  .footer-col-brand{ grid-column:1 / -1; }
  .footer-list{ display:flex; flex-direction:column; gap:.25rem; margin-top:.625rem; padding-right:.5rem; }
  .footer-link{ font-size:16px; line-height:1.5; }

  .footer-newsletter{ margin-top:.625rem; }
  .footer-newsletter-input-wrap{ position:relative; display:flex; align-items:center; }
  .footer-honeypot{ position:absolute; left:-9999px; opacity:0; height:0; overflow:hidden; }
  .footer-newsletter-label{ display:block; width:100%; }
  .footer-newsletter-input{ width:100%; display:block; padding:.5rem 6.25rem .5rem 0; line-height:1.5; background:transparent; border:0; border-bottom:1px solid var(--fr-footer-fg); color:var(--fr-footer-fg); font-size:18px; font-family:inherit; border-radius:0; }
  .footer-newsletter-input::placeholder{ color:var(--fr-footer-fg); }
  .footer-newsletter-input:focus{ outline:0; box-shadow:none; }
  .footer-newsletter-submit{ position:absolute; right:0; top:50%; transform:translateY(-50%); line-height:1.5; background:transparent; border:0; color:var(--fr-footer-fg-muted); font-size:18px; font-family:inherit; cursor:pointer; padding:0; transition:color .2s ease, transform .15s ease; }
  .footer-newsletter-submit:hover{ color:var(--fr-footer-fg); }
  .footer-newsletter-submit:active{ transform:translateY(-50%) scale(.9); }
  .footer-newsletter-optin{ display:block; font-size:12px; margin-top:.375rem; color:var(--fr-footer-fg-muted); }
  .footer-newsletter-optin-text{ font-size:12px; }
  .footer-newsletter-policy{ color:inherit; text-decoration:underline; }

  .footer-social-row{ padding:2.5rem var(--footer-section-x) 0; position:relative; z-index:3; }
  .footer-social{ display:flex; gap:1.25rem; }
  .footer-social-link{ color:var(--fr-footer-fg-muted); transition:color .2s ease, transform .15s ease; display:inline-flex; }
  .footer-social-link:hover{ color:var(--fr-footer-fg); }
  .footer-social-link:active{ transform:scale(.9); }
  .footer-social-icon{ width:1.5rem; height:1.5rem; fill:currentColor; }

  .footer-bottom{ display:grid; grid-template-columns:auto 1fr; column-gap:1rem; row-gap:.75rem; align-items:center; padding:1.5rem var(--footer-section-x); border-top:1px solid var(--fr-footer-border); margin-top:1.5rem; }
  .footer-locale{ position:relative; display:flex; align-items:center; }
  .footer-locale-toggle{ display:inline-flex; align-items:center; text-wrap:nowrap; background:transparent; border:0; color:var(--fr-footer-fg); font-size:12px; font-family:inherit; cursor:pointer; padding:0; }
  .footer-locale-flag{ display:inline-flex; width:1.25rem; height:1.25rem; margin-right:.5rem; border-radius:9999px; overflow:hidden; flex-shrink:0; }
  .footer-locale-flag img{ width:100%; height:100%; object-fit:cover; display:block; }
  .footer-locale-caret{ width:.75rem; height:.75rem; margin-left:.5rem; fill:currentColor; }
  .footer-locale-menu{ position:absolute; bottom:calc(100% - .5rem); left:0; z-index:10; min-width:15rem; border-radius:.25rem; background:#fff; color:var(--fr-footer-bg); padding:.5rem 0; font-size:14px; box-shadow:0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1); }
  .footer-locale-menu[hidden]{ display:none; }
  .footer-locale-option{ display:flex; align-items:center; padding:.375rem .75rem; text-wrap:nowrap; color:inherit; }
  .footer-locale-option:hover{ background:rgba(20,20,19,.1); }
  .footer-locale-sub{ opacity:.5; }
  .footer-legal-list{ display:flex; flex-direction:row; flex-wrap:wrap; gap:.5rem 1rem; justify-content:flex-end; font-size:12px; color:var(--fr-footer-fg-muted); }
  .footer-legal-link{ color:inherit; }
  .footer-legal-copy{ color:inherit; }
  @media (max-width:380px){ .footer-legal-list{ flex-direction:column; align-items:flex-start; gap:.5rem; } }

  .footer-bigmark{ position:absolute; left:0; right:0; bottom:0; padding:0 var(--footer-section-x); pointer-events:none; z-index:1; transform:translateY(40%); line-height:0; }
  .footer-bigmark-svg{ display:block; width:100%; height:clamp(120px,22vw,380px); }
  .footer-bigmark-svg-lit{ position:absolute; inset:0; padding:0 var(--footer-section-x); box-sizing:border-box; width:100%; pointer-events:none; opacity:var(--footer-spotlight-active); transition:opacity .25s ease;
    -webkit-mask-image:radial-gradient(circle 90px at var(--footer-spotlight-x) var(--footer-spotlight-y), rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,.5) 70%, rgba(0,0,0,0) 100%);
    mask-image:radial-gradient(circle 90px at var(--footer-spotlight-x) var(--footer-spotlight-y), rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,.5) 70%, rgba(0,0,0,0) 100%); }
  .footer-bigmark-text{ font-family:var(--fr-footer-display); font-weight:900; letter-spacing:-0.04em; font-size:240px; }
  .footer-bigmark-text-base{ fill:rgba(255,255,255,.05); }
  .footer-bigmark-text-lit{ fill:rgba(255,255,255,1); }

  .footer-spotlight{ position:absolute; top:0; left:0; width:100px; height:100px; border-radius:50%; pointer-events:none; transform:translate3d(calc(var(--footer-spotlight-x) - 50px), calc(var(--footer-spotlight-y) - 50px), 0); background:radial-gradient(circle at center, rgba(255,255,255,.4) 0%, rgba(255,255,255,.15) 45%, rgba(255,255,255,0) 70%); opacity:var(--footer-spotlight-active); transition:opacity .25s ease; z-index:1; will-change:transform, opacity; mix-blend-mode:screen; }
  @media (hover:none){ .footer-spotlight{ display:none; } .footer-bigmark-text-base{ fill:rgba(255,255,255,.07); } .footer-bigmark-svg-lit{ display:none; } }

  @media (min-width:640px){
    .footer{ --footer-section-x:2rem; }
    .footer-top{ grid-template-columns:repeat(6,1fr); gap:2rem 1.5rem; }
    .footer-col-brand{ grid-column:1 / -1; }
    .footer-col-shop{ grid-column:span 2 / span 2; }
    .footer-col-help{ grid-column:span 2 / span 2; }
    .footer-col-company{ grid-column:span 2 / span 2; }
  }
  @media (min-width:1024px){
    .footer{ --footer-section-x:2.5rem; }
    .footer-top{ grid-template-columns:repeat(12,1fr); gap:2rem 2rem; padding-top:4rem; }
    .footer-col-brand{ grid-column:span 5 / span 5; }
    .footer-col-shop{ grid-column:span 2 / span 2; grid-column-start:7; }
    .footer-col-help{ grid-column:span 2 / span 2; }
    .footer-col-company{ grid-column:span 2 / span 2; }
    .footer-bottom{ grid-template-columns:auto 1fr; align-items:center; gap:2rem; padding-top:1.5rem; padding-bottom:1.5rem; margin-top:4rem; }
  }
  @media (min-width:1280px){
    .footer-top{ gap:2rem 3rem; padding-top:5rem; }
    .footer-col-brand{ grid-column:span 4 / span 4; }
    .footer-col-shop{ grid-column:span 2 / span 2; grid-column-start:7; }
    .footer-col-help{ grid-column:span 2 / span 2; }
    .footer-col-company{ grid-column:span 2 / span 2; }
  }
  @media (prefers-reduced-motion:reduce){
    .footer-underline::after, .footer-underline, .footer-spotlight{ transition:none !important; }
  }
  `;

  var SPRITE = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true"><defs>' +
    '<symbol id="footer-instagram" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.9 5.9 0 0 0 1.38 2.13 5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88"/></symbol>' +
    '<symbol id="footer-facebook" viewBox="0 0 24 24"><path d="M24 12a12 12 0 1 0-13.88 11.85v-8.38H7.08V12h3.04V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0 0 24 12"/></symbol>' +
    '<symbol id="footer-youtube" viewBox="0 0 24 24"><path d="M23.5 6.51a3.01 3.01 0 0 0-2.12-2.13C19.5 3.86 12 3.86 12 3.86s-7.5 0-9.38.52A3.01 3.01 0 0 0 .5 6.51C0 8.4 0 12 0 12s0 3.6.5 5.49a3.01 3.01 0 0 0 2.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3.01 3.01 0 0 0 2.12-2.13c.5-1.89.5-5.49.5-5.49s0-3.6-.5-5.49M9.6 15.6V8.4l6.27 3.6z"/></symbol>' +
    '<symbol id="footer-caret-down" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4"/></symbol>' +
    '</defs></svg>';

  var MARKUP = SPRITE +
  '<footer class="footer">' +
    '<div class="footer-spotlight" aria-hidden="true"></div>' +
    '<div class="footer-inner">' +
      '<div class="footer-top">' +
        '<div class="footer-col footer-col-brand">' +
          '<a href="/" class="footer-brand" aria-label="Framatics home"><span class="footer-brand-name">FRAMATICS</span><span class="footer-brand-dot">.</span></a>' +
          '<p class="footer-brand-tagline">Officially-licensed framed prints of championship-day front pages. Made to outlive the moment they hold.</p>' +
          '<h2 class="footer-heading footer-heading-newsletter">NEWSLETTER</h2>' +
          '<form class="footer-newsletter" action="#" method="post" novalidate>' +
            '<div class="footer-newsletter-input-wrap">' +
              '<div class="footer-honeypot" aria-hidden="true"><label for="footer-newsletter-company">Company name</label><input type="text" id="footer-newsletter-company" name="company" tabindex="-1" autocomplete="off" value=""></div>' +
              '<label for="footer-newsletter-email" class="footer-newsletter-label"><span class="footer-sr-only">Enter your email</span><input type="email" name="newsletter[email]" id="footer-newsletter-email" placeholder="email@yours.com" class="footer-newsletter-input"></label>' +
              '<button type="submit" class="footer-newsletter-submit">JOIN</button>' +
            '</div>' +
            '<label for="footer-newsletter-optin" class="footer-newsletter-optin"><input type="checkbox" id="footer-newsletter-optin" class="footer-sr-only" checked><span class="footer-newsletter-optin-text">By signing up, I agree with the <a href="/pages/privacy-policy/" class="footer-newsletter-policy footer-underline">data protection policy</a> of Framatics.</span></label>' +
          '</form>' +
        '</div>' +
        '<div class="footer-col footer-col-shop"><h2 class="footer-heading">SHOP</h2><ul class="footer-list">' +
          '<li><a href="#" class="footer-link footer-underline">All products</a></li>' +
          '<li><a href="#" class="footer-link footer-underline">Prints</a></li>' +
          '<li><a href="#" class="footer-link footer-underline">Classic Frames</a></li>' +
          '<li><a href="#" class="footer-link footer-underline">Gallery Collection</a></li>' +
          '<li><a href="#" class="footer-link footer-underline">By League</a></li></ul></div>' +
        '<div class="footer-col footer-col-help"><h2 class="footer-heading">HELP</h2><ul class="footer-list">' +
          '<li><a href="#" class="footer-link footer-underline">Contact</a></li>' +
          '<li><a href="#" class="footer-link footer-underline">Personalized</a></li>' +
          '<li><a href="#" class="footer-link footer-underline">FAQs</a></li>' +
          '<li><a href="#" class="footer-link footer-underline">Shipping &amp; Returns</a></li>' +
          '<li><a href="#" class="footer-link footer-underline">Track order</a></li></ul></div>' +
        '<div class="footer-col footer-col-company"><h2 class="footer-heading">COMPANY</h2><ul class="footer-list">' +
          '<li><a href="#" class="footer-link footer-underline">About</a></li>' +
          '<li><a href="#" class="footer-link footer-underline">Press</a></li>' +
          '<li><a href="#" class="footer-link footer-underline">Partnerships</a></li>' +
          '<li><a href="#" class="footer-link footer-underline">Licensing</a></li>' +
          '<li><a href="#" class="footer-link footer-underline">Careers</a></li></ul></div>' +
      '</div>' +
      '<div class="footer-social-row"><ul class="footer-social">' +
        '<li><a href="#" rel="noopener noreferrer" target="_blank" class="footer-social-link"><span class="footer-sr-only">Instagram</span><svg class="footer-social-icon" aria-hidden="true"><use xlink:href="#footer-instagram"/></svg></a></li>' +
        '<li><a href="#" rel="noopener noreferrer" target="_blank" class="footer-social-link"><span class="footer-sr-only">Facebook</span><svg class="footer-social-icon" aria-hidden="true"><use xlink:href="#footer-facebook"/></svg></a></li>' +
        '<li><a href="#" rel="noopener noreferrer" target="_blank" class="footer-social-link"><span class="footer-sr-only">YouTube</span><svg class="footer-social-icon" aria-hidden="true"><use xlink:href="#footer-youtube"/></svg></a></li>' +
      '</ul></div>' +
      '<div class="footer-bottom">' +
        '<div class="footer-locale">' +
          '<button type="button" class="footer-locale-toggle" aria-haspopup="true" aria-expanded="false"><span class="footer-locale-flag"><img src="https://cdn.shopify.com/oxygen-v2/33924/23678/49114/3489332/assets/US-Cij0lPZM.svg" alt="" loading="lazy"></span><span class="footer-locale-name">English</span><svg class="footer-locale-caret" aria-hidden="true"><use xlink:href="#footer-caret-down"/></svg></button>' +
          '<ul class="footer-locale-menu" hidden>' +
            '<li><a href="#" class="footer-locale-option"><span class="footer-locale-flag"><img src="https://cdn.shopify.com/oxygen-v2/33924/23678/49114/3489332/assets/US-Cij0lPZM.svg" alt="" loading="lazy"></span>United States<span class="footer-locale-sub">&nbsp;/&nbsp;English</span></a></li>' +
            '<li><a href="#" class="footer-locale-option"><span class="footer-locale-flag"><img src="https://cdn.shopify.com/oxygen-v2/33924/23678/49114/3489332/assets/GB-CGwKuAp_.svg" alt="" loading="lazy"></span>United Kingdom<span class="footer-locale-sub">&nbsp;/&nbsp;English</span></a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-legal"><ul class="footer-legal-list">' +
          '<li><a href="#" class="footer-legal-link footer-underline">Terms of use</a></li>' +
          '<li><a href="#" class="footer-legal-link footer-underline">Data protection policy</a></li>' +
          '<li class="footer-legal-copy">© 2026 Framatics</li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="footer-bigmark" aria-hidden="true">' +
        '<svg class="footer-bigmark-svg footer-bigmark-svg-base" viewBox="0 0 1000 220" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><text x="500" y="180" text-anchor="middle" textLength="990" lengthAdjust="spacingAndGlyphs" class="footer-bigmark-text footer-bigmark-text-base">FRAMATICS</text></svg>' +
        '<svg class="footer-bigmark-svg footer-bigmark-svg-lit" viewBox="0 0 1000 220" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><text x="500" y="180" text-anchor="middle" textLength="990" lengthAdjust="spacingAndGlyphs" class="footer-bigmark-text footer-bigmark-text-lit">FRAMATICS</text></svg>' +
      '</div>' +
    '</div>' +
  '</footer>';

  function init() {
    if (document.querySelector('.footer[data-footer-injected]')) return;
    var st = document.createElement('style');
    st.id = 'footer-styles';
    st.textContent = CSS;
    document.head.appendChild(st);
    document.body.insertAdjacentHTML('beforeend', MARKUP);

    var footer = document.querySelector('.footer');
    if (!footer) return;
    footer.setAttribute('data-footer-injected', '1');

    var bigmark = footer.querySelector('.footer-bigmark');
    var rafId = null, pendingX = 0, pendingY = 0, inside = false;
    function applyPosition() {
      rafId = null;
      footer.style.setProperty('--footer-spotlight-x', pendingX + 'px');
      footer.style.setProperty('--footer-spotlight-y', pendingY + 'px');
      if (!bigmark) return;
      var fRect = footer.getBoundingClientRect();
      var bRect = bigmark.getBoundingClientRect();
      var bx = pendingX - (bRect.left - fRect.left);
      var by = pendingY - (bRect.top - fRect.top);
      bigmark.style.setProperty('--footer-spotlight-x', bx + 'px');
      bigmark.style.setProperty('--footer-spotlight-y', by + 'px');
      var on = inside && bx >= 0 && bx <= bRect.width && by >= 0 && by <= bRect.height;
      footer.style.setProperty('--footer-spotlight-active', on ? '1' : '0');
    }
    footer.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch') return;
      inside = true;
      var r = footer.getBoundingClientRect();
      pendingX = e.clientX - r.left;
      pendingY = e.clientY - r.top;
      if (rafId === null) rafId = requestAnimationFrame(applyPosition);
    });
    footer.addEventListener('pointerleave', function () {
      inside = false;
      footer.style.setProperty('--footer-spotlight-active', '0');
    });

    var toggle = footer.querySelector('.footer-locale-toggle');
    var menu = footer.querySelector('.footer-locale-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = !menu.hasAttribute('hidden');
        if (open) { menu.setAttribute('hidden', ''); toggle.setAttribute('aria-expanded', 'false'); }
        else { menu.removeAttribute('hidden'); toggle.setAttribute('aria-expanded', 'true'); }
      });
      document.addEventListener('click', function (e) {
        var w = footer.querySelector('.footer-locale');
        if (w && !w.contains(e.target)) { menu.setAttribute('hidden', ''); toggle.setAttribute('aria-expanded', 'false'); }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { menu.setAttribute('hidden', ''); toggle.setAttribute('aria-expanded', 'false'); }
      });
    }

    var form = footer.querySelector('.footer-newsletter');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var hp = form.querySelector('#footer-newsletter-company');
        if (hp && hp.value) return;
        var em = form.querySelector('#footer-newsletter-email');
        if (!em || !em.value) return;
        console.log('Framatics newsletter signup:', em.value);
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
