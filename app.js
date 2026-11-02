const chapters = [
  { id: 'home', label: 'README', file: 'README.md' },
  { id: 'math', label: '01 数学基础', file: '01-mathematical-foundations.md' },
  { id: 'modeling', label: '02 机器人建模与控制', file: '02-robot-modeling-control.md' },
  { id: 'systems', label: '03 系统与通信', file: '03-systems-communication.md' },
  { id: 'perception', label: '04 感知与定位建图', file: '04-perception-slam.md' },
  { id: 'navigation', label: '05 导航与规划', file: '05-navigation-planning.md' },
  { id: 'learning', label: '06 学习与具身智能', file: '06-learning-embodied-ai.md' },
  { id: 'research', label: '07 研究与实践', file: '07-research-practice.md' }
];

const nav = document.getElementById('fileNav');
const body = document.getElementById('markdownBody');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const markdown = window.markdownit({ html: false, linkify: true, breaks: false });
let requestId = 0;

// Keep image paths relative to the Markdown file so GitHub preview and the site agree.
const defaultImage = markdown.renderer.rules.image;
markdown.renderer.rules.image = (tokens, index, options, env, renderer) => {
  const token = tokens[index];
  const srcIndex = token.attrIndex('src');
  const src = token.attrs[srcIndex][1];
  if (!/^(?:[a-z][a-z\d+.-]*:|\/|#)/i.test(src)) {
    token.attrs[srcIndex][1] = `content/${src}`;
  }
  return defaultImage(tokens, index, options, env, renderer);
};

function closeMenu() {
  sidebar.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

function renderNav(activeId) {
  nav.innerHTML = `
    <a class="file-link ${activeId === 'home' ? 'is-active' : ''}" href="#home" ${activeId === 'home' ? 'aria-current="page"' : ''}><span class="nav-file-icon" aria-hidden="true">▤</span>README.md</a>
    <div class="folder-label"><span aria-hidden="true">▾</span> content</div>
    ${chapters.slice(1).map(chapter => `<a class="file-link nested ${activeId === chapter.id ? 'is-active' : ''}" href="#${chapter.id}" ${activeId === chapter.id ? 'aria-current="page"' : ''}><span class="nav-file-icon" aria-hidden="true">▤</span>${chapter.label}</a>`).join('')}
  `;
}

async function showChapter() {
  const id = location.hash.replace(/^#/, '');
  const chapter = chapters.find(item => item.id === id) || chapters[0];
  const currentRequest = ++requestId;
  renderNav(chapter.id);
  document.getElementById('headerCurrent').textContent = chapter.file;
  document.getElementById('breadcrumbFile').textContent = chapter.file;
  document.getElementById('fileName').textContent = chapter.file;
  document.getElementById('editLink').href = `https://github.com/YeLuo-123/Foxbot.github.io/edit/main/content/${chapter.file}`;
  document.title = `${chapter.label} · 机器人知识库`;
  body.innerHTML = '<p class="loading">加载中…</p>';
  closeMenu();
  window.scrollTo(0, 0);

  try {
    const response = await fetch(`content/${chapter.file}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const source = await response.text();
    if (currentRequest !== requestId) return;
    body.innerHTML = markdown.render(source);
  } catch (error) {
    if (currentRequest !== requestId) return;
    body.innerHTML = '<p class="load-error">无法加载这个章节。请检查 Markdown 文件是否存在，然后刷新页面。</p>';
    console.error(`Failed to load ${chapter.file}`, error);
  }
}

menuToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
window.addEventListener('hashchange', showChapter);
showChapter();
