# PLD FT Frontend - Feature-Based Architecture

Proyecto moderno de React + Vite + TailwindCSS siguiendo una **Arquitectura Basada en Features** para máxima escalabilidad y mantenibilidad.

## Características

- **Arquitectura Basada en Features**: Código organizado por funcionalidad, no por tipo de archivo
- **Co-ubicación**: Código relacionado mantenido junto
- **Path Aliases**: Importaciones limpias sin `../../../`
- **TailwindCSS**: Estilos modernos y responsivos
- **TanStack Query**: Manejo eficiente de estado del servidor
- **Zustand**: Estado global simple y performante
- **React Router**: Navegación declarativa
- **React Hook Form + Zod**: Validación de formularios robusta

## Enlaces relacionados

### Documento de tesis Google Docs
https://docs.google.com/document/d/1_FkgUz1kroUEUxOYc9tY1YGw7hadGMCo/edit?usp=sharing&ouid=117129143776158652215&rtpof=true&sd=true


### Figma
https://www.figma.com/design/vklVs1Dog1P2WgnDREba1h/PLD-FT?node-id=0-1&t=SXKX9OUfKaSOomU1-1

---

## Estructura del Proyecto

```
src/
├── assets/              # Recursos estáticos (imágenes, fuentes, iconos)
├── components/          # Componentes globales reutilizables
│   ├── ui/              # UI Kit (Button, Input, Card, Spinner)
│   └── layout/          # Componentes de layout (Header, Footer)
├── config/              # Configuración (variables de entorno)
├── features/            # FEATURES - Lógica de negocio por dominio
│   └── auth/            # Feature de autenticación
│       ├── api/         # Endpoints de API
│       ├── components/  # Componentes específicos del feature
│       ├── hooks/       # Hooks personalizados del feature
│       └── index.js     # Public API (barrel file)
├── hooks/               # Hooks globales (useTheme, useWindowSize)
├── layouts/             # Layouts de página (AuthLayout, SidebarLayout)
├── lib/                 # Configuración de librerías (axios, queryClient)
├── pages/               # Páginas/Rutas (composiciones de features)
├── routes/              # Definición de rutas
├── stores/              # Estado global (Zustand)
├── utils/               # Funciones utilitarias puras
├── App.jsx              # Componente raíz
├── main.jsx             # Punto de entrada
└── index.css            # Estilos globales
```

## Principios de la Arquitectura

### 1. Feature Isolation (Aislamiento de Features)

Cada feature es **auto-contenido** y no debe importar directamente de otros features hermanos.

```javascript
// MAL - Importar de otro feature
import { ProductCard } from '@features/products/components/ProductCard';

// BIEN - Usar componentes globales o exponer vía barrel file
import { Card } from '@components/ui';
```

### 2. Barrel Files (Public API)

Cada feature expone solo lo necesario mediante `index.js`:

```javascript
// features/auth/index.js
export { LoginForm } from './components/LoginForm';
export { useLogin } from './hooks/useLogin';
// NO exportamos authApi.js - es interno del feature
```

### 3. Separación de Vista y Lógica

Los componentes deben ser "tontos". La lógica va en hooks personalizados:

```javascript
// BIEN
const LoginForm = () => {
  const { mutate, isPending } = useLogin(); // Lógica en hook
  return <form>...</form>; // Solo UI
};
```

### 4. Path Aliases

Usa alias configurados en `vite.config.js` para importaciones limpias:

```javascript
// MAL
import { Button } from '../../../components/ui/Button';

// BIEN
import { Button } from '@components/ui';
```

## Instalación

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env

# Iniciar servidor de desarrollo
npm run dev
```

## Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye para producción
npm run preview  # Previsualiza el build de producción
npm run lint     # Ejecuta ESLint
```

## Stack Tecnológico

- **React 18** - Librería de UI
- **Vite** - Build tool ultrarrápido
- **TailwindCSS** - Framework de CSS utility-first
- **TanStack Query** - Manejo de estado del servidor
- **Zustand** - Estado global minimalista
- **React Router** - Enrutamiento
- **Axios** - Cliente HTTP
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas

## Cómo Agregar un Nuevo Feature

1. **Crear la estructura del feature:**

```bash
src/features/mi-feature/
├── api/
│   └── miFeatureApi.js
├── components/
│   └── MiComponente.jsx
├── hooks/
│   └── useMiFeature.js
└── index.js
```

2. **Implementar la API:**

```javascript
// api/miFeatureApi.js
import apiClient from '@lib/axios';

export const getMiData = async () => {
  const response = await apiClient.get('/mi-endpoint');
  return response.data;
};
```

3. **Crear el hook:**

```javascript
// hooks/useMiFeature.js
import { useQuery } from '@tanstack/react-query';
import { getMiData } from '../api/miFeatureApi';

export const useMiFeature = () => {
  return useQuery({
    queryKey: ['mi-feature'],
    queryFn: getMiData,
  });
};
```

4. **Crear el componente:**

```javascript
// components/MiComponente.jsx
import { useMiFeature } from '../hooks/useMiFeature';

export const MiComponente = () => {
  const { data, isLoading } = useMiFeature();
  
  if (isLoading) return <Spinner />;
  
  return <div>{data}</div>;
};
```

5. **Exportar vía barrel file:**

```javascript
// index.js
export { MiComponente } from './components/MiComponente';
export { useMiFeature } from './hooks/useMiFeature';
```

6. **Usar en una página:**

```javascript
// pages/MiPagina.jsx
import { MiComponente } from '@features/mi-feature';

const MiPagina = () => {
  return (
    <SidebarLayout>
      <MiComponente />
    </SidebarLayout>
  );
};
```

## Buenas Prácticas

### DO (Hacer)

- Mantener componentes pequeños y enfocados
- Extraer lógica compleja a hooks personalizados
- Usar barrel files para exponer APIs públicas
- Validar formularios con React Hook Form + Zod
- Usar TanStack Query para datos del servidor
- Mantener estilos co-ubicados con componentes

### DON'T (No Hacer)

- No crear carpetas gigantes de `components` mezclando todo
- No importar directamente entre features hermanos
- No poner lógica de negocio en componentes de página
- No usar `../../../` en importaciones (usa path aliases)
- No duplicar código entre features (muévelo a `components/` o `utils/`)

## Autenticación

El proyecto incluye un feature completo de autenticación:

- **Login**: `/secure-login`
- **Registro**: `/register` (si aplica)
- **Rutas Protegidas**: `/search`, `/users`, `/roles`, `/audit`, `/ai-chat`

El estado de autenticación se maneja con Zustand y persiste en localStorage.

## Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:

```env
VITE_API_URL=http://localhost:8000/api/v1
```

Accede a las variables mediante `import.meta.env.VITE_*`

## Recursos Adicionales

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [TanStack Query Documentation](https://tanstack.com/query)
- [Zustand Documentation](https://zustand-demo.pmnd.rs)

