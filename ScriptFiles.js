document.addEventListener('DOMContentLoaded', function () {
    // Get all links in the table of contents
    const links = document.querySelectorAll('aside ul li a');

    // Get all sections
    const sections = document.querySelectorAll('.content > section');

    // Add click event listeners to each link
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior

            // Hide all sections
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show the section corresponding to the clicked link
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden');

                // Smooth scroll to the target section
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.getElementById('searchButton').addEventListener('click', function() {
    let searchTerm = document.getElementById('searchBar').value.toLowerCase();
    let sections = document.querySelectorAll('section');
    let found = false;

    sections.forEach(section => {
        let text = section.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the found section
            section.style.backgroundColor = 'blue'; // Highlight the section
            found = true;
        } else {
            section.style.backgroundColor = ''; // Reset background color
        }
    });

    if (!found) {
        alert('No matches found.');
    }
    
    setTimeout(() => {
        sections.forEach(section => {
            section.style.backgroundColor = '';
        });
    }, 5000); // Reset after 5 seconds
});

document.getElementById('run').addEventListener('click', function() {
    var code = document.getElementById('code').value;
    
    // Filter for lines that contain System.out.println
    var filteredCode = code.split('\n').filter(line => line.includes('System.out.println'));
    
    // Join filtered lines back and display them
    document.getElementById('output').textContent = filteredCode.join('\n');
});
