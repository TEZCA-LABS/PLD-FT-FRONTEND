import React from 'react';

export const SearchFilters = ({ onSearch }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [source, setSource] = React.useState('');
  const [program, setProgram] = React.useState('');
  const [listedAfter, setListedAfter] = React.useState('');
  const [listedBefore, setListedBefore] = React.useState('');

  const handleSubmit = () => {
    if (onSearch) {
      onSearch({
        query: inputValue,
        filters: {
          source,
          program,
          listed_after: listedAfter,
          listed_before: listedBefore,
        },
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleReset = () => {
    setInputValue('');
    setSource('');
    setProgram('');
    setListedAfter('');
    setListedBefore('');
    if (onSearch) {
      onSearch({
        query: '',
        filters: {
          source: '',
          program: '',
          listed_after: '',
          listed_before: '',
        },
      });
    }
  };

  return (
    <div className="bg-white dark:bg-slate-850 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-5 flex flex-col gap-4">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">
            search
          </span>
        </div>
        <input
          className="block w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-base font-medium"
          placeholder="Buscar por Nombre, RFC, Pasaporte o Palabra clave..."
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="absolute inset-y-0 right-2 flex items-center">
          <button
            onClick={handleSubmit}
            className="px-4 py-1.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
          >
            Buscar
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
          Filtros:
        </span>
        <div className="relative inline-block text-left">
          <label className="sr-only" htmlFor="source-filter">Fuente</label>
          <select
            id="source-filter"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="inline-flex items-center gap-2 justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          >
            <option value="">Todas las fuentes</option>
            <option value="UN_CONSOLIDATED">UN</option>
            <option value="MEX_PUBLIC">México</option>
            <option value="SAT_69B">SAT 69-B</option>
          </select>
        </div>
        <div className="relative inline-block text-left">
          <label className="sr-only" htmlFor="program-filter">Programa</label>
          <input
            id="program-filter"
            type="text"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            placeholder="Programa"
            className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div className="relative inline-block text-left flex items-center gap-2">
          <input
            type="date"
            value={listedAfter}
            onChange={(e) => setListedAfter(e.target.value)}
            className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <span className="text-slate-400 text-xs">a</span>
          <input
            type="date"
            value={listedBefore}
            onChange={(e) => setListedBefore(e.target.value)}
            className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
        <button
          onClick={handleReset}
          className="text-sm text-primary hover:text-primary/80 font-medium px-2"
        >
          Limpiar Todo
        </button>
      </div>
    </div>
  );
};
