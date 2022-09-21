import logo from "./logo.svg";
import "./RenderowanieELementu.css";

function RenderowanieElementu() {
  let imie = "jurek";
  return (
    <h1>
      Witaj {imie}, masz {4 + 4} lat
    </h1>
  );
}

export default RenderowanieElementu;
