import { useEntities } from '../hooks/useEntities';

export const EntitiesTable = () => {
    const { data: entities, isLoading, isError } = useEntities();

    if (isLoading) {
        return <div className="p-8 text-center text-gray-500">Cargando entidades...</div>;
    }

    if (isError) {
        return <div className="p-8 text-center text-red-500">Error al cargar entidades</div>;
    }

    return (
        <div className="bg-white dark:bg-[#1a2432] rounded-xl shadow-sm border border-[#f0f2f4] dark:border-[#2d3a4b] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#f8f9fa] dark:bg-[#243040]/50 border-b border-[#f0f2f4] dark:border-[#2d3a4b]">
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider">ID</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider">Nombre</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider">Fuente</th>
                            <th className="px-6 py-4 text-xs font-bold text-[#617289] dark:text-[#a0aec0] uppercase tracking-wider">Contenido</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f0f2f4] dark:divide-[#2d3a4b]">
                        {entities?.map((entity) => (
                            <tr key={entity.id} className="hover:bg-gray-50 dark:hover:bg-[#243040] transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#617289] dark:text-[#a0aec0]">#{entity.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="text-sm font-semibold dark:text-white">{entity.name}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#617289] dark:text-[#a0aec0]">{entity.source}</td>
                                <td className="px-6 py-4 text-sm text-[#617289] dark:text-[#a0aec0] max-w-xs truncate" title={entity.content}>
                                    {entity.content?.substring(0, 50)}{entity.content?.length > 50 ? '...' : ''}
                                </td>
                            </tr>
                        ))}
                        {(!entities || entities.length === 0) && (
                            <tr>
                                <td colSpan="4" className="px-6 py-8 text-center text-sm text-[#617289] dark:text-[#a0aec0]">
                                    No hay entidades registradas
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
