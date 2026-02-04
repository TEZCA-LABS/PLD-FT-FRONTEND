import { SidebarLayout } from '@layouts/SidebarLayout';
import { SearchFilters, SearchResultsTable } from '@features/search';

const SearchPage = () => {
    return (
        <SidebarLayout>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Búsqueda de Investigación</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-4">Busque en listas de vigilancia globales, sanciones y bases de datos PEP.</p>
                <SearchFilters />
            </div>
            <SearchResultsTable />
        </SidebarLayout>
    );
};

export default SearchPage;
