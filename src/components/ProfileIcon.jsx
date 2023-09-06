import { TbGridDots } from "react-icons/tb";
import profileRing from '../assets/profile-ring.svg';
import Profile from "../assets/MyProfile.png";

const ProfileIcon = () => {
    return (
        <div className="flex items-center gap-2">
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                <TbGridDots size={20} color="#5f6368"/>
            </span>
            <span className="h-10 w-10 relative flex justify-center items-center"> 
                <img className = "absolute" src={profileRing}/>
                <span className="h-10 w-10 rounded-full overflow-hidden">
                    <img className = "h-full w-full object-cover" src={Profile}/>
                </span>
            </span>
        </div>
    );
};

export default ProfileIcon;
