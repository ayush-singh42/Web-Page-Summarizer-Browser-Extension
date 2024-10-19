// document.addEventListener('DOMContentLoaded', function () {
//   const summaryElement = document.getElementById('summary');
//   const regenerateButton = document.getElementById('regenerate');
//   const copyButton = document.getElementById('copy');
//   const speakButton = document.getElementById('speak');
//   const translateButton = document.getElementById('translate');
//   const languageSelect = document.getElementById('translateTo');
//   const summaryFormatSelect = document.getElementById('summaryFormat');
//   const volumeControl = document.getElementById('volume');
//   const rateControl = document.getElementById('rate');
//   const pitchControl = document.getElementById('pitch');
//   const voiceSelect = document.getElementById('voices');
//   const startButton = document.getElementById('start');
//   const resumeButton = document.getElementById('resume');
//   const pauseButton = document.getElementById('pause');
//   const cancelButton = document.getElementById('cancel');

//   let sp = new SpeechSynthesisUtterance();
//   sp.lang = "en";
//   let spOptions = [];

//   window.speechSynthesis.getVoices();

//   window.speechSynthesis.onvoiceschanged = () => {
//     spOptions = window.speechSynthesis.getVoices();
//     sp.voice = spOptions[0];
//     spOptions.forEach((voice, i) => {
//       voiceSelect.options[i] = new Option(voice.name, i);
//     });
//   };

//   volumeControl.addEventListener("input", () => {
//     const volumeValue = volumeControl.value;
//     sp.volume = volumeValue;
//     document.getElementById("label-v").innerHTML = volumeValue;
//   });

//   pitchControl.addEventListener("input", () => {
//     const pitchValue = pitchControl.value;
//     sp.pitch = pitchValue;
//     document.getElementById("label-p").innerHTML = pitchValue;
//   });

//   rateControl.addEventListener("input", () => {
//     const rateValue = rateControl.value;
//     sp.rate = rateValue;
//     document.getElementById("label-r").innerHTML = rateValue;
//   });

//   voiceSelect.addEventListener("change", () => {
//     sp.voice = spOptions[voiceSelect.value];
//   });

//   startButton.addEventListener("click", () => {
//     sp.text = summaryElement.value;
//     window.speechSynthesis.speak(sp);
//   });

//   resumeButton.addEventListener("click", () => {
//     window.speechSynthesis.resume();
//   });

//   pauseButton.addEventListener("click", () => {
//     window.speechSynthesis.pause();
//   });

//   cancelButton.addEventListener("click", () => {
//     window.speechSynthesis.cancel();
//   });

//   function summarizePage() {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       if (tabs.length > 0) {
//         const format = summaryFormatSelect.value;
//         chrome.tabs.sendMessage(tabs[0].id, { action: 'summarize', format: format }, function (response) {
//           if (chrome.runtime.lastError) {
//             summaryElement.value = 'Error: ' + chrome.runtime.lastError.message;
//           } else if (response && response.summary) {
//             summaryElement.value = response.summary;
//             chrome.storage.local.set({ summary: response.summary });
//           } else {
//             summaryElement.value = 'Failed to summarize the page.';
//           }
//         });
//       } else {
//         summaryElement.value = 'No active tab found.';
//       }
//     });
//   }

//   regenerateButton.addEventListener('click', summarizePage);
//   copyButton.addEventListener('click', function () {
//     summaryElement.select();
//     document.execCommand('copy');
//   });

//   speakButton.addEventListener('click', function () {
//     sp.text = summaryElement.value;
//     window.speechSynthesis.speak(sp);
//   });

//   translateButton.addEventListener('click', async function () {
//     const text = summaryElement.value;
//     const translateFrom = "en"; // Assuming the original text is always in English
//     const translateTo = languageSelect.value;
//     if (!text) return;
//     summaryElement.setAttribute("placeholder", "Translating...");
//     const translatedText = await translateText(text, translateFrom, translateTo);
//     summaryElement.value = translatedText;
//     summaryElement.setAttribute("placeholder", "Translation");
//   });

//   async function translateText(text, from, to) {
//     try {
//       const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`);
//       const data = await response.json();
//       return data.responseData.translatedText || "Translation error: No translated text received.";
//     } catch (error) {
//       console.error('Translation Error:', error);
//       return "Translation failed. Please try again.";
//     }
//   }

