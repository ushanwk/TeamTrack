import {useEffect, useState} from "react";
import axios from "axios";

export function AllEmployeesPage() {

      const [employees, setEmployees] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
          const fetchEmployees = async () => {
              try {
                  const response = await axios.get("http://localhost:5000/api/employees");
                  setEmployees(response.data);
              } catch (err) {
                  setError(err.message);
              } finally {
                  setLoading(false);
              }
          };

          fetchEmployees();
      }, []);

    return (
        <div className='className="w-full px-[130px] py-[50px] flex-col justify-center max-sm:px-[10px]'>
             <h1 className="font-bold text-2xl">All Employees</h1>
        </div>
    )
}