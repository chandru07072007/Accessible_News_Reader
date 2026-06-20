# 📰 Accessible News Reader

An accessible web-based news reader designed to provide an inclusive reading experience for all users, especially visually impaired and elderly users. The application allows users to search news by topic, customize the reading interface, and save important notes for future reference.

---

## 📌 Project Overview

The **Accessible News Reader** is a Flask-based web application that fetches and displays news articles based on user-selected topics. It incorporates accessibility features such as high-contrast mode, adjustable font sizes, keyboard navigation, and note-taking functionality to improve usability and readability.

This project aims to create a user-friendly platform that ensures equal access to information for everyone.

---

## 🎯 Objectives

* Provide easy access to news content.
* Enhance readability through customizable display options.
* Support visually impaired and elderly users.
* Implement accessibility standards using semantic HTML and ARIA roles.
* Allow users to save notes and important information.

---

## ✨ Features

### 🔍 Topic-Based News Search

Users can enter topics such as:

* Technology
* Sports
* Health
* Business
* Science
* Entertainment

The application fetches relevant news articles dynamically.

---

### 🌙 High Contrast Mode

Provides a dark high-contrast interface to improve visibility for users with low vision.

---

### 🔠 Adjustable Font Size

Users can:

* Increase font size (A+)
* Decrease font size (A-)

This feature improves readability according to user preference.

---

### 📝 Mark Mode and Notes

Users can:

* Highlight important content.
* Save notes.
* Review saved notes later.

---

### ♿ Accessibility Features

#### Skip Navigation Link

Allows keyboard users to jump directly to the main content.

#### ARIA Roles

Improves screen reader support using:

* role="banner"
* role="main"
* role="contentinfo"

#### Keyboard Accessibility

Interactive elements are accessible through keyboard navigation.

#### Live Content Updates

Uses:

```html
aria-live="polite"
```

to notify screen readers when content changes.

---

## 🏗️ System Architecture

```
User
 ↓
Frontend (HTML + CSS + JavaScript)
 ↓
Flask Backend
 ↓
News API
 ↓
Display News Articles
```

---

## 🛠 Technologies Used

| Technology    | Purpose                   |
| ------------- | ------------------------- |
| HTML5         | Page Structure            |
| CSS3          | Styling and Accessibility |
| JavaScript    | Dynamic Interactions      |
| Flask         | Backend Framework         |
| Jinja2        | Template Rendering        |
| News API      | Fetching Latest News      |
| Local Storage | Saving Notes              |

---

## 📂 Project Structure

```
Accessible-News-Reader/
│
├── app.py
│
├── templates/
│     └── index.html
│
├── static/
│     ├── styles.css
│     ├── script.js
│     └── images/
│
├── requirements.txt
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/username/accessible-news-reader.git
cd accessible-news-reader
```

### Create Virtual Environment

```bash
python -m venv venv
```

Activate:

Windows

```bash
venv\Scripts\activate
```

Linux/Mac

```bash
source venv/bin/activate
```

---

### Install Dependencies

```bash
pip install -r requirements.txt
```

---

### Run Application

```bash
python app.py
```

Open browser:

```
http://127.0.0.1:5000
```

---

## 📋 Functional Requirements

### User Functions

* Search news by topic.
* Read articles.
* Change font size.
* Enable high-contrast mode.
* Save notes.
* Navigate using keyboard.

---

## 📋 Non-Functional Requirements

* Responsive design.
* Accessibility support.
* Fast loading.
* User-friendly interface.
* Cross-browser compatibility.

---

## 🔄 Workflow

1. User enters a topic.
2. JavaScript sends request.
3. Flask backend processes request.
4. News API returns articles.
5. Articles are displayed.
6. User customizes appearance.
7. Notes are stored locally.

---

## 📈 Advantages

* User-friendly interface.
* Accessibility-focused design.
* Supports visually impaired users.
* Customizable reading experience.
* Lightweight and responsive.
* Easy to maintain.

---

## 🔮 Future Enhancements

* Voice assistant support.
* Text-to-speech functionality.
* Multi-language support.
* Dark mode themes.
* Bookmark favorite articles.
* AI-powered article summarization.
* Offline reading support.
* Speech recognition for search.

---

## 🔒 Accessibility Standards Implemented

* Semantic HTML5
* ARIA Roles
* Keyboard Navigation
* Skip Links
* Adjustable Text Size
* High Contrast Mode
* Screen Reader Compatibility

---

## 📸 Screens

### Home Page

* Topic Search Bar
* Control Buttons
* News Feed

### Notes Section

* Saved Notes List

### Accessibility Controls

* High Contrast
* Font Adjustment
* Mark Mode

---

## 💡 Applications

* News portals
* Assistive technology systems
* Educational platforms
* Senior citizen applications
* Accessibility-focused websites

---

## 👨‍💻 Developed By

**Chandru P**

Artificial Intelligence and Data Science

M. Kumarasamy College of Engineering, Karur

GitHub: chandru07072007

---

## ⭐ Conclusion

The Accessible News Reader is an inclusive web application that combines accessibility principles with modern web technologies. By offering customizable reading options and support for users with visual impairments, the system ensures that news and information are accessible to everyone.
