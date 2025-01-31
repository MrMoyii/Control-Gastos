import {useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
      <form >
        <div className="campo">
            <label for="filtroCategoria">Filtrar Gastos</label>
            <select
            id="filtroCategoria"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            >
                <option value=''>-- Todos los Categorías --</option>
                <option value='ahorro'>Ahorro</option>
                <option value='comida'>Comida</option>
                <option value='casa'>Casa</option>
                <option value='varios'>Gastos Varios</option>
                <option value='ocio'>Ocio</option>
                <option value='salud'>Salud</option>
                <option value='suscripciones'>Suscripciones</option>
            </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros
