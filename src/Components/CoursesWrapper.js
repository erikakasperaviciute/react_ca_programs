import CourseFilterContainer from "./CourseFilterContainer";
import CoursesList from "./CoursesList";
function CoursesWrapper() {
  return (
    <div className="courses-wrapper">
      <CourseFilterContainer />
      <CoursesList />
    </div>
  );
}

export default CoursesWrapper;
