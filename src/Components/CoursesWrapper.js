import CourseFilterContainer from "./CourseFilterContainer";
import CoursesList from "./CoursesList";
function CoursesWrapper(props) {
  return (
    <div className="courses-wrapper">
      <CourseFilterContainer filterData={props.filterData} />
      <CoursesList coursesArr={props.coursesList} />
    </div>
  );
}

export default CoursesWrapper;
