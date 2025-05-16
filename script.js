
fetch('publications.json')
    .then(response => response.json())
    .then(data => {
        const app = document.getElementById('app');
        app.innerHTML = '<ul>' + data.map(p => `<li><strong>${p.title}</strong> (${p.year})</li>`).join('') + '</ul>';
    })
    .catch(error => {
        document.getElementById('app').innerText = 'Failed to load publications: ' + error;
    });
