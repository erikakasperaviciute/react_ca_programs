import "./programs.css";

import ButtonToTest from "./Components/ButtonToTest";
import CoursesWrapper from "./Components/CoursesWrapper";
function ProgramsPage() {
  return (
    <main>
      <div className="container">
        <h1>Programos</h1>
        <ButtonToTest />
        <CoursesWrapper />
      </div>
    </main>
  );
}

export default ProgramsPage;