//   // Initial summary load
//   summarizePage();
// });






















// document.addEventListener('DOMContentLoaded', function () {
//   const summaryElement = document.getElementById('summary');
//   const regenerateButton = document.getElementById('regenerate');
//   const copyButton = document.getElementById('copy');
//   const speakButton = document.getElementById('speak');
//   const translateButton = document.getElementById('translate');
//   const languageSelect = document.getElementById('translateTo');
//   const summaryFormatSelect = document.getElementById('summaryFormat');

//   function summarizePage() {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       if (tabs.length > 0) {
//         const format = summaryFormatSelect.value;
//         chrome.tabs.sendMessage(tabs[0].id, { action: 'summarize', format: format }, function (response) {
//           if (chrome.runtime.lastError) {
//             summaryElement.value = 'Error: ' + chrome.runtime.lastError.message;
//           } else if (response && response.summary) {
//             summaryElement.value = response.summary;
//             chrome.storage.local.set({ summary: response.summary });
//           } else {
//             summaryElement.value = 'Failed to summarize the page.';
//           }
//         });
//       } else {
//         summaryElement.value = 'No active tab found.';
//       }
//     });
//   }

//   regenerateButton.addEventListener('click', summarizePage);
//   copyButton.addEventListener('click', function () {
//     summaryElement.select();
//     document.execCommand('copy');
//   });

//   speakButton.addEventListener('click', function () {
//     const sp = new SpeechSynthesisUtterance(summaryElement.value);
//     window.speechSynthesis.speak(sp);
//   });

//   translateButton.addEventListener('click', async function () {
//     const text = summaryElement.value;
//     const translateFrom = "en";
//     const translateTo = languageSelect.value;
//     if (!text) return;
//     summaryElement.setAttribute("placeholder", "Translating...");
//     const translatedText = await translateText(text, translateFrom, translateTo);
//     summaryElement.value = translatedText;
//     summaryElement.setAttribute("placeholder", "Translation");
//   });

//   async function translateText(text, from, to) {
//     try {
//       const response = await fetch(https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to});
//       const data = await response.json();
//       return data.responseData.translatedText || "Translation error: No translated text received.";
//     } catch (error) {
//       console.error('Translation Error:', error);
//       return "Translation failed. Please try again.";
//     }
//   }

//   summarizePage();
// });















// document.addEventListener('DOMContentLoaded', function () {
//   const summaryElement = document.getElementById('summary');
//   const regenerateButton = document.getElementById('regenerate');
//   const copyButton = document.getElementById('copy');
//   const speakButton = document.getElementById('speak');
//   const translateButton = document.getElementById('translate');
//   const languageSelect = document.getElementById('translateTo');
//   const summaryFormatSelect = document.getElementById('summaryFormat');

//   function summarizePage() {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       if (tabs.length > 0) {
//         const format = summaryFormatSelect.value;
//         chrome.tabs.sendMessage(tabs[0].id, { action: 'summarize', format: format }, function (response) {
//           if (chrome.runtime.lastError) {
//             summaryElement.value = 'Error: ' + chrome.runtime.lastError.message;
//           } else if (response && response.summary) {
//             summaryElement.value = response.summary;
//             chrome.storage.local.set({ summary: response.summary });
//           } else {
//             summaryElement.value = 'Failed to summarize the page.';
//           }
//         });
//       } else {
//         summaryElement.value = 'No active tab found.';
//       }
//     });
//   }

//   regenerateButton.addEventListener('click', summarizePage);
//   copyButton.addEventListener('click', function () {
//     summaryElement.select();
//     document.execCommand('copy');
//   });

//   speakButton.addEventListener('click', function () {
//     const sp = new SpeechSynthesisUtterance(summaryElement.value);
//     window.speechSynthesis.speak(sp);
//   });

//   translateButton.addEventListener('click', async function () {
//     const text = summaryElement.value;
//     const translateFrom = "en";
//     const translateTo = languageSelect.value;
//     if (!text) return;
//     summaryElement.setAttribute("placeholder", "Translating...");
//     const translatedText = await translateText(text, translateFrom, translateTo);
//     summaryElement.value = translatedText;
//     summaryElement.setAttribute("placeholder", "Translation");
//   });

//   async function translateText(text, from, to) {
//     try {
//       const response = await fetch(https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to});
//       const data = await response.json();
//       return data.responseData.translatedText || "Translation error: No translated text received.";
//     } catch (error) {
//       console.error('Translation Error:', error);
//       return "Translation failed. Please try again.";
//     }
//   }

