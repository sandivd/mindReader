# Mind Reader - A Parody Web App

[![Live Demo](https://img.shields.io/badge/Website-online-brightgreen)](https://sandivd.github.io/mindReader/)

A fun, interactive web application that humorously pretends to read the user's mind using a dynamic loading sequence and a fun reveal.

## ✨ Features

-   **Interactive "Mind Reading":** Enter any number and watch the app "work its magic."
-   **Dynamic Loading Sequence:** A progress bar that fills up over time to build anticipation.
-   **Humorous Status Messages:** A series of funny, fake steps the app is "taking" to read your mind.
-   **Animated Reveal:** A fun explosion GIF reveals the "correct" number at the end.
-   **Sleek Dark Mode:** A non-toggleable dark theme for a modern and focused look.

## 🤖 Development Approach: Vibe Coding

This project was developed using a method known as **Vibe Coding**. Instead of manually writing every line of React, the development process involved giving high-level instructions and refinement prompts to an AI assistant, which then generated the code.

> Vibe coding is a modern approach to software development where you use natural language—either spoken or typed—to describe what you want a program to do, and then an AI (usually a large language model, or LLM) generates the actual code for you. Instead of manually writing every line of code, you give the AI high-level instructions or prompts, and it handles the technical implementation.

This approach allowed for rapid prototyping and iteration, focusing on the overall structure and functionality of the application.

## 🛠️ Tech Stack

-   **React:** A JavaScript library for building user interfaces.
-   **TypeScript:** Adds static typing to JavaScript to improve code quality and developer experience.
-   **CSS3:** Used for all styling and keyframe animations.
-   **Create React App:** Used as the initial project boilerplate.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) (which includes npm) installed on your computer.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repository-name.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd your-repository-name
    ```

3.  **Install the dependencies:**
    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## How to Customize the Loading Messages

All the humorous status messages are stored in an array.

1.  **Open the main component file:** `src/mindReader.tsx`
2.  **Locate the `loadingMessages` array:** This array contains all the status messages.
3.  **Add, remove, or edit** the strings in the array to change the "mind-reading" steps.

**Example:**
```javascript
const loadingMessages = [
  "SCANNING YOUR AURA....",
  "CONSULTING THE ORACLE.....",
  "REVERSING THE POLARITY....",
  "FINALIZING PREDICTION..."
];

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
