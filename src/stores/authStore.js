import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Authentication store using Zustand
 * Persists user data and token in localStorage
 */
export const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            token: null,
            isAuthenticated: false,

            setAuth: (user, token) => {
                localStorage.setItem('authToken', token);
                set({ user, token, isAuthenticated: true });
            },

            logout: () => {
                localStorage.removeItem('authToken');
                set({ user: null, token: null, isAuthenticated: false });
            },

            updateUser: (userData) => {
                set((state) => ({
                    user: { ...state.user, ...userData },
                }));
            },
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                token: state.token,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);
