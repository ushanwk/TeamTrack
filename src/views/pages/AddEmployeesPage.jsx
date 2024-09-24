export function AddEmployeesPage() {
    return (
        <div className='className="w-full px-[130px] py-[50px] flex-col justify-center max-sm:px-[10px]'>
             <h1 className="font-bold text-2xl">Add Employees</h1>

             <div class="max-w-4xl mx-auto font-[sans-serif] p-6">

                  <form>
                       <div class="grid sm:grid-cols-2 gap-8">
                           <div>
                                       <label class="text-gray-800 text-sm mb-2 block">Employee No</label>
                                       <input name="empNo" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Employee No" />
                           </div>
                           <div>
                                       <label class="text-gray-800 text-sm mb-2 block">Employee Name</label>
                                       <input name="name" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Employee name" />
                           </div>
                           <div>
                                       <label class="text-gray-800 text-sm mb-2 block">Employee Address Line 1</label>
                                       <input name="addressLine1" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Employee Address Line 1" />
                           </div>
                           <div>
                                       <label class="text-gray-800 text-sm mb-2 block">Employee Address Line 2</label>
                                       <input name="addressLine2" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Employee Address Line 2" />
                           </div>
                           <div>
                                       <label class="text-gray-800 text-sm mb-2 block">Department Code</label>
                                       <input name="depCode" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Department Code" />
                           </div>
                           <div>
                                       <label class="text-gray-800 text-sm mb-2 block">Date of Join</label>
                                       <input name="doj" type="date" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Date of Join" />
                           </div>
                           <div>
                                       <label class="text-gray-800 text-sm mb-2 block">Date of Birth</label>
                                       <input name="dob" type="date" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Date of Birth" />
                           </div>
                           <div>
                                        <label class="text-gray-800 text-sm mb-2 block">Basic Salary</label>
                                        <input name="salary" type="number" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter Basic Salary" />
                           </div>
                       </div>

                       <div class="!mt-12">
                           <button type="button" class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                       Add Employee
                           </button>
                       </div>
                  </form>
             </div>

        </div>
    )
}