function simplifyPage() {
    try {
        // Remove all CSS styles
        const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
        styles.forEach(style => style.remove());

        // Remove all multimedia content
        const multimedia = document.querySelectorAll('img, video, iframe');
        multimedia.forEach(element => element.remove());

        // Retrieve and clear body content
        const body = document.body;
        if (!body) throw new Error("Error: Document body is not accessible.");

        const allElements = document.querySelectorAll('body *');
        let contentArray = [];
        allElements.forEach(element => {
            if (element.innerText.trim() !== "") {
                contentArray.push(element.innerText.trim());
            }
        });
        body.innerHTML = '';

        // Insert simplified content into div elements
        contentArray.forEach(text => {
            const div = document.createElement('div');
            div.style.width = '100%';
            div.innerText = text;
            body.appendChild(div);

            // Insert banner after each div
            const banner = document.createElement('div');
            banner.style.width = '728px';
            banner.style.height = '90px';
            banner.style.backgroundColor = 'gray';
            banner.innerText = 'Sample Banner';
            body.appendChild(banner);
        });

    } catch (error) {
        console.error(error.message);
    }
}