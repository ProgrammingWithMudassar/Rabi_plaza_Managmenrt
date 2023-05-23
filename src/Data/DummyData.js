import GroupsIcon from '@mui/icons-material/Groups';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';

import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';



export const SlideBarData =[
    {
        key:1,
        route:"",
        text:"Home",
        Icon :faHouse
    },
    {
        key:2,
        route:"All_Shop_data",
        text:"All Shop's",
        Icon :faShop
    },
    {
        key:3,
        route:"ShopForm",
        text:"Add New Shop",
        Icon :faChartSimple
    },
    {
        key:4,
        route:"",
        text:"first",
        Icon :faHouse
    },
    {
        key:5,
        route:"",
        text:"LogOut",
        Icon :faArrowRightFromBracket
    },
]

export const HomeCardData = [
    {
        text:'Total Shop',
        count:1000,
        Icon: AddBusinessIcon
     },
    {
        text:'Register Shop',
        count:700,
        Icon: GroupsIcon
     },
    {
    
        text:'Income',
        count: "1,20,000",
        Icon: AttachMoneyIcon
    },
]
