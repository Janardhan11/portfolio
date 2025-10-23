// script.js
document.addEventListener("DOMContentLoaded", () => {
  // shrink header on scroll (optional)
  (function () {
    const header = document.querySelector('header');
    const navRow = document.querySelector('.site.nav');
    if (!header || !navRow) return;
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 80) {
        header.classList.add('shrink');
        navRow.classList.add('shrink');
      } else {
        header.classList.remove('shrink');
        navRow.classList.remove('shrink');
      }
      lastScroll = y;
    }, { passive: true });
  })();

  // ====== Editable data (from your resume) ======
  const PROFILE = {
    name: "Medathati Janardhan",
    email: "7janardhan7@gmail.com",
    resumeUrl:
      "https://drive.google.com/file/d/10nRuudt89s_Z6wlftGfzTL1y6SiNoxL0/view?usp=sharing",
  };

  const SKILLS = [
    "Python",
    "SQL (PostgreSQL, MySQL)",
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "Hugging Face",
    "FastAPI",
    "Power BI",
    "AWS",
  ];

  // Projects — add image (optional), hrefs for Code / Demo
  const PROJECTS = [
    {
      title: "AI Travel Itinerary Planner",
      desc:
        "FastAPI backend + Gemini + Google Maps to generate multi-city itineraries, budgets and PDF outputs.",
      href: "#",
      code: "#",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
      tags: ["FastAPI", "GenAI", "Google Maps"],
    },
    {
      title: "LoRA Text Classification (DistilBERT)",
      desc:
        "Fine-tuned DistilBERT with LoRA adapters for efficient text classification. Includes Docker setup and Gradio demo.",
      href: "https://github.com/Janardhan11/lora-text-classification",
      code: "https://github.com/Janardhan11/lora-text-classification",
      demo: "", // or your deployed demo link if hosted
      image:
        "D:\portfolio - Copy\images\image2_ebf748a816.png", // replace with actual image path in your portfolio
      tags: ["DistilBERT", "LoRA", "NLP", "Docker", "Gradio"],
    },
    {
      title: "Africa Water \& Sanitation Forecasting Dashboard",
      desc:
        "Designed forecasting models and built interactive Power BI dashboards to track SDG-6 metrics (water, sanitation, hygiene) across African regions.",
      href: "#",
      code: "https://github.com/Janardhan11/Africa-Water-Sanitation-Forecasting-Dashboard",
      demo: "href{https://docs.google.com/presentation/d/1jmQQARNpxfZ-HJMy7v7P2YhSo93zSnNP3NLZ0_VWAiw/edit?usp=sharing",
      image:
        "images/what-is-water-really-worth-report-rectangle.jpg",
      tags: ["MobileNetV2", "ResNet", "VGG", "EfficientNet", "U-Net", "TensorFlow", "OpenCV", "Severstal"],
    },
    {
      title: "Predictive-Road_Maintenance",
      desc: "Built an end-to-end AI demo that predicts road surface condition from images using MobileNetV2 CNN, estimates months until deterioration with a scikit-learn regression pipeline, and computes a normalized risk score (0–100) using traffic and weather metadata. Delivered as a Streamlit web app with caching, fallback logic, and clean UI.",
      href: "#",
      code: "https://github.com/Janardhan11/Predictive-Road-Maintenance",
      demo: "https://drive.google.com/file/d/1u7wo0aXab3fhRlnG6X85Ny7lRTf2z213/view?usp=sharing",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
      tags: ["Python", "TensorFlow", "scikit-learn", "Streamlit", "Computer Vision", "ML Pipelines"]
    },
    {
      title: "Rice Leaf Disease Recognition",
      desc:
        "MobileNetV2 classifier on 5k+ images with a Gradio demo (90%+ accuracy).",
      href: "#",
      code: "#",
      demo: "https://drive.google.com/file/d/1u7wo0aXab3fhRlnG6X85Ny7lRTf2z213/view?usp=sharing",
      image:
        "D:\portfolio - Copy\images\download.jpeg",
      tags: ["MobileNetV2", "Computer Vision", "Gradio"],
    },
    {
      title: "Steel Surface Defect Detection",
      desc:
        "Automated steel inspection using DL: Classification (MobileNetV2, ResNet, VGG, EfficientNet) to detect defects, and U-Net segmentation to highlight exact defect regions. Achieved ~90% accuracy and pixel-level localization for real-time quality control.",
      href: "#",
      code: "https://github.com/Janardhan11/Automating-Quality-Inspection-for-Fabricated-Steel-Parts",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1581092334808-1f3e6e6bafba?q=80&w=1600&auto=format&fit=crop",
      tags: ["MobileNetV2", "ResNet", "VGG", "EfficientNet", "U-Net", "TensorFlow", "OpenCV", "Severstal"],
    },
  ];

  // Experience items (will be shown in Experience tab)
  const EXPERIENCE = [
    {
      company: "Red Switch Global",
      title: "Data Science Intern",
      period: "Jul 2025 — Present",
      bullets: [
        "Developed and fine-tuned ML models (classification & regression) using Python, scikit-learn, and XGBoost, improving baseline accuracy by 12%.",
        "Built deep learning pipelines in TensorFlow and PyTorch for computer vision tasks such as CNN-based defect detection and image classification.",
        "Applied NLP techniques (text preprocessing, embeddings, transformer models) to analyze unstructured text data and extract insights.",
        "Wrote optimized Python + SQL scripts for preprocessing and feature engineering on 10k+ operational records, ensuring clean, structured datasets.",
        "Prepared model predictions and KPIs to support the BI team’s Power BI dashboards, enabling data-driven stakeholder reporting.",
        "Evaluated models using AUC, F1-Score, and confusion matrix; documented experiments with MLflow for reproducibility.",
        "Containerized trained models with Docker and deployed FastAPI microservices for real-time inference with <250ms latency."
      ],
      tags: [
        "Python", "SQL", "ML", "DL", "NLP", 
        "TensorFlow", "PyTorch", "XGBoost", 
        "FastAPI", "Docker", "MLflow"
      ],
    },
    {
      company: "Indian Institute of Technology Mandi (IIT Mandi)",
      title: "Deep Learning Intern",
      period: "Jun 2023 — Jul 2023",
      // 👉 Put your video demo URL here (YouTube or Google Drive)
      video: "https://drive.google.com/file/d/1Or3hjVYb4Kfq41npSLj3AB5nvOh4YsEw/view?usp=sharing",
      bullets: [
        "Fine-tuned MobileNetV2 to predict image quality without a reference image.",
        "Trained on KonIQ-10k / TID2013 distortions; achieved 0.82 Pearson correlation with human MOS.",
        "Built Convolutional Autoencoder baseline and improved over it by +12% correlation.",
        "Deployed a Gradio demo on Hugging Face (image upload → 0–100 quality score)",
        "Reduced model size by ~60% with MobileNet-style architecture while preserving accuracy.",
        "Delivered validation MAE 0.283; presented findings and dashboards to stakeholders.",
      ],
      tags: [
        "Python, TensorFlow/Keras",
        "MobileNetV2 (Transfer Learning)",
        "Convolutional Autoencoders (Baseline comparison)",
        "OpenCV, Gradio/Streamlit (for demo)"
      ],
    },
  ];

  // Education items (will be shown in Education tab)
  const EDUCATION = [
    {
      degree: "MSc Data Science",
      org: "University (Completed)",
      period: "2022 — 2024",
      desc:
       [ "Specialized in Machine Learning, Deep Learning, NLP, and Generative AI.",
        "Hands-on training in LLMs (BERT, GPT, Transformer models), Big Data technologies (Hadoop, Spark), and Cloud ML deployment.",
        "Completed projects in Predictive Modeling, Recommendation Systems, and AI Trip Planner (FastAPI + Google Maps API).",
        "Thesis focused on applications of Deep Learning Models for domain-specific text understanding.",
       ]
      },
    {
      degree: "BSc Statistics",
      org: "University (Completed)",
      period: "2019 — 2022",
      desc:
        ["Strong foundation in Probability, Statistical Inference, Regression, and Hypothesis Testing.",
          "Applied R and Python for data analysis, exploratory data visualization, and time-series forecasting.",
          "Capstone project: Predictive Analytics using Statistical Models for real-world datasets."
        ]
    },
  ];

  // About feature cards
  const ABOUT_CARDS = [
    {
      icon: "🤖",
      title: "Generative AI & LLMs",
      desc:
        "Prototype and ship LLM-powered features: prompt engineering, fine-tuning, RAG with a vector DB, and LLM orchestration for multi-step tasks.",
    },
    {
      icon: "🧠",
      title: "Model Optimization & Edge AI",
      desc:
        "Compression (pruning/quantization), MobileNet/efficient CNNs and latency/memory benchmarking to deploy models on edge devices.",
    },
    {
      icon: "🚀",
      title: "Product & Deployment",
      desc:
        "Production patterns: FastAPI backends, Dockerized inference, CI/CD for models, evaluation dashboards and monitoring.",
    },
  ];

  // ====== DOM refs ======
  const chipsContainer = document.getElementById("skill-chips");
  const aboutChips = document.getElementById("about-chips");
  const projectsGrid = document.getElementById("projects-grid");
  // two possible experience containers: new tabbed one or older single list
  const experienceCardsContainer = document.getElementById("experience-cards");
  const educationCardsContainer = document.getElementById("education-cards");
  const oldExperienceList = document.getElementById("experience-list");
  const aboutCardsWrap = document.getElementById("about-cards");
  const yearEl = document.getElementById("year");
  const downloadResumeBtn = document.getElementById("download-resume");
  const resumeGhostBtn = document.getElementById("resume-ghost");

  // ====== Helper render functions ======
  function renderChips(container, items) {
    if (!container) return;
    container.innerHTML = "";
    items.forEach((s) => {
      const el = document.createElement("span");
      el.className = "chip";
      el.textContent = s;
      container.appendChild(el);
    });
  }

  // Render About feature cards
  function renderAboutCards() {
    if (!aboutCardsWrap) return;
    aboutCardsWrap.innerHTML = "";
    ABOUT_CARDS.forEach((c) => {
      const card = document.createElement("div");
      card.className = "feature-card";
      card.innerHTML = `<div class='icon-wrap'>${c.icon}</div>
                        <div class='content'><h4>${c.title}</h4><p>${c.desc}</p></div>`;
      aboutCardsWrap.appendChild(card);
    });
  }

  // Render projects as cards (image, title, desc, chips, actions)
  function renderProjectCards() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = "";
    PROJECTS.forEach((p) => {
      const card = document.createElement("div");
      card.className = "project-card";

      // image (if provided)
      const img = document.createElement("img");
      img.alt = p.title;
      img.src =
        p.image ||
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'/%3E";
      card.appendChild(img);

      const body = document.createElement("div");
      body.style.display = "flex";
      body.style.flexDirection = "column";
      body.style.flex = "1";

      const h3 = document.createElement("h3");
      h3.textContent = p.title;

      const desc = document.createElement("p");
      desc.textContent = p.desc;

      const chipsWrap = document.createElement("div");
      chipsWrap.className = "chips";
      (p.tags || []).forEach((t) => {
        const sp = document.createElement("span");
        sp.className = "chip";
        sp.textContent = t;
        chipsWrap.appendChild(sp);
      });

      const actions = document.createElement("div");
      actions.className = "actions";

      const codeBtn = document.createElement("a");
      codeBtn.className = "btn-ghost";
      codeBtn.href = p.code || p.href || "#";
      codeBtn.textContent = "Code";

      const demoBtn = document.createElement("a");
      demoBtn.className = "btn-primary";
      demoBtn.href = p.demo || p.href || "#";
      demoBtn.textContent = "Demo";

      actions.appendChild(codeBtn);
      actions.appendChild(demoBtn);

      body.appendChild(h3);
      body.appendChild(desc);
      body.appendChild(chipsWrap);
      body.appendChild(actions);

      card.appendChild(body);
      projectsGrid.appendChild(card);
    });
  }

  // Render experience in new tabbed container
  function renderExperienceCards() {
    // If new tab container present
    if (experienceCardsContainer) {
      experienceCardsContainer.innerHTML = "";
      EXPERIENCE.forEach((e) => {
        const card = document.createElement("div");
        card.className = "exp-card";

        const header = document.createElement("div");
        header.className = "exp-header";
        header.innerHTML = `<h3>${e.title}</h3><span class="exp-period">${e.period}</span>`;

        const company = document.createElement("div");
        company.className = "exp-company";
        company.textContent = e.company;

        const achievements = document.createElement("div");
        achievements.className = "exp-achievements";
        achievements.innerHTML = `<strong>Key Achievements:</strong>`;
        const ul = document.createElement("ul");
        e.bullets.forEach((b) => {
          const li = document.createElement("li");
          li.textContent = b;
          ul.appendChild(li);
        });
        achievements.appendChild(ul);

        const tagsWrap = document.createElement("div");
        tagsWrap.className = "chips";
        (e.tags || []).forEach((t) => {
          const s = document.createElement("span");
          s.className = "chip";
          s.textContent = t;
          tagsWrap.appendChild(s);
        });

        card.appendChild(header);
        card.appendChild(company);
        card.appendChild(achievements);
        if ((e.tags || []).length) card.appendChild(tagsWrap);

        // actions (e.g., Watch Demo button) aligned bottom-right
        if (e.video) {
          const actions = document.createElement("div");
          actions.className = "exp-actions";
          const videoBtn = document.createElement("a");
          videoBtn.href = e.video;
          videoBtn.target = "_blank";
          videoBtn.rel = "noopener noreferrer";
          videoBtn.className = "btn-primary";
          videoBtn.textContent = "Watch Demo";
          actions.appendChild(videoBtn);
          card.appendChild(actions);
        }

        experienceCardsContainer.appendChild(card);
      });
    }

    // If older single-list container exists, render there for backward compatibility
    if (oldExperienceList) {
      oldExperienceList.innerHTML = "";
      EXPERIENCE.forEach((e) => {
        const wrap = document.createElement("div");
        wrap.className = "exp";
        const meta = document.createElement("div");
        meta.className = "meta";
        const left = document.createElement("div");
        const title = document.createElement("div");
        title.className = "font";
        title.textContent = e.title;
        const comp = document.createElement("div");
        comp.className = "muted";
        comp.textContent = e.company;
        left.appendChild(title);
        left.appendChild(comp);
        const right = document.createElement("div");
        right.className = "muted";
        right.textContent = e.period;
        meta.appendChild(left);
        meta.appendChild(right);
        wrap.appendChild(meta);
        const ul = document.createElement("ul");
        e.bullets.forEach((b) => {
          const li = document.createElement("li");
          li.textContent = b;
          ul.appendChild(li);
        });
        wrap.appendChild(ul);
        oldExperienceList.appendChild(wrap);
      });
    }
  }

  // Render education into the education tab panel
  function renderEducationCards() {
    if (!educationCardsContainer) return;
    educationCardsContainer.innerHTML = "";
    EDUCATION.forEach((ed) => {
      const card = document.createElement("div");
      card.className = "exp-card";
      const header = document.createElement("div");
      header.className = "exp-header";
      header.innerHTML = `<h3>${ed.degree}</h3><span class="exp-period">${ed.period}</span>`;
      const org = document.createElement("div");
      org.className = "exp-company";
      org.textContent = ed.org;
      const desc = document.createElement("p");
      desc.className = "exp-desc";
      desc.textContent = ed.desc || "";
      card.appendChild(header);
      card.appendChild(org);
      if (desc.textContent) card.appendChild(desc);
      educationCardsContainer.appendChild(card);
    });
  }

  // ====== Tabs wiring & accessibility ======
  function initExperienceTabs() {
    const tabExp = document.getElementById("tab-experience");
    const tabEdu = document.getElementById("tab-education");
    const panelExp = document.getElementById("panel-experience");
    const panelEdu = document.getElementById("panel-education");
    if (!tabExp || !tabEdu || !panelExp || !panelEdu) return;

    function activateTab(tabBtn, panelToShow) {
      [tabExp, tabEdu].forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      [panelExp, panelEdu].forEach((p) => p.classList.add("hidden"));

      tabBtn.classList.add("active");
      tabBtn.setAttribute("aria-selected", "true");
      panelToShow.classList.remove("hidden");
    }

    tabExp.addEventListener("click", () => activateTab(tabExp, panelExp));
    tabEdu.addEventListener("click", () => activateTab(tabEdu, panelEdu));

    [tabExp, tabEdu].forEach((btn, idx, arr) => {
      btn.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          const next =
            e.key === "ArrowRight"
              ? arr[(idx + 1) % arr.length]
              : arr[(idx - 1 + arr.length) % arr.length];
          next.focus();
          next.click();
        }
      });
    });

    // default: show experience
    activateTab(tabExp, panelExp);
  }

  // ====== Small interactions ======
  function openResume(e) {
    e && e.preventDefault();
    if (PROFILE.resumeUrl && PROFILE.resumeUrl !== "#") {
      window.open(PROFILE.resumeUrl, "_blank");
    } else {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  }

  // Smooth scroll for on-page links (ignores href="#" placeholders)
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (ev) => {
        const href = a.getAttribute("href");
        if (!href || href === "#") return;
        ev.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  // Hide arrow after user scrolls down
  function initArrowHide() {
    const arrow = document.querySelector(".scroll-down");
    if (!arrow) return;
    const handleScroll = () => {
      if (!arrow) return;
      if (window.scrollY > 120) arrow.style.opacity = "0";
      else arrow.style.opacity = "1";
    };
    window.addEventListener("scroll", handleScroll);
    // run once
    handleScroll();
  }

  // ====== Initialization ======
  // year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // resume buttons
  if (downloadResumeBtn) downloadResumeBtn.addEventListener("click", openResume);
  if (resumeGhostBtn) resumeGhostBtn.addEventListener("click", openResume);

  // initial render
  renderChips(
    aboutChips,
    [
      "GenAI (LLMs & Prompting)",
      "RAG / Vector DBs (FAISS/Pinecone)",
      "Fine-tuning & Eval",
      "FastAPI / Docker",
      "Model Compression (quant/prune)",
      "Experimentation & Metrics",
    ]
  );
  renderChips(chipsContainer, SKILLS);
  renderAboutCards();
  renderProjectCards();
  renderExperienceCards();
  renderEducationCards();

  // tabs + interactions
  initExperienceTabs();
  initSmoothScroll();
  initArrowHide();
});
