import CourseItem from "./CourseItem";
import pythonImg from "../Images/Python_dark-1.svg";
import frontEndImg from "../Images/Fron-End_dark-1.svg";
import inteligenceImg from "../Images/Untitled-4.png";
import uiImg from "../Images/UI_dark.svg";
import "../Style/CoursesList.css";

function CoursesList() {
  return (
    <div className="all-courses-container">
      <CourseItem
        navLink="/"
        uztFunding="Finansuojama UŽT"
        imgSrcLink={pythonImg}
        imgAlt="course picture"
        courseTitle="Python – pradedantiesiems užimtiems asmenims (223002626)"
        courseDescrption="Python – aiškiai suprantama ir greitai išmokstama, tačiau
                  labai universali ir galinga programavimo kalba, todėl šią
                  kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu."
        features={[
          { text: "Finansuojama UŽT - dirbantiems", className: "cap-icon" },
          { text: "Vakarais", className: "moon-icon" },
        ]}
      />

      <CourseItem
        navLink="/"
        uztFunding="UŽT Funding"
        imgSrcLink={frontEndImg}
        imgAlt="course picture"
        courseTitle="Frontend Serverless (unemployed) (223002583)"
        courseDescrption="A Front-End programmer is a real necessity for modern
                  business, so this specialty is in highest demand in the labor
                  market."
        features={[
          { text: "Courses in English", className: "cap-icon" },
          { text: "Vakarais", className: "moon-icon" },
        ]}
      />
      <CourseItem
        navLink="/"
        uztFunding="Finansuojama UŽT"
        imgSrcLink={frontEndImg}
        imgAlt="course picture"
        courseTitle="Frontend Serverless (223002583)"
        courseDescrption="Front-End programuotojas, pasitelkdamas HTML, CSS ir
                  JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas
                  yra ne tik techninio, bet ir kūrybinio pobūdžio."
        features={[{ text: "Dienomis", className: "sun-icon" }]}
      />

      <CourseItem
        navLink="/"
        uztFunding="Finansuojama UŽT"
        imgSrcLink={inteligenceImg}
        imgAlt="course picture"
        courseTitle="Business Intelligence studijos"
        courseDescrption="Kursas suteikia išsamią įžangą į verslo inteligentijos (BI)
                  sritį, studentai įgauna būtinas žinias ir įgūdžius,
                  reikalingus priimti duomenimis grįstus sprendimus."
        features={[
          { text: "Finansuojama UŽT - dirbantiems", className: "cap-icon" },
          { text: "Vakarais", className: "moon-icon" },
        ]}
      />

      <CourseItem
        navLink="/"
        imgSrcLink={uiImg}
        imgAlt="course picture"
        courseTitle="Web Dizainas UX/UI – pažengusių"
        courseDescrption="Web dizaineris privalo užtikrinti ne tik patrauklų svetainės
                  vaizdą, informatyvumą, bet ir patogumą – suderinti pateikiamą
                  informaciją, vaizdus bei navigaciją: kitaip tariant, įlįsti į
                  vartotojo kailį."
        features={[
          { text: "2 lygis", className: "cap-icon" },
          { text: "Vakarais", className: "moon-icon" },
        ]}
      />

      <CourseItem
        navLink="/"
        uztFunding="Finansuojama UŽT"
        imgSrcLink={frontEndImg}
        imgAlt="course picture"
        courseTitle="Frontend Serverless (223002583)"
        courseDescrption="Front-End programuotojas, pasitelkdamas HTML, CSS ir
                  JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas
                  yra ne tik techninio, bet ir kūrybinio pobūdžio."
        features={[{ text: "Dienomis", className: "sun-icon" }]}
      />

      <CourseItem
        navLink="/"
        uztFunding="Finansuojama UŽT"
        imgSrcLink={inteligenceImg}
        imgAlt="course picture"
        courseTitle="Business Intelligence studijos"
        courseDescrption="Kursas suteikia išsamią įžangą į verslo inteligentijos (BI)
                  sritį, studentai įgauna būtinas žinias ir įgūdžius,
                  reikalingus priimti duomenimis grįstus sprendimus."
        features={[
          { text: "Finansuojama UŽT - dirbantiems", className: "cap-icon" },
          { text: "Vakarais", className: "moon-icon" },
        ]}
      />

      <CourseItem
        navLink="/"
        imgSrcLink={uiImg}
        imgAlt="course picture"
        courseTitle="Web Dizainas UX/UI – pažengusių"
        courseDescrption="Web dizaineris privalo užtikrinti ne tik patrauklų svetainės
                  vaizdą, informatyvumą, bet ir patogumą – suderinti pateikiamą
                  informaciją, vaizdus bei navigaciją: kitaip tariant, įlįsti į
                  vartotojo kailį."
        features={[
          { text: "2 lygis", className: "cap-icon" },
          { text: "Vakarais", className: "moon-icon" },
        ]}
      />
    </div>
  );
}

export default CoursesList;
