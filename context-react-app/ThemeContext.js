import React,{ createContext,useState} from "react";

//Context생성하기
export const ThemeContext = createContext();

//ThemeProvider 컴포넌트
export const ThemeProvider = ({children})=>{
    //라이트모드, 다크모드 => 2개일때는 true,false로 구분하면 편함
    const [isDarkMode, setIsDarkMode] = useState(false);

    //다크모드와 라이트모드를 전환하는 함수
    const toggleTheme = () =>{
        setIsDarkMode((prevMode)=>!prevMode);
    }

    return(
        <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}