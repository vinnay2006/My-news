##Project Role
Mynews is a dynamic, real-time news aggregation platform built with React.js. It provides users with the latest breaking news from across the globe by fetching data from high-authority external News APIs.

The application offers a personalized reading experience where users can filter news by categories (Business, Tech, Health, Sports), search for specific topics, and view headlines from multiple international sources—all within a clean, ad-free interface.

🛠 Tech Stack

Library: React.js (Functional Components)
State Management: React Hooks (useState, useEffect) / Context API
Routing: React Router DOM (for category-based navigation)
API Consumption: Axios / Fetch API
External API: NewsAPI
Styling: Bootstrap 
Tools: Git, GitHub, NPM

✨ Features
Live News Feed: Fetches real-time headlines directly from global news servers.
Category-Based Navigation: Specialized sections for Technology, Science, Entertainment, Sports, and Business.
Infinite Scroll / Pagination: Seamless browsing experience that loads more articles as the user scrolls down.
Responsive Design: Fully optimized for mobile, tablet, and desktop viewing.
Skeleton Screens: Clean loading states to improve perceived performance.

📂 Folder Structure
Plaintext
News-App/
├── public/                 # Static assets and index.html
├── src/
│   ├── components/         # Reusable UI Components
│   │   ├── News.js         # Main logic for fetching and mapping news
│   │   ├── NewsItem.js     # Individual News Card UI
│   │   ├── Navbar.js       # Category-based navigation links
│   │   ├── Spinner.js      # Loading animation component
│   │   └── Footer.js       # Basic site info
│   ├── assets/             # Images and local CSS files
│   ├── utils/              # Helper functions (e.g., date formatting)
│   ├── App.js              # Routing logic and API Key management
│   └── index.js            # Entry point
├── .env                    # Environment variables (API_KEY)
└── package.json            # Dependencies and scripts

##Screenshots 
<img width="1920" height="1080" alt="Screenshot (511)" src="https://github.com/user-attachments/assets/3fb9a2ad-d7be-410a-a372-54ced162e602" />
<img width="1920" height="1080" alt="Screenshot (510)" src="https://github.com/user-attachments/assets/d9a4db1d-4268-4599-8008-92edc660aef3" />

