import "../Style/CourseItem.css";
function CourseItem(props) {
  const {
    features,
    uztFunding,
    navLink,
    imgSrcLink,
    imgAlt,
    courseTitle,
    courseDescrption,
  } = props;

  if (!courseTitle || !courseDescrption) {
    return null;
  }

  const featuresList =
    features &&
    features.map((feature, index) => (
      <li key={index} className={feature.className}>
        {feature.text}{" "}
      </li>
    ));

  const uztFundingElement = uztFunding && <span>{uztFunding}</span>;

  const featureContainerElement = features && (
    <div className="features-container">
      <ul>{featuresList}</ul>
    </div>
  );

  return (
    <div className="course-card">
      <a href={navLink}>
        <div className="course-card-content">
          <div>
            {uztFundingElement}
            <img src={imgSrcLink} alt={imgAlt} />
            <h2>{courseTitle}</h2>
            <p>{courseDescrption}</p>
          </div>
          {featureContainerElement}
        </div>
      </a>
    </div>
  );
}

export default CourseItem;
