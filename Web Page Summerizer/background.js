// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'speak') {
//     const utterance = new SpeechSynthesisUtterance(request.text);
//     speechSynthesis.speak(utterance);
//   } else if (request.action === 'translate') {
//     const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY'; // Replace with your API key
//     const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
//     fetch(url, {
//       method: 'POST',
//       body: JSON.stringify({
//         q: request.text,
//         target: request.language,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     .then(response => response.json())
//     .then(data => {
//       sendResponse({ translatedText: data.data.translations[0].translatedText });
//     });
//     return true; // Will respond asynchronously
//   }
// });


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'speak') {
//     const utterance = new SpeechSynthesisUtterance(request.text);
//     speechSynthesis.speak(utterance);
//     sendResponse({ success: true });
//   } else if (request.action === 'translate') {
//     // Implement translation logic here, if needed
//   }
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'speak') {
//     const utterance = new SpeechSynthesisUtterance(request.text);
//     speechSynthesis.speak(utterance);
//     utterance.onend = () => sendResponse({ success: true });  // Respond when speech ends
//     utterance.onerror = (event) => sendResponse({ success: false, error: event.error });
//     return true;  // Indicates you will respond asynchronously
//   }
// });



















// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'speak') {
//     const utterance = new SpeechSynthesisUtterance(request.text);
//     speechSynthesis.speak(utterance);
//     utterance.onend = () => sendResponse({ success: true });  // Respond when speech ends
//     utterance.onerror = (event) => sendResponse({ success: false, error: event.error });
//     return true;  // Indicates you will respond asynchronously
//   }
// });





chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'speak') {
    const utterance = new SpeechSynthesisUtterance(request.text);
    speechSynthesis.speak(utterance);
    utterance.onend = () => sendResponse({ success: true });
    utterance.onerror = (event) => sendResponse({ success: false, error: event.error });
    return true;
  }
});


