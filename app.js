const sections = [
  {
    id: 'math', number: '01', en: 'Mathematical Foundations', zh: '数学基础', icon: '∑',
    summary: '理解机器人学背后的数学语言，从空间表示到状态估计与优化。',
    topics: [
      { en: 'Calculus', zh: '微积分', items: ['偏导数', '梯度', '雅可比矩阵', '优化'] },
      { en: 'Linear Algebra', zh: '线性代数', items: ['矩阵运算', '特征值', 'SVD'] },
      { en: 'Probability & Statistics', zh: '概率统计', items: ['贝叶斯估计', '高斯分布', '状态估计'] },
      { en: 'Group Theory', zh: '群论', items: ['旋转群 SO(3)', '刚体运动群 SE(3)'] },
      { en: 'Lie Groups & Lie Algebras', zh: '李群李代数', items: ['指数映射', '对数映射', '扰动模型'] },
      { en: 'Spatial Transformations', zh: '空间变换', items: ['坐标系', '位姿表示', '四元数'] },
      { en: 'Optimization', zh: '优化理论', items: ['最小二乘', 'Gauss-Newton', 'LM'] }
    ]
  },
  {
    id: 'modeling', number: '02', en: 'Robot Modeling & Control', zh: '机器人建模与控制', icon: '⌁',
    summary: '建立机器人模型，理解运动与力的关系，并设计稳定的控制系统。',
    topics: [
      { en: 'Robot Description', zh: '机器人描述', items: ['URDF', 'MJCF', '机器人坐标系与关节结构', 'CAD', 'Link & Joint 设计', '惯量', '质量', '碰撞体', '驱动器', 'GMR 与机器人模型之间的关系'] },
      { en: 'Mechanics', zh: '机器人力学', groups: [
        { label: 'Kinematics / 运动学', items: ['正运动学', '逆运动学', '雅可比矩阵'] },
        { label: 'Dynamics / 动力学', items: ['刚体动力学', '逆动力学', '接触模型'] }
      ] },
      { en: 'Low-level Control', zh: '底层控制', items: ['PID', '位置控制', '速度控制', '力矩控制', '阻抗控制', '导纳控制', 'MPC', 'Whole-Body Control（进阶）'] }
    ]
  },
  {
    id: 'systems', number: '03', en: 'Robot Systems & Communication', zh: '系统与通信', icon: '⌘',
    summary: '连接软件、网络与硬件，让机器人各个模块可靠地协同工作。',
    topics: [
      { en: 'ROS2', zh: '机器人操作系统', items: ['Node', 'Topic', 'Service', 'Action', 'TF2', 'rosbag2', 'Launch', 'Executors', 'QoS', 'Lifecycle'] },
      { en: 'DDS', zh: '数据分发服务', items: ['发现机制', '数据分发', 'QoS'] },
      { en: 'Network Protocols', zh: '网络协议', items: ['TCP', 'UDP', 'Socket', 'SSH 与远程部署'] },
      { en: 'Hardware Interfaces', zh: '硬件接口', items: ['串口 UART', 'CAN', 'Ethernet', '传感器驱动', '硬件接口'] },
      { en: 'System Engineering', zh: '系统工程', items: ['Linux', 'Docker', 'CMake', 'Git', '实时性', '日志与故障排查'] }
    ]
  },
  {
    id: 'perception', number: '04', en: 'Perception & SLAM', zh: '感知与定位建图', icon: '◎',
    summary: '让机器人理解传感器数据，估计自身状态，并构建环境地图。',
    topics: [
      { en: 'Sensors', zh: '传感器', groups: [
        { label: 'LiDAR / 激光雷达', items: ['激光雷达原理', '点云'] },
        { label: 'Camera / 相机', items: ['成像模型', '内外参', '标定'] },
        { label: 'IMU / 惯性测量', items: ['加速度', '角速度', '积分漂移'] },
        { label: 'Encoder / 编码器', items: ['轮式里程计'] }
      ] },
      { en: 'State Estimation', zh: '状态估计', items: ['Kalman Filter', 'EKF', 'IEKF', 'Bayes Filter', '因子图优化', 'Sensor Fusion 多传感器融合'] },
      { en: 'SLAM', zh: '同步定位与建图', groups: [
        { label: 'Front-end / 前端', items: ['数据关联', '特征匹配', 'Scan Matching'] },
        { label: 'Back-end / 后端', items: ['图优化', '回环检测', '重定位'] },
        { label: 'LiDAR SLAM', items: ['Cartographer', 'FAST-LIO', 'LIO-SAM'] },
        { label: 'Visual SLAM', items: ['ORB-SLAM3', '视觉惯性里程计'] }
      ] },
      { en: 'Mapping', zh: '地图构建', items: ['Occupancy Grid', 'OctoMap', '点云地图', '3D Gaussian Splatting', 'NeRF', 'Semantic Mapping', 'BEV'] }
    ]
  },
  {
    id: 'navigation', number: '05', en: 'Navigation & Planning', zh: '导航与规划', icon: '↗',
    summary: '从定位、路径搜索到自主探索，规划机器人下一步如何行动。',
    topics: [
      { en: 'Localization', zh: '定位', items: ['AMCL', '里程计融合', '重定位'] },
      { en: 'Global Planning', zh: '全局路径规划', items: ['Dijkstra', 'A*', 'Hybrid A*', 'RRT', 'RRT*'] },
      { en: 'Local Planning & Control', zh: '局部规划控制', items: ['DWA / DWB', 'TEB', 'MPPI', 'MPC'] },
      { en: 'Navigation Architecture', zh: '导航架构', items: ['Nav2', 'Behavior Trees', 'Costmap', 'Recovery Behaviors'] },
      { en: 'Autonomous Exploration', zh: '自主探索', items: ['Frontier-based Exploration', 'Information Gain', 'Next-Best-View', 'Semantic Exploration', 'Active Object Search'] }
    ]
  },
  {
    id: 'learning', number: '06', en: 'Learning & Embodied AI', zh: '学习与具身智能', icon: '✳',
    summary: '结合机器学习、运动生成与视觉语言模型，探索具身智能的前沿。',
    topics: [
      { en: 'Machine Learning Foundations', zh: '机器学习基础', items: ['神经网络', 'CNN', 'Transformer', 'Attention', '模仿学习', '监督学习', '自监督学习'] },
      { en: 'Reinforcement Learning', zh: '强化学习', items: ['MDP', 'Bellman Equation', 'Q-learning', 'Actor-Critic', 'PPO', 'SAC', 'AMP', 'Reward Design', 'Sim2Real'] },
      { en: 'Motion & Humanoid Robotics', zh: '运动与人形机器人', items: ['GVHMR：人体运动恢复', 'GMR：人体动作到机器人动作重定向', 'Motion Tracking', 'Whole-Body Control'] },
      { en: 'Vision-Language Intelligence', zh: '视觉语言智能', items: ['VLM', 'LLM', 'VLA', 'VLN：视觉语言导航', 'LeRobot', 'OpenVLA 等系统'] },
      { en: 'World Models & Simulation', zh: '世界模型与仿真', items: ['World Models', 'Model-based RL', 'MuJoCo', 'Isaac Lab', 'Domain Randomization', 'System Identification'] }
    ]
  },
  {
    id: 'research', number: '07', en: 'Research & Practice', zh: '研究与实践', icon: '◈',
    summary: '将理论落到论文阅读、项目实践与实验迭代中，形成自己的研究方法。',
    topics: [
      { en: 'Paper Reading', zh: '论文阅读', items: ['论文笔记', '方法比较', '实验分析'] },
      { en: 'Projects', zh: '项目实践', items: ['机器人导航', 'G1', '人形运动控制', 'RoboCup'] },
      { en: 'Experiments', zh: '实验记录', items: ['仿真训练', '真实机器人部署', '实验记录'] },
      { en: 'Computer Science', zh: '计算机科学', items: ['C++', 'Python', '数据结构与算法'] },
      { en: 'Research Thinking', zh: '科研思维', items: ['Critical Thinking', '科研方法论', '跨学科联系'] }
    ]
  }
];

