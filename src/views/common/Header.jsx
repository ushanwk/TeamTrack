import logo from '../../assets/image/Logo.png';
import profile from '../../assets/image/Profile.png';
import notification from '../../assets/image/NotificationIcon.png';
import setting from '../../assets/image/Setting.png';
import {tabName} from "../../assets/const/tabs";

export function Header({selectedTab, setSelectedTab}) {

    return (
        <header className="w-full px-[130px] py-[20px] flex justify-between max-sm:px-[10px] bg-gray-100 border-b-2">
            <h1 className="font-bold text-xl mt-2">TeamTrack.</h1>

           <div className="flex gap-2">

                {
                   tabName.map((name, index) => (
                       <div
                           className={`flex items-center justify-center bg-white w-[80px] rounded-[10px] gap-2 max-xl:h-[50px] max-xl:w-full ${selectedTab == index ? 'border-[2px]' : undefined}`}
                           key={index}
                           onClick={() => setSelectedTab(index)}
                           >
                               <p className="text-[12px] opacity-40 font-semibold cursor-default">{name}</p>
                       </div>
                   ))
                }
           </div>

            <div className="flex gap-5">

                <a><img src={setting} className="mt-5 w-[20px] h-[20px] cursor-pointer hover:rotate-45"/></a>
                <img src={notification} className="mt-5 w-[20px] h-[20px] cursor-pointer max-lg:hidden hover:rotate-12"/>
                <img src={profile} className="mt-4 w-[30px] h-[30px] ml-4 max-lg:hidden"/>

            </div>
        </header>
    )
}
