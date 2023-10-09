import "../Style/ButtonToTest.css";

function ButtonToTest() {
  return (
    <a className="btn-to-test" href="/" target="_blank">
      <span>
        <span className="pink">Nežinai ką pasirinkti?</span> Spręsk IT testą
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="33">
        <path
          d="M2.535 32.526L.033 30.024l13.76-13.761L.034 2.502 2.535-.001 18.8 16.263z"
          fillRule="evenodd"
        />
      </svg>
    </a>
  );
}

export default ButtonToTest;
