import CourseItem from "./CourseItem";

import "../Style/CoursesList.css";

function CoursesList(props) {
  const { coursesArr } = props;

  return (
    <div className="all-courses-container">
      {coursesArr.map((courseItem, index) => (
        <CourseItem
          key={index}
          navLink={courseItem.navLink}
          uztFunding={courseItem.uztFunding}
          imgSrcLink={courseItem.imgSrcLink}
          imgAlt={courseItem.imgAlt}
          courseTitle={courseItem.courseTitle}
          courseDescrption={courseItem.courseDescrption}
          features={courseItem.features}
        />
      ))}
    </div>
  );
}

export default CoursesList;
