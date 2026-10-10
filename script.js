(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var envelope = document.getElementById('envelope');
  var hint = document.getElementById('hint');
  var letter = document.getElementById('letter');
  var gallery = document.getElementById('gallery');
  var closing = document.getElementById('closing');

  // Open the envelope, then reveal the letter and scroll to it
  envelope.addEventListener('click', function () {
    if (envelope.classList.contains('open')) { scrollToLetter(); return; }
    envelope.classList.add('open');
    envelope.setAttribute('aria-expanded', 'true');
    envelope.setAttribute('aria-label', 'Envelope opened. Go to the letter');
    hint.textContent = 'Scroll down ♡';
    setTimeout(function () {
      letter.hidden = false; gallery.hidden = false; closing.hidden = false;
      letter.classList.add('show');
      scrollToLetter();
    }, reduce ? 0 : 1300);
  });

  function scrollToLetter() {
    if (letter.hidden) return;
    letter.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    letter.focus({ preventScroll: true });
  }

  // Photos: show a placeholder when a file is missing
  document.querySelectorAll('.polaroid').forEach(function (card) {
    var img = card.querySelector('img');
    function check() { if (!img.naturalWidth) card.classList.add('missing'); }
    img.addEventListener('error', function () { card.classList.add('missing'); });
    if (img.complete) check();
    card.addEventListener('click', function () {
      var on = card.getAttribute('aria-pressed') === 'true';
      card.setAttribute('aria-pressed', String(!on));
    });
  });

  // Soft floating hearts in the background
  if (!reduce) {
    var box = document.getElementById('floaters');
    for (var i = 0; i < 9; i++) {
      var s = document.createElement('span');
      s.textContent = i % 3 === 0 ? '✦' : '♡';
      s.style.left = (5 + i * 11) + '%';
      s.style.fontSize = (12 + (i * 7) % 14) + 'px';
      s.style.animationDuration = (16 + (i * 5) % 12) + 's';
      s.style.animationDelay = (-i * 3) + 's';
      box.appendChild(s);
    }
  }

  // Closing heart: sends a few hearts floating up
  document.getElementById('heartBtn').addEventListener('click', function (e) {
    if (reduce) return;
    var r = e.currentTarget.getBoundingClientRect();
    for (var i = 0; i < 6; i++) {
      var h = document.createElement('span');
      h.className = 'burst'; h.textContent = '♡';
      h.style.left = (r.left + r.width / 2 + (Math.random() * 60 - 30)) + 'px';
      h.style.top = (r.top + Math.random() * 10) + 'px';
      h.style.fontSize = (14 + Math.random() * 14) + 'px';
      h.style.animationDelay = (i * 0.07) + 's';
      document.body.appendChild(h);
      setTimeout(function (el) { el.remove(); }.bind(null, h), 1700);
    }
  });
})();
