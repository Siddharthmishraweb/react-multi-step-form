import { useState } from 'react';

import useFormContext from "../hooks/useFormContext"

const OptIn = () => {
    const { data, handleChange } = useFormContext();

    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = [
      { id: 1, label: 'Baby was born premature' },
      { id: 2, label: 'Has Autism' },
      { id: 3, label: 'Has ADHD' },
      { id: 4, label: 'Has cerebral Palsy' },
      { id: 5, label: 'Has down syndrome' },
      { id: 6, label: 'Other issues' },
    ];
  
    const handleOptionClick = (optionId) => {
      if (selectedOptions.includes(optionId)) {
        setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
      } else {
        setSelectedOptions([...selectedOptions, optionId]);
      }
    };
    const handleOptionChange = (optionId) => {
      if (selectedOptions.includes(optionId)) {
        setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
      } else {
        setSelectedOptions([...selectedOptions, optionId]);
      }
    };
    const isOptionSelected = (optionId) => {
      return selectedOptions.includes(optionId);
    };

    const content = (
        <>
          <div>
                {options.map((option) => (
                      <div
                        key={option.id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "12px",
                          border: "1px solid #ccc",
                          padding: "5px",
                          height:'49px',
                          borderRadius: '10px',
                          backgroundColor:selectedOptions.includes(option.id) ? "#EDE7F6" : "",
                        }}
                      >
                      <input
                        type="checkbox"
                        checked={selectedOptions.includes(option.id)}
                        onChange={() => handleOptionChange(option.id)}
                        style={{ marginLeft:'12px' ,marginRight: "5px", borderRadius: "50%", width: "20px", height: "20px", border: "2px solid black", display: "inline-block", verticalAlign: "middle" }}
                      />

                        <span
                          style={{
                            marginLeft:'12px',
                            color: selectedOptions.includes(option.id) ? "#5836B0" : "#000",
                            fontWeight: selectedOptions.includes(option.id) && "bold"
                          }}
                        >
                          {option.label}
                        </span>
                      </div>
                ))}
          </div>
        </>
    )
    return content
}
export default OptIn