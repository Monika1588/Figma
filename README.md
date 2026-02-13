<h2>Pet Care Website </h2><br> 
1. Introduction<br> 
This project is about converting a Figma design into a real, working Pet Care website using React.js. <br> I followed the given Figma layout carefully and tried to match the design, spacing, colors, and structure as closely as possible. The main aim of this project was to understand how a UI design is converted into a real website using React components.<br><br>  

2. Tools and Technologies Used<br> 
•	React.js – for building the user interface<br> 
•	Vite – for creating and running the React project<br> 
•	CSS – for styling the components<br> 
•	VS Code – as the code editor<br> 
•	Figma – for design reference<br> <br> 

3. Project Setup (What I Did First)<br> 
•	I created a new React project using Vite.<br> 
•	I opened the project in VS Code.<br> 
•	I ran the project using npm run dev to make sure everything was working correctly.<br> <br> 

4. Understanding the Figma Design<br> 
Before starting development, I carefully analyzed the Figma design to understand the structure and flow of the website.<br> 
Key observations from the design:<br> 
•	The website is divided into clear sections:<br> 
Navbar, Hero, Categories, About, Shop Cards, Featured Products, Why Choose Us, Footer<br> 
•	Reusable UI patterns such as cards, buttons, and icons are used multiple times<br> 
•	Consistent color palette and typography are followed throughout the design<br> 
•	Layout is responsive, meaning sections rearrange on smaller screens<br> 
This analysis helped me plan the component structure in React.<br> <br> 

5. Folder Structure Creation<br> 
After setting up the project, I organized the files properly:<br> 
•	I used the public folder to store all images and icons.<br> 
•	Inside the src/components folder, I created separate folders for each section of the website.<br> 
•	Each component folder contains:<br> 
o	A .jsx file for logic and JSX<br> 
o	A .css file for styling<br> 
This structure helped me keep the code clean and easy to understand.<br> <br> 

5. Component Development Process<br>
The website was built section by section, following the same order as the Figma design.<br> <br> 
6. Creating the Navbar Component<br> 
•	I created a Navbarr component.<br> 
•	Added the logo on the left side.<br> 
•	Added navigation links in the center.<br> 
•	Added icons (notification and profile) on the right.<br> 
•	Used Flexbox to align items properly.<br> 
•	Added hover effects using CSS.<br> <br> 

7. Creating the Hero Section<br>
•	I created a Hero component.<br>
•	Used a background image from the design.<br>
•	Added a color overlay using CSS linear-gradient.<br>
•	Placed heading, description, and a "Shop Now" button in the center.<br>
•	Styled text size and spacing to match the design.<br><br> 

8. Creating the Categories Section<br>
•	I created a Categories component.<br>
•	Stored category names and images in an array.<br>
•	Used the .map() function to display categories dynamically.<br>
•	Made category images circular using CSS.<br>
•	Used Flexbox to align all categories in one row.<br>
This approach reduced repeated code and made it easy to add more categories later.<br><br> 

9. Creating the About Section<br>
•	I created an About component.<br>
•	Divided the section into two parts: text and image.<br>
•	Used Flexbox for a two-column layout.<br>
•	Added multiple paragraphs as shown in the design.<br>
•	Made the layout responsive using media queries.<br><br> 

10. Creating the Shop Cards Section<br>
•	I created a ShopCards component.<br>
•	Used grid layout to display two promotional cards.<br>
•	Added background images and overlay images.<br>
•	Positioned text and buttons using absolute positioning.<br>
•	Styled the "Shop Now" button.<br><br> 

11. Creating the Featured Products Section<br>
•	I created a FeaturedProducts component.<br>
•	Used CSS Grid to display products in rows and columns.<br>
•	Added product images from the public folder.<br>
•	Used overlay images and a "View Details" button.<br>
•	Managed image layering using position and z-index.<br><br> 

12. Creating the Why Choose Us Section<br>
•	I created a WhyChooseUs component.<br>
•	Added an image on one side and text on the other.<br>
•	Used Flexbox for layout.<br>
•	Styled text for better readability.<br>
•	Added responsive styles for smaller screens.<br><br> 

13. Creating the Footer Section<br>
•	I created a Footer component.<br>
•	Added social media icons.<br>
•	Added hover effects on icons.<br>
•	Displayed copyright text at the bottom.<br>
•	Used border styling and center alignment.<br><br> 

14. Combining All Components in App.jsx<br>
After creating all components, I imported them into App.jsx and arranged them in the correct order.<br> I wrapped everything inside BrowserRouter for future routing support.<br><br> 

15. Styling and Responsiveness<br>
•	I used separate CSS files for each component.<br>
•	Exact colors and font sizes matched from Figma<br>
•	Used Flexbox and Grid for layouts.<br>
•	Added media queries to make the website responsive.<br>
•	Hover effects added to buttons and cards<br>
•	Adjusted margins, padding, and font sizes to match the Figma design.<br><br> 

8. Public Folder Management<br>
•	All images and icons were exported from Figma<br>
•	Organized into images and icons folders<br>
•	Optimized sizes to avoid layout issues<br>
•	SVG icons used where possible for clarity<br><br> 

16. Problems Faced and Solutions<br>
•	Spacing issues: Solved using CSS margin and padding adjustments.<br>
•	Overlay issues: Fixed using position: absolute and z-index.<br>
•	Responsiveness: Fixed using media queries and flexible units.<br><br> 


17. Final Result<br>
•	Successfully converted the Figma design into a working React website.<br>
•	The website layout matches the design closely.<br>
•	Code is modular, readable, and reusable.<br><br> 

18. What I Learned from This Project<br>
•	How to convert a Figma design into React components<br>
•	How to structure a React project properly<br>
•	How to use Flexbox and Grid effectively<br>
•	How to manage images and overlays<br>
•	How to write clean and reusable frontend code<br>


