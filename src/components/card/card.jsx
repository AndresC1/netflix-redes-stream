// import React from 'react'

export default function Card({id, poster}) {
    let estilo = {
        backgroundImage: `url('${poster}')`
    };
    const url = `/movie/${id}`
  return (
    <a href={url} className=" bg-cover bg-center w-52 h-80 rounded-md hover:scale-105 cursor-pointer bg-no-repeat opacity-80 hover:opacity-100" style={estilo}>
    </a>
  )
}
