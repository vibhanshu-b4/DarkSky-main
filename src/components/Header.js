import "../styles/components/Header.css";
import Place from "./Place";
import Search from "./Search";
import Settings from "./Settings";

function Header() {
  return (
    <div className="Header">
      <Place />
      <Search />
      <Settings />
    </div>
  );
}

export default Header;
