import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const handleNavigation = () => {
  const navigation = document.getElementById("nav");
  navigation.classList.toggle("hidden");
};

const Navigation = () => {
  return (
    <nav
      id="nav"
      className="hidden fixed top-0 left-0 bg-blue-400 text-white size-full"
    >
      <FontAwesomeIcon
        onClick={handleNavigation}
        icon={faXmark}
        className="text-3xl absolute top-4 right-4"
      />
      <div className="h-screen text-center p-4 flex flex-col gap-4">
        <h2 className="text-xl text-start font-bold">Weather App</h2>
        <ul className="h-full text-4xl flex flex-col gap-6 justify-center items-center">
          <li>Weather</li>
          <li>About</li>
          <li>
            <p>Hackathon</p>
            <p className="text-base">by Kevin Chromik</p>
          </li>
        </ul>
        <p className=" font-playwrite">Made by kevinldg</p>
      </div>
    </nav>
  );
};

export default function Header() {
  return (
    <>
      <header className="bg-blue-400 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">Weather App</h1>
        <FontAwesomeIcon
          onClick={handleNavigation}
          icon={faBars}
          className="text-3xl"
        />
      </header>
      <Navigation />
    </>
  );
}
