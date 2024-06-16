import { createContext, useEffect, useState } from "react";

export const PhotosContext = createContext()


export default function PhotosProvider({ children }) {

    const [photos, setPhotos] = useState([])

    const getPhotos = async () => {
        const response = await fetch("/photos.json") // lee el json con las fotos
        const { photos: photosDB } = await response.json()
        setPhotos(photosDB)
    }

    useEffect(() => {
        getPhotos()
    }, [])

    return (
        <PhotosContext.Provider value={{ photos, setPhotos }}>
            {children}
        </PhotosContext.Provider>
    )
}






