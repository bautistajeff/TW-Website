# BAUTISTA_TW

BAUTISTA_TW is a frontend-only website created as a Technical Writing learning resource. It is designed to present lessons, explanations, examples, and key concepts related to technical writing in a structured and accessible format. The project serves as a student-created educational site that introduces readers to technical communication principles and provides basic information about the author and how to contact them.

## Project Overview

This website was developed for a Technical Writing project and is intended to support learning in a clear, organized way. The content focuses on how to explain complex information, write effectively for a specific audience, use proper structure, and apply citation and visual communication techniques.

The site includes:

- a home page introducing the project and navigation
- a lectures section covering technical writing topics
- example/application content for each lecture topic
- an about page with author information
- a contact page with contact details and a message form
- a light and dark mode toggle for viewing preferences

## Website Features

### Home
The home page introduces the website and provides access to the main sections of the project. It presents the project title, a short description, and a navigation entry point to the lecture content.

### Lectures
The lectures page contains interactive topic tabs covering key technical writing concepts. Each topic includes explanations, supporting points, visual examples, and an example/application section.

### Examples
Examples are included throughout the lecture content. Each lecture topic contains a practical example/application that helps connect the theory to real-world communication situations.

### About Us
The About Us page provides information about Jeffrey A. Bautista, including his academic background and his purpose for creating the learning resource.

### Contact Info
The contact page presents the available contact details, including the author’s email and location, and includes a form that prepares an email in the user’s default mail application.

### Light and Dark Mode
The site includes a theme toggle implemented in JavaScript. It allows users to switch between light and dark display modes and remembers the user’s preference in browser storage when available.

## Technologies Used

The project uses the following technologies that are actually present in the repository and implementation:

- HTML5 — structure and content of the website pages
- CSS3 — custom styling, layout, color themes, and responsive design
- Bootstrap 5 — navigation, layout components, and styling utilities from Bootstrap CDN
- JavaScript — interactive lecture tabs, theme switching, and contact form behavior
- PHP — used only for the local XAMPP redirect from `index.php` to the home page
- Git and GitHub — version control and repository hosting
- GitHub Pages — live deployment URL used for the published website
- XAMPP / Apache — used for local development and running the project on a local machine

Note: the project is frontend-only and does not implement a database or server-side application logic.

## Website Access

### Online version (GitHub Pages)
The published website is available at:

`https://bautistajeff.github.io/BAUTISTA_TW/`

### Local version (XAMPP)
To run the site locally:

1. Place the `BAUTISTA_TW` folder inside the XAMPP `htdocs` directory, for example:
   `C:\xampp\htdocs\BAUTISTA_TW\`
2. Start Apache from the XAMPP Control Panel.
3. Open the following URL in a browser:
   `http://localhost/BAUTISTA_TW/`

The root `index.php` file redirects to `index.html` when running locally through XAMPP. GitHub Pages serves the root `index.html` directly.

## Project Structure

```text
BAUTISTA_TW/
├── README.md
├── index.html
├── index.php
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
└── pages/
    ├── about.html
    ├── contact.html
    └── lectures.html
```

### File and directory overview

- `README.md` — project documentation and usage instructions
- `index.html` — GitHub Pages home page
- `index.php` — optional local XAMPP redirect to `index.html` (GitHub Pages does not run PHP)
- `assets/css/style.css` — custom CSS for layout, colors, theme, and page styling
- `assets/js/script.js` — JavaScript for theme toggle, lecture tab interactions, and contact form behavior
- `pages/lectures.html` — lecture topics and interactive technical writing content
- `pages/about.html` — author information and academic background
- `pages/contact.html` — contact information and email form

## Technical Writing Lecture Content

The lecture section includes the following technical writing topics and related examples, based on the actual content in the project:

1. ABCs of Technical Writing
   - Explains core principles such as accuracy, brevity, clarity, honesty, and objectivity.
   - Emphasizes writing that is precise, organized, and reader-centered.

2. Products of Technical Writing
   - Covers reports, contracts, policies, manuals, proposals, business letters, academic papers, and graphic aids.
   - Shows how writing is used for practical, professional, and academic purposes.

3. Basic Techniques in Technical Writing
   - Includes definition, classification, partition, process description, and mechanism description.
   - Supports effective explanation of concepts, systems, and procedures.

4. Language Use in Technical Writing
   - Explains how tone, diction, clarity, and audience awareness affect technical communication.
   - Discusses jargon, biased language, objective wording, and professional tone.

5. APA 7th Edition Citation Basics
   - Introduces in-text citation formats and reference list structure.
   - Reinforces the importance of proper source attribution and consistency.

6. Graphic Aids
   - Covers flowcharts, diagrams, charts, tables, and illustrations used to support explanation and comparison.
   - Emphasizes purpose, labeling, and placement near the relevant text.

7. Contemporary Communication
   - Discusses modern communication tools such as email, instant messaging, video conferencing, collaborative software, social media, webinars, and cloud tools.
   - Highlights benefits and limitations of digital communication in modern work settings.

Additional content included in the lectures:

- Technical Writing: Definition and Purpose
- Outlining the Subject
- Types of Technical Papers
- The Basic English Structure
- Parts of a Letter
- Graphs and Charts

Each topic includes a brief explanation and a practical example or application to support student learning.

## Database and Backend Requirements

This project uses a frontend-only architecture. It does not require a database, server-side database connection, or backend integration. The contact form opens the user’s default email application with the message details rather than sending data to a server.

## Author Information

- Author: Jeffrey A. Bautista
- Course: Bachelor of Science in Information Systems
- Institutional context: City College of Calapan / Institute of Library and Information Science

## License

No license has been specified for this repository. There is no `LICENSE` file or equivalent repository license declaration present in the project.

## Summary

BAUTISTA_TW is a student-focused website that presents technical writing lessons, examples, and author information in a simple, accessible web format. It is a static frontend project that can be deployed on GitHub Pages or run locally through XAMPP, without requiring a database or backend setup.
