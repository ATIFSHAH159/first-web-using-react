import './Assests/Services.css'
import img20 from './Images/delivery.jpg';
import img21 from './Images/warranty.jpeg'
import img22 from './Images/repair.jpeg';
import Footer from './Components/Footer';
import { FcFaq } from 'react-icons/fc';
import { Link } from 'react-router-dom';
function Services() {
    return (
        <>
            <br></br>
            <div className="main-1">
                <div className='left-1'>
                    <h1 className='heading-1'> Free Home Delivery</h1>
                    <hr className='line-1'></hr>
                    <p className='paragraph-1'>At Mapple and Leaf, we are committed to providing the best possible shopping experience for our valued customers. As part of our dedication to your convenience and satisfaction, we are delighted to offer free home delivery services.
                        Our goal is to make your furniture shopping experience as hassle-free as possible. With our free home delivery service, you can enjoy the convenience of having your selected furniture items delivered right to your doorstep without any additional cost. Whether you're redecorating your living room, updating your bedroom, or enhancing your outdoor space, our team is ready to ensure that your new furniture arrives safely and on time.
                        Our skilled and friendly delivery team takes great care in handling and transporting your furniture, ensuring it reaches your home in perfect condition.
                    </p>
                </div>
                <div className='right-1'>
                    <img src={img20} alt='notfound' style={{ width: "85%", height: '60vh', marginTop: '10px', marginLeft: '40px', borderRadius: '20px', padding: '05px' }}></img>
                </div>
            </div>


            <br></br>
            <div className="main-2">
                <div className='left-2'>
                    <img src={img21} alt='notfound' style={{ width: "85%", height: '60vh', marginLeft: '40px', borderRadius: '20px' }}></img>
                </div>
                <div className='right-2'>

                    <h1 className='heading-2'>Warranty & Gurantee Policy</h1>
                    <hr className='line-2'></hr>
                    <p className='paragraph-2'>
                        At Mapple and Leaf, we value your trust and aim to provide you with furniture of the highest quality. Our promise is reinforced by our Warranty and Guarantee Policy, which underscores our dedication to your satisfaction and confidence in your shopping experience. For any inquiries, warranty claims, or quality-related concerns, our responsive customer support team is at your service and can be reached at Customer Support Email or Customer Support Phone Number.

                        Your trust is our greatest reward, and we appreciate your choice of Mapple & leaf for your furniture needs. Please be aware that this policy may be subject to occasional updates, and we encourage you to review it periodically to stay informed. We are here to serve you, and your satisfaction remains our unwavering commitment.
                    </p>
                </div>
            </div>


            <br></br>
            <div className="main-3">
                <div className='left-3'>
                    <h1 className='heading-3'>Repair and Restoration Services</h1>
                    <hr className='line-3'></hr>
                    <p className='paragraph-3'>
                        At Mapple & Leaf, we take pride in offering a specialized Furniture Repair and Restoration service that is tailor-made to breathe new life into your furniture. Whether you possess treasured antique pieces or modern items that require attention, we understand the deep emotional and aesthetic value your furniture holds. Our team of skilled craftsmen is dedicated to preserving the essence and functionality of these beloved pieces, ensuring that they not only look splendid but also stand the test of time.

                        Our comprehensive services cover a spectrum of needs, ranging from Antique Furniture Restoration to Furniture Refinishing. We have the expertise to address structural repairs, upholstery and fabric restoration, woodwork and inlay repairs, and even customization to suit your preferences.



                    </p>
                </div>
                <div className='right-3'>
                    <img src={img22} alt='notfound' style={{ width: "85%", height: '60vh', marginTop: '05px', marginLeft: '40px', borderRadius: '20px', padding: '05px' }}></img>
                </div>
            </div>


            <div style={{
                width: '18%',
                height: '8vh',
                position: 'fixed',
                top: '530px',
                left: '20px',
                backgroundColor: '#3498db',
                borderRadius: '20px',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
            }}>
                FAQ
                <Link to='/FAQ'>
                <FcFaq size={"40px"} style={{ marginTop: '05px' }} />
                </Link>
            </div>

            <br></br>
            <Footer />
        </>

    )
}

export default Services;