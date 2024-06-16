import { useContext } from "react";
import { PhotosContext } from "../contexts/PhotosContext";
import { useFavoriteContext } from "../contexts/FavoritesContext";
import IconHeart from "./IconHeart"


const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotosContext)
  const {favorite, addFavorite} = useFavoriteContext()
  
  return <div className="gallery grid-columns-5 p-3">
    {photos.map((item, index) => (
      <div key={index} 
      className="photo" 
      style={{ backgroundImage: `url(${item.src.tiny})`}} 
      onClick={() => (
        addFavorite({item}), // guarda los favoritos
        item.liked ? item.liked = false : item.liked = true // cambia el color de icono fvoritos
        )}>
          <IconHeart filled={item.liked} />
      </div>
    ))}
  </div>;

};
export default Gallery;



