/**
 * Asha Paulson - Data Analyst Portfolio
 * Interactive Application Logic & Modern Animation Suite
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypingEffect();
  initHeroCanvas();
  initCounters();
  initSalesDashboard();
  initMLBenchmark();
  initPlayground();
  initProjectModals();
  initProjectFilters();
  initSkillFilters();
  initMobileNav();
  initContactForm();
  initScrollSpy();

  // Modern Animation Engine
  initScrollReveal();
  initSpotlightEffect();
  initTiltEffect();
  initMagneticButtons();
});

/* ==========================================================================
   1. Theme Management (Dark / Light)
   ========================================================================== */
let currentTheme = localStorage.getItem('theme') || 'dark';

function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
      localStorage.setItem('theme', currentTheme);
      updateChartsTheme();
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcon = document.getElementById('theme-toggle-icon');
  if (themeIcon) {
    if (theme === 'light') {
      themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`;
      themeIcon.setAttribute('title', 'Switch to Dark Mode');
    } else {
      themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />`;
      themeIcon.setAttribute('title', 'Switch to Light Mode');
    }
  }
}

/* ==========================================================================
   2. Modern Scroll Reveal (IntersectionObserver with Stagger)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  });

  revealElements.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   3. Modern Spotlight Mouse Glow on Cards
   ========================================================================== */
function initSpotlightEffect() {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   4. Modern 3D Tilt Card Animation with Glare Physics
   ========================================================================== */
function initTiltEffect() {
  const tiltCards = document.querySelectorAll('[data-tilt]');
  
  tiltCards.forEach((card) => {
    const maxTilt = 7; // Max tilt angle in degrees

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const rotateY = ((mouseX / width) - 0.5) * (maxTilt * 2);
      const rotateX = -((mouseY / height) - 0.5) * (maxTilt * 2);

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
}

/* ==========================================================================
   5. Modern Magnetic Interactive Buttons
   ========================================================================== */
function initMagneticButtons() {
  const magneticBtns = document.querySelectorAll('.magnetic-btn');

  magneticBtns.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = `translate(0px, 0px)`;
    });
  });
}

/* ==========================================================================
   6. Typing Tagline Effect
   ========================================================================== */
