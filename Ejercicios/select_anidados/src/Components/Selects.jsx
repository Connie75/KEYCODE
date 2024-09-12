import React, { useState } from 'react';
import { useState } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  const [departamentos, setDepartamentos] = useState("");
  const [municipios, setMunicipios] = useState("");
  const [presidente, setPresidente] = useState("");
  const [atracciones, setAtracciones] = useState("");

  console.log("Departamento ID:", departamentos);
  console.log("Municipio ID:", municipios);
  console.log("Presidente ID:", presidente);
  console.log("Atracción Turística ID:", atracciones);

  return (
    <div className="container">
      {/* Select de Departamentos */}
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department"
        manejadorCambio={(event) => {
          setDepartamentos(event.target.value);
        }}
      />

      {/* Select de Municipios (Ciudades) */}
      <SelectList
        title="Municipios"
        url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
        manejadorCambio={(event) => {
          setMunicipios(event.target.value);
        }}
        disabled={!departamentos}  // Deshabilitado hasta que se seleccione un departamento
      />

      {/* Select de Presidentes */}
      <SelectList
        title="Presidentes"
        url={`https://api-colombia.com/api/v1/Country/presidents`}
        manejadorCambio={(event) => {
          setPresidente(event.target.value);
        }}
      />

      {/* Select de Atracciones Turísticas */}
      <SelectList
        title="Atracciones Turísticas"
        url={`https://api-colombia.com/api/v1/City/${municipios}/touristicAttractions`}
        manejadorCambio={(event) => {
          setAtracciones(event.target.value);
        }}
        disabled={!municipios}  // Deshabilitado hasta que se seleccione un municipio
      />

      <hr />

      {/* Mostrar la selección actual */}
      <p>Departamento Seleccionado: {departamentos}</p>
      <p>Municipio Seleccionado: {municipios}</p>
      <p>Presidente Seleccionado: {presidente}</p>
      <p>Atracción Turística Seleccionada: {atracciones}</p>
    </div>
  );
};
