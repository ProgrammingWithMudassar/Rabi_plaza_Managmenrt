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
//     { id: 1, Shop_No: 1, rental: 'Snow',      email:"abcd123@gmail.com",m_num:300,S_honor: 'Jon', size: 35, floor: 2, S_date: "12/3/2023", r_rent: 2500 },
//     { id: 2, Shop_No: 2, rental: 'Lannister', email:"abcd123@gmail.com",m_num:300,S_honor: 'Cersei', size: 42, floor: 2, S_date: "12/3/2023", r_rent: 0 },
//     { id: 3, Shop_No: 3, rental: 'Lannister', email:"abcd123@gmail.com",m_num:300,S_honor: 'Jaime', size: 45, floor: 2, S_date: "12/3/2023", r_rent: 2000 },
//     { id: 4, Shop_No: 4, rental: 'Stark',     email:"abcd123@gmail.com",m_num:310,S_honor: 'Arya', size: 16, floor: 2, S_date: "12/3/2023", r_rent: 0 },
//     { id: 5, Shop_No: 5, rental: 'Targaryen', email:"abcd123@gmail.com",m_num:312,S_honor: 'Daenerys', size: 34, floor: 2, S_date: "12/3/2023", r_rent: 2000 },
//     { id: 6, Shop_No: 6, rental: 'Melisandre',email:"abcd123@gmail.com",m_num:345,S_honor: null, size: 15, floor: 20, S_date: "12/3/2023", r_rent: 0 },
//     { id: 7, Shop_No: 7, rental: 'Clifford',  email:"abcd123@gmail.com",m_num:306,S_honor: 'Ferrara', size: 44, floor: 2, S_date: "12/3/2023", r_rent: 2000 },
//     { id: 8, Shop_No: 8, rental: 'Frances',   email:"abcd123@gmail.com",m_num:300,S_honor: 'Rossini', size: 36, floor: 2, S_date: "12/3/2023", r_rent: 2000 },
  { id: 1, Shop_No: 1, rental: 'Snow', email: 'abcd123@gmail.com', m_num: 300, S_honor: 'Jon', size: 35, floor: 2, S_date: '12/3/2023', r_rent: 2500 },
  { id: 2, Shop_No: 2, rental: 'Lannister', email: 'efgh456@gmail.com', m_num: 310, S_honor: 'Tyrion', size: 40, floor: 3, S_date: '12/4/2023', r_rent: 1800 },
  { id: 3, Shop_No: 3, rental: 'Targaryen', email: 'ijkl789@gmail.com', m_num: 320, S_honor: 'Daenerys', size: 45, floor: 4, S_date: '12/5/2023', r_rent: 0 },
  { id: 4, Shop_No: 4, rental: 'Stark', email: 'mnopq123@gmail.com', m_num: 330, S_honor: 'Arya', size: 30, floor: 5, S_date: '12/6/2023', r_rent: 1500 },
  { id: 5, Shop_No: 5, rental: 'Lannister', email: 'rstuv456@gmail.com', m_num: 340, S_honor: 'Cersei', size: 42, floor: 6, S_date: '12/7/2023', r_rent: 0 },
  { id: 6, Shop_No: 6, rental: 'Targaryen', email: 'wxyz789@gmail.com', m_num: 350, S_honor: 'Viserys', size: 34, floor: 7, S_date: '12/8/2023', r_rent: 0 },
  { id: 7, Shop_No: 7, rental: 'Stark', email: 'abcd123@gmail.com', m_num: 360, S_honor: 'Bran', size: 20, floor: 8, S_date: '12/9/2023', r_rent: 1800 },
  { id: 8, Shop_No: 8, rental: 'Snow', email: 'efgh456@gmail.com', m_num: 370, S_honor: 'Sansa', size: 28, floor: 9, S_date: '12/10/2023', r_rent: 1500 },
  { id: 9, Shop_No: 9, rental: 'Lannister', email: 'ijkl789@gmail.com', m_num: 380, S_honor: 'Jaime', size: 38, floor: 10, S_date: '12/11/2023', r_rent: 0 },
  { id: 10, Shop_No: 10, rental: 'Stark', email: 'mnopq123@gmail.com', m_num: 390, S_honor: 'Arya', size: 25, floor: 11, S_date: '12/12/2023', r_rent: 1500 },
  { id: 11, Shop_No: 11, rental: 'Targaryen', email: 'rstuv456@gmail.com', m_num: 400, S_honor: 'Daenerys', size: 50, floor: 12, S_date: '12/13/2023', r_rent: 2500 },
  { id: 12, Shop_No: 12, rental: 'Snow', email: 'wxyz789@gmail.com', m_num: 410, S_honor: 'Jon', size: 42, floor: 13, S_date: '12/14/2023', r_rent: 0 },
  { id: 13, Shop_No: 13, rental: 'Lannister', email: 'abcd123@gmail.com', m_num: 420, S_honor: 'Tyrion', size: 30, floor: 14, S_date: '12/15/2023', r_rent: 1500 },
  { id: 14, Shop_No: 14, rental: 'Targaryen', email: 'efgh456@gmail.com', m_num: 430, S_honor: 'Viserys', size: 35, floor: 15, S_date: '12/16/2023', r_rent: 1800 },
  { id: 15, Shop_No: 15, rental: 'Stark', email: 'ijkl789@gmail.com', m_num: 440, S_honor: 'Bran', size: 40, floor: 16, S_date: '12/17/2023', r_rent: 0 },
  { id: 16, Shop_No: 16, rental: 'Lannister', email: 'mnopq123@gmail.com', m_num: 450, S_honor: 'Cersei', size: 28, floor: 17, S_date: '12/18/2023', r_rent: 1500 },
  { id: 17, Shop_No: 17, rental: 'Snow', email: 'rstuv456@gmail.com', m_num: 460, S_honor: 'Sansa', size: 38, floor: 18, S_date: '12/19/2023', r_rent: 0 },
  { id: 18, Shop_No: 18, rental: 'Targaryen', email: 'wxyz789@gmail.com', m_num: 470, S_honor: 'Daenerys', size: 45, floor: 19, S_date: '12/20/2023', r_rent: 0 },
  { id: 19, Shop_No: 19, rental: 'Stark', email: 'abcd123@gmail.com', m_num: 480, S_honor: 'Arya', size: 30, floor: 20, S_date: '12/21/2023', r_rent: 1500 },
  { id: 20, Shop_No: 20, rental: 'Lannister', email: 'efgh456@gmail.com', m_num: 490, S_honor: 'Jaime', size: 42, floor: 21, S_date: '12/22/2023', r_rent: 0 },
  { id: 21, Shop_No: 21, rental: 'Targaryen', email: 'ijkl789@gmail.com', m_num: 500, S_honor: 'Viserys', size: 34, floor: 22, S_date: '12/23/2023', r_rent: 0 },
  { id: 22, Shop_No: 22, rental: 'Stark', email: 'mnopq123@gmail.com', m_num: 510, S_honor: 'Bran', size: 20, floor: 23, S_date: '12/24/2023', r_rent: 1800 },
  { id: 23, Shop_No: 23, rental: 'Snow', email: 'rstuv456@gmail.com', m_num: 520, S_honor: 'Sansa', size: 28, floor: 24, S_date: '12/25/2023', r_rent: 1500 },
  { id: 24, Shop_No: 24, rental: 'Lannister', email: 'wxyz789@gmail.com', m_num: 530, S_honor: 'Tyrion', size: 38, floor: 25, S_date: '12/26/2023', r_rent: 2000 },
  { id: 25, Shop_No: 25, rental: 'Targaryen', email: 'abcd123@gmail.com', m_num: 540, S_honor: 'Daenerys', size: 25, floor: 26, S_date: '12/27/2023', r_rent: 1500 },
  { id: 26, Shop_No: 26, rental: 'Stark', email: 'efgh456@gmail.com', m_num: 550, S_honor: 'Arya', size: 50, floor: 27, S_date: '12/28/2023', r_rent: 2500 },
  { id: 27, Shop_No: 27, rental: 'Lannister', email: 'ijkl789@gmail.com', m_num: 560, S_honor: 'Cersei', size: 42, floor: 28, S_date: '12/29/2023', r_rent: 2000 },
  { id: 28, Shop_No: 28, rental: 'Targaryen', email: 'mnopq123@gmail.com', m_num: 570, S_honor: 'Jaime', size: 30, floor: 29, S_date: '12/30/2023', r_rent: 1500 },
  { id: 29, Shop_No: 29, rental: 'Stark', email: 'rstuv456@gmail.com', m_num: 580, S_honor: 'Bran', size: 35, floor: 30, S_date: '12/31/2023', r_rent: 1800 },
  { id: 30, Shop_No: 30, rental: 'Snow', email: 'wxyz789@gmail.com', m_num: 590, S_honor: 'Sansa', size: 40, floor: 31, S_date: '1/1/2024', r_rent: 2000 },
  { id: 31, Shop_No: 31, rental: 'Lannister', email: 'abcd123@gmail.com', m_num: 600, S_honor: 'Tyrion', size: 28, floor: 32, S_date: '1/2/2024', r_rent: 1500 },
  { id: 32, Shop_No: 32, rental: 'Targaryen', email: 'efgh456@gmail.com', m_num: 610, S_honor: 'Daenerys', size: 38, floor: 33, S_date: '1/3/2024', r_rent: 2000 },
];
  