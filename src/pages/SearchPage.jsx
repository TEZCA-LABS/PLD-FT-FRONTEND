import { SearchFilters, SearchResultsTable } from '@features/search';
import {
  useSearchSanctions,
  useUploadSanctions,
} from '@features/search/hooks/useSearch';
import { SidebarLayout } from '@layouts/SidebarLayout';
import { useAuthStore } from '@stores/authStore';
import { getApiErrorMessage } from '@utils/apiError';
import React from 'react';

const SearchPage = () => {
  const [query, setQuery] = React.useState('');
  const [uploadFeedback, setUploadFeedback] = React.useState(null);
  const fileInputRef = React.useRef(null);

  const user = useAuthStore((state) => state.user);
  const canUploadXml = Boolean(user?.is_superuser || user?.role === 'admin');

  const { data: searchResults, isLoading } = useSearchSanctions(query);
  const { mutate: uploadSanctions, isPending: isUploading } = useUploadSanctions();

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  const handleClickUpload = () => {
    if (!canUploadXml || isUploading) return;
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadFeedback(null);
    uploadSanctions(file, {
      onSuccess: () => {
        setUploadFeedback('Archivo XML cargado correctamente.');
      },
      onError: (error) => {
        setUploadFeedback(getApiErrorMessage(error, 'No fue posible cargar el XML.'));
      },
    });

    event.target.value = '';
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
            onClick={handleClickUpload}
            disabled={!canUploadXml || isUploading}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-base">upload_file</span>
            {isUploading ? 'Cargando XML...' : 'Cargar XML de Sanciones'}
          </button>

          {!canUploadXml && (
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Solo administradores pueden cargar XML.
            </span>
          )}
        </div>

        {uploadFeedback && (
          <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
            {uploadFeedback}
          </p>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept=".xml,text/xml,application/xml"
          className="hidden"
          onChange={handleFileChange}
        />

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
