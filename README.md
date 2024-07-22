<div align="center">
  <h3 align="center">Vibeshub: A Social Media Application</h3>
</div>

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)

## <a name="introduction">🤖 Introduction</a>

Discover Vibeshub, the ultimate social media platform with a sleek design and tons of features. Effortlessly create and explore posts, enjoy top-notch security, and experience lightning-fast performance for a smooth and seamless vibe.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **React.js**: React was selected for its component-based architecture and declarative UI approach, which simplifies the creation of interactive and dynamic user interfaces.
- **Appwrite**: Appwrite is my backend server of choice, offering a complete set of secure and scalable APIs for user authentication, database, storage, and more, tailored for modern web and mobile applications.
- **React Query**: React Query simplifies data fetching and state management, providing robust tools for caching, synchronization, and updating server state, which enhances the app's performance and user experience.
- **TypeScript**: TypeScript adds static typing to JavaScript, enabling early error detection and improved code quality, which is essential for maintaining a large and complex codebase.
- **ViteJS**: I chose Vite.js for its speed and efficiency. Vite offers instant server start, lightning-fast hot module replacement (HMR), and optimized builds, making development fast and seamless.
- **Shadcn UI**: Shadcn provides accessible, high-quality React components that speed up UI development, ensuring consistency and a polished user experience.
- **Tailwind CSS**: Tailwind CSS was chosen for its utility-first approach, allowing for rapid styling directly in the markup without leaving the HTML file, resulting in a highly customizable and maintainable design system.

## <a name="features">🔋 Features</a>

- **🔒 Robust Authentication**: Secure and private user access to keep your data safe.
- **🌐 Explore Page**: Discover posts from all users, with a spotlight on top creators.
- **❤️ Like and Save**: Interact with posts by liking and saving them, easily manage your favorites.
- **📝 Detailed Post Page**: Dive into content with related posts for a rich browsing experience.
- **👤 Profile Page**: Highlight your activities and customize your profile.
- **🔍 Browse Users**: Explore profiles and posts from other users effortlessly.
- **➕ Create Posts**: A user-friendly interface for creating posts with drag-and-drop functionality.
- **✏️ Edit Posts**: Modify your posts anytime with ease.
- **📱 Responsive Design**: Enjoy a seamless mobile experience with an intuitive bottom navigation bar.
- **⚡ React Query**: Efficient data fetching with auto-caching and real-time updates.
- **🚀 Appwrite Backend**: Streamlined backend services for authentication, database, and more.

## Quick Start<a name="quick-start">🤸 Quick Start</a>

## Quick Start

Follow these steps to set up your project using Vite.js:

### Prerequisites

Make sure you have the following installed on your development machine:

- [Node.js](https://nodejs.org/) (version 12.0.0 or higher)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Create a new Vite project**:

    ```bash
    npm create vite@latest my-social-media-app
    # or
    yarn create vite my-social-media-app
    ```
    OR
    Use this if you are already in the folder you will code in.
    ```bash
    npm create vite@latest my-social-media-app ./
    # or
    yarn create vite my-social-media-app ./
    ```

2. **Navigate to the project directory**:

    ```bash
    cd my-social-media-app
    ```

3. **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

4. **Start the development server**:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

Your Vite development server will start, and you can view your app in the browser at `http://localhost:3000`.

### Adding React, Appwrite, shadcn, Tailwind CSS, and React Query

1. **Add React and ReactDOM**:

    ```bash
    npm install react react-dom
    # or
    yarn add react react-dom
    ```

2. **Add Appwrite SDK**:

    ```bash
    npm install appwrite
    # or
    yarn add appwrite
    ```

3. **Add shadcn UI components**:

    ```bash
    npm install shadcn
    # or
    yarn add shadcn
    ```

4. **Add Tailwind CSS**:

    ```bash
    npm install tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

    Then, add the following to your `tailwind.config.js`:

    ```javascript
    module.exports = {
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```

    And include Tailwind in your `src/index.css`:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5. **Add React Query**:

    ```bash
    npm install @tanstack/react-query
    # or
    yarn add @tanstack/react-query
    ```

You are now set up with Vite.js and the necessary tools for developing your social media app!


#
