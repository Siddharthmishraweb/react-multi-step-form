import React, { useState } from 'react';
import useFormContext from "../hooks/useFormContext"

const options = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2076/2076218.png',
      title: 'Speech and communication',
      subtitle: 'Underweight child food allergies, picky eater',
    },
    {
      icon: '<i class="fa-thin fa-apple-whole"></i>',
      title: 'Food and nutrition',
      subtitle: 'Underweight child food allergies, picky eater',
    },
    {
      icon: '<i class="fa-light fa-chart-line-up"></i>',
      title: 'Development issues',
      subtitle: 'Premature birth, ADHD, etc',
    },
    {
      icon: '<i class="fas fa-first-aid"></i>',
      title: 'Skin allergy and sleep',
      subtitle: 'Rashes, acne...',
    },
    {
      icon: '<i class="fa-solid fa-person-running"></i>',
      title: 'Gross motor and movement',
      subtitle: 'Crawling, walking, jumping',
    },
    {
      icon: '<i class="fa-thin fa-face-smile"></i>',
      title: 'Behavioral and social',
      subtitle: 'A lot of tantrums',
    },
  ];
  

const Shipping = () => {
    // const [selectedOption, setSelectedOption] = useState(null);

    const option = [
          {
            title: "Speech and communication",
            subtitle: "Underweight child food allergies, picky eater",
            src: 'https://cdn-icons-png.flaticon.com/512/2076/2076218.png'
          },    
          {      
            title: 'Food and nutrition',
            subtitle: 'Underweight child food allergies, picky eater',
            src: 'https://cdn-icons-png.flaticon.com/512/9468/9468896.png'
          },    
          {     
            title: 'Development issues',
            subtitle: 'Premature birth, ADHD, etc',
            src: 'https://cdn-icons-png.flaticon.com/128/481/481809.png'
          },    
          {      
            title: 'Skin allergy and sleep',
            subtitle: 'Rashes, acne...', 
            src: 'https://cdn-icons-png.flaticon.com/512/1237/1237946.png'
          },
          {
            title: 'Gross motor and movement',
            subtitle: 'Crawling, walking, jumping',
            src: 'https://cdn-icons-png.flaticon.com/128/1950/1950591.png'
          },
          {
            title: 'Behavioral and social',
            subtitle: 'A lot of tantrums',
            src: '	https://cdn-icons-png.flaticon.com/128/2691/2691048.png'        
          }
        ];
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleClick = (optionIndex) => {
      if (selectedOptions.includes(optionIndex)) {
        setSelectedOptions(selectedOptions.filter((index) => index !== optionIndex));
      } else {
        setSelectedOptions([...selectedOptions, optionIndex]);
      }
    };


    const [activeOptionIndex, setActiveOptionIndex] = useState(-1);

    const handleOptionClick = (index) => {
      setActiveOptionIndex(index);
    };
  
    const handleNextClick = () => {
      console.log('Next clicked');
    };

    const { data, handleChange } = useFormContext()

    const content = (
        <>
<div className="options" style={{ marginBottom: "12px" }}>
  {option.map((option, index) => (
    <span
      key={index}
      onClick={() => handleClick(index)}
      style={{
        backgroundColor: selectedOptions.includes(index) ? "#EDE7F6" : "transparent"
      }}
    >
      {selectedOptions.includes(index) ? (
        <div style={{ 
          display: 'flex',
          border: '1px solid #EFEFEF',
          padding: '16px 2px 16px 2px',
          borderRadius: '7px',
          margin: '8px 0px 8px 0px',
          backgroundColor:'#EDE7F6'
        }}>
          <span style={{margin: '2px 3px 3px 20px'}}>
          <img
            style={{
              height: "25px",
              filter: `brightness(50%) saturate(100%) hue-rotate(150deg) drop-shadow(0px 0px 0px #4FC9AC)`,

              color: "#8A72C8"
            }}
            src={option.src}
            alt="nnn"
          />
          </span>
          <div style={{marginLeft: '27px'}}>
            <span style={{
              fontWeight: 600,
              fontFamily: 'inter',
              fontSize: '17px',
              lineHeight: '16px',
              color: "#8A72C8"
            }}
            >{option.title}</span>
            <br />
            <div style={{ color: "#8A72C8" }}>{option.subtitle}</div>
          </div>
        </div>
      ) : (
        
        <div style={{ 
          display: 'flex',
          border: '1px solid #EFEFEF',
          padding: '16px 2px 16px 2px',
          borderRadius: '7px',
          margin: '8px 0px 8px 0px'
        }}>
          <span style={{margin: '2px 3px 3px 20px'}}>
          <img
            style={{
              height: "25px",
              filter: "brightness(85%) saturate(100%) hue-rotate(165deg)",
            }}
            src={option.src}
            alt="nnn"
          />

          </span>
          <div style={{marginLeft: '27px'}}>
              <span style={{
                  fontWeight: 600,
                  fontFamily: 'inter',
                  fontSize: '17px',
                  lineHeight: '16px'
                }}>
                {option.title}
              </span>
              <br />
              <div style={{ fontWeight: '400'}}>{option.subtitle}</div>
          </div>
        </div>
      )}
    </span>
  ))}
</div>
        </>
    )

    return content
}
export default Shipping