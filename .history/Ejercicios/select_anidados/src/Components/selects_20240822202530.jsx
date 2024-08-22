import React, { useState } from "react";
import { SelectList } from "./SelectList";
import { departmentFlags } from "./departmentsFlags";

export const Selects = () => {
  const [departamentos, setDepartamentos] = useState("");
  const [municipios, setMunicipios] = useState("");
  const [ciudades, setCiudades] = useState("");

  // Obtener la URL de la bandera basada en el departamento seleccionado
  const flagUrl = departmentFlags[departamentos];

  return (
    <div className="container">
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department"
        manejadorCambio={(event) => {
          setDepartamentos(event.target.value);
          setMunicipios("");  // Reiniciar municipios cuando cambia el departamento
          setCiudades("");    // Reiniciar ciudades cuando cambia el departamento
        }}
      />
      {departamentos && (
        <SelectList
          title="Municipios"
          url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
          manejadorCambio={(event) => {
            setMunicipios(event.target.value);
            setCiudades("");  // Reiniciar ciudades cuando cambia el municipio
          }}
        />
      )}
      {municipios && (
        <SelectList
          title="Ciudades"
          url={`https://api-colombia.com/api/v1/Municipality/${municipios}/towns`} // URL de ejemplo
          manejadorCambio={(event) => {
            setCiudades(event.target.value);
          }}
        />
      )}

{Ciudades && (
        <SelectList
          title="Ciudades"
          url={`https://api-colombia.com/api/v1/Municipality/${municipios}/towns`} // URL de ejemplo
          manejadorCambio={(event) => {
            setCiudades(event.target.value);
          }}
        />
      )}


      {flagUrl && (
        <div>
          <h2>Bandera de {departamentos}</h2>
          <img src={flagUrl} alt={`Bandera de ${departamentos}`} style={{ width: "200px", height: "auto" }} />
        </div>
      )}
    </div>
  );
};
