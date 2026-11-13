(() => {
  'use strict';
  const section = document.getElementById('Portofolio');
  if (!section) return;
  const stage = section.querySelector('.portfolio-stage');
  const viewport = section.querySelector('.portfolio-viewport');
  const tabs = [...section.querySelectorAll('[data-portfolio-tab]')];
  const panels = [...section.querySelectorAll('[role="tabpanel"]')];
  const prev = section.querySelector('.portfolio-prev');
  const next = section.querySelector('.portfolio-next');
  const progress = section.querySelector('.portfolio-progress span');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = panels[0];
  let distance = 0;
  let driven = false;
  let currentX = 0;
  let framePending = false;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  function measure() {
    active.style.transform = '';
    distance = Math.max(0, active.scrollWidth - viewport.clientWidth);
    // Keep small screens and short viewports in a normal, swipeable document flow.
    driven = !reducedMotion.matches && window.innerWidth >= 768 && window.innerHeight > 680 && distance > 0;
    section.classList.toggle('is-scroll-driven', driven);
    section.style.height = driven ? `${window.innerHeight + distance * 1.1}px` : 'auto';
    if (!driven) viewport.scrollLeft = 0;
    update();
  }
  function update() {
    framePending = false;
    if (driven) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      const travel = section.offsetHeight - stage.offsetHeight;
      const ratio = clamp((window.scrollY - top) / Math.max(1, travel), 0, 1);
      currentX = ratio * distance;
      active.style.transform = `translate3d(${-currentX}px,0,0)`;
    } else {
      currentX = viewport.scrollLeft;
      active.style.transform = '';
    }
    progress.style.width = `${distance ? clamp(currentX / distance, 0, 1) * 100 : 100}%`;
    prev.disabled = currentX < 3;
    next.disabled = currentX >= distance - 3;
  }
  function requestUpdate() {
    if (!framePending) { framePending = true; requestAnimationFrame(update); }
  }
  function selectTab(index, focus = false) {
    if (index < 0 || index >= tabs.length) return;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    active.style.transform = '';
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    active = panels[index];
    viewport.scrollLeft = 0;
    if (window.scrollY > sectionTop + 20) window.scrollTo({ top: sectionTop, behavior: 'instant' });
    measure();
    if (focus) tabs[index].focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(index));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const target = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      selectTab(target, true);
    });
  });
  function move(direction) {
    const card = active.firstElementChild;
    const step = (card?.offsetWidth || 440) + 32;
    const target = clamp(currentX + direction * step, 0, distance);
    if (driven) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + (target / distance) * (section.offsetHeight - stage.offsetHeight), behavior: 'smooth' });
    } else viewport.scrollTo({ left: target, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  viewport.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', measure);
  reducedMotion.addEventListener('change', measure);
  window.addEventListener('changeTab', event => {
    if (Number.isInteger(event.detail?.tabIndex)) selectTab(event.detail.tabIndex);
  });
  measure();

  const projects = {
    data: {
      title: 'Analisis Data Eksperimen Fisika', category: 'Academic Project', meta: 'Depok, Indonesia · 2024 — sekarang',
      description: 'Proyek akademik pengolahan data pengukuran eksperimen fisika menggunakan pendekatan statistik dan visualisasi data.',
      points: ['Mengolah data pengukuran eksperimen dengan pendekatan statistik, visualisasi data, dan analisis ketidakpastian.', 'Menyusun grafik dan melakukan interpretasi hasil untuk mendukung laporan teknis berbasis data.'], tags: ['Statistika', 'Analisis Data', 'Visualisasi Data', 'Analisis Ketidakpastian']
    },
    elevator: {
      title: 'Sistem Elevator Empat Lantai dengan VHDL', category: 'Digital Systems Project', meta: 'Depok, Indonesia · Proyek akademik',
      description: 'Perancangan sistem digital untuk simulasi perpindahan elevator empat lantai berdasarkan input tombol lantai.',
      points: ['Merancang finite state machine (FSM) untuk mengatur perpindahan elevator berdasarkan input tombol lantai.', 'Mengimplementasikan indikator LED dan seven-segment display pada platform Zybo serta memverifikasi logika sistem.'], tags: ['VHDL', 'Finite State Machine', 'FPGA Zybo', 'Seven-Segment Display']
    },
    traffic: {
      title: 'Pengendali Lampu Lalu Lintas dengan VHDL', category: 'Digital Logic Project', meta: 'Depok, Indonesia · Proyek akademik',
      description: 'Desain logika kontrol urutan lampu lalu lintas dengan mode operasi normal dan mode maintenance berkedip.',
      points: ['Mendesain logika kontrol urutan lampu lalu lintas dengan mode normal dan mode maintenance berkedip.', 'Melakukan simulasi dan validasi transisi state untuk memastikan keluaran sistem sesuai spesifikasi.'], tags: ['VHDL', 'Digital Logic', 'Simulasi', 'Validasi Sistem']
    },
    electronics: {
      title: 'Elektronika Analog dan Digital Laboratory Projects', category: 'Laboratory Coursework', meta: 'Depok, Indonesia · 2024 — sekarang',
      description: 'Proyek laboratorium untuk memahami perilaku dan mengevaluasi performa rangkaian elektronika analog maupun digital.',
      points: ['Menganalisis rangkaian op-amp, filter aktif, komparator, integrator, diferensiator, adder, encoder/decoder, flip-flop, counter, dan timer 555.', 'Membandingkan hasil simulasi atau pengukuran dengan teori untuk mengevaluasi performa rangkaian.'], tags: ['Elektronika Analog', 'Elektronika Digital', 'Op-Amp', 'Timer 555', 'Simulasi & Pengukuran']
    }
  };
  const modal = document.getElementById('project-modal');
  let previousOverflow = '';
  document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', () => {
      const project = projects[button.dataset.project];
      if (!project || !modal) return;
      document.getElementById('project-modal-title').textContent = project.title;
      document.getElementById('project-modal-category').textContent = project.category;
      document.getElementById('project-modal-meta').textContent = project.meta;
      document.getElementById('project-modal-description').textContent = project.description;
      const points = document.getElementById('project-modal-points');
      points.replaceChildren(...project.points.map(point => { const li = document.createElement('li'); li.textContent = point; return li; }));
      const tags = document.getElementById('project-modal-tags');
      tags.replaceChildren(...project.tags.map(tag => { const span = document.createElement('span'); span.textContent = tag; return span; }));
      const art = button.closest('.project-card').querySelector('.project-art').cloneNode(true);
      // Duplicate SVG IDs are renamed so each illustration retains its own paint references.
      art.querySelectorAll('[id]').forEach(node => {
        const oldId = node.id; node.id = `${oldId}-modal`;
        art.querySelectorAll(`[fill="url(#${oldId})"]`).forEach(paint => paint.setAttribute('fill', `url(#${oldId}-modal)`));
      });
      document.getElementById('project-modal-art').replaceChildren(art);
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      modal.showModal();
    });
  });
  if (modal) {
    modal.querySelector('.project-modal-close').addEventListener('click', () => modal.close());
    modal.addEventListener('click', event => { if (event.target === modal) { const rect = modal.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) modal.close(); } });
    modal.addEventListener('close', () => { document.body.style.overflow = previousOverflow; });
  }
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name')).trim();
    const email = String(data.get('email')).trim();
    const message = String(data.get('message')).trim();
    const subject = `Pesan portofolio dari ${name}`;
    const body = `Nama: ${name}\nEmail: ${email}\n\n${message}`;
    document.getElementById('contact-form-status').textContent = 'Aplikasi email dibuka dengan draf pesan. Tekan Kirim di aplikasi email untuk mengirimkannya, atau hubungi WhatsApp di bawah.';
    window.location.href = `mailto:syadidul07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
