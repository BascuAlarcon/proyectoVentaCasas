import React, {useContext} from 'react'

import { Plano } from '../../components/Plano'; 
import { Form } from '../../components/Form';
import { Galeria } from '../../components/Galeria';
import { Inicio } from '../../components/Inicio'; 
import { useParams } from 'react-router-dom'; 

export const Home = () => { 
  return (
    <> 
        <Inicio/>
        <Galeria/>
        <Plano/> 
        <Form/>
    </>
  )
}
