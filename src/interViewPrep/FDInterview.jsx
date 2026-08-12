import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';

const defaultHtmlData = [
  {
    id: 'html5',
    name: 'HTML5 Core & Semantics',
    questions: [
      {
        id: 1,
        q: 'What is semantic HTML and why is it important?',
        difficulty: 'Easy',
        answer: 'Semantic HTML introduces meaning to the web page rather than just presentation. Tags like <article>, <section>, <nav>, and <footer> clearly describe their meaning to both the browser and the developer. This is crucial for Accessibility (screen readers for visually impaired users) and SEO (Search Engine Optimization), as search engines rely heavily on semantic tags to understand content hierarchy and relevance.'
      },
      {
        id: 2,
        q: 'What is the difference between custom data attributes (data-*) and standard attributes?',
        difficulty: 'Medium',
        answer: 'Custom data attributes (data-*) allow you to store proprietary information on standard HTML elements without using non-standard attributes or extra DOM properties like class or id. They can be accessed via JavaScript using the element.dataset API. Standard attributes have predefined semantic meanings enforced by the browser specification, whereas data attributes are strictly meant for custom developer workflows.'
      },
      {
        id: 3,
        q: 'Explain the difference between block-level (<div>) and inline (<span>) elements.',
        difficulty: 'Easy',
        answer: 'Block-level elements always start on a new line and take up the full available width of their container by default. Inline elements flow within the normal text line, only taking up as much width as their content requires, and do not respect top/bottom margins or padding in the structural way block elements do.'
      },
      {
        id: 4,
        q: 'What are HTML5 Web Storage APIs (localStorage vs sessionStorage)?',
        difficulty: 'Medium',
        answer: 'Both allow key-value storage in the browser, offering larger capacity than cookies (~5MB). localStorage persists even when the browser window is closed until explicitly cleared. sessionStorage data is tied strictly to the browser tab/window session and is automatically purged the moment that tab is closed.'
      },
      {
        id: 5,
        q: 'What is the purpose of the Shadow DOM in Web Components?',
        difficulty: 'Expert',
        answer: 'The Shadow DOM provides encapsulation for HTML and CSS within a web component. It attaches a hidden, isolated DOM tree to an element—completely separate from the document’s main DOM tree. This ensures internal styles do not leak out and external global CSS rules cannot accidentally override internal component elements, completely preventing style collisions.'
      },
      {
        id: 6,
        q: 'What are progressive rendering techniques in HTML using async and defer?',
        difficulty: 'Hard',
        answer: 'When a browser encounters a script tag during HTML parsing, it normally pauses parsing to fetch and execute. defer downloads asynchronously in parallel while parsing continues, executing strictly after the HTML document is fully parsed. async downloads asynchronously in parallel, but interrupts parsing to execute immediately the moment the download finishes.'
      },
      {
        id: 7,
        q: 'What are HTML meta tags and why are they critical for modern web apps?',
        difficulty: 'Easy',
        answer: 'Meta tags provide metadata about the HTML document inside the <head> section. They are invisible to users but critical for browsers, search engines, and social platforms. Examples include viewport scaling rules (<meta name="viewport">), search snippet descriptions, and Open Graph share previews.'
      },
      {
        id: 8,
        q: 'How does the <picture> element differ from standard <img> with srcset?',
        difficulty: 'Medium',
        answer: 'The <img> tag with srcset is designed for resolution switching based on screen pixel density or viewport width. The <picture> element acts as an art direction wrapper, enabling developers to serve completely different image crops, compositions, or alternative next-gen formats (like WebP/AVIF) using nested <source> tags.'
      },
      {
        id: 9,
        q: 'What is accessibility (a11y) and how do ARIA attributes enhance HTML?',
        difficulty: 'Hard',
        answer: 'Accessibility (a11y) ensures web applications are usable by individuals with disabilities. ARIA attributes (such as aria-live, aria-expanded, aria-hidden) are specifications by W3C that supplement standard HTML markup, instructing assistive screen readers on how to interpret dynamic UI components when native semantics are insufficient.'
      },
      {
        id: 10,
        q: 'Explain the event bubbling and capturing phases in the DOM lifecycle.',
        difficulty: 'Advanced',
        answer: 'Event flow has three phases: 1. Capturing phase (event goes down from window/document to the target element). 2. Target phase (event reaches the target node). 3. Bubbling phase (event bubbles upward from the target back up to the root document). Most standard listeners handle events during the bubbling phase unless explicitly configured via addEventListener(event, handler, true).'
      }
    ]
  }
];

