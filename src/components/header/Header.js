import "./Header.css";
function Header({ getData, getSelectedLanguage }) {
  return (
    <div className="header">
      <img src="/images/bookmyshow.png" alt="logo" className="logo" />
      <input
        className="search-input"
        type="text"
        onChange={(e) => {
          getData(e);
        }}
        placeholder="Search for Movies,Events,Plays,Sports and Activities"
      />
      <select name="Language" onChange={(e)=>getSelectedLanguage(e)}>
      <option className="options" value="Language">Language</option>
        <option value="Hindi">Hindi</option>
        <option value="English">English</option>
        <option value="Tamil">Tamil</option>
        <option value="Kannada">Kannada</option>
        <option value="Marathi">Marathi</option>
      </select>
    </div>
  );
}

export default Header;
