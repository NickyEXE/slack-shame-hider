let hideShame = document.getElementById('hideShame');

hideShame.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id, 
          {code: `const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
            '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
            '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
            '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
            '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
            '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
            '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
            '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
            '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
            '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

            const grabNameItems = () => document.querySelectorAll(".c-message__sender_link")

            const names = () => [...grabNameItems()].map(item => item.innerText)

            const grabAColor = () => colorArray[Math.floor(Math.random() * colorArray.length)]

            const colorHash = {}

            const addNamesToHash = () => names().forEach(name => {
            !colorHash[name] && (colorHash[name] = grabAColor())
            })

            const replaceNames = () => [...grabNameItems()].forEach(item => {
            const color = colorHash[item.innerText];
            item.style.color = color;
            item.style.backgroundColor = color;
            const img = item.parentElement.parentElement.parentElement.querySelector("img")
            img.style.backgroundColor = color
            img.src = "break!!" + img.src
            img.srcset = "break!!" + img.srcset
            })

            const fixNames = () => [...grabNameItems()].forEach(item => {
            item.style.color = "black";
            item.style.backgroundColor = "white";
            console.log(item)
            const img = item.closest(".c-message_kit__gutter").querySelector("img")
            img.style.backgroundColor = ""
            img.src = img.src.replace("break!!", "")
            img.srcset = img.srcset.replace("break!!", "")
            })

            const runProgram = () => {
                console.log("running")
                addNamesToHash()
                replaceNames()
            }
          
            setInterval(runProgram, 300);
            runProgram();
            console.log("hello")
            `
        });
    });
  };