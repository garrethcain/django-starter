const themeDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeLightIcon = document.getElementById('theme-toggle-light-icon');

// hide both icons.
themeLightIcon.classList.remove('hidden');
themeDarkIcon.classList.remove('hidden');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    // themeToggleLightIcon.classList.remove('hidden');
    themeDarkIcon.classList.toggle("hidden");
    document.documentElement.classList.add("dark")
} else {
    // themeToggleDarkIcon.classList.remove('hidden');
    themeLightIcon.classList.toggle('hidden');
    document.documentElement.classList.remove("dark")
}

const themeToggleBtn = document.getElementById('theme-toggle');
let event = new Event('dark-mode');

themeToggleBtn.addEventListener('click', function() {
    // toggle icons
    themeDarkIcon.classList.toggle('hidden');
    themeLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

    document.dispatchEvent(event);

});
