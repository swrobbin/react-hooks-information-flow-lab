import React, { useState } from 'react'

function Header({setIsDarkMode, isDarkMode}) {
    
    function handleDarkModeClick() {
        setIsDarkMode((isDarkMode) => !isDarkMode);
      }

    return (
        <div>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
        </div>
    )
}

export default Header
