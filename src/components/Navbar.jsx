import { useEffect, useState } from "react";
import Container from "./Container";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";
const Navbar = () => {
  const [theme,setTheme] = useState('light');
  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
  },[theme]);
  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  };
  return (
    <header className="py-6 border-b-[2px] border-b-black/15">
      <Container>
        <div className="flex justify-between">
          <h1 className="capitalize font-semibold text-2xl flex items-center gap-1">github <span className="text-slate-500">profiles</span><FaGithub /></h1>
          <button onClick={toggleTheme} className="bg-black text-white flex items-center gap-3 shadow-xl w-auto px-3 sm:px-5 py-2 cursor-pointer rounded-xl border border-black hover:bg-white hover:text-black">
            {theme === 'light' ? 'Dark' : 'Light'}
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;