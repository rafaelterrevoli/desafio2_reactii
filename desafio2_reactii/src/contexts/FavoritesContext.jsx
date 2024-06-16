import { createContext, useState, useContext } from "react";

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
	const [ favorite, setFavorite ]	= useState([]);

	return (
		<FavoritesContext.Provider value={{favorite, setFavorite}} >
			{ children }
		</FavoritesContext.Provider>
	);
}

export function useFavoriteContext() {
	const { favorite, setFavorite }	 = useContext(FavoritesContext);

	function addFavorite(newFavorite) {

		/* comprueba si hay un elemento favorito repetido */
		const repeatedFavorite = favorite.some(item => item.item === newFavorite.item);
    
		/* la nueva lista recibe la lista anterior */
		let newList = [...favorite]

		/* comprueba si no se ha repetido y luego añade el elemento a la lista de favoritos */
		if(!repeatedFavorite) {
			newList.push(newFavorite)
			return setFavorite(newList) /* atualizar a lista */
		}

		/* si se repite será eliminado de la lista */
		newList = favorite.filter((fav) => fav.item !== newFavorite.item)

		/* nueva lista actualizada */
		return setFavorite(newList)

	}

	return {
		favorite,
		addFavorite
	}

}