function initTypingEffect() {
  const words = [
    "Data Analyst",
    "Power BI & DAX Specialist",
    "Predictive Modeling (XGBoost 97.9%)",
    "SQL & Python Developer",
    "Business Intelligence Storyteller"
  ];
  const target = document.getElementById('typing-text');
  if (!target) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 95;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   7. Interactive Modern Particle Network Background
   ========================================================================== */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const nodes = [];
  const nodeCount = Math.min(Math.floor((width * height) / 13000), 60);

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.75,
      vy: (Math.random() - 0.5) * 0.75,
      radius: Math.random() * 2 + 1.2,
    });
  }

  let mouse = { x: null, y: null };
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const nodeColor = isLight ? 'rgba(14, 165, 233, 0.5)' : 'rgba(56, 189, 248, 0.65)';
    const lineColor = isLight ? 'rgba(99, 102, 241, 0.09)' : 'rgba(56, 189, 248, 0.14)';

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Draw node
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor;
      ctx.fill();

      // Connect lines
      for (let j = i + 1; j < nodes.length; j++) {
        const other = nodes[j];
        const dist = Math.hypot(node.x - other.x, node.y - other.y);
        if (dist < 115) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = lineColor;
          ctx.lineWidth = 1 - dist / 115;
          ctx.stroke();
        }
      }

      // Mouse interactive physics
      if (mouse.x !== null && mouse.y !== null) {
        const mDist = Math.hypot(node.x - mouse.x, node.y - mouse.y);
        if (mDist < 130) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = isLight ? 'rgba(6, 182, 212, 0.3)' : 'rgba(6, 182, 212, 0.4)';
          ctx.lineWidth = 1 - mDist / 130;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* ==========================================================================
   8. Animated Stat Counters
   ========================================================================== */
function initCounters() {
  const counterElements = document.querySelectorAll('.counter-val');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterElements.forEach((el) => {
          const target = parseFloat(el.getAttribute('data-target'));
          const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1800;
          const start = 0;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const currentVal = start + (target - start) * ease;

            el.textContent = `${prefix}${currentVal.toFixed(decimals)}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.25 });

  const statsSection = document.getElementById('stats-section');
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   9. Interactive Live Sales Dashboard
   ========================================================================== */
let salesChart = null;

const salesDataset = {
  all: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    sales: [7400, 8200, 9600, 9100, 10800, 11400, 10900, 12200, 13100, 12800, 14200, 15980],
    profit: [1680, 1850, 2180, 2050, 2450, 2600, 2490, 2780, 2960, 2900, 3210, 3300],
    totalSales: '$125,680',
    totalProfit: '$28,450',
    margin: '22.6%',
    yoyGrowth: '+12.5%',
    topProduct: 'Enterprise Laptop Pro'
  },
  northAmerica: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    sales: [3100, 3400, 4100, 3900, 4600, 4900, 4700, 5200, 5600, 5400, 6000, 6630],
    profit: [710, 780, 940, 890, 1050, 1120, 1070, 1190, 1280, 1230, 1370, 1520],
    totalSales: '$57,530',
    totalProfit: '$13,150',
    margin: '22.8%',
    yoyGrowth: '+14.2%',
    topProduct: 'Enterprise Laptop Pro'
  },
  europe: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    sales: [2100, 2300, 2700, 2550, 3050, 3200, 3050, 3400, 3650, 3550, 3950, 4420],
    profit: [470, 510, 610, 570, 690, 720, 690, 770, 820, 800, 890, 990],
    totalSales: '$37,920',
    totalProfit: '$8,530',
    margin: '22.5%',
    yoyGrowth: '+11.0%',
    topProduct: 'Ergonomic Office Chair'
  },
  apac: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    sales: [1500, 1700, 1950, 1850, 2200, 2300, 2200, 2500, 2750, 2700, 3050, 3430],
    profit: [350, 390, 450, 420, 510, 530, 510, 580, 640, 630, 710, 790],
    totalSales: '$20,230',
    totalProfit: '$4,650',
    margin: '23.0%',
    yoyGrowth: '+15.8%',
    topProduct: 'Ultra-Wide 4K Monitor'
  }
};

function initSalesDashboard() {
  const ctx = document.getElementById('sales-performance-chart');
  if (!ctx) return;

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const gridColor = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.07)';
  const textColor = isLight ? '#475569' : '#94A3B8';

  const defaultData = salesDataset.all;

  salesChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: defaultData.labels,
      datasets: [
        {
          label: 'Sales Revenue ($)',
          data: defaultData.sales,
          borderColor: '#38BDF8',
          backgroundColor: 'rgba(56, 189, 248, 0.12)',
          borderWidth: 2.5,
          tension: 0.35,
          fill: true,
          pointBackgroundColor: '#38BDF8',
          pointRadius: 4,
          pointHoverRadius: 6,
          yAxisID: 'y'
        },
        {
          label: 'Net Profit ($)',
          data: defaultData.profit,
          borderColor: '#10B981',
          backgroundColor: 'rgba(16, 185, 129, 0.08)',
          borderWidth: 2,
          borderDash: [4, 4],
          tension: 0.35,
          fill: false,
          pointBackgroundColor: '#10B981',
          pointRadius: 3,
          pointHoverRadius: 5,
          yAxisID: 'y'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: textColor,
            font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 },
            boxWidth: 14,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.95)',
          titleColor: isLight ? '#0F172A' : '#F8FAFC',
          bodyColor: isLight ? '#334155' : '#E2E8F0',
          borderColor: isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          padding: 10,
          callbacks: {
            label: function (context) {
              return ` ${context.dataset.label}: $${context.parsed.y.toLocaleString()}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { color: textColor, font: { family: "'Plus Jakarta Sans', sans-serif" } }
        },
        y: {
          grid: { color: gridColor },
          ticks: {
            color: textColor,
            font: { family: "'Plus Jakarta Sans', sans-serif" },
            callback: function (val) {
              return '$' + (val >= 1000 ? (val / 1000).toFixed(0) + 'k' : val);
            }
          }
        }
      }
    }
  });

  const regionButtons = document.querySelectorAll('[data-region]');
  regionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      regionButtons.forEach((b) => b.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/50'));
      btn.classList.add('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/50');
      
      const region = btn.getAttribute('data-region');
      const data = salesDataset[region] || salesDataset.all;
      
      salesChart.data.datasets[0].data = data.sales;
      salesChart.data.datasets[1].data = data.profit;
      salesChart.update();

      document.getElementById('kpi-sales').textContent = data.totalSales;
      document.getElementById('kpi-profit').textContent = data.totalProfit;
      document.getElementById('kpi-margin').textContent = data.margin;
      document.getElementById('kpi-growth').textContent = data.yoyGrowth;
    });
  });
}

