// Function to remove multimedia content and CSS styles
function removeMultimediaAndStyles() {
    document.querySelectorAll('img, video, iframe, link[rel="stylesheet"]').forEach(element => {
        element.remove();
    });
}

// Function to create div elements for textual content
function createDivsForTextContent() {
    const allElements = document.body.querySelectorAll('*');
    allElements.forEach(element => {
        if (element.tagName.toLowerCase() !== 'script' && element.tagName.toLowerCase() !== 'style') {
            const div = document.createElement('div');
            div.textContent = element.textContent;
            element.parentNode.replaceChild(div, element);
        }
    });
}

// Function to set width of div elements to match screen
function setWidthOfDivs() {
    document.querySelectorAll('div').forEach(div => {
        div.style.width = '100vw';
    });
}

// Function to insert sample banners between div elements
function insertSampleBanners() {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        const banner = document.createElement('div');
        banner.style.width = '728px';
        banner.style.height = '90px';
        banner.style.background = 'blue';
        div.insertAdjacentElement('afterend', banner);
    });
}

// Main function to manipulate the DOM
function domManipulation() {
    removeMultimediaAndStyles();
    createDivsForTextContent();
    setWidthOfDivs();
    insertSampleBanners();
}

domManipulation();
