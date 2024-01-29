

const mainPage = () => {
    return (
        <>
        <body className="bg-gray-100">
    <div className="flex h-screen">
        <div className="w-64 bg-white shadow-md">
            <div className="p-6">
                <div className="flex items-center space-x-4 p-2 mb-5">
                    {/* <Image className="h-8" src="https://placehold.co/50x50" alt="Company logo"> */}
                    <span className="text-gray-700 font-bold">fixform</span>
                </div>
                <div className="space-y-2">
                    <div className="bg-gray-200 p-2 rounded-md">종합통계정</div>
                    <div className="p-2">TEST COMPANY</div>
                    <div className="p-2">TEST</div>
                    <div className="p-2">TEST C</div>
                    <div className="p-2">TEST C</div>
                    <div className="p-2">TEST C</div>
                </div>
            </div>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                {/* <img className="block lg:hidden h-8 w-auto" src="https://placehold.co/50x50" alt="Workflow">
                                <img className="hidden lg:block h-8 w-auto" src="https://placehold.co/50x50" alt="Workflow"> */}
                            </div>
                            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Locations
                                </a>
                                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Tasks
                                </a>
                                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Insights
                                </a>
                                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                    Organisation
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-500 focus:outline-none">
                                <i className="fas fa-question-circle"></i> Help Center
                            </button>
                            <button className="text-gray-500 focus:outline-none">
                                <i className="fas fa-user-circle"></i> SP
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                <div className="container mx-auto px-6 py-8">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white p-6 shadow-md rounded-md">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-gray-700">Open</h3>
                                <span className="text-gray-700">0</span>
                            </div>
                            <p className="text-gray-500">Unassigned problems</p>
                        </div>

                        <div className="bg-white p-6 shadow-md rounded-md">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-gray-700">Scheduled</h3>
                                <span className="text-gray-700">0</span>
                            </div>
                            <p className="text-gray-500">Assigned problems</p>
                        </div>

                        <div className="bg-white p-6 shadow-md rounded-md">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-gray-700">Completed</h3>
                                <span className="text-gray-700">0</span>
                            </div>
                            <p className="text-gray-500">In last 30 days</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="bg-white p-6 shadow-md rounded-md">
                            <h3 className="text-gray-700 mb-4">Categories</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <p className="text-gray-500">Cleaning <span className="text-gray-700">0</span></p>
                                <p className="text-gray-500">Connectivity <span className="text-gray-700">0</span></p>
                                <p className="text-gray-500">Devices <span className="text-gray-700">0</span></p>
                                <p className="text-gray-500">Electricity & Lighting <span className="text-gray-700">0</span></p>
                                <p className="text-gray-500">Furniture <span className="text-gray-700">0</span></p>
                                <p className="text-gray-500">HVAC <span className="text-gray-700">0</span></p>
                                <p className="text-gray-500">Other <span className="text-gray-700">0</span></p>
                                <p className="text-gray-500">Plumbing <span className="text-gray-700">0</span></p>
                                <p className="text-gray-500">Structural <span className="text-gray-700">0</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

</body>
        </>
    );
}

export default mainPage;