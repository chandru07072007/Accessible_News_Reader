let fontSize = 16;
let isMarkMode = false;
let currentUtterance = null;

// Check browser support for SpeechSynthesis API
function isSpeechSupported() {
  return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

function speak(text) {
  if (!isSpeechSupported()) {
    alert('Your browser does not support speech synthesis.');
    return;
  }

  if (speechSynthesis.speaking || speechSynthesis.pending) {
    speechSynthesis.cancel();
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  speechSynthesis.speak(utterance);
  currentUtterance = utterance;
}

function pauseSpeech() {
  if (speechSynthesis.speaking && !speechSynthesis.paused) {
    speechSynthesis.pause();
  }
}
function resumeSpeech() {
  if (speechSynthesis.paused) {
    speechSynthesis.resume();
  }
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}
function increaseFont() {
  fontSize += 2;
  document.body.style.fontSize = fontSize + "px";
}
function decreaseFont() {
  fontSize = Math.max(12, fontSize - 2);
  document.body.style.fontSize = fontSize + "px";
}

function toggleMarkMode() {
  isMarkMode = !isMarkMode;
  alert(isMarkMode ? "Mark Mode enabled. Select text to save as note." : "Mark Mode disabled.");
}

// Fetch news based on user topic
async function getNewsByTopic() {
  const topic = document.getElementById("topicInput").value.trim();
  if (!topic) {
    alert("Please enter a topic.");
    return;
  }

  try {
    const response = await fetch(`/api/news/${encodeURIComponent(topic)}`);
    const newsItems = await response.json();
    renderNews(newsItems);
  } catch (err) {
    alert("Failed to fetch news.");
    console.error(err);
  }
}

// Fetch default news on load
async function loadNews() {
  const response = await fetch("/api/news");
  const newsItems = await response.json();
  renderNews(newsItems);
}

// Render news items
function renderNews(newsItems) {
  const newsContainer = document.getElementById("news");
  newsContainer.innerHTML = "";

  newsItems.forEach(item => {
    const article = document.createElement("article");
    article.setAttribute("tabindex", "0");

    const title = document.createElement("h2");
    title.textContent = item.title;

    const content = document.createElement("p");
    content.textContent = item.content;

    const speakBtn = document.createElement("button");
    speakBtn.textContent = "Read Aloud";
    speakBtn.onclick = () => speak(item.title + ". " + item.content);

    const pauseBtn = document.createElement("button");
    pauseBtn.textContent = "Pause";
    pauseBtn.onclick = pauseSpeech;

    const resumeBtn = document.createElement("button");
    resumeBtn.textContent = "Resume";
    resumeBtn.onclick = resumeSpeech;

    article.appendChild(title);
    article.appendChild(content);
    article.appendChild(speakBtn);
    article.appendChild(pauseBtn);
    article.appendChild(resumeBtn);

    newsContainer.appendChild(article);
  });
}

// Mark mode: Save highlighted text to notes
document.addEventListener("mouseup", () => {
  if (!isMarkMode) return;

  const selection = window.getSelection();
  const selectedText = selection.toString().trim();

  if (selectedText.length > 0) {
    const span = document.createElement("span");
    span.className = "highlighted";
    span.textContent = selectedText;

    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);

    speak(selectedText);
    selection.removeAllRanges();

    addNote(selectedText);
  }
});

// Add note to list
function addNote(text) {
  const notesList = document.getElementById("notes-list");
  const noteItem = document.createElement("li");
  noteItem.textContent = text;
  notesList.appendChild(noteItem);
}

// Load default news on page load
window.onload = loadNews;
