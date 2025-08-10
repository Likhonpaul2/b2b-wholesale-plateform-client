import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const DarkModeToggle = () => {
    const [theme, setTheme] = useState("dark");


    // ✅ Helper function to apply theme
    const applyTheme = (themeValue) => {
        setTheme(themeValue);
        localStorage.setItem("theme", themeValue);
        document.documentElement.setAttribute("data-theme", themeValue);
    };

    // ✅ Set theme on initial load
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        applyTheme(savedTheme);
    }, []);

    // 🔁 Handle theme toggle
    const handleThemeToggle = (e) => {
        const newTheme = e.target.checked ? "dark" : "light";
        applyTheme(newTheme);
    };



    return (
        <label className="swap swap-rotate">
            <input
                type="checkbox"
                onChange={handleThemeToggle}
                checked={theme === "dark"}
            />

            {/* Sun icon (light mode) */}
            <MdLightMode className="swap-off text-gray-700 h-7 w-7" />

            {/* Moon icon (dark mode) */}
            <MdDarkMode className="swap-on text-gray-700 h-7 w-7" />
        </label>
    );
};

export default DarkModeToggle;
