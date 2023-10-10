import FilterCheckBox from "./FilterCheckBox";
import FilterOptions from "./FilterOptions";
import "../Style/CourseFilterContainer.css";
function CourseFilterContainer(props) {
  const { filterOptionsArr, filterCheckBoxArr } = props.filterData;

  return (
    <div className="course-filter-container">
      <form>
        <h2>Rastos 62 programos</h2>

        {filterOptionsArr.map((option, index) => (
          <FilterOptions
            key={index}
            id={option.id}
            label={option.label}
            name={option.name}
            options={option.options}
          />
        ))}
        {filterCheckBoxArr.map((checkOption, index) => (
          <FilterCheckBox
            key={index}
            legend={checkOption.legend}
            options={checkOption.options}
          />
        ))}

        <button className="clear-btn">Išvalyti</button>
      </form>
    </div>
  );
}

export default CourseFilterContainer;
