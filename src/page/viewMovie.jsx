// import React from 'react'

import { useParams } from "react-router-dom"
import InfoMovie from "../components/infoMovie/infoMovie"

export default function ViewMovie() {
  const {idMovie} = useParams()
    return (
    <div>
        <InfoMovie key={idMovie} id={idMovie}/>
    </div>
  )
}
