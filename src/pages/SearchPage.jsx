import {
  AdminSourceManager,
  SearchFilters,
  SearchResultsTable,
} from '@features/search';
import { useSearchSanctions } from '@features/search/hooks/useSearch';
import { SidebarLayout } from '@layouts/SidebarLayout';
import { useAuthStore } from '@stores/authStore';
import React from 'react';

const SearchPage = () => {
  const [query, setQuery] = React.useState('');
  const [filters, setFilters] = React.useState({
    source: '',
    program: '',
    listed_after: '',
    listed_before: '',
  });
  const [isSourceManagerOpen, setIsSourceManagerOpen] = React.useState(false);

  const user = useAuthStore((state) => state.user);
  const canManageSources = Boolean(
    user?.is_superuser || user?.role === 'admin',
  );

  const { data: searchResults, isLoading } = useSearchSanctions(query, filters);

  const handleSearch = ({ query: newQuery, filters: nextFilters }) => {
    setQuery(newQuery);
    setFilters({
      source: nextFilters?.source || '',
      program: nextFilters?.program || '',
      listed_after: nextFilters?.listed_after || '',
      listed_before: nextFilters?.listed_before || '',
    });
  };

  return (
    <SidebarLayout>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Búsqueda de Investigación
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-4">
          Busque en listas de vigilancia globales, sanciones y bases de datos
          PEP.
        </p>

        <div className="flex items-center gap-3 mb-2">
          <button
            onClick={() => setIsSourceManagerOpen(true)}
            disabled={!canManageSources}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-base">
              settings
            </span>
            Administrar Fuentes
          </button>

          {!canManageSources && (
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Solo administradores pueden sincronizar fuentes.
            </span>
          )}
        </div>

        <SearchFilters onSearch={handleSearch} />
      </div>
      <SearchResultsTable
        results={searchResults?.results}
        matchBreakdown={searchResults?.match_breakdown}
        isLoading={isLoading}
      />

      <AdminSourceManager
        isOpen={isSourceManagerOpen}
        onClose={() => setIsSourceManagerOpen(false)}
      />
    </SidebarLayout>
  );
};

export default SearchPage;
