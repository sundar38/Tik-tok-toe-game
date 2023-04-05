import { FaTimes, FaRegCircle, FaPen} from "react-icons/fa";
const Icons=({usericon})=>{    
        switch(usericon){
            case "Circle":
                return <FaRegCircle/>
            case "Cross":
                return <FaTimes/>
            default:
                return <FaPen/>



        }

    
}
export default Icons;