//   summarizePage();
// });











// document.addEventListener('DOMContentLoaded', function () {
//   const summaryElement = document.getElementById('summary');
//   const regenerateButton = document.getElementById('regenerate');
//   const copyButton = document.getElementById('copy');
//   const speakButton = document.getElementById('speak');
//   const translateButton = document.getElementById('translate');
//   const languageSelect = document.getElementById('translateTo');
//   const summaryFormatSelect = document.getElementById('summaryFormat');
//   const volumeControl = document.getElementById('volume');
//   const rateControl = document.getElementById('rate');
//   const pitchControl = document.getElementById('pitch');
//   const voiceSelect = document.getElementById('voices');
//   const startButton = document.getElementById('start');
//   const resumeButton = document.getElementById('resume');
//   const pauseButton = document.getElementById('pause');
//   const cancelButton = document.getElementById('cancel');

//   let sp = new SpeechSynthesisUtterance();
//   sp.lang = "en";
//   let spOptions = [];

//   window.speechSynthesis.getVoices();

//   window.speechSynthesis.onvoiceschanged = () => {
//       spOptions = window.speechSynthesis.getVoices();
//       sp.voice = spOptions[0];
//       spOptions.forEach((voice, i) => {
//           voiceSelect.options[i] = new Option(voice.name, i);
//       });
//   };

//   volumeControl.addEventListener("input", () => {
//       const volumeValue = volumeControl.value;
//       sp.volume = volumeValue;
//       document.getElementById("label-v").innerHTML = volumeValue;
//   });

//   pitchControl.addEventListener("input", () => {
//       const pitchValue = pitchControl.value;
//       sp.pitch = pitchValue;
//       document.getElementById("label-p").innerHTML = pitchValue;
//   });

//   rateControl.addEventListener("input", () => {
//       const rateValue = rateControl.value;
//       sp.rate = rateValue;
//       document.getElementById("label-r").innerHTML = rateValue;
//   });

//   voiceSelect.addEventListener("change", () => {
//       sp.voice = spOptions[voiceSelect.value];
//   });

//   startButton.addEventListener("click", () => {
//       sp.text = summaryElement.value;
//       window.speechSynthesis.speak(sp);
//   });

//   resumeButton.addEventListener("click", () => {
//       window.speechSynthesis.resume();
//   });

//   pauseButton.addEventListener("click", () => {
//       window.speechSynthesis.pause();
//   });

//   cancelButton.addEventListener("click", () => {
//       window.speechSynthesis.cancel();
//   });

//   function summarizePage() {
//       chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//           if (tabs.length > 0) {
//               const url = tabs[0].url;
//               fetch('http://localhost:5000/summarize', {
//                   method: 'POST',
//                   headers: {
//                       'Content-Type': 'application/json'
//                   },
//                   body: JSON.stringify({ url: url })
//               })
//               .then(response => response.json())
//               .then(data => {
//                   if (data.error) {
//                       summaryElement.value = 'Error: ' + data.error;
//                   } else {
//                       summaryElement.value = data.summary;
//                       chrome.storage.local.set({ summary: data.summary });
//                   }
//               })
//               .catch(error => {
//                   summaryElement.value = 'Error: ' + error.message;
//               });
//           } else {
//               summaryElement.value = 'No active tab found.';
//           }
//       });
//   }

//   regenerateButton.addEventListener('click', summarizePage);
//   copyButton.addEventListener('click', function () {
//       summaryElement.select();
//       document.execCommand('copy');
//   });

//   speakButton.addEventListener('click', function () {
//       sp.text = summaryElement.value;
//       window.speechSynthesis.speak(sp);
//   });

//   translateButton.addEventListener('click', async function () {
//       const text = summaryElement.value;
//       const translateFrom = "en"; // Assuming the original text is always in English
//       const translateTo = languageSelect.value;
//       if (!text) return;
//       summaryElement.setAttribute("placeholder", "Translating...");
//       const translatedText = await translateText(text, translateFrom, translateTo);
//       summaryElement.value = translatedText;
//       summaryElement.setAttribute("placeholder", "Translation");
//   });

