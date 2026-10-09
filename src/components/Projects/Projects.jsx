import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiTerminal,
  FiCpu,
  FiSearch,
  FiLayers,
  FiChevronUp,
  FiX,
  FiActivity,
  FiArrowUpRight,
} from "react-icons/fi";
import { HiOutlineSparkles, HiOutlineArrowNarrowRight } from "react-icons/hi";

// Comprehensive projects catalog with rich technical metadata
const PROJECTS_DATA = [
  {
    id: "agentic-hr-copilot",
    title: "Enterprise HR AI Copilot — Agentic RAG Platform",
    category: "AI & GenAI",
    categorySlug: "ai",
    featured: true,
    file: "langgraph_agent.py",
    badge: "AGENTIC WORKFLOW",
    metric: "9-Node Graph • Multi-Stage Grading",
    description:
      "Architected a 9-node LangGraph Agentic RAG workflow with intent routing, dual-source evidence grading, query rewriting, and grounded synthesis with citations—reducing hallucinations via multi-stage verification. Built a secure Admin Portal and real-time document ingestion pipeline.",
    technicalDetails:
      "Self-corrective RAG loop with hallucination grading and document relevance verification before LLM synthesis. Pinecone vector store + Tavily web search fallback.",
    tags: [
      "LangGraph",
      "FastAPI",
      "Pinecone",
      "Tavily",
      "Hugging Face",
      "Docker",
      "Render",
    ],
    codeLink: "https://github.com/dhairya22157/agentic-rag-hr-copilot",
    demoLink: null,
    gradient: "from-blue-600 via-indigo-600 to-slate-900",
  },
  {
    id: "movie-recommender",
    title: "Movie Recommender System",
    category: "Machine Learning & CV",
    categorySlug: "ml",
    featured: true,
    file: "recommender_engine.py",
    badge: "LIVE PRODUCTION WEB APP",
    metric: "Live Deployment • TMDB API",
    description:
      "Built a personalized Movie Recommender System using Machine Learning and Flask, integrating the TMDB API for high-quality, relevant movie images and suggestions.",
    technicalDetails:
      "Cosine similarity on vectorized feature vectors (genres, cast, keywords, crew) deployed with live inference server on Render.",
    tags: [
      "Flask",
      "Machine Learning",
      "Python",
      "TMDB API",
      "Render",
      "Cosine Similarity",
    ],
    codeLink: "https://github.com/dhairya22157/movie-recommender",
    demoLink: "https://movie-recommender-8aae.onrender.com/",
    gradient: "from-rose-600 via-pink-700 to-slate-900",
  },
  {
    id: "smart-waste-vision",
    title: "Smart Waste Segregation Vision System",
    category: "Machine Learning & CV",
    categorySlug: "ml",
    featured: true,
    file: "waste_classifier_cnn.py",
    badge: "COMPUTER VISION",
    metric: "87% Val Accuracy • Transfer Learning",
    description:
      "Developed a real-time computer vision system for waste classification using transfer learning models like MobileNetV2 and EfficientNet-B0, achieving 87% validation accuracy.",
    technicalDetails:
      "Fine-tuned CNN architectures with data augmentation and real-time inference pipeline using OpenCV for automated sorting streams.",
    tags: [
      "Computer Vision",
      "PyTorch",
      "OpenCV",
      "CNN",
      "Transfer Learning",
      "MobileNetV2",
    ],
    codeLink: "https://github.com/dhairya22157",
    demoLink: null,
    gradient: "from-emerald-600 via-teal-700 to-slate-900",
  },
  {
    id: "spotify-recommender",
    title: "Spotify Music Recommender System",
    category: "Machine Learning & CV",
    categorySlug: "ml",
    featured: true,
    file: "hybrid_recommender.py",
    badge: "HYBRID REC-SYS",
    metric: "50K+ Songs • 9.7M Interactions",
    description:
      "Built a hybrid music recommendation system combining collaborative and content-based filtering on 50K+ songs and 9.7M user interactions for real-time personalized recommendations.",
    technicalDetails:
      "Matrix factorization combined with acoustic feature similarity for scalable real-time ranking. Dockerized Streamlit deployment.",
    tags: [
      "Machine Learning",
      "Python",
      "Streamlit",
      "Docker",
      "Collaborative Filtering",
      "Pandas",
    ],
    codeLink: "https://github.com/dhairya22157",
    demoLink: null,
    gradient: "from-violet-600 via-purple-700 to-slate-900",
  },
  {
    id: "healthcare-summarization",
    title: "Clinical Q&A Healthcare Summarization",
    category: "AI & GenAI",
    categorySlug: "ai",
    featured: false,
    file: "clinical_summarizer.py",
    badge: "NLP / TRANSFORMERS",
    metric: "BERTScore F1: 0.8907",
    description:
      "Developed a medical Q&A summarization system using PyTorch and SOTA Transformer models (Hugging Face), achieving a BERTScore F1 of 0.8907 on domain-specific biomedical dialogue.",
    technicalDetails:
      "Fine-tuned encoder-decoder architectures with clinical tokenization and beam search optimization for accurate medical synopsis generation.",
    tags: ["PyTorch", "Transformers", "BERT", "NLP", "Hugging Face"],
    codeLink: "https://github.com/dhairya22157",
    demoLink: null,
    gradient: "from-cyan-600 via-blue-700 to-slate-900",
  },
  {
    id: "youtube-sentiment",
    title: "YouTube Comment Sentiment Pipeline",
    category: "AI & GenAI",
    categorySlug: "ai",
    featured: false,
    file: "yt_sentiment_ext.js",
    badge: "NLP & EXTENSION",
    metric: "+50% Analysis Speed",
    description:
      "Created a Chrome extension backed by an NLP Flask service for real-time sentiment analysis of YouTube comment streams, boosting analysis efficiency by over 50%.",
    technicalDetails:
      "RESTful architecture interfacing browser DOM scraper with backend sentiment classification model for aggregated sentiment metrics.",
    tags: ["NLP", "Flask", "Chrome Extension", "Python", "JavaScript"],
    codeLink: "https://github.com/dhairya22157",
    demoLink: null,
    gradient: "from-red-600 via-rose-700 to-slate-900",
  },
  {
    id: "song-popularity",
    title: "Song Hit Predictor",
    category: "Machine Learning & CV",
    categorySlug: "ml",
    featured: false,
    file: "hit_track_predictor.py",
    badge: "PREDICTIVE MODELING",
    metric: "78% Classification Accuracy",
    description:
      "Developed a predictive machine learning classifier to forecast commercial track success using audio telemetry features extracted via Spotify's Web API.",
    technicalDetails:
      "Feature engineering on acoustic attributes (danceability, energy, valence) followed by gradient boosting and ensemble evaluation.",
    tags: ["Machine Learning", "Python", "Spotify API", "Scikit-Learn"],
    codeLink: "https://github.com/dhairya22157/Song_Popularity",
    demoLink: null,
    gradient: "from-amber-600 via-orange-700 to-slate-900",
  },
  {
    id: "amazon-network",
    title: "Amazon Co-Purchase Network Analysis",
    category: "Machine Learning & CV",
    categorySlug: "ml",
    featured: false,
    file: "graph_link_prediction.py",
    badge: "GRAPH THEORY / ML",
    metric: "AUC: 0.7935 • 310K Nodes",
    description:
      "Analyzed Amazon's 310K-product network using Graph Theory (NetworkX) and ML for link prediction, achieving an AUC of 0.7935 in forecasting customer co-purchases.",
    technicalDetails:
      "Graph topological metrics (Jaccard coefficient, Adamic-Adar, preferential attachment) harnessed as feature matrices for link prediction.",
    tags: [
      "Graph Theory",
      "NetworkX",
      "Machine Learning",
      "Link Prediction",
      "Big Data",
    ],
    codeLink: "https://github.com/dhairya22157",
    demoLink: null,
    gradient: "from-indigo-600 via-sky-700 to-slate-900",
  },
  {
    id: "online-store",
    title: "Kartify — ACID-Compliant E-Commerce Platform",
    category: "Full-Stack & Web",
    categorySlug: "web",
    featured: false,
    file: "ecommerce_dbms.sql",
    badge: "FULL-STACK / DBMS",
    metric: "OLAP Queries • ACID Compliance",
    description:
      "Developed a feature-rich e-commerce platform using React, Django, and MySQL DBMS, emphasizing complex analytical OLAP queries, transaction isolation, and ACID guarantees.",
    technicalDetails:
      "Database schema normalization, stored procedures, multi-table joins, transactional concurrency handling, and authenticated customer workflows.",
    tags: ["React", "Django", "MySQL", "OLAP", "ACID", "REST API"],
    codeLink: "https://github.com/dhairya22157/Kartify_E-commerce-Website",
    demoLink: null,
    gradient: "from-blue-700 via-indigo-800 to-slate-900",
  },
  {
    id: "stick-hero",
    title: "Stick Hero 2D — Custom Physics Game Engine",
    category: "Systems & Simple Projects",
    categorySlug: "systems",
    featured: false,
    file: "StickHeroEngine.java",
    badge: "CORE OOP / SIMPLE ENGINE",
    metric: "Custom 2D Physics • OOP Principles",
    description:
      "Single-player physics-based arcade game in Java and JavaFX, featuring an engine built from scratch adhering strictly to Object-Oriented Design Patterns.",
    technicalDetails:
      "Custom collision resolution, state pattern game cycle, decoupled rendering pipeline, and serialized high-score state.",
    tags: ["Java", "JavaFX", "OOP", "2D Physics", "Design Patterns"],
    codeLink: "https://github.com/dhairya22157/Javafx-game",
    demoLink: null,
    gradient: "from-slate-700 via-zinc-800 to-slate-950",
  },
  {
    id: "machine-simulator",
    title: "Von Neumann Machine & Assembler Simulator",
    category: "Systems & Simple Projects",
    categorySlug: "systems",
    featured: false,
    file: "cpu_simulator.c",
    badge: "SYSTEMS / ARCHITECTURE",
    metric: "Custom ISA • 2-Pass Assembler",
    description:
      "Instruction Set Architecture (ISA) emulator and two-pass assembler written in C for Computer Organization, translating user assembly instructions into executable binary words.",
    technicalDetails:
      "Bitwise ALU emulation, register file management, memory addressing modes, and symbolic label symbol-table parsing.",
    tags: ["C", "Assembly", "ISA Simulator", "Computer Architecture", "Systems"],
    codeLink: "https://github.com/dhairya22157/Assembler-and-Simulator",
    demoLink: null,
    gradient: "from-stone-700 via-slate-800 to-slate-950",
  },
  {
    id: "shellcraft",
    title: "ShellCraft — POSIX Shell Implementation",
    category: "Systems & Simple Projects",
    categorySlug: "systems",
    featured: false,
    file: "shellcraft.c",
    badge: "OPERATING SYSTEMS",
    metric: "Process Fork/Exec • I/O Redirection",
    description:
      "Custom Linux shell written in C for Operating Systems, handling process lifecycle management, signal handling, I/O piping, and built-in command execution.",
    technicalDetails:
      "Implementation of fork(), execvp(), waitpid(), pipe() redirection, signal masking (SIGINT/SIGTSTP), and tokenizer parser.",
    tags: ["C", "Linux", "POSIX", "Operating Systems", "Process Management"],
    codeLink: "https://github.com/dhairya22157/ShellCraft",
    demoLink: null,
    gradient: "from-zinc-700 via-neutral-800 to-slate-950",
  },
];

