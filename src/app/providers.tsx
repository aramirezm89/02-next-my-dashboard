'use client';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { useEffect } from 'react';
import { setFavorites } from '@/store/pokemon/pokemonSlice';
interface ProvidersProps {
  readonly children: React.ReactNode;
}


export function Providers({ children }: ProvidersProps) {
useEffect(() =>{
 const favorites = localStorage.getItem("favorites") ?? '{}';
 store.dispatch(setFavorites(JSON.parse(favorites)));
},[])
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
