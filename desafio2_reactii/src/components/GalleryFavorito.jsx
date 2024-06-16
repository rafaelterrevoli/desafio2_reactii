import { useFavoriteContext } from "../contexts/FavoritesContext";

const GalleryFavorito = () => {
    const { favorite, addFavorite } = useFavoriteContext()
    return <div className="gallery grid-columns-5 p-3">
        {favorite.map((elem, i) => (
            <div key={i}
                className="photo"
                style={{ backgroundImage: `url(${elem.item.src.tiny})` }}>
            </div>
        ))}
    </div>;
};
export default GalleryFavorito;
