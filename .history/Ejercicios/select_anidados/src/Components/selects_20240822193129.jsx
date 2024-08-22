import { useState } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  const [departamentos, setDepartamentos] = useState("");
  const [municipios, setMunicipios] = useState("");
  const [ciudades, setCiudades] = useState("");

  return (
    <div className="container">
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department"
        manejadorCambio={(event) => {
          setDepartamentos(event.target.value);
          setMunicipios("");  // Reinicia municipios cuando cambia el departamento
          setCiudades("");    // Reinicia ciudades cuando cambia el departamento
        }}
      />
      {departamentos && (
        <SelectList
          title="Municipios"
          url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
          manejadorCambio={(event) => {
            setMunicipios(event.target.value);
            setCiudades("");  // Reinicia ciudades cuando cambia el municipio
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
    </div>
  );
};