// High-level Category definitions
const CATEGORIES = [
  { id: "all", label: "All Projects", count: 12, icon: "⚡" },
  { id: "ai", label: "AI & GenAI", count: 3, icon: "🤖" },
  { id: "ml", label: "Machine Learning & CV", count: 5, icon: "🧠" },
  { id: "web", label: "Full-Stack & Web", count: 1, icon: "💻" },
  { id: "systems", label: "Systems & Simple Projects", count: 3, icon: "⚙️" },
];

const Projects = () => {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const archiveRef = useRef(null);

  // Top 4 featured projects for the primary showcase
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  // Filtered projects for the full archive
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.categorySlug === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      project.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const handleOpenCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsArchiveOpen(true);
    setTimeout(() => {
      archiveRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleToggleArchive = () => {
    if (!isArchiveOpen) {
      setIsArchiveOpen(true);
      setTimeout(() => {
        archiveRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      setIsArchiveOpen(false);
    }
  };

  return (
    <div
      id="Projects"
      className="scroll-mt-24 md:scroll-mt-28 py-16 md:py-24 px-6 sm:px-8 md:px-16 lg:px-20 bg-bg-light text-text-primary"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-text-secondary mb-5 shadow-sm backdrop-blur-sm"
          >
            <FiActivity className="text-accent" />
            Selected Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950"
          >
            Featured <span className="bg-gradient-to-r from-accent to-rose-500 bg-clip-text text-transparent">Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-text-secondary leading-relaxed"
          >
            End-to-end AI systems, scalable ML pipelines, and production-grade applications — engineered with precision.
          </motion.p>
        </div>

        {/* 4 FEATURED PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* HIGH-TECH ARCHIVE LAUNCHER / CONTROL CONSOLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-slate-300/80 bg-slate-950 p-6 md:p-8 text-white shadow-2xl mb-12"
        >
          {/* Subtle background tech grid */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-70" />
          <div className="absolute -right-20 -bottom-20 -z-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

          {/* Console Topbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <span className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
              </span>
              <span className="ml-2 font-semibold text-slate-300">
                system://projects-archive.index
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              12_REPOSITORIES_LOADED
            </div>
          </div>

          {/* Console Body */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent uppercase tracking-wider mb-2">
                <HiOutlineSparkles className="text-sm" /> Full Technical Catalog
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Looking for domain-specific projects or academic prototypes?
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-xl">
                Explore all 12 projects categorized into <span className="text-accent font-semibold">AI & GenAI</span>, <span className="text-blue-400 font-semibold">Computer Vision & ML</span>, <span className="text-amber-400 font-semibold">Full-Stack Web</span>, and <span className="text-emerald-400 font-semibold">Systems & Simple Projects</span> (like custom C simulators and game engines).
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch lg:items-end xl:items-center justify-end gap-3">
              <button
                onClick={handleToggleArchive}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-accent px-6 py-4 text-sm font-bold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5"
              >
                <FiTerminal className="text-lg transition-transform duration-300 group-hover:scale-110" />
                <span>
                  {isArchiveOpen ? "Collapse Project Catalog" : "Explore All 12 Projects"}
                </span>
                {isArchiveOpen ? (
                  <FiChevronUp className="text-lg" />
                ) : (
                  <HiOutlineArrowNarrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>
            </div>
          </div>

          {/* Quick Category Selector Pills */}
          <div className="mt-6 pt-5 border-t border-slate-800/80">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Quick Filter by Category:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleOpenCategory(cat.id)}
                  className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-mono font-medium transition-all duration-200 ${
                    isArchiveOpen && selectedCategory === cat.id
                      ? "border-accent bg-accent/20 text-white shadow-sm shadow-accent/20"
                      : "border-slate-800 bg-slate-900/90 text-slate-300 hover:border-slate-600 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400">
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* EXPANDABLE FULL PROJECT ARCHIVE */}
        <AnimatePresence>
          {isArchiveOpen && (
            <motion.div
              ref={archiveRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden pt-4"
            >
              <div className="rounded-2xl border border-slate-200/90 bg-white/80 p-6 md:p-10 shadow-xl backdrop-blur-md">
                {/* Archive Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                      <FiLayers className="text-sm" /> Full Architecture Repository
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950">
                      Technical Project Catalog
                    </h2>
                    <p className="text-sm text-text-secondary mt-1">
                      Showing whole projects with system architecture, metrics, and source repositories.
                    </p>
                  </div>

                  {/* Collapse button */}
                  <button
                    onClick={() => setIsArchiveOpen(false)}
                    className="inline-flex items-center self-start md:self-auto gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-text-secondary shadow-sm hover:border-accent hover:text-accent transition-colors"
                  >
                    <FiChevronUp size={16} />
                    <span>Collapse Archive</span>
                  </button>
                </div>

                {/* Filters & Search Control Bar */}
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
                  {/* Category Filter Pills */}
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => {
                      const isActive = selectedCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs md:text-sm font-semibold transition-all duration-200 ${
                            isActive
                              ? "bg-slate-950 text-white shadow-md shadow-slate-900/15"
                              : "border border-slate-200 bg-white/90 text-text-secondary hover:border-slate-300 hover:text-text-primary"
                          }`}
                        >
                          <span>{cat.icon}</span>
                          <span>{cat.label}</span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-mono ${
                              isActive
                                ? "bg-slate-800 text-white"
                                : "bg-slate-100 text-text-secondary"
                            }`}
                          >
                            {cat.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Search Input */}
                  <div className="relative min-w-[260px] sm:min-w-[320px]">
                    <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Filter stack (e.g. PyTorch, C, React)..."
                      className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-9 text-xs md:text-sm font-medium text-slate-800 shadow-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/15"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        <FiX size={16} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6 px-1">
                  <div>
                    <span className="font-semibold text-slate-800">
                      {filteredProjects.length}
                    </span>{" "}
                    of {PROJECTS_DATA.length} projects displayed
                  </div>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-accent underline font-sans hover:text-accent-hover"
                    >
                      Clear search
                    </button>
                  )}
                </div>

                {/* All Projects Grid */}
                {filteredProjects.length > 0 ? (
                  <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {filteredProjects.map((project, idx) => (
                      <ArchiveProjectCard
                        key={project.id}
                        project={project}
                        index={idx}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <div className="py-16 text-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/50">
                    <FiCpu className="mx-auto text-4xl text-slate-400 mb-3" />
                    <p className="text-base font-bold text-slate-800">
                      No matching projects found
                    </p>
                    <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                      No modules matched the search query "{searchQuery}". Try searching for terms like "PyTorch", "Docker", "C", or "FastAPI".
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                      }}
                      className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-accent transition-colors"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// FEATURED PROJECT CARD (Top 4 showcase)
const FeaturedProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* High-Tech Terminal Card Header */}
      <div className="flex items-center justify-between bg-slate-950 px-5 py-3 text-white border-b border-slate-800">
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block" />
          </span>
          <span className="text-slate-300 ml-1 font-semibold">{project.file}</span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          {project.badge}
        </div>
      </div>

      {/* Visual Tech Canvas Banner */}
      <div
        className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between text-white`}
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:20px_20px] opacity-75 pointer-events-none" />

        <div className="relative z-10 flex items-start justify-between">
          <span className="rounded-md border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider backdrop-blur-md">
            {project.category}
          </span>

          <span className="rounded-md border border-white/15 bg-white/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-white/60 backdrop-blur-md">
            0{index + 1}
          </span>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-mono font-semibold text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
            <FiActivity className="text-emerald-400 text-xs" />
            {project.metric}
          </div>
        </div>

        {/* Hover overlay with action buttons */}
        <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm z-20">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs font-bold text-white shadow-lg hover:bg-accent-hover transition-all"
            >
              <FiExternalLink size={15} />
              <span>Live Demo</span>
            </a>
          )}
          {project.codeLink && project.codeLink !== "#" && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2.5 text-xs font-bold text-slate-900 shadow-lg hover:bg-white transition-all"
            >
              <FiGithub size={15} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 md:p-7 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-xl font-extrabold text-slate-950 group-hover:text-accent transition-colors leading-snug">
            {project.title}
          </h3>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        {/* Technical Architecture Note */}
        <div className="mb-5 rounded-lg border border-slate-100 bg-gradient-to-r from-slate-50 to-slate-50/50 p-3.5 text-xs text-slate-600 leading-relaxed">
          <div className="flex items-center gap-1.5 font-semibold text-slate-800 mb-1 text-[11px] uppercase tracking-wider">
            <FiActivity className="text-accent text-xs" />
            Architecture
          </div>
          <span className="font-mono">{project.technicalDetails}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mt-auto">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-mono font-medium bg-slate-100 text-slate-700 rounded-md border border-slate-200/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Link Row */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-3">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:underline"
              >
                <FiExternalLink size={14} /> Live Demo
                <FiArrowUpRight size={12} className="opacity-60" />
              </a>
            )}
            {project.codeLink && project.codeLink !== "#" ? (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-accent hover:underline"
              >
                <FiGithub size={14} /> Source
                <FiArrowUpRight size={12} className="opacity-60" />
              </a>
            ) : (
              <span className="text-slate-400 text-[11px]">
                Private Repository
              </span>
            )}
          </div>

          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-medium text-slate-500 uppercase tracking-wide">
            {project.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// ARCHIVE PROJECT CARD (For full repository view)
const ArchiveProjectCard = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between mb-3 text-xs font-mono">
        <span className="rounded bg-slate-100 px-2 py-0.5 font-semibold text-slate-600">
          {project.file}
        </span>
        <span className="text-[11px] font-semibold text-accent uppercase">
          {project.badge}
        </span>
      </div>

      <h4 className="text-base font-bold text-slate-900 group-hover:text-accent transition-colors leading-snug mb-2">
        {project.title}
      </h4>

      <p className="text-xs text-text-secondary leading-relaxed mb-3 flex-grow line-clamp-3">
        {project.description}
      </p>

      {/* Metric pill */}
      <div className="mb-4 inline-flex items-center gap-1.5 self-start rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-mono text-slate-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        {project.metric}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4 mt-auto">
        {project.tags.slice(0, 4).map((tag, i) => (
          <span
            key={i}
            className="px-2 py-0.5 text-[11px] font-mono bg-slate-100 text-slate-600 rounded border border-slate-200/60"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* Footer Links */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
        <div className="flex items-center gap-3">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent hover:underline"
            >
              <FiExternalLink size={13} /> Demo
            </a>
          )}
          {project.codeLink && project.codeLink !== "#" ? (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-700 hover:text-accent hover:underline"
            >
              <FiGithub size={13} /> Code
            </a>
          ) : (
            <span className="text-[10px] font-mono text-slate-400">Academic</span>
          )}
        </div>

        <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-400 uppercase tracking-wide border border-slate-100">
          {project.categorySlug}
        </span>
      </div>
    </motion.div>
  );
};

export default Projects;
