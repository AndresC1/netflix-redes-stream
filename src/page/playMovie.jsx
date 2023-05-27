// import React from 'react'

import { useParams } from "react-router-dom"
import dataMovies from "../data/info"
import Reproductor from "../components/reproductor/reproductor"

export default function PlayMovie() {
    const {idMovie} = useParams()
    const pelicula = dataMovies.find(a => a.id == idMovie)
  return (
    <>
        <Reproductor infoMovie={pelicula}/>
    </>
  )
}
