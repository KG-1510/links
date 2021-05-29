import { useRouter } from "next/router";

export default function Logo(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 677.01 557.59"
        width={router.pathname == "/" ? "inherit" : "40"}
        height={router.pathname == "/" ? "inherit" : "40"}
      >
        <defs>
          <style>
            {".prefix__cls-5{fill:#5bcbf0}.prefix__cls-6{fill:#ec5a58}"}
          </style>
        </defs>
        <g id="prefix__Layer_2" data-name="Layer 2">
          <g id="prefix__Layer_1-2" data-name="Layer 1">
            <path
              d="M676.05 382.35c-6.19 38.94-28.43 67-61.11 87-55.53 33.84-114.23 22.25-157.19-30.39-13.63-16.71-26.35-34.15-40-51.92H492c7.38 9.61 13.93 19.38 23.75 26.47 38.93 28.1 94.37 6.63 102.84-40.4 3.28-18.24-2.47-35.05-13-49.69q-81.39-112.77-163.46-225c-12-16.39-20.72-34.78-33.22-50.84-13.39-17.18-28.49-32-48.51-41.24a16.17 16.17 0 01-2.13-1.5A56.41 56.41 0 01375.68.85h14.3a85.6 85.6 0 0142 11.5c23.87 13.5 42.37 32.93 58.31 54.72q80.88 110.6 161.11 221.67c14 19.33 22 41.28 24.65 65.08.14 3.09-.9 6.29 1 9.2v9.13c-1.63 3.29-.89 6.78-1 10.2z"
              fill="#76c696"
            />
            <path
              d="M389.93 0a8.46 8.46 0 00.05.87h-14.3c0-.28 0-.56.05-.85z"
              fill="#dbeee0"
            />
            <path
              d="M676.05 382.35c.11-3.42-.63-6.91 1-10.18v10.14h-.48z"
              fill="#c2e3cc"
            />
            <path
              d="M676.06 353.84a1.81 1.81 0 001 .07V363c-1.9-2.87-.86-6.07-1-9.16z"
              fill="#abd9b9"
            />
            <path
              className="prefix__cls-5"
              d="M59.59 398c-7.22 22.71-7.25 45.35-1.65 69.27a108.25 108.25 0 01-21.72-17.49C17.47 430 3 407.92.54 379.92c-3-34.42 6.65-65.57 26.66-93.29Q106.37 177 186.27 67.81c15.64-21.39 33.73-40.58 57.16-53.76C280.69-6.92 333.18-.15 367 29.3c21.87 19.05 39.2 41 46.15 69.77 8 33.06-.63 63.45-15.89 92.58-3.2 6.12-7.08 11.89-10.67 17.81a22.09 22.09 0 01-2.11 2.27l-36.39-48c8.15-17.42 10.13-35.33 4.65-53.44-8-26.42-28.09-40.15-53.48-45.63-23.63-5.1-41.88 7-56.05 24.41C210.61 129 182 171.82 151.45 213.3 124 250.57 97 288.1 69.88 325.61c-6.94 9.6-12.86 19.82-16.64 31.16-4.88 14.66-4.79 28.56 6.35 41.23z"
            />
            <path
              className="prefix__cls-6"
              d="M587 504.4c-6.45 31.36-31 50.43-66.78 51.24-32.92.75-65.85 1-98.78 1.23-45.29.34-90.59 1-135.87.54-35.79-.39-71.7.93-107.34-2.86-82.5-8.79-112.73-72.11-107.16-132.19 7.51-81 68.66-109.65 126.66-111.87 6.07-.23 12.15 0 19.8 0-14.37 19.06-28.09 37.24-41.72 55.3-21.9 3.73-38.9 22.49-44.58 49-9.64 45 20.63 82.3 66.73 82.3q137.19 0 274.37.05c10.63 0 21.27.6 31.9 1a9 9 0 013.85.81c25 13.35 51 13.72 77.52 5.52a4.8 4.8 0 011.4-.07z"
            />
            <path
              className="prefix__cls-6"
              d="M296.94 368l41.91-57.77c52.58 1.53 105.33-2.07 158 2.32A155.12 155.12 0 01542 323.11c28.64 11.54 44.31 29.52 51.83 59.59-8.8 16.68-31.72 25.65-54.79 21.35-6.51-28.25-29.33-33-52.83-34.72-45.21-3.33-90.55-.77-135.83-1.33-17.38-.22-34.77 0-53.44 0z"
            />
            <path
              className="prefix__cls-5"
              d="M290.2 241.42c12.24 17.16 24.25 34 36.25 50.86-16.37 25.92-34.67 49.77-52.43 74-20.47 27.9-40.82 55.9-62.52 82.89-11.15 13.87-23.2 21.86-39 25.49-16.12-8.36-26.6-30.84-23.22-50.63 15.91-.7 19.54-15.52 26.85-25.4C214.45 346.77 252 294.31 290.2 241.42z"
            />
            <path
              d="M421.5 289.7h-73.86c-10-14.05-20.27-28.27-30.34-42.61-17.46-24.83-36.26-48.76-48.76-76.8-13.85-31.06-12.37-60.52 7.17-88.62 25.29-5.42 43.48 8.42 49.38 19.33-17.8 19.45-13.86 31-1.25 51.27 25.84 41.46 56.55 79.51 84.64 119.39 4.08 5.79 8.28 11.49 13.02 18.04z"
              fill="#77c696"
            />
          </g>
        </g>
      </svg>
    </>
  );
}
