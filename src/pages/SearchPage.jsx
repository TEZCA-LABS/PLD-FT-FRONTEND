import { SearchFilters, SearchResultsTable } from '@features/search';
import { useSearchSanctions } from '@features/search/hooks/useSearch';
import { SidebarLayout } from '@layouts/SidebarLayout';
import React from 'react';

const SearchPage = () => {
  const [query, setQuery] = React.useState('');
  const { data: searchResults, isLoading } = useSearchSanctions(query);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
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
        <SearchFilters onSearch={handleSearch} />
      </div>
      <SearchResultsTable
        results={searchResults?.results}
        isLoading={isLoading}
      />
    </SidebarLayout>
  );
};

export default SearchPage;
