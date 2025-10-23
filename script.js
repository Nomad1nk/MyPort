    const toggleButton = document.getElementById('toggle-dark-mode');
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        console.log("dark mode is on");
    } else {
        console.log("dark mode is off");
    }
        toggleButton.addEventListener('click', () => {
            const aswal = document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', aswal);
            if(aswal){
                console.log("dark mode is enabled");
            } else {
                console.log("dark mode is disabled");
            }   
        });

        const PASSWORD = "bays";
        
