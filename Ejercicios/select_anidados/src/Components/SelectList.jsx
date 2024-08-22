import { useFetch } from "../hooks/useFetch";

export const SelectList = ({ manejadorCambio, title, url }) => {
  const key = `select-${title}`;
  const label = title.toUpperCase();

  const { data, error, loading } = useFetch(url);

  if (loading) {
    return <p>Cargando {title}...</p>;
  }

  if (!data) {
    return null;
  }
  
  if (error) {
    return <p>Ha ocurrido un error: {error}</p>;
  }

  return (
    <div className="container-select">
      <label className="label-select" htmlFor={key}>
        {label}
      </label>
      <select name={key} id={key} onChange={manejadorCambio}>
        <option value="">Seleccione un {title}</option>
        {data.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
