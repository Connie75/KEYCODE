import { useState } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  const [departamentos, setDepartamentos] = useState("");
  const [municipios, setMunicipios] = useState("");

  return (
    <div className="container">
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department"
        manejadorCambio={(event) => {
          setDepartamentos(event.target.value);
        }}
      />
      {departamentos && (
        <SelectList
          title="Municipios"
          url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
          manejadorCambio={(event) => {
            setMunicipios(event.target.value);
          }}
        />
      )}
    </div>
  );
};
