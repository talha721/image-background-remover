# Remove Image Background

This Node.js application allows you to remove the background from images using the Rembg API. It provides two routes for processing images: `/api/single-file` for single-file uploads and `/api/multiple-files` for multiple-file uploads.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- Git installed on your machine (for cloning the repository).

## Installation

Clone the repository:

```bash
git clone https://github.com/talha721/image-background-remover.git

npm install or npm install --force
npm start
```

The server will run at http://localhost:3000 by default.

### API Routes

- http://localhost:3000/api/single-file (for remove single file background)
- http://localhost:3000/api/multiple-files (for remove multiple files background max 5 images)