/* ==========================================================================
   10. Machine Learning Benchmark Chart
   ========================================================================== */
let mlChart = null;

function initMLBenchmark() {
  const ctx = document.getElementById('ml-benchmark-chart');
  if (!ctx) return;

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const gridColor = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.07)';
  const textColor = isLight ? '#475569' : '#94A3B8';

  mlChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Accuracy', 'Precision', 'Recall', 'F1-Score', 'ROC-AUC'],
      datasets: [
        {
          label: 'XGBoost Classifier (Recommended)',
          data: [97.95, 96.80, 97.40, 97.10, 98.60],
          backgroundColor: 'rgba(6, 182, 212, 0.85)',
          borderRadius: 6,
          barPercentage: 0.7,
        },
        {
          label: 'Random Forest',
          data: [94.20, 93.10, 92.80, 92.95, 95.30],
          backgroundColor: 'rgba(99, 102, 241, 0.7)',
          borderRadius: 6,
          barPercentage: 0.7,
        },
        {
          label: 'Logistic Regression',
          data: [89.50, 87.20, 88.00, 87.60, 90.10],
          backgroundColor: 'rgba(148, 163, 184, 0.5)',
          borderRadius: 6,
          barPercentage: 0.7,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: textColor,
            font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 },
            boxWidth: 14,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.95)',
          titleColor: isLight ? '#0F172A' : '#F8FAFC',
          bodyColor: isLight ? '#334155' : '#E2E8F0',
          borderColor: isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          padding: 10,
          callbacks: {
            label: function (context) {
              return ` ${context.dataset.label}: ${context.parsed.y}%`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { color: textColor, font: { family: "'Plus Jakarta Sans', sans-serif" } }
        },
        y: {
          min: 80,
          max: 100,
          grid: { color: gridColor },
          ticks: {
            color: textColor,
            font: { family: "'Plus Jakarta Sans', sans-serif" },
            callback: function (val) {
              return val + '%';
            }
          }
        }
      }
    }
  });
}

function updateChartsTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const gridColor = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.07)';
  const textColor = isLight ? '#475569' : '#94A3B8';

  [salesChart, mlChart].forEach((chart) => {
    if (!chart) return;
    if (chart.options.scales.x) {
      chart.options.scales.x.grid.color = gridColor;
      chart.options.scales.x.ticks.color = textColor;
    }
    if (chart.options.scales.y) {
      chart.options.scales.y.grid.color = gridColor;
      chart.options.scales.y.ticks.color = textColor;
    }
    if (chart.options.plugins.legend) {
      chart.options.plugins.legend.labels.color = textColor;
    }
    chart.update();
  });
}

/* ==========================================================================
   11. DAX & SQL Interactive Playground
   ========================================================================== */
