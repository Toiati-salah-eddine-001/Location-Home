import React, { useState } from 'react';

function Sidebare({ setActiveComponent }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeComponent, setActive] = useState('');

  const handleClick = (component) => {
    setActiveComponent(component);
    setActive(component);
  };

  return (
    <div className="flex">
      <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-10 place-content-center rounded-lg bg-orange-100 text-xs text-orange-700 font-bold">
              LM
            </span>
          </div>
          <div className="border-t border-gray-100">
            <div className="px-2">
              <div className="py-4">
                <button
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="group relative flex justify-center rounded-sm bg-orange-50 px-2 py-1.5 text-orange-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 opacity-75 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Menu
                  </span>
                </button>
              </div>
              <ul className="space-y-1 border-t border-gray-100 pt-4">
                <li>
                  <button
                    onClick={() => handleClick('Teams')}
                    className={`group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-orange-50 hover:text-orange-700 ${activeComponent === 'Teams' ? 'bg-orange-100 text-orange-700' : ''}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Teams
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleClick('Billing')}
                    className={`group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-orange-50 hover:text-orange-700 ${activeComponent === 'Billing' ? 'bg-orange-100 text-orange-700' : ''}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Billing
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleClick('Invoices')}
                    className={`group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-orange-50 hover:text-orange-700 ${activeComponent === 'Invoices' ? 'bg-orange-100 text-orange-700' : ''}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Invoices
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleClick('Account')}
                    className={`group relative flex justify-center rounded-sm px-2 py-1.5 text-gray-500 hover:bg-orange-50 hover:text-orange-700 ${activeComponent === 'Account' ? 'bg-orange-100 text-orange-700' : ''}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Account
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 left-16 h-screen w-72 bg-white shadow-lg z-20"> 
          <div className="px-4 py-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-orange-700">Menu Principal</h3>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-1 rounded-full hover:bg-orange-100"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-orange-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => handleClick('Dashboard')}
                  className={`flex w-full items-center rounded-lg px-4 py-2 text-sm font-medium ${activeComponent === 'Dashboard' ? 'bg-orange-100 text-orange-700' : 'text-gray-500 hover:bg-orange-50 hover:text-orange-700'}`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="mr-3 h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ajouter Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick('OrdersList')}
                  className={`flex w-full items-center rounded-lg px-4 py-2 text-sm font-medium ${activeComponent === 'OrdersList' ? 'bg-orange-100 text-orange-700' : 'text-gray-500 hover:bg-orange-50 hover:text-orange-700'}`}
                >       
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="mr-3 h-5 w-5 text-orange-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Suiver Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick('ListeAnnonce')}
                  className={`flex w-full items-center rounded-lg px-4 py-2 text-sm font-medium ${activeComponent === 'ListeAnnonce' ? 'bg-orange-100 text-orange-700' : 'text-gray-500 hover:bg-orange-50 hover:text-orange-700'}`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="mr-3 h-5 w-5 text-orange-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Liste des Location
                </button>
              </li>
              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-orange-50 hover:text-orange-700">
                    <div className="flex items-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="mr-3 h-5 w-5 text-orange-500" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-sm font-medium">Account</span>
                    </div>
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 text-orange-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <button
                        onClick={() => handleClick('Details')}
                        className={`flex w-full items-center rounded-lg px-4 py-2 text-sm font-medium ${activeComponent === 'Details' ? 'bg-orange-100 text-orange-700' : 'text-gray-500 hover:bg-orange-50 hover:text-orange-700'}`}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="mr-3 h-4 w-4 text-orange-500" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Details
                      </button>
                    </li>
                    <li>
                      <form action="#">
                        <button
                          type="submit"
                          className="flex w-full items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-orange-50 hover:text-orange-700"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="mr-3 h-4 w-4 text-orange-500" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Logout
                        </button>
                      </form>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebare;

