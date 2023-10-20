
const DarkMode = () => {
    const setDarkMode = () =>{
        document.querySelector("body").setAttribute('data-theme', 'dark');
        
    }
    const setLightkMode = () =>{
        document.querySelector("body").setAttribute('data-theme', 'light');

    };
    const toggleTheme = e =>{
        if(e.target.checked){
            setDarkMode()
        }
        else setLightkMode()
    }
    return (
        <div className='dark_mode'>
          <input type="checkbox" className="toggle"  onChange={toggleTheme} />
            
        </div>
    );
};

export default DarkMode;