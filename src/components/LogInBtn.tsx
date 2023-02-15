
const LogInBtn = () => {
  return (
    <button className="group transition-all p-2 flex justify-center items-center gap-2 border-2 border-lime-500/20 rounded-xl hover:border-lime-500  duration-100 bg-gray-900 hover:bg-gray-800 text-lime-50/80 hover:text-lime-50  shadow-md shadow-lime-500/10 hover:shadow-lime-500/40 active:text-white active:shadow-lg active:border-lime-400 active:bg-gray-700 ">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6"
        >
          <defs>
            <path
              id="A"
              d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
            />
          </defs>
          <clipPath id="B">
            <use href="#A" />
          </clipPath>
          <g transform="matrix(.727273 0 0 .727273 -.954545 -1.45455)">
            <path d="M0 37V11l17 13z" clip-path="url(#B)" fill="#fbbc05" />
            <path
              d="M0 11l17 13 7-6.1L48 14V0H0z"
              clip-path="url(#B)"
              fill="#ea4335"
            />
            <path
              d="M0 37l30-23 7.9 1L48 0v48H0z"
              clip-path="url(#B)"
              fill="#34a853"
            />
            <path
              d="M48 48L17 24l-4-3 35-10z"
              clip-path="url(#B)"
              fill="#4285f4"
            />
          </g>
        </svg>
      </span>
      <span>تسجيل الدخول </span>
    </button>
  );
}

export default LogInBtn