const app = document.getElementById('app');
const sideNav = document.getElementById('sideNav');
const overlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const sidebar = document.getElementById('sidebar');
const mobileShade = document.getElementById('mobileShade');
const menuButton = document.getElementById('menuButton');

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function topicCount(section) { return section.topics.length; }
function pointCount(section) { return section.topics.reduce((count, topic) => count + (topic.items?.length || 0) + (topic.groups?.reduce((n, group) => n + group.items.length, 0) || 0), 0); }

function renderNav(active) {
  sideNav.innerHTML = `<a class="nav-link ${active === 'home' ? 'active' : ''}" href="#home"><span class="nav-icon">▦</span><span>总览 Overview</span></a><p class="side-label nav-label">DOMAINS / 知识领域</p>${sections.map(section => `<a class="nav-link ${active === section.id ? 'active' : ''}" href="#${section.id}"><span class="nav-icon">${section.icon}</span><span>${section.zh}</span><span class="nav-num">${section.number}</span></a>`).join('')}`;
}

function renderHome() {
  const topics = sections.reduce((n, section) => n + topicCount(section), 0);
  const points = sections.reduce((n, section) => n + pointCount(section), 0);
  app.innerHTML = `
    <div class="page home-page">
      <section class="hero">
        <div class="hero-copy">
          <div class="eyebrow"><span class="eyebrow-line"></span> A PERSONAL KNOWLEDGE SYSTEM <span class="eyebrow-index">/ 001—007</span></div>
          <h1>探索机器人学的<br><em>知识宇宙<span>.</span></em></h1>
          <p class="hero-description">从数学基础到具身智能，以清晰的结构串联理论、系统与实践。把复杂知识，整理成可持续探索的地图。</p>
          <div class="hero-actions"><a class="primary-button" href="#math">开始探索 <span>↗</span></a><button class="text-button" type="button" data-search-open>搜索知识点 <span>→</span></button></div>
        </div>
        <div class="hero-graphic" aria-hidden="true">
          <div class="graphic-grid"></div><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit orbit-three"></div><div class="orbit-center"><span class="orbit-center-small">ROBOTICS</span><strong>R<span>.</span></strong><span class="orbit-center-small">ATLAS</span></div><i class="orbit-node node-one"></i><i class="orbit-node node-two"></i><i class="orbit-node node-three"></i><span class="graphic-coordinate coordinate-one">[ 01, 07 ]</span><span class="graphic-coordinate coordinate-two">SYSTEM / KNOWLEDGE</span>
        </div>
      </section>
      <div class="stats-strip"><div><strong>07</strong><span>核心领域 <small>CORE DOMAINS</small></span></div><div><strong>${String(topics).padStart(2, '0')}</strong><span>主题模块 <small>TOPIC MODULES</small></span></div><div><strong>${points}+</strong><span>知识要点 <small>KNOWLEDGE POINTS</small></span></div><div class="stats-note">一个持续生长的<br>机器人学知识体系 <span>↗</span></div></div>
      <section class="section-intro"><div><div class="eyebrow"><span class="eyebrow-line"></span> KNOWLEDGE DOMAINS / 知识领域</div><h2>七个领域，一张完整地图。</h2><p>沿着基础、建模、系统、感知、规划、学习到研究实践的路径，建立自己的知识坐标系。</p></div><span class="section-counter">01 — 07 / EXPLORE</span></section>
      <section class="domain-grid" aria-label="知识领域">${sections.map((section, index) => `<a class="domain-card" href="#${section.id}" style="--delay:${index * 45}ms"><div class="card-top"><span class="card-number">${section.number} / 07</span><span class="card-arrow">↗</span></div><div class="card-symbol">${section.icon}</div><div class="card-content"><span class="card-en">${section.en}</span><h3>${section.zh}</h3><p>${section.summary}</p></div><div class="card-bottom"><span>${topicCount(section)} 个主题 · ${pointCount(section)} 个知识点</span><span class="card-mini-arrow">→</span></div></a>`).join('')}</section>
      <section class="closing-note"><span>THE LEARNING PATH</span><p>理解原理，构建系统，<br>然后让机器人走进真实世界。</p><a href="#math">从数学基础开始 <span>↗</span></a></section>
    </div>`;
}

