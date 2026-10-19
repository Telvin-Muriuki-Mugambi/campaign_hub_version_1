# Sandra Mbuvi 2027 - Campaign Hub (Frontend) 🗳️

A modern, high-converting, mobile-first political campaign web application built for Sandra Mbuvi, MCA Candidate for Westlands Karura Ward (2027). 

This platform serves as a digital headquarters to mobilize voters, communicate the campaign manifesto, collect community feedback, register youth groups, and process grassroots campaign contributions.

## 🚀 Live Deployment
This project is continuously deployed to production via **Vercel** from the `main` branch.

## ✨ Key Features & Components

*   **Mobile-First Hero & Sticky Navigation (`CampaignHub.jsx`)**: High-impact landing area featuring the campaign slogan ("Your Voice, Your Vote, Your Karura") and immediate calls to action.
*   **The Karura Blueprint (`Vision.jsx`)**: A 4-pillar agenda grid (Youth Empowerment, Quality Education, Better Healthcare, Transparent Leadership) with interactive hover states.
*   **Pre-Election Engagement Hub (`EngagementHub.jsx`)**:
    *   **Shape the Agenda**: A localized feedback form for residents of Gigiri, Runda, Muthaiga, etc., to report community issues.
    *   **Youth Registry**: A lead-generation tool to pre-register youth for campaign-sponsored events and skills workshops.
*   **Grassroots Mobilization (`PowerCampaign.jsx`)**: An interactive donation module mimicking M-Pesa STK push mechanics, allowing supporters to pledge amounts (KES 200 - KES 1000+).
*   **Voter Utility Footer (`Footer.jsx`)**: Includes direct campaign contact information, social media links, and a direct link to the live **IEBC Voter Verification Portal**.
*   **Interaction Showcase (`TouchpointShowcase.jsx`)**: A specialized UI component demonstrating mobile contribution sheets and desktop hover states.

## 🛠️ Tech Stack

*   **Framework**: [React](https://reactjs.org/)
*   **Styling**: Raw CSS (Flexbox/Grid, Custom CSS Variables)
*   **Icons**: [Material-UI (MUI) Icons](https://mui.com/material-ui/material-icons/)
*   **Hosting/Deployment**: [Vercel](https://vercel.com/)

## 💻 Local Development Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd <your-repository-folder>

2. Install dependencies:
Make sure you have Node.js installed. Then, install the required packages (including MUI icons):

    ```
    bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:

    ```
    bash
    npm start
    # or if using Vite: npm run dev
    ```

The application will be available at http://localhost:3000 (or http://localhost:5173 for Vite).
