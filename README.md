![tasks](https://github.com/user-attachments/assets/d6e2d243-298d-4cd7-9ce0-47b216f7d57f)
# Chrome Current URL-based Task Manager 🚀

### A personal productivity tool for tracking tasks based on the URL of your current Chrome tab!

This **Chrome extension** was created as a personal refresher project to dive back into Chrome extension development after 5-6 years. It’s built with **Vite** and **TypeScript** to streamline the development process and modernize the codebase.

## 🌟 Why this extension?
Managing tasks across different projects and websites often requires switching between tools and tabs, making productivity a challenge. This extension keeps things simple and efficient by integrating task management directly within your Chrome browser, linked to the URLs you visit most often.

## ✨ Features

- **Draggable Interface** - Move the task list around the page for optimal placement.
- **Add Tasks** - Create tasks with descriptions, automatically linked to the current URL.
- **Mark as Complete** - Check off tasks as you finish them.
- **Filter by Status** - View all tasks or only those that are completed or active.
- **URL-Based Filtering** - Show only tasks associated with the current URL or view all tasks.
- **Customizable Settings** - Tailor the extension settings to your preferences.
- **Persistent Storage** - Your tasks are stored in `localStorage` to ensure they remain saved, even after a browser restart.

## 🚀 Built With

- **Vite** - Fast and optimized build tool for modern JavaScript frameworks.
- **TypeScript** - Type-safe development, making the extension more reliable and maintainable.

## 🔮 Upcoming Features

The next release will introduce **ChatGPT integration**! You’ll be able to input your **ChatGPT API key** in the settings, allowing the extension to review, **summarize**, **rate**, and **prioritize** your tasks based on your personal productivity preferences.

Stay tuned for this exciting update, which will add a touch of AI to your task management workflow!

## 🛠️ Installation

1. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/matakltm-code/tasks-extension.git
   cd tasks-extension
   npm install
   ```

2. Build the extension using Vite:
   ```bash
   npm run build
   ```

3. Load the extension into Chrome:
   - Go to `chrome://extensions/`
   - Enable **Developer mode**
   - Click **Load unpacked** and select the `dist` directory in your project.

## 💬 Feedback
Try it out and let me know what you think! Your feedback will help make this extension even better.
