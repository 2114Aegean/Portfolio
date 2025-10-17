document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('workModal');
  if (!modal) {
    console.warn('[modal] #workModal が見つかりません。');
    return;
  }

  const els = {
    title: document.getElementById('workModalTitle'),
    img:   document.getElementById('workModalImg'),
    meta:  document.getElementById('workModalMeta'),
    body:  document.getElementById('workModalBody'),
    close: modal.querySelector('.modal-close')
  };

  function lockScroll() {
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
  }
  function unlockScroll() {
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
  }

  function supportsShowModal() {
    return typeof modal.showModal === 'function';
  }

  function openModal(data) {
    // タイトル・メタ・画像設定
    els.title.textContent = data.title || '';
    els.meta.textContent = data.tags || '';
    if (data.img) {
      els.img.src = data.img;
      els.img.alt = (data.title || '作品') + ' プレビュー';
    } else {
      els.img.removeAttribute('src');
      els.img.alt = '';
    }

    // 説明文設定
    let tpl = null;
    if (data.desc) tpl = document.querySelector(data.desc);
    if (tpl && tpl.content) {
      els.body.innerHTML = tpl.innerHTML;
    } else {
      els.body.innerHTML = data.html || '';
    }

    lockScroll();

    if (supportsShowModal()) {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
      modal.style.display = 'block';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
    }

    const box = modal.querySelector('.modal');
    if (box) {
      box.classList.remove('is-opening');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => box.classList.add('is-opening'));
      });
      box.addEventListener('animationend', () => {
        box.classList.remove('is-opening');
      }, { once: true });
    }

    // フォーカスを閉じるボタンに移す
    if (els.close) els.close.focus();
  }

  function closeModal() {
    if (supportsShowModal()) {
      if (modal.open) modal.close();
    } else {
      modal.removeAttribute('open');
      modal.style.display = 'none';
    }
    unlockScroll();
  }

  // プロジェクトカードをクリック／Enter／Space でモーダルを開く
  document.querySelectorAll('.project-card').forEach(card => {
    const openData = () => {
      openModal({
        title: card.dataset.title,
        tags:  card.dataset.tags,
        img:   card.dataset.img,
        desc:  card.dataset.desc,
        html:  card.dataset.html
      });
    };

    card.addEventListener('click', e => {
      e.preventDefault();
      openData();
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openData();
      }
    });
  });

  // モーダル外クリックまたは × ボタンで閉じる
  modal.addEventListener('click', e => {
    if (e.target.closest('.modal-close') || e.target.closest('.close-btn') || e.target === modal) {
      e.preventDefault();
      closeModal();
    }
  });
  modal.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
    }
  });
  modal.addEventListener('close', () => {
    unlockScroll();
  });
});
