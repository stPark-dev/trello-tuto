const MainContent = () => {
  return (
    <>
      <div className="flex flex-grow flex-col">
        <div data-v-08d12acd="">
          <div data-v-08d12acd="" className="p-8 bg-white border-b border-b-gray-200">
            <div className="flex grow items-center justify-between">
              <h1 className="text-gray-900 text-xl font-medium">Buildings</h1>
              <button
                type="button"
                className="disabled:opacity-50 inline-flex gap-2 justify-center items-center rounded-lg border border-transparent px-[18px] py-2.5 text-base font-semibold shadow-sm sm:text-sm bg-brand-900 text-white hover:bg-brand-800 focus:outline-brand-800 focus:bg-brand-800/80"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 order-first">
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                </svg>
                <span>Add building</span>
              </button>
            </div>
          </div>
          <div data-v-08d12acd="" className="dynamic-height overflow-scroll">
            <div data-v-08d12acd="" role="list" className="flex flex-wrap gap-2 p-6">
              <div data-v-08d12acd="" className="flex shrink-0 flex-col justify-between rounded-lg bg-white shadow sm:w-96 h-48 px-6 py-5 cursor-pointer">
                <div className="flex flex-col gap-2">
                  <div className="flex w-full items-center gap-2">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300 p-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path
                          d="M7.5 11H4.6C4.03995 11 3.75992 11 3.54601 11.109C3.35785 11.2049 3.20487 11.3578 3.10899 11.546C3 11.7599 3 12.0399 3 12.6V21M16.5 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V21M16.5 21V6.2C16.5 5.0799 16.5 4.51984 16.282 4.09202C16.0903 3.71569 15.7843 3.40973 15.408 3.21799C14.9802 3 14.4201 3 13.3 3H10.7C9.57989 3 9.01984 3 8.59202 3.21799C8.21569 3.40973 7.90973 3.71569 7.71799 4.09202C7.5 4.51984 7.5 5.0799 7.5 6.2V21M22 21H2M11 7H13M11 11H13M11 15H13"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-black whitespace-normal line-clamp-2">TEST</h3>
                  </div>
                  <div className="text-sm">
                    <div></div>
                    <div> </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="isolate flex -space-x-1 overflow-hidden p-0.5 pl-0.5">
                    <div className="h-6 w-6 place-items-center ring-1 ring-brand-900/25 rounded-full relative inline-block" style={{ zIndex: 0 }}>
                      <div className="h-6 w-6 bg-gray-100 flex items-center justify-center rounded-full">
                        <div className="text-xs font-medium text-gray-600 uppercase">SP</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 truncate">
                    <button
                      type="button"
                      className="float-right inline-flex items-center rounded-md border border-transparent bg-gray-200 px-3 py-2 text-sm font-medium leading-4 text-brand-900 shadow-sm focus:outline-none focus:ring-0 focus:ring-offset-0"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-0.5 mr-2 h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.8428 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>{" "}
                      Free Trial
                    </button>
                  </div>
                </div>
              </div>
              <div data-v-08d12acd="" className="flex shrink-0 flex-col justify-between rounded-lg bg-white shadow sm:w-96 h-48 px-6 py-5 cursor-pointer">
                <div className="flex flex-col gap-2">
                  <div className="flex w-full items-center gap-2">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300 p-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path
                          d="M7.5 11H4.6C4.03995 11 3.75992 11 3.54601 11.109C3.35785 11.2049 3.20487 11.3578 3.10899 11.546C3 11.7599 3 12.0399 3 12.6V21M16.5 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V21M16.5 21V6.2C16.5 5.0799 16.5 4.51984 16.282 4.09202C16.0903 3.71569 15.7843 3.40973 15.408 3.21799C14.9802 3 14.4201 3 13.3 3H10.7C9.57989 3 9.01984 3 8.59202 3.21799C8.21569 3.40973 7.90973 3.71569 7.71799 4.09202C7.5 4.51984 7.5 5.0799 7.5 6.2V21M22 21H2M11 7H13M11 11H13M11 15H13"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-black whitespace-normal line-clamp-2">TEST C</h3>
                  </div>
                  <div className="text-sm">
                    <div></div>
                    <div> </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="isolate flex -space-x-1 overflow-hidden p-0.5 pl-0.5">
                    <div className="h-6 w-6 place-items-center ring-1 ring-brand-900/25 rounded-full relative inline-block" style={{ zIndex: 0 }}>
                      <div className="h-6 w-6 bg-gray-100 flex items-center justify-center rounded-full">
                        <div className="text-xs font-medium text-gray-600 uppercase">SP</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 truncate">
                    <button
                      type="button"
                      className="float-right inline-flex items-center rounded-md border border-transparent bg-gray-200 px-3 py-2 text-sm font-medium leading-4 text-brand-900 shadow-sm focus:outline-none focus:ring-0 focus:ring-offset-0"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-0.5 mr-2 h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.8428 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>{" "}
                      Free Trial
                    </button>
                  </div>
                </div>
              </div>
              <div data-v-08d12acd="" className="flex shrink-0 flex-col justify-between rounded-lg bg-white shadow sm:w-96 h-48 px-6 py-5 cursor-pointer">
                <div className="flex flex-col gap-2">
                  <div className="flex w-full items-center gap-2">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300 p-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path
                          d="M7.5 11H4.6C4.03995 11 3.75992 11 3.54601 11.109C3.35785 11.2049 3.20487 11.3578 3.10899 11.546C3 11.7599 3 12.0399 3 12.6V21M16.5 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V21M16.5 21V6.2C16.5 5.0799 16.5 4.51984 16.282 4.09202C16.0903 3.71569 15.7843 3.40973 15.408 3.21799C14.9802 3 14.4201 3 13.3 3H10.7C9.57989 3 9.01984 3 8.59202 3.21799C8.21569 3.40973 7.90973 3.71569 7.71799 4.09202C7.5 4.51984 7.5 5.0799 7.5 6.2V21M22 21H2M11 7H13M11 11H13M11 15H13"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-black whitespace-normal line-clamp-2">TEST C</h3>
                  </div>
                  <div className="text-sm">
                    <div></div>
                    <div> </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="isolate flex -space-x-1 overflow-hidden p-0.5 pl-0.5">
                    <div className="h-6 w-6 place-items-center ring-1 ring-brand-900/25 rounded-full relative inline-block" style={{ zIndex: 0 }}>
                      <div className="h-6 w-6 bg-gray-100 flex items-center justify-center rounded-full">
                        <div className="text-xs font-medium text-gray-600 uppercase">SP</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 truncate">
                    <button
                      type="button"
                      className="float-right inline-flex items-center rounded-md border border-transparent bg-gray-200 px-3 py-2 text-sm font-medium leading-4 text-brand-900 shadow-sm focus:outline-none focus:ring-0 focus:ring-offset-0"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-0.5 mr-2 h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.8428 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>{" "}
                      Free Trial
                    </button>
                  </div>
                </div>
              </div>
              <div data-v-08d12acd="" className="flex shrink-0 flex-col justify-between rounded-lg bg-white shadow sm:w-96 h-48 px-6 py-5 cursor-pointer">
                <div className="flex flex-col gap-2">
                  <div className="flex w-full items-center gap-2">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300 p-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path
                          d="M7.5 11H4.6C4.03995 11 3.75992 11 3.54601 11.109C3.35785 11.2049 3.20487 11.3578 3.10899 11.546C3 11.7599 3 12.0399 3 12.6V21M16.5 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V21M16.5 21V6.2C16.5 5.0799 16.5 4.51984 16.282 4.09202C16.0903 3.71569 15.7843 3.40973 15.408 3.21799C14.9802 3 14.4201 3 13.3 3H10.7C9.57989 3 9.01984 3 8.59202 3.21799C8.21569 3.40973 7.90973 3.71569 7.71799 4.09202C7.5 4.51984 7.5 5.0799 7.5 6.2V21M22 21H2M11 7H13M11 11H13M11 15H13"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-black whitespace-normal line-clamp-2">TEST C</h3>
                  </div>
                  <div className="text-sm">
                    <div></div>
                    <div> </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="isolate flex -space-x-1 overflow-hidden p-0.5 pl-0.5">
                    <div className="h-6 w-6 place-items-center ring-1 ring-brand-900/25 rounded-full relative inline-block" style={{ zIndex: 0 }}>
                      <div className="h-6 w-6 bg-gray-100 flex items-center justify-center rounded-full">
                        <div className="text-xs font-medium text-gray-600 uppercase">SP</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 truncate">
                    <button
                      type="button"
                      className="float-right inline-flex items-center rounded-md border border-transparent bg-gray-200 px-3 py-2 text-sm font-medium leading-4 text-brand-900 shadow-sm focus:outline-none focus:ring-0 focus:ring-offset-0"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-0.5 mr-2 h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.8428 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>{" "}
                      Free Trial
                    </button>
                  </div>
                </div>
              </div>
              <div data-v-08d12acd="" className="flex shrink-0 flex-col justify-between rounded-lg bg-white shadow sm:w-96 h-48 px-6 py-5 cursor-pointer">
                <div className="flex flex-col gap-2">
                  <div className="flex w-full items-center gap-2">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300 p-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path
                          d="M7.5 11H4.6C4.03995 11 3.75992 11 3.54601 11.109C3.35785 11.2049 3.20487 11.3578 3.10899 11.546C3 11.7599 3 12.0399 3 12.6V21M16.5 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V21M16.5 21V6.2C16.5 5.0799 16.5 4.51984 16.282 4.09202C16.0903 3.71569 15.7843 3.40973 15.408 3.21799C14.9802 3 14.4201 3 13.3 3H10.7C9.57989 3 9.01984 3 8.59202 3.21799C8.21569 3.40973 7.90973 3.71569 7.71799 4.09202C7.5 4.51984 7.5 5.0799 7.5 6.2V21M22 21H2M11 7H13M11 11H13M11 15H13"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-black whitespace-normal line-clamp-2">TEST COMPANY</h3>
                  </div>
                  <div className="text-sm">
                    <div></div>
                    <div> </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="isolate flex -space-x-1 overflow-hidden p-0.5 pl-0.5">
                    <div className="h-6 w-6 place-items-center ring-1 ring-brand-900/25 rounded-full relative inline-block" style={{ zIndex: 0 }}>
                      <div className="h-6 w-6 bg-gray-100 flex items-center justify-center rounded-full">
                        <div className="text-xs font-medium text-gray-600 uppercase">SP</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 truncate">
                    <button
                      type="button"
                      className="float-right inline-flex items-center rounded-md border border-transparent bg-gray-200 px-3 py-2 text-sm font-medium leading-4 text-brand-900 shadow-sm focus:outline-none focus:ring-0 focus:ring-offset-0"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-0.5 mr-2 h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.8428 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>{" "}
                      Free Trial
                    </button>
                  </div>
                </div>
              </div>
              <div data-v-08d12acd="" className="flex shrink-0 flex-col justify-between rounded-lg bg-white shadow sm:w-96 h-48 px-6 py-5 cursor-pointer">
                <div className="flex flex-col gap-2">
                  <div className="flex w-full items-center gap-2">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300 p-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path
                          d="M7.5 11H4.6C4.03995 11 3.75992 11 3.54601 11.109C3.35785 11.2049 3.20487 11.3578 3.10899 11.546C3 11.7599 3 12.0399 3 12.6V21M16.5 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V21M16.5 21V6.2C16.5 5.0799 16.5 4.51984 16.282 4.09202C16.0903 3.71569 15.7843 3.40973 15.408 3.21799C14.9802 3 14.4201 3 13.3 3H10.7C9.57989 3 9.01984 3 8.59202 3.21799C8.21569 3.40973 7.90973 3.71569 7.71799 4.09202C7.5 4.51984 7.5 5.0799 7.5 6.2V21M22 21H2M11 7H13M11 11H13M11 15H13"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-black whitespace-normal line-clamp-2">종합운동장</h3>
                  </div>
                  <div className="text-sm">
                    <div></div>
                    <div> </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="isolate flex -space-x-1 overflow-hidden p-0.5 pl-0.5">
                    <div className="h-6 w-6 place-items-center ring-1 ring-brand-900/25 rounded-full relative inline-block" style={{ zIndex: 0 }}>
                      <div className="h-6 w-6 bg-gray-100 flex items-center justify-center rounded-full">
                        <div className="text-xs font-medium text-gray-600 uppercase">SP</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 truncate">
                    <button
                      type="button"
                      className="float-right inline-flex items-center rounded-md border border-transparent bg-gray-200 px-3 py-2 text-sm font-medium leading-4 text-brand-900 shadow-sm focus:outline-none focus:ring-0 focus:ring-offset-0"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-0.5 mr-2 h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.8428 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>{" "}
                      Free Trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
