# Video Preview & Timed Snapshot

This project is a **Video Preview & Timed Snapshot** application built with **React** and powered by **Vite**.


## Short video recording demonstration
[!Example1.mp4](https://github.com/user-attachments/assets/285d808e-a956-4385-b398-7eaf95d82b25)

[!Example2.mp4](https://github.com/user-attachments/assets/93628daf-f86b-4477-8def-d8fe361febce)

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

    
