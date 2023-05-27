// import React from 'react'
import dataMovies from "../../data/info";
import { FaPlay } from 'react-icons/fa';

export default function InfoMovie({id}) {
    const pelicula = dataMovies.find(a => a.id == id)
    let estiloFondo = {
        backgroundImage: `url('${pelicula.escenas}')`
    };
    let estiloPoster = {
        backgroundImage: `url('${pelicula.imagen}')`
    };
    const url = `/movie/${id}/play`
    return (
    <div className="relative flex justify-center items-center">
        <section className="absolute flex justify-start items-start flex-wrap gap-x-4 z-20 w-7/12">
            <div className="w-60 h-96 bg-center bg-cover bg-no-repeat rounded-md" style={estiloPoster}></div>
            <div className="w-8/12 flex justify-start items-start gap-y-5 flex-col">
                <h1 className="text-6xl text-[#eee] font-medium">{pelicula.nombre}</h1>
                <span className="w-auto flex justify-start items-center gap-x-2 tex-[#666]">
                    <h3>{pelicula.anio}</h3>
                    <h3 className="py-1 px-2 border-[1px] border-[#666666] rounded">{pelicula.restriccionEdad}</h3>
                    <h3>{pelicula.duracion}</h3>
                </span>
                <h4 className="text-[#666] w-full">{pelicula.sinopsis}</h4>
                <a href={url} className="text-[#fff] bg-[#E62116] w-52 flex justify-center items-center py-3 gap-x-4 rounded-md"><FaPlay className="w-6 h-auto"/>Reproducir</a>
            </div>
        </section>
        <div className="bg-cover bg-center bg-no-repeat w-full h-[90vh] opacity-[0.2]" style={estiloFondo}></div>
    </div>
  )
}
