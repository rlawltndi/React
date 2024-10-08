import React,{useContext} from "react";
import { ThemeContext } from "./Theme/ThemeContext";
import ThemeSwitcher from "./Theme/ThemeSwitcher";

function App() {
  const{isDarkMode}=useContext(ThemeContext);

  return (
    <div 
    style={{
      backgroundColor: isDarkMode ? '#333' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
     <h1>{isDarkMode ? '다크모드' : '라이트모드'}</h1>
     <ThemeSwitcher />
    </div>
  );
}

export default App;
