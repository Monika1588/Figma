Pet Care Website 
1. Introduction
This project is about converting a Figma design into a real, working Pet Care website using React.js. I followed the given Figma layout carefully and tried to match the design, spacing, colors, and structure as closely as possible. The main aim of this project was to understand how a UI design is converted into a real website using React components.

2. Tools and Technologies Used
•	React.js – for building the user interface
•	Vite – for creating and running the React project
•	CSS – for styling the components
•	VS Code – as the code editor
•	Figma – for design reference

3. Project Setup (What I Did First)
1.	I created a new React project using Vite.
2.	I opened the project in VS Code.
3.	I ran the project using npm run dev to make sure everything was working correctly.

4. Understanding the Figma Design
Before starting development, I carefully analyzed the Figma design to understand the structure and flow of the website.
Key observations from the design:
•	The website is divided into clear sections:
Navbar, Hero, Categories, About, Shop Cards, Featured Products, Why Choose Us, Footer
•	Reusable UI patterns such as cards, buttons, and icons are used multiple times
•	Consistent color palette and typography are followed throughout the design
•	Layout is responsive, meaning sections rearrange on smaller screens
This analysis helped me plan the component structure in React.




5. Folder Structure Creation
After setting up the project, I organized the files properly:
•	I used the public folder to store all images and icons.
•	Inside the src/components folder, I created separate folders for each section of the website.
•	Each component folder contains:
o	A .jsx file for logic and JSX
o	A .css file for styling
This structure helped me keep the code clean and easy to understand.

5. Component Development Process
The website was built section by section, following the same order as the Figma design.
6. Creating the Navbar Component
•	I created a Navbarr component.
•	Added the logo on the left side.
•	Added navigation links in the center.
•	Added icons (notification and profile) on the right.
•	Used Flexbox to align items properly.
•	Added hover effects using CSS.
________________________________________
7. Creating the Hero Section
•	I created a Hero component.
•	Used a background image from the design.
•	Added a color overlay using CSS linear-gradient.
•	Placed heading, description, and a "Shop Now" button in the center.
•	Styled text size and spacing to match the design.
________________________________________
8. Creating the Categories Section
•	I created a Categories component.
•	Stored category names and images in an array.
•	Used the .map() function to display categories dynamically.
•	Made category images circular using CSS.
•	Used Flexbox to align all categories in one row.
This approach reduced repeated code and made it easy to add more categories later.
________________________________________
9. Creating the About Section
•	I created an About component.
•	Divided the section into two parts: text and image.
•	Used Flexbox for a two-column layout.
•	Added multiple paragraphs as shown in the design.
•	Made the layout responsive using media queries.
________________________________________
10. Creating the Shop Cards Section
•	I created a ShopCards component.
•	Used grid layout to display two promotional cards.
•	Added background images and overlay images.
•	Positioned text and buttons using absolute positioning.
•	Styled the "Shop Now" button.
________________________________________
11. Creating the Featured Products Section
•	I created a FeaturedProducts component.
•	Used CSS Grid to display products in rows and columns.
•	Added product images from the public folder.
•	Used overlay images and a "View Details" button.
•	Managed image layering using position and z-index.
________________________________________
12. Creating the Why Choose Us Section
•	I created a WhyChooseUs component.
•	Added an image on one side and text on the other.
•	Used Flexbox for layout.
•	Styled text for better readability.
•	Added responsive styles for smaller screens.
________________________________________
13. Creating the Footer Section
•	I created a Footer component.
•	Added social media icons.
•	Added hover effects on icons.
•	Displayed copyright text at the bottom.
•	Used border styling and center alignment.
________________________________________
14. Combining All Components in App.jsx
After creating all components, I imported them into App.jsx and arranged them in the correct order. I wrapped everything inside BrowserRouter for future routing support.
________________________________________
15. Styling and Responsiveness
•	I used separate CSS files for each component.
•	Exact colors and font sizes matched from Figma
•	Used Flexbox and Grid for layouts.
•	Added media queries to make the website responsive.
•	Hover effects added to buttons and cards
•	Adjusted margins, padding, and font sizes to match the Figma design.
________________________________________
8. Public Folder Management
•	All images and icons were exported from Figma
•	Organized into images and icons folders
•	Optimized sizes to avoid layout issues
•	SVG icons used where possible for clarity

16. Problems Faced and Solutions
•	Spacing issues: Solved using CSS margin and padding adjustments.
•	Overlay issues: Fixed using position: absolute and z-index.
•	Responsiveness: Fixed using media queries and flexible units.
________________________________________

17. Final Result
•	Successfully converted the Figma design into a working React website.
•	The website layout matches the design closely.
•	Code is modular, readable, and reusable.
________________________________________
18. What I Learned from This Project
•	How to convert a Figma design into React components
•	How to structure a React project properly
•	How to use Flexbox and Grid effectively
•	How to manage images and overlays
•	How to write clean and reusable frontend code