function renderTopic(topic, index) {
  const items = topic.items ? `<div class="point-list">${topic.items.map(item => `<span class="point">${escapeHTML(item)}</span>`).join('')}</div>` : topic.groups.map(group => `<div class="subgroup"><h4>${escapeHTML(group.label)}</h4><div class="point-list">${group.items.map(item => `<span class="point">${escapeHTML(item)}</span>`).join('')}</div></div>`).join('');
  return `<article class="topic-card" id="topic-${index}"><div class="topic-number">${String(index + 1).padStart(2, '0')}</div><div class="topic-body"><div class="topic-heading"><div><span class="topic-en">${escapeHTML(topic.en)}</span><h3>${escapeHTML(topic.zh)}</h3></div><span class="topic-count">${topic.items?.length || topic.groups?.reduce((n, group) => n + group.items.length, 0)} POINTS</span></div>${items}</div></article>`;
}

function renderSection(section) {
  const next = sections[sections.findIndex(item => item.id === section.id) + 1];
  app.innerHTML = `<div class="page section-page"><div class="section-breadcrumb"><a href="#home">OVERVIEW</a><span>／</span><span>${section.en.toUpperCase()}</span></div><section class="section-hero"><div class="section-hero-text"><div class="eyebrow"><span class="eyebrow-line"></span> DOMAIN ${section.number} / 07</div><div class="section-hero-icon">${section.icon}</div><h1>${section.zh}<span>.</span></h1><p class="section-hero-en">${section.en}</p><p class="section-summary">${section.summary}</p></div><div class="section-hero-meta"><span>KNOWLEDGE DOMAIN</span><strong>${section.number}<small> / 07</small></strong><div>${topicCount(section)} TOPICS <span>·</span> ${pointCount(section)} POINTS</div></div></section><div class="section-toolbar"><div><span class="toolbar-line"></span><strong>主题目录</strong><span class="toolbar-count">${String(topicCount(section)).padStart(2, '0')} MODULES</span></div><button type="button" data-search-open>查找知识点 <span>⌕</span></button></div><section class="topic-list" aria-label="${section.zh}主题目录">${section.topics.map(renderTopic).join('')}</section><div class="section-end"><a href="#home">← 返回知识总览</a>${next ? `<a href="#${next.id}">下一个领域：${next.zh} <span>↗</span></a>` : `<a href="#math">从数学基础重新开始 <span>↗</span></a>`}</div></div>`;
}

