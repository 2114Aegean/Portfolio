// document.addEventListener('DOMContentLoaded', () => {
//   // ===== フェードインアニメーション =====
//   const fadeSections = document.querySelectorAll('.fade-section');
//   const observer = new IntersectionObserver((entries, obs) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('show');
//         obs.unobserve(entry.target);
//       }
//     });
//   }, { threshold: 0.2 });
//   fadeSections.forEach(sec => observer.observe(sec));

  // // ===== モーダル =====
  // const modalEl = document.getElementById('workModal');
  // if (!modalEl) return;

  // const els = {
  //   title: document.getElementById('workModalTitle'),
  //   img: document.getElementById('workModalImg'),
  //   meta: document.getElementById('workModalMeta'),
  //   body: document.getElementById('workModalBody')
  // };

  // let bsModalInstance = null;

  // function supportsBootstrap() {
  //   return typeof bootstrap !== 'undefined' && typeof bootstrap.Modal === 'function';
  // }

//   function openModal(data) {
//   els.title.textContent = data.title || '';
//   els.meta.textContent  = data.tags || '';
//   if (data.img) {
//     els.img.src = data.img;
//     els.img.alt = (data.title || '作品') + ' プレビュー';
//   } else {
//     els.img.removeAttribute('src');
//     els.img.alt = '';
//   }
//   const tpl = data.desc ? document.querySelector(data.desc) : null;
//   els.body.innerHTML = tpl?.content ? tpl.innerHTML : (data.html || '');

//   if (supportsBootstrap()) {
//     if (bsModalInstance) bsModalInstance.dispose();
//     bsModalInstance = new bootstrap.Modal(modalEl, { backdrop: true, keyboard: true, focus: true });
//     bsModalInstance.show();
//   } else {
//     modalEl.classList.remove('hidden');
//     modalEl.classList.add('show');
//     modalEl.style.display = 'block';
//     modalEl.setAttribute('aria-modal', 'true');
//     document.documentElement.style.overflow = 'hidden';
//     document.body.style.overflow = 'hidden';
//   }
// }

// function closeModal() {
//   if (supportsBootstrap()) {
//     bsModalInstance?.hide();
//   } else {
//     modalEl.classList.remove('show', 'fade');
//     modalEl.classList.add('hidden'); // ここで完全非表示
//     modalEl.removeAttribute('aria-modal');
//     document.documentElement.style.overflow = '';
//     document.body.style.overflow = '';
//   }
// }


  // // プロジェクトカードにイベント設定
  // document.querySelectorAll('.project-card').forEach(card => {
  //   const openData = () => openModal({
  //     title: card.dataset.title,
  //     tags: card.dataset.tags,
  //     img: card.dataset.img,
  //     desc: card.dataset.desc,
  //     html: card.dataset.html
  //   });
  //   card.addEventListener('click', e => { e.preventDefault(); openData(); });
  //   card.addEventListener('keydown', e => {
  //     if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openData(); }
  //   });
  // });

  // // モーダル閉じたらスクロール復帰
  // if (supportsBootstrap()) {
  //   modalEl.addEventListener('hidden.bs.modal', () => {
  //     document.documentElement.style.overflow = '';
  //     document.body.style.overflow = '';
  //   });
  // } else {
  //   modalEl.addEventListener('click', e => {
  //     if (e.target === modalEl || e.target.closest('.btn-close') || e.target.closest('[data-bs-dismiss="modal"]')) {
  //       closeModal();
  //     }
  //   });
  //   modalEl.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  // }
// });
