import FilterCheckBox from "./FilterCheckBox";
import FilterOptions from "./FilterOptions";
import "../Style/CourseFilterContainer.css";
function CourseFilterContainer() {
  return (
    <div className="course-filter-container">
      <form>
        <h2>Rastos 62 programos</h2>

        <FilterOptions
          id="theme"
          label="Tema"
          name="theme"
          options={[
            { value: "visos", label: "Visos" },
            { value: "testavimas", label: "Testavimas" },
            { value: "programavimas", label: "Programavimas" },
            { value: "dizainas", label: "Dizainas" },
            { value: "duomenys", label: "Duomenys" },
            { value: "kibernetinis-saugumas", label: "Kibernetinis saugumas" },
            { value: "rinkodara", label: "Rinkodara" },
          ]}
        />

        <FilterOptions
          id="location"
          label="Vieta"
          name="location"
          options={[
            { value: "visos", label: "Visos" },
            { value: "online", label: "Online" },
            { value: "vilnius", label: "Vilnius" },
            { value: "kaunas", label: "Kaunas" },
            { value: "klaipeda-saugumas", label: "Klaipėda" },
          ]}
        />

        <FilterOptions
          id="type"
          label="Tipas"
          name="type"
          options={[
            { value: "visos", label: "Visi" },
            { value: "in-english", label: "Courses in English" },
            { value: "pradedanciu", label: "Pradedančių kursai" },
            { value: "pazengusiu", label: "Pažengusių studijos" },
            { value: "1-2-lygis", label: "1+2 lygis" },
            { value: "studijos-101", label: "Studijos 101" },
            { value: "finansuojama-uzt", label: "Finansuojama UŽT" },
          ]}
        />

        <FilterCheckBox
          legend="Laikas"
          options={[
            { id: "dienomis", name: "dienomis", label: "Dienomis" },
            { id: "vakarais", name: "vakarais", label: "Vakarais" },
          ]}
        />

        <button className="clear-btn">Išvalyti</button>
      </form>
    </div>
  );
}

export default CourseFilterContainer;
