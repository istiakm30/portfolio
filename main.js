document.getElementById('myModal').style.display = 'none';

document.addEventListener('DOMContentLoaded', (event) => {
    fetchImageLinks().then(links => {
        const linkListDiv = document.getElementById('linkList');
        linkListDiv.innerHTML = '';
        links.forEach(link => {
            const a = document.createElement('a');
            a.href = link;
            a.textContent = link;
            linkListDiv.appendChild(a);
            // Add a line break after each link for better readability
            linkListDiv.appendChild(document.createElement('br'));
        });
    }).catch(error => {
        console.error('An error occurred:', error);
    });
    document.getElementById('moreButton').addEventListener('click', function() {
        var modal = document.getElementById('myModal');
        var btn = document.getElementById('moreButton');
        modal.style.display = 'block';
        modal.style.left = '50%';
        modal.style.transform = 'translateX(-50%)';

        fetchImageLinks().then(links => {
            const moreLinksDiv = document.getElementById('moreLinks');
            moreLinksDiv.innerHTML = '';
            links.forEach(link => {
                const a = document.createElement('a');
                a.href = link;
                a.textContent = link;
                a.className = '';
                moreLinksDiv.appendChild(a);
            });
        });
    });

    document.getElementsByClassName('close')[0].addEventListener('click', function() {
        document.getElementById('myModal').style.display = 'none';
    });
});

document.getElementById('myModal').addEventListener('click', function(event) {
    // check if the event target is the modal itself
    if (event.target == this) {
        this.style.display = 'none';
    }
});

    
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function fetchImageLinks() {
    // Replace this with the actual logic to fetch the image links
    return new Promise(resolve => {
        resolve([
            'https://imgsli.com/MTIwMDQx',
            'https://imgsli.com/MTIwODAw',
            'https://imgsli.com/MTIwMDQz',
            'https://imgsli.com/MTE5NzYx',
            'https://imgsli.com/MTIwMTMx',
            'https://imgsli.com/MTIwMTMy',
            'https://imgsli.com/MTIwNDM1',
            'https://imgsli.com/MTIwODAy',
            'https://imgsli.com/MTIwMTMz',
            'https://imgsli.com/MTIwMTM0',
            'https://imgsli.com/MTIwMTM1',
            'https://imgsli.com/MTIwNDMz',
            'https://imgsli.com/MTIwODAx',
            'https://imgsli.com/MTIwMTM3',
            'https://imgsli.com/MTIwMTM5',
            'https://imgsli.com/MTIwMTQw',
            'https://imgsli.com/MTIwMjE5',
            'https://imgsli.com/MTIwMTQx',
            'https://imgsli.com/MTIwMjIx',
            'https://imgsli.com/MTIwMjIw',
            'https://imgsli.com/MTIwNDI0',
            'https://imgsli.com/MTIwODAz',
            'https://imgsli.com/MTIwNDI1',
            'https://imgsli.com/MTIwNTc2',
            'https://imgsli.com/MTIwNDI3',
            'https://imgsli.com/MTIwNDM2',
            'https://imgsli.com/MTIwNDI5',
            'https://imgsli.com/MTIwNTI1',
            'https://imgsli.com/MTIwNTc1',
            'https://imgsli.com/MTIwNTc3',

        
            // ... more links
        ]);
    });
}
