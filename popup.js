
//when the webpage is finished loading execute this function
document.addEventListener('DOMContentLoaded', function() {
    console.log("Starting Project");

    const hideExButton = document.getElementById('hideExButton');
    hideExButton.addEventListener('click', function() {

        chrome.tabs.query(
            { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
            function(tabs) {
              const { id: tabId } = tabs[0].url;
              let code = `document.querySelector('h1')`;

              chrome.tabs.executeScript(null, { file: './jquery.js' }, () => {  
                chrome.tabs.executeScript(null, { file: './hideEx.js' }, () => console.log('code injected'))
                });
            });
 
    }, false);
  }, false);
