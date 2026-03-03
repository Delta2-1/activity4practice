import React, { useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    console.log("Analytics: Home Page Mounted");
  }, []);

  const topics = [
    {
      title: "Conditional Rendering",
      content: "Displays components only when specific conditions are met using standard logic like if statements or ternary operators."
    },
    {
      title: "useEffect Hook",
      content: "Handles side effects like API fetching, DOM updates, and subscriptions. It runs after render and can be optimized with dependency arrays."
    },
    {
      title: "BrowserRouter",
      content: "The foundation for routing, enabling dynamic URL handling without page reloads by leveraging the HTML5 history API."
    },
    {
      title: "Routes & Route",
      content: "Routes groups your definitions, while Route maps specific paths to components to determine what displays at each URL."
    },
    {
      title: "Link Component",
      content: "Provides seamless navigation between routes without triggering full page refreshes, preserving your application state."
    }
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>React Essentials</h1>
        <p>Core concepts for building dynamic web applications.</p>
      </header>

      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div key={index} className="topic-card">
            <h3>{topic.title}</h3>
            <p>{topic.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
