# **HelloCountries - React Application Using REST Countries API 🌍**

## **Overview**
This project is a React-based web application that consumes data from the REST Countries API to provide information about countries worldwide. It allows users to search, filter, and view country details, including the country's name, capital, population, region, languages, flags, and more. Additionally, users can save their favorite countries, which will be stored locally and accessible after the user logs in.

The app utilizes React functional components, Firebase authentication for user sessions, and a sophisticated CSS framework to enhance the application's usability.

## **Table of Contents 📚**
1. [Installation](#installation)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Functional Requirements](#functional-requirements)
5. [Testing](#testing)
6. [How to Use](#how-to-use)
7. [Deployment](#deployment)
8. [Challenges](#challenges)
9. [Contact Information](#contact-information)

## **Installation 🔧**

1. **Clone the repository**:
    ```bash
    git clone https://github.com/MethmiNPCS/af-2-ChethyaMethmi.git
    cd af-2-ChethyaMethmi
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```
    This will start the Vite development server on `http://localhost:5173/`.

## **Features 🚀**
- **Country Search**: Allows users to search for countries by name.
- **Filter by Region 🌍**: Users can filter countries by region (e.g., Asia, Europe).
- **Filter by Language 🗣️**: Users can filter countries based on the language spoken.
- **Login and Logout 🔒**: Users can sign up, log in, and log out using Firebase authentication.
- **Favorites ❤️**: Users can save their favorite countries, which are stored in their local storage.
- **Responsive Design 📱**: The app is responsive and optimized for various screen sizes, including mobile, tablet, and desktop.

## **Technologies Used ⚙️**
- **Frontend**: React (Functional Components), Bootstrap (for layout), Tailwind CSS (for modern styling)
- **Backend**: Firebase for Authentication
- **API Integration**: REST Countries API
- **Testing**: Cypress for End-to-End tests

## **Functional Requirements ✅**
The application fulfills the following functional requirements:
- Users can search for countries by name.
- Users can filter countries by region or language.
- Users can click on a country to view detailed information, including name, capital, region, population, languages, and more.
- Users can save and view their favorite countries.
- Firebase Authentication is implemented to manage user sessions.

## **Testing 🧪**
- **Unit and Integration Tests**: 
    - **Search Functionality 🔍**: Ensures the search bar correctly filters countries by name.
    - **Region Filter 🌏**: Tests that the region filter works correctly and displays countries from the selected region.
    - **Language Filter 🗣️**: Verifies that the language filter functions as expected.
    - **favourites**: Tests favourite countries feature working as expected.
  
- **End-to-End Tests (Cypress)**:
    - Verifies the full workflow, including visiting pages, interacting with the search bar, and verifying the correct data is shown.

### **Test Commands 📝**:
- **Unit/Integration Tests (Cypress)**:
    ```bash
    npm run cypress:open
    ```

## **How to Use 💻**
- **Sign up or log in**: When first visiting the app, users can sign up or log in with their email and password using Firebase Authentication.
- **Search for countries**: Type the name of a country in the search bar to filter the country list.
- **Filter by region or language**: Use the drop-down menus to filter countries by region (e.g., Asia, Europe) or language.
- **View details**: Click on any country card to view detailed information such as population, capital, languages, and more.
- **Save to Favorites**: Click the heart icon on a country card to save it as a favorite. These favorites are stored locally.
- **Log out**: Click on the username in the navbar to reveal the logout option.

####################################################
## **Deployment 🌐**
The application is deployed on **Render** (or your chosen platform). Visit the link below to see the live version:
- **Live URL**: [Insert your deployment URL here]
#####################################################

## **Challenges ⚔️**
- **Firebase Authentication**: Implementing Firebase Authentication was a bit tricky as it required handling authentication states and ensuring secure session management.
- **State Management**: Handling the state of the filtered countries and keeping the UI responsive was a challenge, especially while integrating the filters dynamically.

## **Contact Information 📬**
- **Developer**: Chethya Methmi
- **Email**: npcsmethmi@gmail.com