const playgroundSnippets = {
  dax1: {
    title: "YoY Sales Growth % (DAX Measure)",
    description: "Calculates current period sales vs previous year period using CALCULATE and SAMEPERIODLASTYEAR with division zero-safety.",
    code: `Sales YoY Growth % = 
VAR CurrentSales = [Total Sales]
VAR PreviousYearSales = 
    CALCULATE(
        [Total Sales],
        SAMEPERIODLASTYEAR('DimDate'[Date])
    )
RETURN
    DIVIDE(CurrentSales - PreviousYearSales, PreviousYearSales, 0)`,
    outputHeader: ["Year", "Total Sales", "Prior Year", "YoY Growth %"],
    outputRows: [
      ["2025", "$111,715", "$98,400", "+13.5%"],
      ["2026", "$125,680", "$111,715", "+12.5%"]
    ]
  },
  dax2: {
    title: "Profit Margin % & High Margin Flag (DAX)",
    description: "Dynamic measure determining overall profitability margin and flagging categories exceeding threshold targets.",
    code: `Profit Margin % = 
DIVIDE([Total Profit], [Total Sales], 0)

High Margin Category Flag = 
IF(
    [Profit Margin %] >= 0.22,
    "High Performing Margin ⭐",
    "Standard Margin"
)`,
    outputHeader: ["Category", "Sales ($)", "Profit ($)", "Margin %", "Status"],
    outputRows: [
      ["Technology", "$51,520", "$13,395", "26.0%", "High Performing Margin ⭐"],
      ["Office Supplies", "$44,200", "$9,724", "22.0%", "High Performing Margin ⭐"],
      ["Furniture", "$29,960", "$5,331", "17.8%", "Standard Margin"]
    ]
  },
  sql1: {
    title: "Monthly Lead Conversion & Velocity Funnel (SQL)",
    description: "Aggregates raw lead pipeline events to calculate conversion rates, average cycle days, and stage bottlenecks.",
    code: `SELECT 
    DATE_FORMAT(created_at, '%Y-%m') AS cohort_month,
    COUNT(lead_id) AS total_leads_captured,
    SUM(CASE WHEN stage = 'Qualified' THEN 1 ELSE 0 END) AS qualified_leads,
    SUM(CASE WHEN stage = 'Closed Won' THEN 1 ELSE 0 END) AS converted_leads,
    ROUND(SUM(CASE WHEN stage = 'Closed Won' THEN 1 ELSE 0 END) * 100.0 / COUNT(lead_id), 2) AS conversion_rate_pct,
    ROUND(AVG(DATEDIFF(closed_at, created_at)), 1) AS avg_close_days
FROM leads_pipeline
GROUP BY DATE_FORMAT(created_at, '%Y-%m')
ORDER BY cohort_month DESC
LIMIT 4;`,
    outputHeader: ["Cohort Month", "Total Leads", "Qualified", "Converted", "Conversion Rate", "Avg Days"],
    outputRows: [
      ["2026-08", "1,240", "680", "285", "22.98%", "14.2 days"],
      ["2026-07", "1,150", "610", "252", "21.91%", "15.8 days"],
      ["2026-06", "980", "520", "208", "21.22%", "16.4 days"],
      ["2026-05", "890", "475", "182", "20.45%", "17.1 days"]
    ]
  },
  sql2: {
    title: "Real-Time UPI Fraud Velocity Flagging (SQL Window)",
    description: "Detects anomalous rapid-fire UPI transactions within a rolling 5-minute window for Razorpay fraud detection.",
    code: `WITH TransactionVelocity AS (
    SELECT 
        txn_id,
        user_id,
        amount,
        txn_timestamp,
        COUNT(txn_id) OVER(
            PARTITION BY user_id 
            ORDER BY txn_timestamp 
            RANGE BETWEEN INTERVAL 5 MINUTE PRECEDING AND CURRENT ROW
        ) AS txns_last_5min,
        SUM(amount) OVER(
            PARTITION BY user_id 
            ORDER BY txn_timestamp 
            RANGE BETWEEN INTERVAL 5 MINUTE PRECEDING AND CURRENT ROW
        ) AS volume_last_5min
    FROM upi_transactions
)
SELECT 
    txn_id, user_id, amount, txns_last_5min, volume_last_5min,
    CASE 
        WHEN txns_last_5min > 4 OR volume_last_5min > 50000 THEN 'ALERT: HIGH RISK 🚨'
        ELSE 'NORMAL ✅'
    END AS risk_status
FROM TransactionVelocity
WHERE txns_last_5min > 2
ORDER BY txn_timestamp DESC;`,
    outputHeader: ["Txn ID", "User ID", "Amount (₹)", "5m Txns", "5m Vol (₹)", "Risk Status"],
    outputRows: [
      ["TXN_9841", "USR_204", "₹18,500", "5", "₹64,200", "ALERT: HIGH RISK 🚨"],
      ["TXN_9839", "USR_204", "₹15,000", "4", "₹45,700", "NORMAL ✅"],
      ["TXN_8721", "USR_891", "₹22,000", "3", "₹53,000", "ALERT: HIGH RISK 🚨"],
      ["TXN_7612", "USR_103", "₹4,200", "3", "₹11,400", "NORMAL ✅"]
    ]
  }
};

