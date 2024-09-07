import { FaHome, FaUserAlt, FaShoppingCart, FaCog } from "react-icons/fa";

const MenuData = [
    {
        title:"หน้าแรก",
        path:"/",
        icon:<FaHome />
    },
    {
        title:"สมาชิก",
        path:"/member",
        icon:<FaUserAlt />
    },
    {
        title:"สินค้า",
        path:"/product",
        icon:<FaShoppingCart />
    },
    {
        title:"ตั้งค่า",
        path:"/setup",
        icon:<FaCog />
    }
]

export default MenuData;