import React, {useState} from "react"
import { Link,navigate } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {Button,Paper,Box,Dialog} from '@material-ui/core';
import {test,test2} from "../components/test"
import './mainStyle.css'
console.log(test())
console.log(test2())

console.log(test())


let names=['Sales Representative','Customer Service','Corporate']
let phones=['909-287-7354','909-548-8253','626-457-9346']
let ems=['Omar@success-furniture.com','Mike@success-furniture.com','Dion@success-furniture.com']
const IndexPage = () => {
let [open,setOpen]=useState(false)
let [selected,setSelected]=useState(0)
  return(<>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    
    <SEO title="Home" />
    <Dialog selectedValue={selected} open={open} onClose={()=>{setOpen(false)}} ><div className='ascs'>

      Contact us:
  
      <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>

{names.map((e,i)=>{
  return <div className='asc'>
    {e}:<br/>
    {ems[i]}<br/>
    {phones[i]}
    
    </div>
})}
  </div>
</div>
      </Dialog>
    <div className='pageContainer fabric'>
      <header className='pageHeader wood'>
    <div className='title'>success furniture</div>
    <span className='subTitle'>Home and Office Furnishings</span>
      </header>
      <div className='bodyContainer'>
       <img className='mainPhoto' src='https://res.cloudinary.com/scentre-group-au/image/fetch/c_fill,q_auto,g_faces:auto,w_2500,h_1071,f_auto/https://cam.scentregroup.io/m/4d02cdaa2eaad901'/>
    
       <div className='mainContent'>
         <h3 className='header3'>Quality Furniture at Wholesale Prices!</h3>
         <div className='openingMessage'>
    If you need to furnish your home or office "Empowering Success Now" home and office furniture division can provide you the furnishings you need!
    We offer a wide variety of furniture choices at great prices!
    Click below or visit our showroom today!
    Call for pricing inquires!
    </div>
    <div className='u-centerX'><Button onClick={()=>{setOpen(true)}} variant='contained'> Get a free estimate Now </Button></div> 
    
    {/* <img src='https://s3.amazonaws.com/colorcombos-images/users/1/color-schemes/color-scheme-99-main.png?v=20110818210850'/> */}
    
    
       </div>

       <Box>   <Box py={4}><Sellers/></Box>
    </Box>
       </div>
       </div>
    </>
    )
}

export default IndexPage
function Sellers(){
  let list=[
{
  name:'ACME Furniture',
  description:'Bedroom, Living-room, Dining room,TV Stand and More ',
  image:'https://www.empoweringsuccessnow.org/x/cdn/?https://storage.googleapis.com/wzukusers/user-17851163/images/5b33b63e9fcdbGku8pav/download_d200.jpg'
,link:"  https://www.acmecorp.com/"
},
{
  name:'Pondex Furniture',
  description:'Bedroom, Living Room, Dining Room, Family Room, TV Stands',
  image:'https://www.empoweringsuccessnow.org/x/cdn/?https://storage.googleapis.com/wzukusers/user-17851163/images/5b33b77f2475ati0zwu9/coa-50068-CO-slr-set-1_d200.jpg'
,link:"  https://www.poundex.com/"
},
{
  name:'New Classic',
  description:'Bedroom, Living room, Dining Room, Youth Furniture',
  link:"https://www.newclassicfurniture.com/",
  image:'https://www.empoweringsuccessnow.org/x/cdn/?https://images.unsplash.com/photo-1488901512066-cd403111aeb2?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=4586cc286da2958995df39627028aa43&w=200'
},
{
  name:'Office Star',
  description:'Office Desk, Table, Chairs, File Cabinets, Hutches',
  link:"https://www.officestar.net/",
  image:'https://www.empoweringsuccessnow.org/x/cdn/?https://storage.googleapis.com/wzukusers/user-17851163/images/5b33b9d26c79aDAyKm8l/download-1.jpg'
},
{
  name:'Furniture of America',
  description:'Bedroom, Living room, Dining Room, Youth, Out door and More',
  link:"https://www.foagroup.com/",
  image:'https://www.empoweringsuccessnow.org/x/cdn/?https://images.unsplash.com/photo-1520032484190-e5ef81d87978?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=847a30ef8512e5f507fff8620317a080&w=200'
},
{
  name:'Smart Boards',
  description:'Drawing Boards, Drawing Tables, White Boards',
  link:"https://www.smartboards.com/",
  image:'https://www.empoweringsuccessnow.org/x/cdn/?https://images.unsplash.com/photo-1462286785289-59aa87d355a3?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=9c3c59c2b9f2692f03d2f5f23edf32fc&w=200'
},
  ]

  return <div className='sellerList'>
    {list.map((e,i)=><div onClick={()=>{ 
      window.open(e.link, '_blank');
      }} className='seller'>
      <span className='sellerName'>{e.name} </span>
      <div className={`sellerImage n${i}`} style={{backgroundImage:`url(${e.image})`}}/>
      <span className='sellerDescription'>{e.description} </span>
      
<Button variant='outlined' className={'sellerButton'}> Browse Catalog </Button>
    </div>)}
  </div>
}