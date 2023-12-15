import '../../Assests/Admindashboard.css';
import img200 from '../../Images/chart.png.png';
function Adminbody(){
    return(
        <>
        <div style={{  backgroundColor:'#AEC6CF'}}>
<div className='graphs'>
   
   <div className='forpicone'>
   <img src='https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/graph-wiki_ver_1.png' style={{width:'100%',height:'40vh'}}></img>
   </div>
   
   
   <div className='forpictwo'>
   <img src='https://www.pngall.com/wp-content/uploads/12/Graph-PNG-Image-File.png'style={{width:'100%',height:'40vh'}}></img>
   </div>
   
   
   <div className='forpicthree'>
   <img src='https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-9-01-1.png'style={{width:'100%',height:'39vh'}} ></img>
   </div>
   
   </div>
   
   
   
   <div className='tablegraph'>
   <img src={img200} style={{width:'100%',height:'40vh'}}></img>
   </div>

   </div>
        </>
    );
}
export default Adminbody;