function route() {
  const [hash, topicPosition] = decodeURIComponent(location.hash.slice(1)).split('/');
  const section = sections.find(item => item.id === hash);
  const active = section?.id || 'home';
  renderNav(active);
  if (section) renderSection(section); else renderHome();
  document.getElementById('topbarCurrent').textContent = section ? section.en.toUpperCase() : 'OVERVIEW';
  document.title = section ? `${section.zh} · Robotics Atlas` : 'Robotics Atlas · 机器人知识图谱';
  closeMenu();
  if (section && topicPosition !== undefined && /^\d+$/.test(topicPosition)) {
    const target = document.getElementById(`topic-${topicPosition}`);
    if (target) { requestAnimationFrame(() => target.scrollIntoView({ block: 'start', behavior: 'smooth' })); return; }
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}

const searchable = sections.flatMap(section => [
  { title: section.zh, subtitle: section.en, section, kind: '领域' },
  ...section.topics.map((topic, topicIndex) => ({ title: topic.zh, subtitle: topic.en, section, topicIndex, kind: '主题' })),
  ...section.topics.flatMap((topic, topicIndex) => [...(topic.items || []), ...(topic.groups || []).flatMap(group => group.items)].map(item => ({ title: item, subtitle: `${section.zh} / ${topic.zh}`, section, topicIndex, kind: '知识点' })))
]);

function renderSearch(query = '') {
  const normalized = query.trim().toLocaleLowerCase();
  const results = (normalized ? searchable.filter(item => `${item.title} ${item.subtitle} ${item.section.en}`.toLocaleLowerCase().includes(normalized)) : searchable.filter(item => item.kind === '领域')).slice(0, 20);
  searchResults.innerHTML = results.length ? results.map(item => `<a class="search-result" href="#${item.section.id}${item.topicIndex === undefined ? '' : `/${item.topicIndex}`}"><span class="search-result-icon">${item.section.icon}</span><span><strong>${escapeHTML(item.title)}</strong><small>${escapeHTML(item.subtitle)}</small></span><em>${item.kind}</em><span class="search-result-arrow">↗</span></a>`).join('') : `<div class="search-empty">没有找到匹配的知识点。试试其他关键词。</div>`;
}

function openSearch() { overlay.hidden = false; document.body.classList.add('modal-open'); searchInput.value = ''; renderSearch(); requestAnimationFrame(() => searchInput.focus()); }
function closeSearch() { overlay.hidden = true; document.body.classList.remove('modal-open'); }
function openMenu() { sidebar.classList.add('open'); mobileShade.hidden = false; menuButton.setAttribute('aria-expanded', 'true'); }
function closeMenu() { sidebar.classList.remove('open'); mobileShade.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); }

document.getElementById('searchTrigger').addEventListener('click', openSearch);
document.getElementById('closeSearch').addEventListener('click', closeSearch);
searchInput.addEventListener('input', event => renderSearch(event.target.value));
overlay.addEventListener('click', event => { if (event.target === overlay) closeSearch(); });
searchResults.addEventListener('click', event => { if (event.target.closest('a')) closeSearch(); });
app.addEventListener('click', event => { if (event.target.closest('[data-search-open]')) openSearch(); });
menuButton.addEventListener('click', () => sidebar.classList.contains('open') ? closeMenu() : openMenu());
mobileShade.addEventListener('click', closeMenu);
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openSearch(); }
  if (event.key === 'Escape') { closeSearch(); closeMenu(); }
});
window.addEventListener('hashchange', route);
route();
