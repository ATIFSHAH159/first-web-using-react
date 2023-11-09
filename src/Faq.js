import React, { useState } from 'react';
import Footer from './Components/Footer';

const styles = {
  container: {
    fontFamily: 'Hind, sans-serif',
    margin: '0',
    padding: '0',
    background: '#fff',
    color: '#4d5974',
    display: 'flex',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accordion: {
    width: '100%',
    maxWidth: '600px',
    marginTop:"-250px"
  },
  accordionItem: {
    borderBottom: '1px solid #e5e5e5',
  },
  button: {
    position: 'relative',
    display: 'block',
    textAlign: 'left',
    width: '100%',
    padding: '1em 0',
    color: '#7288a2',
    fontSize: '1.15rem',
    fontWeight: 400,
    border: 'none',
    background: 'none',
    outline: 'none',
    cursor: 'pointer',
    '&:hover, &:focus': {
      color: '#03b5d2',
    },
  },
  accordionTitle: {
    padding: '1em 1.5em 1em 0',
  },
  icon: {
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
    width: '22px',
    height: '22px',
    border: '1px solid #7288a2',
    borderRadius: '50%',
    textAlign: 'center',
    lineHeight: '20px',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
    '&::before': {
      content: '',
      display: 'block',
      width: '10px',
      height: '2px',
      background: 'currentColor',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  accordionContent: {
    maxHeight: '0',
    overflow: 'hidden',
    transition: 'max-height 0.2s',
    padding: '0 1em',
    backgroundColor: 'white',
    p: {
      fontSize: '1rem',
      fontWeight: 300,
      margin: '2em 0',
    },
  },
};

function Faq() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const items = [
    {
      id: 1,
      title: 'What are the store hours?',
      content:
      'Our store is open from 9:00 AM to 6:00 PM on weekdays and from 10:00 AM to 4:00 PM on weekends.',
    },
    {
      id: 2,
      title: 'Do you offer delivery services?',
      content:
      'Yes, we provide delivery services for your convenience. Contact our customer service for more details.',
    },
    {
        id: 3,
        title: 'Is assembly included for furniture items?',
        content:
        'Assembly services are available for certain furniture items. Please inquire with our staff for more information.',
      },
      {
        id: 4,
        title:  'What is the return policy?',
        content:
        'We have a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.',
      },
      {
        id: 5,
        title:  'Do you offer custom furniture design?',
        content:
        'Yes, we offer custom furniture design services. Our expert team can help you create unique pieces tailored to your preferences.',
      }
      
    
    
  ];

  return (
    <>
    <h1 style={{textAlign:"center",marginTop:"20px"}}>Frequently Asked Questions</h1>
    <div style={styles.container}>

      <div style={styles.accordion}>
        {items.map((item, index) => (
          <div style={styles.accordionItem} key={item.id}>
            <button
              style={styles.button}
              aria-expanded={index === activeAccordion ? 'true' : 'false'}
              onClick={() => handleAccordionClick(index)}
            >
              <span style={styles.accordionTitle}>{item.title}</span>
              <span style={styles.icon} aria-hidden="true">
                &#x25BC;
              </span>
            </button>
            {index === activeAccordion && (
              <div style={{ ...styles.accordionContent, maxHeight: '100%' }}>
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Faq;
