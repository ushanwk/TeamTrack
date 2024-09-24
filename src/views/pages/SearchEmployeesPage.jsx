export function SearchEmployeesPage() {
    return (
        <div className='className="w-full px-[130px] py-[50px] flex-col justify-center max-sm:px-[10px]'>
                      <h1 className="font-bold text-2xl">Search Employees</h1>

                      <div class="max-w-4xl mx-auto font-[sans-serif] p-6">
                            <form>
                               <div class="grid sm:grid-cols-2 gap-8">
                                    <div>
                                         <label class="text-gray-800 text-sm mb-2 block">Employee No</label>
                                         <input name="empNo" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Employee No" />
                                    </div>

                                    <div class="!mt-7">
                                         <button type="button" class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                              Search Employee
                                         </button>
                                    </div>
                               </div>
                            </form>
                      </div>
                </div>
    )
}