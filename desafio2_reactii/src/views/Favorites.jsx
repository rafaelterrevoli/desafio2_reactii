import GalleryFavorito from "../components/GalleryFavorito";

const Favorites = () => {
  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4"></div>
      <GalleryFavorito />
    </div>
  );
};
export default Favorites;
