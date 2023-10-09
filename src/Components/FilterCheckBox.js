import "../Style/FilterSelection.css";
function FilterCheckBox(props) {
  const { legend, options } = props;

  if (!legend || !options || options.length === 0) {
    return null;
  }

  return (
    <div className="filter-selection">
      <legend>{legend}</legend>
      {options.map((option) => (
        <div>
          <input type="checkbox" id={option.id} name={option.name} />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}

export default FilterCheckBox;
