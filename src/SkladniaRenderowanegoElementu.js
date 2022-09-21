import shrek from "./shrek.jpg";
import "./SkladniaRenderowanegoElementu.css";

function SkladniaRenderowanegoElementu() {
  const formatName = (user) => {
    return user.firstName + " " + user.lastName;
  };

  const user = {
    firstName: "Grzegorz",
    lastName: "Brzeczyszczykiewicz",
    urlAvatar: shrek,
  };

  const getGreeting = (user) => {
    if (user) {
      return <h1>Witaj, {formatName(user)}!</h1>;
    }
    return <h1>Witaj, Nieznajomy.</h1>;
  };

  return (
    <div>
      <img src={user.urlAvatar} alt="image" id="image"></img>
      <h1>{getGreeting(user)}</h1>
    </div>
  );
}

export default SkladniaRenderowanegoElementu;
