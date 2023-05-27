// import React from 'react'
import Card from "../components/card/card"
import dataMovies from "../data/info"

export default function Inicio() {
  return (
    <div className="flex justify-start items-start flex-wrap p-10 gap-8">
        {
            dataMovies.map((movie, item) => (
                <Card key={item} id={movie.id} poster={movie.imagen}/>
            ))
        }
    </div>
  )
}
