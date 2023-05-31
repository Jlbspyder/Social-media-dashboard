import { useState } from "react";
import Header from "./component/Header";
import MainView from "./component/MainView";
import OverView from "./component/OverView";

function App() {
  const [DarkMode, setDarkMode] = useState(false);
  const [LightMode, setLightMode] = useState(true);
  const setTheme = () => {
    setDarkMode(!DarkMode);
    setLightMode(!LightMode);
  };

  return (
    <div className={`app ${DarkMode ? "light-mode" : "dark-mode"}`}>
      <Header darkMode={DarkMode} setDarkMode={setDarkMode} theme={setTheme} />
      <MainView darkMode={DarkMode} setDarkMode={setDarkMode} />
      <OverView darkMode={DarkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
