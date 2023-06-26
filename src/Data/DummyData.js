import GroupsIcon from '@mui/icons-material/Groups';
import { faHouse ,faShop, faChartSimple, faCalculator, faFile } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';



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
        route:"Expence_calculate",
        text:"Expence Calculate",
        Icon :faCalculator
    },
    {
        key:5,
        route:"RentShopForm",
        text:"Add Rent Shop",
        Icon :faChartSimple
    },
    {
        key:6,
        route:"All_rent_shop",
        text:"Add Rent Shop",
        Icon :faShop
    },
    {
        key:7,
        route:"report",
        text:"Report",
        Icon :faFile
    },
    {
        key:8,
        route:"logout",
        text:"LogOut",
        Icon :faArrowRightFromBracket
    }
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
