import React, { useState } from 'react';

export default function AboutUs() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`container my-3 ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                {['first', 'second', 'third'].map((item, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <button 
                                className={`accordion-button ${index > 0 ? 'collapsed' : ''}`} 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target={`#collapse${item.charAt(0).toUpperCase() + item.slice(1)}`} 
                                aria-expanded={index === 0 ? 'true' : 'false'} 
                                aria-controls={`collapse${item.charAt(0).toUpperCase() + item.slice(1)}`}
                                style={{ backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}
                            >
                                Accordion Item #{index + 1}
                            </button>
                        </h2>
                        <div 
                            id={`collapse${item.charAt(0).toUpperCase() + item.slice(1)}`} 
                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body" style={{ backgroundColor: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>
                                <strong>This is the {item} item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button 
                onClick={toggleTheme} 
                className='btn-primary my-3' 
                aria-pressed={isDarkMode}
            >
                {isDarkMode ? 'Click for Light Mode' : 'Click for Dark Mode'}
            </button>
        </div>
    );
}