//   async function translateText(text, from, to) {
//       try {
//           const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`);
//           const data = await response.json();
//           return data.responseData.translatedText || "Translation error: No translated text received.";
//       } catch (error) {
//           console.error('Translation Error:', error);
//           return "Translation failed. Please try again.";
//       }
//   }

//   // Initial summary load
//   summarizePage();
// });





// document.addEventListener('DOMContentLoaded', function () {
//   const summaryElement = document.getElementById('summary');
//   const regenerateButton = document.getElementById('regenerate');
//   const copyButton = document.getElementById('copy');
//   const speakButton = document.getElementById('speak');
//   const translateButton = document.getElementById('translate');
//   const languageSelect = document.getElementById('translateTo');
//   const summaryFormatSelect = document.getElementById('summaryFormat');
//   const volumeControl = document.getElementById('volume');
//   const rateControl = document.getElementById('rate');
//   const pitchControl = document.getElementById('pitch');
//   const voiceSelect = document.getElementById('voices');
//   const startButton = document.getElementById('start');
//   const resumeButton = document.getElementById('resume');
//   const pauseButton = document.getElementById('pause');
//   const cancelButton = document.getElementById('cancel');

//   let sp = new SpeechSynthesisUtterance();
//   sp.lang = "en";
//   let spOptions = [];

//   window.speechSynthesis.getVoices();

//   window.speechSynthesis.onvoiceschanged = () => {
//       spOptions = window.speechSynthesis.getVoices();
//       sp.voice = spOptions[0];
//       spOptions.forEach((voice, i) => {
//           voiceSelect.options[i] = new Option(voice.name, i);
//       });
//   };

//   volumeControl.addEventListener("input", () => {
//       const volumeValue = volumeControl.value;
//       sp.volume = volumeValue;
//       document.getElementById("label-v").innerHTML = volumeValue;
//   });

//   pitchControl.addEventListener("input", () => {
//       const pitchValue = pitchControl.value;
//       sp.pitch = pitchValue;
//       document.getElementById("label-p").innerHTML = pitchValue;
//   });

//   rateControl.addEventListener("input", () => {
//       const rateValue = rateControl.value;
//       sp.rate = rateValue;
//       document.getElementById("label-r").innerHTML = rateValue;
//   });

//   voiceSelect.addEventListener("change", () => {
//       sp.voice = spOptions[voiceSelect.value];
//   });

//   startButton.addEventListener("click", () => {
//       sp.text = summaryElement.value;
//       window.speechSynthesis.speak(sp);
//   });

//   resumeButton.addEventListener("click", () => {
//       window.speechSynthesis.resume();
//   });

//   pauseButton.addEventListener("click", () => {
//       window.speechSynthesis.pause();
//   });

//   cancelButton.addEventListener("click", () => {
//       window.speechSynthesis.cancel();
//   });

//   function summarizePage() {
//       chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//           if (tabs.length > 0) {
//               const url = tabs[0].url;
//               fetch('http://localhost:5000/summarize', {
//                   method: 'POST',
//                   headers: {
//                       'Content-Type': 'application/json'
//                   },
//                   body: JSON.stringify({ url: url })
//               })
//               .then(response => response.json())
//               .then(data => {
//                   if (data.error) {
//                       summaryElement.value = 'Error: ' + data.error;
//                   } else {
//                       summaryElement.value = data.summary;
//                       chrome.storage.local.set({ summary: data.summary });
//                   }
//               })
//               .catch(error => {
//                   summaryElement.value = 'Error: ' + error.message;
//               });
//           } else {
//               summaryElement.value = 'No active tab found.';
//           }
//       });
//   }

//   regenerateButton.addEventListener('click', summarizePage);
//   copyButton.addEventListener('click', function () {
//       summaryElement.select();
//       document.execCommand('copy');
//   });

//   speakButton.addEventListener('click', function () {
//       sp.text = summaryElement.value;
//       window.speechSynthesis.speak(sp);
//   });

//   translateButton.addEventListener('click', async function () {
//       const text = summaryElement.value;
//       const translateFrom = "en"; // Assuming the original text is always in English
//       const translateTo = languageSelect.value;
//       if (!text) return;
//       summaryElement.setAttribute("placeholder", "Translating...");
//       const translatedText = await translateText(text, translateFrom, translateTo);
//       summaryElement.value = translatedText;
//       summaryElement.setAttribute("placeholder", "Translation");
//   });

