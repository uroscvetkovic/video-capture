# Video Preview & Timed Snapshot

This project is a **Video Preview & Timed Snapshot** application built with **React** and powered by **Vite**.


## Short video recording demonstration
<video width="600" autoplay  controls>
  <source src="Example1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Prerequisites
- Node.js (tested on v22.19.0)
- npm

### Installation
1. Clone the repository
2. Navigate to the project directory and install the dependencies:
   ```bash
   cd <project_directory>

   npm install
3. Start the development server:
    ```bash
    npm run dev
    
    
    To access the app from another device on the network (mobile browser), run: 
    
    npm run dev -- --host
    ```

### Notes

Since camera access via `getUserMedia` requires a secure context, this project uses `vite-plugin-mkcert` to enable HTTPS for local development.  
Make sure your browser allows access to the locally generated HTTPS certificate.

    