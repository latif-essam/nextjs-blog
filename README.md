# Next.js Blog - Best Practice Implementation

## Objective:

This Next.js app interacts with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com) to display, manage, and interact with posts.

### Pages and Functionality:

1. **Post List Page**:

   - Fetches and displays a list of posts.
   - Each post shows the title and body.
   - Includes a "View Details" button that navigates to the Post Details page.
   - Handles loading states and errors during fetching.

2. **Add Post Page**:

   - Allows the user to add a new post by filling out title and body fields.
   - Validates inputs to ensure fields are not empty.
   - After submission, the new post is added to the post list.

3. **Post Details Page**:

   - Displays full details of a selected post (title, body, and user ID).
   - Includes "Edit" and "Delete" buttons.
   - "Edit" button navigates to the Edit Post page.
   - "Delete" button removes the post from the list and navigates back to the Post List page.

4. **Edit Post Page**:
   - Pre-fills a form with the current post details.
   - Allows the user to update the title and body fields.
   - Validates the form and saves the changes.

### Navigation:

- Utilizes **Next.js Link** for smooth page transitions.

### State Management:

- **Redux** is used to handle global state for managing the post list and its actions.

### Styling:

- Ensures a responsive and consistent UI across all pages, utilizing **Styled Components** and **CSS modules**.

---

## Screenshots:

### Table: Screenshots of the app on different devices for Dark & Light Themes

| Page                         | Desktop                                                                      | Mobile                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Home**                     | ![Post List on Desktop](./assets/shots/home-desktop.jpg)                     | ![Post List on Mobile](./assets/shots/home-mobile.jpg)                     |
| **Post Details**             | ![Post Details on Desktop](./assets/shots/details-desktop.jpg)               | ![Post Details on Mobile](./assets/shots/details-mobile.jpg)               |
| **Add Post**                 | ![Add Post on Desktop](./assets/shots/new_post-desktop.jpg)                  | ![Add Post on Mobile](./assets/shots/new_post-mobile.jpg)                  |
| **Edit Post**                | ![Edit Post on Desktop](./assets/shots/update_post-desktop.jpg)              | ![Edit Post on Mobile](./assets/shots/update_post-mobile.jpg)              |
| **Delete Post Confirmation** | ![Delete Confirmation on Desktop](./assets/shots/confirm_delete-desktop.jpg) | ![Delete Confirmation on Mobile](./assets/shots/confirm_delete-mobile.jpg) |
| **Settings**                 | ![Settings on Desktop](./assets/shots/settings-desktop.jpg)                  | ![Settings on Mobile](./assets/shots/settings-mobile.jpg)                  |
| **Search**                   | ![Search on Desktop](./assets/shots/search-desktop.jpg)                      | ![Search on Mobile](./assets/shots/search-mobile.jpg)                      |

## Setup Instructions:

### Prerequisites:

Make sure you have the following software installed on your computer:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Visual Studio Code or any preferred IDE**: [VS Code](https://code.visualstudio.com/)

### Steps to Run the App:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/latif-essam/nextjs_blog.git
   cd nextjs_blog
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the app**:

   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to**:

   ```
   http://localhost:3000
   ```

### Running on Different Browsers and Devices:

- Make sure your development environment supports multiple browsers to ensure cross-browser compatibility.
- You can use browser developer tools to emulate different devices for testing responsiveness.

---

## Technologies Used:

- **[Next.js](https://nextjs.org/)**: A React framework for building fast, user-friendly web applications.
- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[Redux](https://redux.js.org/)**: A predictable state container for JavaScript apps, used for managing the app's global state.
- **[Axios](https://axios-http.com/)**: A promise-based HTTP client for making requests to the JSONPlaceholder API and handling responses.
- **[Tailwindcss](https://tailwindcss.com/)**: A library for writing CSS-in-JS, allowing for modular and scoped styling.
- **[Next.js Link](https://nextjs.org/docs/api-reference/next/link)**: A component for client-side navigation.

---

## Bonus Features Implemented:

- **Theme Toggle**: Allows users to toggle between light and dark themes.
- **About Page**: Contains my contact information and personal details.
- **Optimistic UI Updates**: Implemented for adding/editing/deleting posts.
- **Pagination**: Posts are paginated and load more as you scroll.
- **Search**: Users can search for posts by title.

---

## Conclusion:

This app demonstrates my ability to handle state management, implement RESTful APIs, and create a user-friendly interface using Next.js. I have also implemented additional features like a theme toggle and an About section to showcase my skills in web development.

---

**Thank you for reviewing my project. I look forward to the opportunity to work together.**
