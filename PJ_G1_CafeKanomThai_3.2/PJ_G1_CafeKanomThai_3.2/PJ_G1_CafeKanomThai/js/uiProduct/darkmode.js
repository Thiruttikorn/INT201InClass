const switchToggle=document.querySelector('input[type="checkbox"]');
// console.log(switchToggle);
const toggleIcon=document.getElementById('toggle-icon');
// const nav=document.getElementById('nav');

function switchMode(e){
    // console.log("OK");
    if(e.target.checked){
        // console.log("Dark Mode");
        darkMode();
        localStorage.setItem('darkMode', 'dark');
    }else{
        // console.log("Light Mode");
        lightMode();
        localStorage.setItem('darkMode', 'light');
    }
}

const localtheme = localStorage.getItem('darkMode');
    if(localtheme === 'dark') {
        darkMode();
        switchToggle.checked = true;
    } else {
        lightMode();
        switchToggle.checked = false;
    }

function darkMode() {
    // console.log("Dark Mode Now!");
    document.body.setAttribute('data-theme','dark');
    toggleIcon.children[0].textContent="Dark Mode";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    // nav.style.backgroundColor='rgba(245, 158, 11, var(--tw-bg-opacity))';
}

function lightMode() {
    // console.log("Light Mode Now!");
    document.body.setAttribute('data-theme','light');
    toggleIcon.children[0].textContent="Light Mode";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    // nav.style.backgroundColor='rgba(16, 185, 129, var(--tw-bg-opacity))';
}
switchToggle.addEventListener('change',switchMode);