export default function FDInterview() {
  // Load initial categories with fallback to LocalStorage for persistence across refreshes
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem('fd_html_interview_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultHtmlData;
      }
    }
    return defaultHtmlData;
  });

  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || 'html5');
  const [searchQuery, setSearchQuery] = useState('');
  const [openQuestions, setOpenQuestions] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [newQuestionData, setNewQuestionData] = useState({
    categoryId: categories[0]?.id || 'html5',
    q: '',
    answer: '',
    difficulty: 'Medium'
  });

  // Sync state changes to localStorage so added questions persist on refresh
  useEffect(() => {
    localStorage.setItem('fd_html_interview_data', JSON.stringify(categories));
  }, [categories]);

  const toggleQuestion = (id) => {
    setOpenQuestions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentCategoryData = categories.find(c => c.id === activeCategory);
  
  // Robust search query filter across both questions and answers
  const filteredQuestions = useMemo(() => {
    if (!currentCategoryData) return [];
    if (!searchQuery.trim()) return currentCategoryData.questions;
    const query = searchQuery.toLowerCase().trim();
    return currentCategoryData.questions.filter(item => 
      item.q.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query) ||
      item.difficulty.toLowerCase().includes(query)
    );
  }, [currentCategoryData, searchQuery]);

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!newQuestionData.q.trim() || !newQuestionData.answer.trim()) return;

    setCategories(prevCategories => {
      return prevCategories.map(cat => {
        if (cat.id === newQuestionData.categoryId) {
          const maxId = cat.questions.length > 0 ? Math.max(...cat.questions.map(q => q.id)) : 0;
          return {
            ...cat,
            questions: [
              ...cat.questions,
              {
                id: maxId + 1,
                q: newQuestionData.q.trim(),
                answer: newQuestionData.answer.trim(),
                difficulty: newQuestionData.difficulty
              }
            ]
          };
        }
        return cat;
      });
    });

    setNewQuestionData({ categoryId: activeCategory, q: '', answer: '', difficulty: 'Medium' });
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#2C2C2C] px-4 sm:px-8 py-12 font-sans selection:bg-amber-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation & Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFDF9] text-[#2C2C2C] font-mono font-bold text-xs uppercase border border-[#E2DBD0] shadow-sm rounded-xl hover:bg-[#F4EFE6] transition-all"
          >
            ← Back to Vault
          </Link>
          <div className="text-xs font-mono tracking-widest text-[#7A756D] uppercase">
            HTML5 Vault Matrix
          </div>
        </div>

        {/* Hero Banner Section */}
        <div className="bg-[#FFFDF9] border border-[#E2DBD0] rounded-3xl p-8 mb-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-[10px] font-mono font-bold uppercase tracking-wider rounded-lg mb-3">
              Mastery Edition
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
              HTML5 Interview Masterclass
            </h1>
            <p className="text-xs sm:text-sm text-[#666057] mt-2 max-w-xl leading-relaxed">
              Curated architectural questions spanning foundational semantics to expert DOM lifecycles. Fully searchable with persistent state support.
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#1A1A1A] hover:bg-[#333333] text-white font-semibold px-5 py-3 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            + Add Question
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-6 relative">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#8C857B]">
            🔍
          </span>
          <input 
            type="text" 
            placeholder="Search questions or architectural concepts..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#FFFDF9] border border-[#E2DBD0] rounded-2xl pl-11 pr-4 py-3.5 text-xs font-mono text-[#1A1A1A] placeholder-[#9E968C] focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm transition-all"
          />
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setSearchQuery(''); }}
                className={`px-4 py-2.5 font-mono text-xs uppercase font-bold rounded-xl transition-all whitespace-nowrap border ${
                  isActive 
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm' 
                    : 'bg-[#FFFDF9] text-[#666057] border-[#E2DBD0] hover:bg-[#F4EFE6] hover:text-[#1A1A1A]'
                }`}
              >
                {cat.name} ({cat.questions.length})
              </button>
            );
          })}
        </div>

        {/* Questions Display List */}
        <div className="flex flex-col gap-4">
          {filteredQuestions.length === 0 ? (
            <div className="bg-[#FFFDF9] border border-dashed border-[#E2DBD0] rounded-2xl p-12 text-center text-xs text-[#7A756D] font-mono">
              No matching HTML questions found for "{searchQuery}".
            </div>
          ) : (
            filteredQuestions.map((item) => {
              const isOpen = !!openQuestions[item.id];
              
              // Calm aesthetic difficulty badge styling
              const badgeStyle = 
                item.difficulty === 'Easy' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                item.difficulty === 'Medium' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                item.difficulty === 'Advanced' ? 'bg-orange-50 text-orange-800 border-orange-200' :
                'bg-rose-50 text-rose-800 border-rose-200'; // Expert

              return (
                <div 
                  key={item.id} 
                  className="bg-[#FFFDF9] border border-[#E2DBD0] rounded-2xl transition-all shadow-sm hover:border-[#CFC6B8] overflow-hidden"
                >
                  <button 
                    onClick={() => toggleQuestion(item.id)}
                    className="w-full text-left p-5 flex items-start justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#F4EFE6] text-[#7A756D] font-mono text-[10px] shrink-0 mt-0.5">
                        #{item.id}
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold text-[#1A1A1A] leading-snug">
                        {item.q}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`text-[10px] font-mono px-2.5 py-1 rounded-lg border font-medium ${badgeStyle}`}>
                        {item.difficulty}
                      </span>
                      <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-[#F4EFE6] text-xs text-[#666057]">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-[#E2DBD0]/60 bg-[#F9F6F0]/50">
                      <div className="mt-3 text-xs sm:text-sm text-[#4A453F] leading-relaxed bg-[#FFFDF9] border border-[#E2DBD0] p-4 rounded-xl shadow-inner">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 block mb-1">
                          Deep Explanation:
                        </span>
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>

      {/* Modern Calm Modal for Adding Questions */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1A1A1A]/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] border border-[#E2DBD0] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-extrabold text-[#1A1A1A] uppercase tracking-wide">
                Add HTML Interview Question
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="w-7 h-7 rounded-xl bg-[#F4EFE6] text-[#666057] hover:bg-[#E2DBD0] text-xs font-mono flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddQuestion} className="flex flex-col gap-4">
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#7A756D] mb-1.5">
                  Category Vault
                </label>
                <select 
                  value={newQuestionData.categoryId}
                  onChange={(e) => setNewQuestionData({ ...newQuestionData, categoryId: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E2DBD0] rounded-xl px-3 py-2.5 text-xs font-mono text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#7A756D] mb-1.5">
                  Difficulty Level
                </label>
                <select 
                  value={newQuestionData.difficulty}
                  onChange={(e) => setNewQuestionData({ ...newQuestionData, difficulty: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E2DBD0] rounded-xl px-3 py-2.5 text-xs font-mono text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#7A756D] mb-1.5">
                  Question
                </label>
                <input 
                  type="text" 
                  placeholder="e.g., What is the purpose of the <template> tag?"
                  value={newQuestionData.q}
                  onChange={(e) => setNewQuestionData({ ...newQuestionData, q: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E2DBD0] rounded-xl px-3 py-2.5 text-xs font-mono text-[#1A1A1A] placeholder-[#9E968C] focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#7A756D] mb-1.5">
                  Detailed Explanation / Answer
                </label>
                <textarea 
                  rows="4"
                  placeholder="Provide an architectural deep dive..."
                  value={newQuestionData.answer}
                  onChange={(e) => setNewQuestionData({ ...newQuestionData, answer: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#E2DBD0] rounded-xl px-3 py-2.5 text-xs font-mono text-[#1A1A1A] placeholder-[#9E968C] focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold bg-[#F4EFE6] text-[#666057] hover:bg-[#E2DBD0] transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-[#1A1A1A] hover:bg-[#333333] text-white transition-all shadow-sm"
                >
                  Save Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}