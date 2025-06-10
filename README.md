# React Project

**Key Features:**

- **Modern Styling:** The project uses Tailwind CSS, a utility-first CSS framework, to ensure a visually appealing and responsive design. This allows for rapid prototyping and consistent styling across all components.

- **Component-Based Architecture:** Each UI element, such as the skip card, price display, hire period, and notification, is implemented as a separate functional component. This modular approach improves code readability, maintainability, and reusability.

- **Dynamic Data Fetching:** On application load, the app fetches skip data from an external API (`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`). This ensures that users always see up-to-date skip options relevant to their location.

- **Interactive Selection:** Users can select a skip size, which triggers a visual focus effect (white background and bold font) on the selected card, making it easy to identify the current choice.

- **User Feedback:** The app uses `react-toastify` to display notifications when a skip is selected. The notification includes details such as the skip size, price, and hire period, providing immediate feedback and confirmation to the user.

- **Accessibility and Usability:** The UI is designed to be clear and user-friendly, with accessible color contrasts and intuitive controls.

**Project Structure:**

- The main logic resides in App.js, which manages state, data fetching, and rendering of skip options.
- UI components are organized in the components directory, each handling a specific part of the interface.
- Styling is handled globally via index.css and locally within components using Tailwind classes.
- The project is set up for testing with Jest and React Testing Library, as seen in App.test.js and setupTests.js.

**Summary:**
This project demonstrates best practices in modern React development, including componentization, state management, API integration, and user-centric design. It provides a seamless and interactive experience for users looking to choose the right skip for their waste disposal needs.