function initPlayground() {
  const tabs = document.querySelectorAll('[data-snippet]');
  const codeBox = document.getElementById('playground-code');
  const titleBox = document.getElementById('playground-title');
  const descBox = document.getElementById('playground-desc');
  const tableHeader = document.getElementById('playground-table-header');
  const tableBody = document.getElementById('playground-table-body');
  const copyBtn = document.getElementById('copy-code-btn');

  function loadSnippet(key) {
    const data = playgroundSnippets[key];
    if (!data) return;

    if (titleBox) titleBox.textContent = data.title;
    if (descBox) descBox.textContent = data.description;
    if (codeBox) codeBox.textContent = data.code;

    if (tableHeader && tableBody) {
      tableHeader.innerHTML = data.outputHeader.map(h => `<th class="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">${h}</th>`).join('');
      tableBody.innerHTML = data.outputRows.map(row => `
        <tr class="border-b border-slate-800/60 hover:bg-slate-800/30">
          ${row.map(cell => `<td class="px-4 py-2.5 text-xs text-slate-200 whitespace-nowrap">${cell}</td>`).join('')}
        </tr>
      `).join('');
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active', 'border-cyan-400', 'text-cyan-400'));
      tab.classList.add('active', 'border-cyan-400', 'text-cyan-400');
      loadSnippet(tab.getAttribute('data-snippet'));
    });
  });

  loadSnippet('dax1');

  if (copyBtn && codeBox) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeBox.textContent).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `✓ Copied!`;
        copyBtn.classList.add('text-emerald-400');
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.classList.remove('text-emerald-400');
        }, 1800);
      });
    });
  }
}

/* ==========================================================================
   12. Project Case Studies & Modals
   ========================================================================== */
