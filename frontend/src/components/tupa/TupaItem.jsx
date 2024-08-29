import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';


export const TupaItem = ({ item }) => {

    useEffect(() => {
        initFlowbite();
      }, []);


  return (
    <div className="mt-6 w-full">
      <div
        id={`accordion-color-${item.tupaId}`}
        data-accordion="collapse"
        data-active-classes="bg-bg_primary"
      >
        <h2 id={`accordion-color-heading-${item.tupaId}`}>
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-gray-500 rounded-t-xl focus:ring-4 focus:bg_primary  hover:bg-bg_primary-300  gap-3 text-left"
            data-accordion-target={`#accordion-color-body-${item.tupaId}`}
            // aria-expanded="true"
            aria-controls={`accordion-color-body-${item.tupaId}`}
          >
            <div className='me-0 pe-0'>
            <p className='text-xs m-0 p-0'>{item.tupaNombre.trim()}</p>
            <p className='text-xs m-0 p-0 text-gray-600'>{item.tupaCodigo}</p>
            </div>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id={`accordion-color-body-${item.tupaId}`}
          className="hidden"
          aria-labelledby={`accordion-color-heading-${item.tupaId}`}
        >
          <div className="p-5 border border-gray-500 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{" "}
              <a
                href="/docs/getting-started/introduction/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{" "}
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