//   async function translateText(text, from, to) {
//       try {
//           const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`);
//           const data = await response.json();
//           return data.responseData.translatedText || "Translation error: No translated text received.";
//       } catch (error) {
//           console.error('Translation Error:', error);
//           return "Translation failed. Please try again.";
//       }
//   }

//   // Initial summary load
//   summarizePage();
// });







// document.addEventListener('DOMContentLoaded', function () {
//     const summaryElement = document.getElementById('summary');
//     const regenerateButton = document.getElementById('regenerate');
//     const copyButton = document.getElementById('copy');
//     const speakButton = document.getElementById('speak');
//     const translateButton = document.getElementById('translate');
//     const languageSelect = document.getElementById('translateTo');
//     const summaryFormatSelect = document.getElementById('summaryFormat');
//     const volumeControl = document.getElementById('volume');
//     const rateControl = document.getElementById('rate');
//     const pitchControl = document.getElementById('pitch');
//     const voiceSelect = document.getElementById('voices');
//     const startButton = document.getElementById('start');
//     const resumeButton = document.getElementById('resume');
//     const pauseButton = document.getElementById('pause');
//     const cancelButton = document.getElementById('cancel');
  
//     let sp = new SpeechSynthesisUtterance();
//     sp.lang = "en";
//     let spOptions = [];
  
//     window.speechSynthesis.getVoices();
  
//     window.speechSynthesis.onvoiceschanged = () => {
//         spOptions = window.speechSynthesis.getVoices();
//         sp.voice = spOptions[0];
//         spOptions.forEach((voice, i) => {
//             voiceSelect.options[i] = new Option(voice.name, i);
//         });
//     };
  
//     volumeControl.addEventListener("input", () => {
//         const volumeValue = volumeControl.value;
//         sp.volume = volumeValue;
//         document.getElementById("label-v").innerHTML = volumeValue;
//     });
  
//     pitchControl.addEventListener("input", () => {
//         const pitchValue = pitchControl.value;
//         sp.pitch = pitchValue;
//         document.getElementById("label-p").innerHTML = pitchValue;
//     });
  
//     rateControl.addEventListener("input", () => {
//         const rateValue = rateControl.value;
//         sp.rate = rateValue;
//         document.getElementById("label-r").innerHTML = rateValue;
//     });
  
//     voiceSelect.addEventListener("change", () => {
//         sp.voice = spOptions[voiceSelect.value];
//     });
  
//     startButton.addEventListener("click", () => {
//         sp.text = summaryElement.value;
//         window.speechSynthesis.speak(sp);
//     });
  
//     resumeButton.addEventListener("click", () => {
//         window.speechSynthesis.resume();
//     });
  
//     pauseButton.addEventListener("click", () => {
//         window.speechSynthesis.pause();
//     });
  
//     cancelButton.addEventListener("click", () => {
//         window.speechSynthesis.cancel();
//     });
  