const projectDetails = {
  'lead-conversion': {
    title: 'Lead Conversion Prediction Pipeline',
    subtitle: 'End-to-End Machine Learning with Python & XGBoost',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'EDA', 'Feature Engineering'],
    metric: '97.95% Classification Accuracy',
    summary: 'A complete machine learning solution designed to predict high-probability prospective leads for targeted sales prioritization, significantly decreasing customer acquisition cost and salesperson outreach latency.',
    challenge: 'The sales team dealt with thousands of inbound unqualified leads monthly. Manual prioritization led to delayed follow-ups with high-intent buyers and wasted rep hours on cold contacts.',
    solution: [
      'Engineered 18+ behavioural, demographic, and session duration features from messy raw logs.',
      'Conducted extensive exploratory data analysis (EDA) with Seaborn & Matplotlib to isolate high-affinity conversion indicators.',
      'Trained Logistic Regression, Random Forest, and XGBoost models; tuned hyperparameters via GridSearchCV with 5-fold cross validation.',
      'Evaluated precision-recall curves to minimize false positives, confirming XGBoost with top score of 97.95% accuracy and 98.6% ROC-AUC.'
    ],
    results: [
      '97.95% overall model accuracy (outperformed baseline Logistic Regression by +8.45%).',
      'Identified top 3 predictive conversion drivers: Page Engagement Time, Inquiry Source, and Lead Activity Frequency.',
      'Recommended pipeline deployment for sales automation with prioritized tier-1 lead alerts.'
    ]
  },
  'sales-dashboard': {
    title: 'Executive Sales & Profitability Dashboard',
    subtitle: 'Interactive Power BI Business Intelligence Suite',
    tech: ['Power BI', 'DAX Measures', 'Power Query (M)', 'Data Modeling', 'KPI Reporting'],
    metric: 'Self-Service Stakeholder Reporting',
    summary: 'An executive BI dashboard tracking enterprise sales performance, profitability margins, category velocity, and geographic distribution across global markets with dynamic drill-through capabilities.',
    challenge: 'Leadership relied on disparate spreadsheets and static monthly slides, resulting in slow turnaround times for root-cause profitability dips and product underperformance inquiries.',
    solution: [
      'Constructed a robust Star Schema data model connecting FactSales with Dimension tables (Customers, Products, Dates, Regions).',
      'Wrote 25+ dynamic DAX measures including Time Intelligence (YTD, MTD, YoY%), Profit Margins, Dynamic Ranking, and Slicer filters.',
      'Built multi-level drill-through pages allowing executives to jump from macro global trends into granular SKU-level performance.',
      'Configured automated Power Query transformation steps for data cleansing and null replacement.'
    ],
    results: [
      'Eliminated manual weekly reporting hours for stakeholders by providing self-serve interactivity.',
      'Enabled rapid identification of underperforming product categories in specific European markets.',
      'Surfaced dynamic KPI cards with real-time target status indicators.'
    ]
  },
  'fraud-detection': {
    title: 'UPI Real-Time Fraud Detection in E-Commerce',
    subtitle: 'Machine Learning + Razorpay UPI Integration',
    tech: ['Python', 'Machine Learning', 'Razorpay API', 'Gradient Boosting', 'Flask/FastAPI'],
    metric: 'Real-Time Transaction Scoring',
    summary: 'A final-year engineering group project integrating live Razorpay UPI checkout with an intelligent risk-scoring engine that screens transaction and behavioral attributes to intercept suspicious payments.',
    challenge: 'Modern e-commerce platforms face chargeback losses and payment fraud via stolen UPI credentials and bot-driven automated micro-transactions.',
    solution: [
      'Implemented real-time transaction processing using Razorpay UPI webhooks.',
      'Trained Random Forest and Gradient Boosting algorithms on simulated transactional patterns (velocity, deviation from historical ticket size, location jumps).',
      'Created a dual-step verification threshold: transactions with high risk scores trigger secondary biometric/OTP challenges or immediate quarantine.',
      'Integrated an administrative monitoring portal for immediate review of flagged payments.'
    ],
    results: [
      'Successfully screened transactions in under 220ms prior to final settlement.',
      'Achieved robust detection rates for high-velocity fraud attempts without disrupting standard customer checkout flows.'
    ]
  },
  'python-internship': {
    title: 'Python Automation & Script Debugging Suite',
    subtitle: 'GSeven Technologies Internship Deliverables',
    tech: ['Python 3', 'Script Debugging', 'Data Transformation', 'Algorithm Optimization'],
    metric: 'Code Reliability & Optimization',
    summary: 'Academic internship focusing on writing, testing, and debugging production-grade Python scripts for data transformation, error handling, and algorithmic efficiency.',
    challenge: 'Legacy internal automation scripts suffered from unhandled exceptions, slow looping performance, and poor readability.',
    solution: [
      'Refactored iterative file processors into vectorized and generator-based workflows, reducing execution overhead.',
      'Added comprehensive unit test assertions and defensive error handling across critical scripts.',
      'Documented standard programming conventions and reusable utility functions for the engineering repository.'
    ],
    results: [
      'Significantly improved script reliability across automated batch routines.',
      'Built strong core software engineering foundations complementing subsequent Data Science applications.'
    ]
  }
};

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close-btn');
  const openButtons = document.querySelectorAll('[data-open-modal]');

  if (!modal || !modalContent) return;

  function openModal(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    modalContent.innerHTML = `
      <div class="mb-6">
        <div class="flex items-center gap-2 mb-2">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            ${data.metric}
          </span>
        </div>
        <h3 class="text-2xl sm:text-3xl font-bold text-slate-100">${data.title}</h3>
        <p class="text-sm sm:text-base text-cyan-400 font-medium mt-1">${data.subtitle}</p>
      </div>

      <div class="flex flex-wrap gap-2 mb-6">
        ${data.tech.map(t => `<span class="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700 font-mono">${t}</span>`).join('')}
      </div>

      <div class="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
        <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <h4 class="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">Executive Summary</h4>
          <p class="text-slate-300">${data.summary}</p>
        </div>

        <div>
          <h4 class="text-base font-semibold text-slate-100 flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-amber-400"></span>
            Business Problem & Challenge
          </h4>
          <p class="text-slate-300 pl-4 border-l-2 border-slate-800">${data.challenge}</p>
        </div>

        <div>
          <h4 class="text-base font-semibold text-slate-100 flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
            Methodology & Technical Approach
          </h4>
          <ul class="list-disc list-inside space-y-2 text-slate-300 pl-2">
            ${data.solution.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40">
          <h4 class="text-base font-semibold text-cyan-300 flex items-center gap-2 mb-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            Key Outcomes & Analytical Impact
          </h4>
          <ul class="list-disc list-inside space-y-1.5 text-slate-200 pl-2">
            ${data.results.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-open-modal');
      openModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   13. Filterable Projects
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('[data-project-filter]');
  const cards = document.querySelectorAll('[data-project-category]');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-cyan-500', 'text-white'));
      btn.classList.add('active', 'bg-cyan-500', 'text-white');

      const filter = btn.getAttribute('data-project-filter');
      cards.forEach((card) => {
        const cat = card.getAttribute('data-project-category');
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* ==========================================================================
   14. Filterable Skills
   ========================================================================== */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('[data-skill-filter]');
  const skillCards = document.querySelectorAll('[data-skill-category]');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-indigo-600', 'text-white'));
      btn.classList.add('active', 'bg-indigo-600', 'text-white');

      const filter = btn.getAttribute('data-skill-filter');
      skillCards.forEach((card) => {
        const cat = card.getAttribute('data-skill-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   15. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const navLinks = drawer ? drawer.querySelectorAll('a') : [];

  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    drawer.classList.toggle('hidden');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.add('hidden');
    });
  });
}

/* ==========================================================================
   16. Contact Form & Clipboard Copy
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast-notification');

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 2800);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'ashapaulson11a@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('✓ Email copied to clipboard: ashapaulson11a@gmail.com');
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value || 'Guest';
      const email = document.getElementById('form-email')?.value || '';
      const message = document.getElementById('form-message')?.value || '';

      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      showToast(`Thank you ${name}! Preparing message...`);

      setTimeout(() => {
        window.location.href = `mailto:ashapaulson11a@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`;
        form.reset();
      }, 900);
    });
  }
}

/* ==========================================================================
   17. ScrollSpy Navigation Highlighting
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('text-cyan-400', 'font-semibold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-cyan-400', 'font-semibold');
      }
    });
  });
}
