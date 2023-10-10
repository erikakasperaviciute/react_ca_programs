import "./programs.css";
import pythonImg from "./Images/Python_dark-1.svg";
import frontEndImg from "./Images/Fron-End_dark-1.svg";
import inteligenceImg from "./Images/Untitled-4.png";
import uiImg from "./Images/UI_dark.svg";
import ButtonToTest from "./Components/ButtonToTest";
import CoursesWrapper from "./Components/CoursesWrapper";
function ProgramsPage() {
  const coursesArr = [
    {
      navLink: "/",
      uztFunding: "Finansuojama UŽT",
      imgSrcLink: pythonImg,
      imgAlt: "course picture",
      courseTitle: "Python – pradedantiesiems užimtiems asmenims (223002626)",
      courseDescrption:
        "Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu.",
      features: [
        { text: "Finansuojama UŽT - dirbantiems", className: "cap-icon" },
        { text: "Vakarais", className: "moon-icon" },
      ],
    },
    {
      navLink: "/",
      uztFunding: "UŽT Funding",
      imgSrcLink: frontEndImg,
      imgAlt: "course picture",
      courseTitle: "Frontend Serverless (unemployed) (223002583)",
      courseDescrption:
        "A Front-End programmer is a real necessity for modern business, so this specialty is in highest demand in the labor market.",
      features: [
        { text: "Courses in English", className: "cap-icon" },
        { text: "Vakarais", className: "moon-icon" },
      ],
    },
    {
      navLink: "/",
      uztFunding: "Finansuojama UŽT",
      imgSrcLink: frontEndImg,
      imgAlt: "course picture",
      courseTitle: "Frontend Serverless (223002583)",
      courseDescrption:
        "Front-End programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio.",
      features: [{ text: "Dienomis", className: "sun-icon" }],
    },
    {
      navLink: "/",
      uztFunding: "Finansuojama UŽT",
      imgSrcLink: inteligenceImg,
      imgAlt: "course picture",
      courseTitle: "Business Intelligence studijos",
      courseDescrption:
        "Kursas suteikia išsamią įžangą į verslo inteligentijos (BI) sritį, studentai įgauna būtinas žinias ir įgūdžius, reikalingus priimti duomenimis grįstus sprendimus.",
      features: [
        { text: "Finansuojama UŽT - dirbantiems", className: "cap-icon" },
        { text: "Vakarais", className: "moon-icon" },
      ],
    },

    {
      navLink: "/",
      uztFunding: "Finansuojama UŽT",
      imgSrcLink: pythonImg,
      imgAlt: "course picture",
      courseTitle: "Python – pradedantiesiems užimtiems asmenims (223002626)",
      courseDescrption:
        "Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu.",
      features: [
        { text: "Finansuojama UŽT - dirbantiems", className: "cap-icon" },
        { text: "Vakarais", className: "moon-icon" },
      ],
    },
    {
      navLink: "/",
      imgSrcLink: uiImg,
      imgAlt: "course picture",
      courseTitle: "Web Dizainas UX/UI – pažengusių",
      courseDescrption:
        "Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą, informatyvumą, bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją: kitaip tariant, įlįsti į vartotojo kailį.",
      features: [
        { text: "2 lygis", className: "cap-icon" },
        { text: "Vakarais", className: "moon-icon" },
      ],
    },
    {
      navLink: "/",
      uztFunding: "UŽT Funding",
      imgSrcLink: frontEndImg,
      imgAlt: "course picture",
      courseTitle: "Frontend Serverless (unemployed) (223002583)",
      courseDescrption:
        "A Front-End programmer is a real necessity for modern business, so this specialty is in highest demand in the labor market.",
      features: [
        { text: "Courses in English", className: "cap-icon" },
        { text: "Vakarais", className: "moon-icon" },
      ],
    },
    {
      navLink: "/",
      uztFunding: "Finansuojama UŽT",
      imgSrcLink: frontEndImg,
      imgAlt: "course picture",
      courseTitle: "Frontend Serverless (223002583)",
      courseDescrption:
        "Front-End programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio.",
      features: [{ text: "Dienomis", className: "sun-icon" }],
    },
    {
      navLink: "/",
      uztFunding: "Finansuojama UŽT",
      imgSrcLink: inteligenceImg,
      imgAlt: "course picture",
      courseTitle: "Business Intelligence studijos",
      courseDescrption:
        "Kursas suteikia išsamią įžangą į verslo inteligentijos (BI) sritį, studentai įgauna būtinas žinias ir įgūdžius, reikalingus priimti duomenimis grįstus sprendimus.",
      features: [
        { text: "Finansuojama UŽT - dirbantiems", className: "cap-icon" },
        { text: "Vakarais", className: "moon-icon" },
      ],
    },
    {
      navLink: "/",
      imgSrcLink: uiImg,
      imgAlt: "course picture",
      courseTitle: "Web Dizainas UX/UI – pažengusių",
      courseDescrption:
        "Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą, informatyvumą, bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją: kitaip tariant, įlįsti į vartotojo kailį.",
      features: [
        { text: "2 lygis", className: "cap-icon" },
        { text: "Vakarais", className: "moon-icon" },
      ],
    },
  ];
  const filterData = {
    filterOptionsArr: [
      {
        id: "theme",
        label: "Tema",
        name: "theme",
        options: [
          { value: "visos", label: "Visos" },
          { value: "testavimas", label: "Testavimas" },
          { value: "programavimas", label: "Programavimas" },
          { value: "dizainas", label: "Dizainas" },
          { value: "duomenys", label: "Duomenys" },
          { value: "kibernetinis-saugumas", label: "Kibernetinis saugumas" },
          { value: "rinkodara", label: "Rinkodara" },
        ],
      },
      {
        id: "location",
        label: "Vieta",
        name: "location",
        options: [
          { value: "visos", label: "Visos" },
          { value: "online", label: "Online" },
          { value: "vilnius", label: "Vilnius" },
          { value: "kaunas", label: "Kaunas" },
          { value: "klaipeda-saugumas", label: "Klaipėda" },
        ],
      },
      {
        id: "type",
        label: "Tipas",
        name: "type",
        options: [
          { value: "visos", label: "Visi" },
          { value: "in-english", label: "Courses in English" },
          { value: "pradedanciu", label: "Pradedančių kursai" },
          { value: "pazengusiu", label: "Pažengusių studijos" },
          { value: "1-2-lygis", label: "1+2 lygis" },
          { value: "studijos-101", label: "Studijos 101" },
          { value: "finansuojama-uzt", label: "Finansuojama UŽT" },
        ],
      },
    ],

    filterCheckBoxArr: [
      {
        legend: "Laikas",
        options: [
          { id: "dienomis", name: "dienomis", label: "Dienomis" },
          { id: "vakarais", name: "vakarais", label: "Vakarais" },
        ],
      },
    ],
  };

  return (
    <main>
      <div className="container">
        <h1>Programos</h1>
        <ButtonToTest />
        <CoursesWrapper coursesList={coursesArr} filterData={filterData} />
      </div>
    </main>
  );
}

export default ProgramsPage;
