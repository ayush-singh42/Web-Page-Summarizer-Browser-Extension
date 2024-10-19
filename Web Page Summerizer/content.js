// function summarizeArticle() {
//   let content = '';
//   document.querySelectorAll('p').forEach(p => content += p.innerText + ' ');
  
//   console.log('Extracted content:', content); // Debugging log

//   // Dummy summarizer: take the first 3 sentences
//   const sentences = content.split('. ').slice(0, 3).join('. ') + '.';
//   console.log('Summarized content:', sentences); // Debugging log

//   return sentences.trim();
// }

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'summarize') {
//     console.log('Summarize action received'); // Debugging log
//     const summary = summarizeArticle();
//     sendResponse({ summary: summary });
//   }
// });








// function summarizeArticle(format) {
//   let content = '';
//   document.querySelectorAll('p').forEach(p => content += p.innerText + ' ');
  
//   console.log('Extracted content:', content); // Debugging log

//   // Dummy summarizer: take the first 3 sentences
//   const sentences = content.split('. ').slice(0, 3);

//   let summary = '';
//   if (format === 'bullet') {
//     summary = sentences.map(sentence => `• ${sentence}.`).join('\n');
//   } else {
//     summary = sentences.join('. ') + '.';
//   }

//   console.log('Summarized content:', summary); // Debugging log
//   return summary.trim();
// }

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'summarize') {
//     console.log('Summarize action received'); // Debugging log
//     const summary = summarizeArticle(request.format);
//     sendResponse({ summary: summary });
//   }
// });




// function summarizeArticle(format) {
//   let content = '';
//   document.querySelectorAll('p').forEach(p => content += p.innerText + ' ');

//   console.log('Extracted content:', content); // Debugging log

//   // Dummy summarizer: take the first 3 sentences
//   const sentences = content.split('. ').slice(0, 3);

//   let summary = '';
//   if (format === 'bullet') {
//     summary = sentences.map(sentence => `• ${sentence}.`).join('\n');
//   } else {
//     summary = sentences.join('. ') + '.';
//   }

//   console.log('Summarized content:', summary); // Debugging log
//   return summary.trim();
// }

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'summarize') {
//     console.log('Summarize action received'); // Debugging log
//     const summary = summarizeArticle(request.format);
//     sendResponse({ summary: summary });
//   }
// });









// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'summarize') {
//     const format = request.format;
//     const url = document.location.href;

//     fetch('http://localhost:5000/summarize', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ url: url })
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.error) {
//         sendResponse({ summary: 'Error: ' + data.error });
//       } else {
//         let summary = '';
//         if (format === 'bullet') {
//           summary = data.summary.split('. ').map(sentence => `• ${sentence}.`).join('\n');
//         } else {
//           summary = data.summary;
//         }
//         sendResponse({ summary: summary });
//       }
//     })
//     .catch(error => {
//       sendResponse({ summary: 'Fetch error: ' + error.message });
//     });

//     // Indicates you will respond asynchronously
//     return true;
//   }
// });







chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'summarize') {
    const format = request.format;
    const url = document.location.href;

    fetch('http://localhost:5000/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: url })
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        sendResponse({ summary: 'Error: ' + data.error });
      } else {
        let summary = '';
        if (format === 'bullet') {
          summary = data.summary.split('. ').map(sentence => `• ${sentence}.`).join('\n');
        } else {
          summary = data.summary;
        }
        sendResponse({ summary: summary });
      }
    })
    .catch(error => {
      sendResponse({ summary: 'Fetch error: ' + error.message });
    });

    return true;
  }
});
