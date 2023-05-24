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
        key:4,
        route:"report",
        text:"Report",
        Icon :faFile
    },
    {
        key:5,
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

export const  rows = [
    { id: 1, Shop_No: 1, rental: 'Snow', S_honor: 'Jon', size: 35, floor: 2, S_date: "12/3/2023", r_rent: 2500 },
    { id: 2, Shop_No: 2, rental: 'Lannister', S_honor: 'Cersei', size: 42, floor: 2, S_date: "12/3/2023", r_rent: 0 },
    { id: 3, Shop_No: 3, rental: 'Lannister', S_honor: 'Jaime', size: 45, floor: 2, S_date: "12/3/2023", r_rent: 2000 },
    { id: 4, Shop_No: 4, rental: 'Stark', S_honor: 'Arya', size: 16, floor: 2, S_date: "12/3/2023", r_rent: 3000 },
    { id: 5, Shop_No: 5, rental: 'Targaryen', S_honor: 'Daenerys', size: 34, floor: 2, S_date: "12/3/2023", r_rent: 2000 },
    { id: 6, Shop_No: 6, rental: 'Melisandre', S_honor: null, size: 15, floor: 20, S_date: "12/3/2023", r_rent: 2000 },
    { id: 7, Shop_No: 7, rental: 'Clifford', S_honor: 'Ferrara', size: 44, floor: 2, S_date: "12/3/2023", r_rent: 2000 },
    { id: 8, Shop_No: 8, rental: 'Frances', S_honor: 'Rossini', size: 36, floor: 2, S_date: "12/3/2023", r_rent: 2000 },
    { id: 9, Shop_No: 9, rental: 'Roxie', S_honor: 'Harvey', size: 65, floor: 2, S_date: "12/3/2023", r_rent: 2000 },
  ];
  