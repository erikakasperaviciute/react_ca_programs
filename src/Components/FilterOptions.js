import "../Style/FilterSelection.css";
function FilterOptions(props) {
  const { id, label, name, options } = props;

  if (!label || !options || options.length === 0) {
    return null;
  }

  return (
    <div className="filter-selection">
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterOptions;