//     function summarizePage() {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             if (tabs.length > 0) {
//                 const url = tabs[0].url;
//                 fetch('http://localhost:5000/summarize', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({ url: url })
//                 })
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data.error) {
//                         summaryElement.value = 'Error: ' + data.error;
//                     } else {
//                         summaryElement.value = data.summary;
//                         chrome.storage.local.set({ summary: data.summary });
//                     }
//                 })
//                 .catch(error => {
//                     summaryElement.value = 'Error: ' + error.message;
//                 });
//             } else {
//                 summaryElement.value = 'No active tab found.';
//             }
//         });
//     }
  
//     regenerateButton.addEventListener('click', summarizePage);
//     copyButton.addEventListener('click', function () {
//         summaryElement.select();
//         document.execCommand('copy');
//     });
  
//     speakButton.addEventListener('click', function () {
//         sp.text = summaryElement.value;
//         window.speechSynthesis.speak(sp);
//     });
  
//     translateButton.addEventListener('click', async function () {
//         const text = summaryElement.value;
//         const translateFrom = "en"; // Assuming the original text is always in English
//         const translateTo = languageSelect.value;
//         if (!text) return;
//         summaryElement.setAttribute("placeholder", "Translating...");
//         const translatedText = await translateText(text, translateFrom, translateTo);
//         summaryElement.value = translatedText;
//         summaryElement.setAttribute("placeholder", "Translation");
//     });
  
//     async function translateText(text, from, to) {
//         try {
//             const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`);
//             const data = await response.json();
//             return data.responseData.translatedText || "Translation error: No translated text received.";
//         } catch (error) {
//             console.error('Translation Error:', error);
//             return "Translation failed. Please try again.";
//         }
//     }
  
//     // Initial summary load
//     summarizePage();
//   });







document.addEventListener('DOMContentLoaded', function () {
    const summaryElement = document.getElementById('summary');
    const regenerateButton = document.getElementById('regenerate');
    const copyButton = document.getElementById('copy');
    const speakButton = document.getElementById('speak');
    const translateButton = document.getElementById('translate');
    const languageSelect = document.getElementById('translateTo');
    const summaryFormatSelect = document.getElementById('summaryFormat');
    const volumeControl = document.getElementById('volume');
    const rateControl = document.getElementById('rate');
    const pitchControl = document.getElementById('pitch');
    const voiceSelect = document.getElementById('voices');
    const startButton = document.getElementById('start');
    const resumeButton = document.getElementById('resume');
    const pauseButton = document.getElementById('pause');
    const cancelButton = document.getElementById('cancel');
  
    let sp = new SpeechSynthesisUtterance();
    sp.lang = "en";
    let spOptions = [];
  
    function populateVoices() {
      spOptions = window.speechSynthesis.getVoices();
      voiceSelect.innerHTML = '';
      spOptions.forEach((voice, i) => {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = voice.name;
        voiceSelect.appendChild(option);
      });
      sp.voice = spOptions[0];
    }
  
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populateVoices;
    }
  
    populateVoices();
  
    volumeControl.addEventListener("input", () => {
      const volumeValue = volumeControl.value;
      sp.volume = volumeValue;
      document.getElementById("label-v").textContent = volumeValue;
    });
  
    pitchControl.addEventListener("input", () => {
      const pitchValue = pitchControl.value;
      sp.pitch = pitchValue;
      document.getElementById("label-p").textContent = pitchValue;
    });
  
    rateControl.addEventListener("input", () => {
      const rateValue = rateControl.value;
      sp.rate = rateValue;
      document.getElementById("label-r").textContent = rateValue;
    });
  
    voiceSelect.addEventListener("change", () => {
      sp.voice = spOptions[voiceSelect.value];
    });
  
    startButton.addEventListener("click", () => {
      sp.text = summaryElement.value;
      window.speechSynthesis.speak(sp);
    });
  
    resumeButton.addEventListener("click", () => {
      window.speechSynthesis.resume();
    });
  
    pauseButton.addEventListener("click", () => {
      window.speechSynthesis.pause();
    });
  
    cancelButton.addEventListener("click", () => {
      window.speechSynthesis.cancel();
    });
  
    function summarizePage() {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs.length > 0) {
          const url = tabs[0].url;
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
              summaryElement.value = 'Error: ' + data.error;
            } else {
              let summary = data.summary;
              if (summaryFormatSelect.value === 'bullet') {
                summary = summary.split('. ').map(sentence => `• ${sentence}.`).join('\n');
              }
              summaryElement.value = summary;
              chrome.storage.local.set({ summary: summary });
            }
          })
          .catch(error => {
            summaryElement.value = 'Error: ' + error.message;
          });
        } else {
          summaryElement.value = 'No active tab found.';
        }
      });
    }
  
    regenerateButton.addEventListener('click', summarizePage);
  
    copyButton.addEventListener('click', function () {
      summaryElement.select();
      document.execCommand('copy');
    });
  
    speakButton.addEventListener('click', function () {
      sp.text = summaryElement.value;
      window.speechSynthesis.speak(sp);
    });
  
    translateButton.addEventListener('click', async function () {
      const text = summaryElement.value;
      const translateFrom = "en"; // Assuming the original text is always in English
      const translateTo = languageSelect.value;
      if (!text) return;
      summaryElement.setAttribute("placeholder", "Translating...");
      const translatedText = await translateText(text, translateFrom, translateTo);
      summaryElement.value = translatedText;
      summaryElement.setAttribute("placeholder", "Translation");
    });
  
    async function translateText(text, from, to) {
      try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`);
        const data = await response.json();
        return data.responseData.translatedText || "Translation error: No translated text received.";
      } catch (error) {
        console.error('Translation Error:', error);
        return "Translation failed. Please try again.";
      }
    }
  
    // Initial summary load
    summarizePage();
  });
  
  