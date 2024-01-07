// HomePage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />

      <main>
        <section className="hero-section">
          <h2>Welcome to Your App!</h2>
          <p>Explore the amazing features and have fun.</p>
        </section>

        {/* Add more sections with content */}
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
