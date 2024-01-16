export const Hero = () => {
  return (
    <div className="container flex items-start gap-10 flex-wrap">
      <div className="littlehero1 flex items-start flex-col gap-10 self-stretch max-w-768 justify-center">
        <div className="content">
          <h1 className="text-6xl gray-900">Hi, I’m Alexa Demie 👋</h1>
          <p>
            Alexa Demie is an American actress and singer. She is known for her
            role as Madeleine "Maddy" Perez on the HBO teen drama television
            series Euphoria. Demie made her feature film debut with a minor role
            in the comedy-drama Brigsby Bear before starring in the
            coming-of-age film Mid90s and the drama film Waves. Wikipedia Born:
            December 11, 1990 (age 33 years), Los Angeles, California, United
            States Height: 1.67 m
          </p>
        </div>
        <div className="group">
          <div className="location flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Ahmedabad, India</p>
          </div>
          <div className="hire">
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="actions">
          <div className="links flex">
            <div className="icon flex gap-6 justify-center items-center">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.9998 22V18C15.1389 16.7473 14.7797 15.4901 13.9998 14.5C16.9998 14.5 19.9998 12.5 19.9998 9C20.0798 7.75 19.7298 6.52 18.9998 5.5C19.2798 4.35 19.2798 3.15 18.9998 2C18.9998 2 17.9998 2 15.9998 3.5C13.3598 3 10.6398 3 7.99979 3.5C5.99979 2 4.99979 2 4.99979 2C4.69979 3.15 4.69979 4.35 4.99979 5.5C4.27167 6.51588 3.91827 7.75279 3.99979 9C3.99979 12.5 6.99979 14.5 9.99979 14.5C9.60979 14.99 9.31979 15.55 9.14979 16.15C8.97979 16.75 8.92979 17.38 8.99979 18V22"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 18C4.49 20 4 16 2 16"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="icon flex gap-6 justify-center items-center">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M29.3334 5.33369C29.3334 5.33369 28.4001 8.13369 26.6667 9.86702C28.8001 23.2004 14.1334 32.9337 2.66675 25.3337C5.60008 25.467 8.53341 24.5337 10.6667 22.667C4.00008 20.667 0.666748 12.8004 4.00008 6.66702C6.93341 10.1337 11.4667 12.1337 16.0001 12.0004C14.8001 6.40036 21.3334 3.20036 25.3334 6.93369C26.8001 6.93369 29.3334 5.33369 29.3334 5.33369Z"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="icon flex gap-6 justify-center items-center">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M6.66675 7.33366C6.66675 6.09598 7.15841 4.909 8.03358 4.03383C8.90875 3.15866 10.0957 2.66699 11.3334 2.66699H16.0001V12.0003H11.3334C10.0957 12.0003 8.90875 11.5087 8.03358 10.6335C7.15841 9.75832 6.66675 8.57134 6.66675 7.33366Z"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 2.66699H20.6667C21.2795 2.66699 21.8863 2.7877 22.4525 3.02222C23.0187 3.25674 23.5332 3.60049 23.9665 4.03383C24.3998 4.46717 24.7436 4.98162 24.9781 5.5478C25.2126 6.11399 25.3333 6.72082 25.3333 7.33366C25.3333 7.94649 25.2126 8.55333 24.9781 9.11951C24.7436 9.6857 24.3998 10.2001 23.9665 10.6335C23.5332 11.0668 23.0187 11.4106 22.4525 11.6451C21.8863 11.8796 21.2795 12.0003 20.6667 12.0003H16V2.66699Z"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 16.6667C16 16.0538 16.1207 15.447 16.3552 14.8808C16.5898 14.3146 16.9335 13.8002 17.3668 13.3668C17.8002 12.9335 18.3146 12.5898 18.8808 12.3552C19.447 12.1207 20.0538 12 20.6667 12C21.2795 12 21.8863 12.1207 22.4525 12.3552C23.0187 12.5898 23.5332 12.9335 23.9665 13.3668C24.3998 13.8002 24.7436 14.3146 24.9781 14.8808C25.2126 15.447 25.3333 16.0538 25.3333 16.6667C25.3333 17.2795 25.2126 17.8863 24.9781 18.4525C24.7436 19.0187 24.3998 19.5332 23.9665 19.9665C23.5332 20.3998 23.0187 20.7436 22.4525 20.9781C21.8863 21.2126 21.2795 21.3333 20.6667 21.3333C20.0538 21.3333 19.447 21.2126 18.8808 20.9781C18.3146 20.7436 17.8002 20.3998 17.3668 19.9665C16.9335 19.5332 16.5898 19.0187 16.3552 18.4525C16.1207 17.8863 16 17.2795 16 16.6667Z"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66675 25.9997C6.66675 24.762 7.15841 23.575 8.03358 22.6998C8.90875 21.8247 10.0957 21.333 11.3334 21.333H16.0001V25.9997C16.0001 27.2374 15.5084 28.4243 14.6332 29.2995C13.7581 30.1747 12.5711 30.6663 11.3334 30.6663C10.0957 30.6663 8.90875 30.1747 8.03358 29.2995C7.15841 28.4243 6.66675 27.2374 6.66675 25.9997Z"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66675 16.6667C6.66675 15.429 7.15841 14.242 8.03358 13.3668C8.90875 12.4917 10.0957 12 11.3334 12H16.0001V21.3333H11.3334C10.0957 21.3333 8.90875 20.8417 8.03358 19.9665C7.15841 19.0913 6.66675 17.9043 6.66675 16.6667Z"
                  stroke="#4B5563"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="littlehero2">
        <div className="pic-container"></div>
      </div>
    </div>
  );
};
export default Hero;
