##Link to the app : [My Recipe App](https://kaleidoscopic-bombolone-51392b.netlify.app/)

# My Recipes App

A simple React application for managing and browsing recipes with light and dark mode support.

## Features
- View a list of recipes with images, ingredients, and cooking methods.
- Create new recipes using a form.
- Toggle between light and dark themes.
- Responsive design for desktop and mobile views.
- Data managed using Firebase Firestore.

## Technologies Used
- **React**: For building the user interface.
- **Firebase Firestore**: For storing and retrieving recipes.
- **React Router**: For navigation between pages.
- **Tailwind CSS**: For styling the components.
- **Context API**: For managing theme state.

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-recipes-app.git
   cd my-recipes-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project.
   - Add a Firestore database and enable it.
   - Replace `firebase/config.js` with your Firebase configuration.

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Project Structure
```
src/
├── components/
│   ├── Navbar.js
│   ├── RecipeList.js
│   ├── ThemeSelector.js
├── hooks/
│   ├── useTheme.js
├── pages/
│   ├── create/
│   │   └── Create.js
│   ├── home/
│   │   └── Home.js
│   ├── recipe/
│   │   └── Recipe.js
│   ├── search/
│       └── Search.js
├── firebase/
│   └── config.js
├── App.js
└── index.js
```

## Customization
- Update the app name, logo, or styling in the `Navbar` component.
- Modify theme styles in `index.css`.

## Screenshots
1. **Home Page**
   - Displays a list of recipes.
   - Includes a theme selector for switching between light and dark modes.

2. **Recipe Details**
   - View individual recipe details including ingredients and cooking instructions.

3. **Create Recipe**
   - Add a new recipe with a form.

## License
This project is licensed under the [MIT License](LICENSE).
