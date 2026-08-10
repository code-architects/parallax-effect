(() => {
  const container = document.querySelector('.parallax');
  const layers = document.querySelectorAll('[data-speed]');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!container || !layers.length || reduceMotion) return;

  let ticking = false;

  const update = () => {
    layers.forEach((layer) => {
      const speed = parseFloat(layer.dataset.speed);
      const scenePos = layer.parentElement.getBoundingClientRect().top;
      layer.style.transform = `translateY(${-(1 - speed) * scenePos}px)`;
    });
    ticking = false;
  };

  container.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });

  update();
})();
