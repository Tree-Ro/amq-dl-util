# AMQ Download App Detailed Roadmap

## Current Status
- Basic structure and components are being set up.
- API endpoints and integration are under development.
- UI/UX design in progress.

## Development Phases

# Front-end Development Roadmap

1. **Set Up Project Structure**
   - [X] Initialize React project with Vite.
   - [X] Install Material-UI for UI components.
   - **Directory Structure**
     - `/src`
       - `/components` - Reusable components
       - `/pages` - Page-level components
       - `/hooks` - Custom hooks
       - `/context` - Context API files
       - `/styles` - Global styles
       - `/utils` - Utility functions (e.g., API calls)

2. **Build Navbar**
   - [X] **Create Navbar Component**
     - Design a responsive navbar using Material-UI.
     - Include links for Home and TempSongs.

**Build Search Functionality**
   - [ ] **Create Search Bar Component**
     - Design a responsive search bar using Material-UI.
     - Include state for the search query and handle input changes.
   - [ ] **Implement Filter Options**
     - Create filter components (checkboxes or dropdowns) for genre and release year.
     - Maintain state for selected filters and pass them to the API call.
   - [ ] **Fetch Anime Data from API**
     - Use `useEffect` to fetch data based on the search query and filters.
     - Manage loading state and error handling.

3. **Display Search Results**
   - [ ] **Create Results Component**
     - Create a `Results` component to map over fetched data.
     - Use Material-UI cards to display anime titles, images, and descriptions.
   - [ ] **Add to User List Functionality**
     - Implement a button on each result card to add the anime to the user’s list.
     - Use context or local state to manage the user’s list.

4. **Create User List Interface**
   - [ ] **Develop User List Component**
     - Display selected animes in a list format (e.g., grid or table).
     - Use Material-UI components for styling (e.g., List, ListItem).
   - [ ] **Implement Metadata Editing**
     - Add a modal or inline editing feature for metadata (e.g., tags, notes).
     - Use controlled components to manage the editing state.
   - [ ] **Clear or Edit List Functionality**
     - Include buttons for clearing the list or editing individual entries.
     - Use context or local state to manage updates.

5. **Session Management**
   - [ ] **Generate Unique Session ID**
     - Create a utility function to generate a session ID.
     - Store the ID in `localStorage` or `sessionStorage` upon initialization.
   - [ ] **Retrieve and Save User's List**
     - Implement functions to save and retrieve the user's list from storage.
     - Use `useEffect` to load the list when the component mounts.

6. **Integrate Download Options**
   - [ ] **Add Direct Download Button**
     - Create a button that triggers the download of the selected anime's metadata.
     - Use libraries like `FileSaver.js` for handling downloads.
   - [ ] **Forward List to Back-end API**
     - Implement an API call to send the user’s list to the backend when prompted.
     - Handle loading and error states for the API request.

### Additional things:
- **Responsive Design**: Ensure that all components are responsive and accessible.

### Back-end Development
7. **Set Up Back-end Structure**
   - [ ] Initialize Express server.
   - [ ] Set up basic routing for API requests.

8. **Implement API Endpoints**
   - [ ] Create an endpoint to receive the user's list of animes with the session ID.
   - [ ] Develop functionality to check the number of songs (limit < 150).

9. **Persistent Storage**
   - [ ] Choose a database (e.g., MongoDB, SQLite) for storing user sessions and lists.
   - [ ] Create models for storing session data and anime lists.
   - [ ] Implement CRUD operations for lists associated with session IDs.

10. **Scrape Sources for Cover Art**
    - [ ] Implement scraping functionality for platforms like YouTube, Spotify, and Google.
    - [ ] Create logic to handle errors during scraping.

11. **Upload Cover Art to Litterbox API**
    - [ ] Integrate with the Litterbox API for uploading cover art.
    - [ ] Ensure proper error handling and response management.

12. **Provide Download Options**
    - [ ] Create an endpoint to allow users to download their completed list with cover art.
    - [ ] Implement functionality to retrieve cover art based on the user's list.

### Integration and Testing
13. **Connect Front-end and Back-end**
    - [ ] Ensure front-end sends user lists to the back-end API with the session ID.
    - [ ] Test the integration between front-end and back-end functionalities.

14. **Testing**
    - [ ] Write unit tests for front-end components.
    - [ ] Write tests for back-end endpoints.
    - [ ] Conduct integration testing for end-to-end functionality.

### Final Touches
15. **UI/UX Enhancements**
    - [ ] Improve UI for better user experience.
    - [ ] Add loading indicators and error messages where applicable.

16. **Documentation**
    - [ ] Update README with installation and usage instructions.
    - [ ] Document API endpoints and how to use them.

17. **Deployment**
    - [ ] Prepare the application for deployment (set up hosting for front-end and back-end).
    - [ ] Deploy the application and ensure everything functions as expected.

## Optional Enhancements
18. **User Preferences**
    - [ ] Allow users to save preferences (e.g., favorite genres, last search) to personalize their experience.

19. **Cover Art Customization**
    - [ ] Allow users to upload their own cover art for songs.
    - [ ] Provide options for customizing metadata further.

20. **Integration with Third-Party APIs**
    - [ ] Explore integration with APIs like MyAnimeList or AniList for additional data sources.

21. **Code Splitting and Optimization**
    - [ ] Implement code splitting in React to optimize loading times for larger applications.
    - [ ] Optimize API calls to reduce latency, such as batching requests or minimizing payload size.

22. **Security Features**
    - [ ] Implement rate limiting on your API to prevent abuse.
    - [ ] Ensure proper input validation to prevent SQL injection or other attacks.
    - [ ] Set up session expiration and cleanup to manage storage effectively.

## Future Considerations
- Potential features to explore in future releases.

