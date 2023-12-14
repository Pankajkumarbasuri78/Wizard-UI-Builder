import React, { useState } from 'react';
import RadioButton from '../Component/InputField/RadioButton';
import Checkbox from '../Component/InputField/Checkbox';


const UIPlanning = () => {
  const [renderedComponents, setRenderedComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  const sidebarItems = [
    { label: 'Text Box', component: <RadioButton /> },
    { label: 'Radio Button', component: <Checkbox /> },
    { label: 'Checkboxes', component: <RadioButton /> },
    { label: 'Dropdown', component: <Checkbox /> },
    // Add more items as needed
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ width: '25%', backgroundColor: '#f0f0f0', padding: '20px' }}>
        <h2 style={{ marginBottom: '20px' }}>Input Field Components</h2>
        {sidebarItems.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <button onClick={() => handleComponentClick(item.component)} style={buttonStyles}>
              {item.label}
            </button>
          </div>
        ))}
      </div>
      <div style={{ width: '75%', padding: '20px' }}>
        <h2 style={{ marginBottom: '20px' }}>Rendered Components</h2>
        {selectedComponent && <div style={{ marginBottom: '10px' }}>{selectedComponent}</div>}
        {renderedComponents.map((component, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};

const buttonStyles = {
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default UIPlanning;

