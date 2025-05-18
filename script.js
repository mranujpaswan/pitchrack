document.addEventListener('DOMContentLoaded', () => {
  const nowImg    = document.getElementById('now-img');
  const nowTitle  = document.getElementById('now-title');
  const nowArtist = document.getElementById('now-artist');

  document.querySelectorAll('.card, .collection').forEach(el => {
    el.addEventListener('click', () => {
      const img    = el.dataset.image;
      const title  = el.dataset.title;
      const artist = el.dataset.artist;
      if (img)    nowImg.src        = img;
      if (title)  nowTitle.textContent  = title;
      if (artist) nowArtist.textContent = artist;
    });
  });
});
