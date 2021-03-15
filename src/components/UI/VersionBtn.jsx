import useDarkMode from "../../hooks/useDarkMode";

const VersionBtn = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div>
      <span
        onClick={() => setTheme(colorTheme)}
        className="transition duration-500 ease-in-out w-8 h-8 bg-gray-400 rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center transform hover:-translate-y-1 hover:scale-110 dark:bg-white"
      >
        {colorTheme === "light" ? (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        )}
      </span>
    </div>
  );
};

export default VersionBtn;
