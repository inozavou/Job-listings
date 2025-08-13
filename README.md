# Job Listing Filter App

A React-based application that displays job listings and allows users to filter them by role, level, languages, and tools. The app dynamically updates the visible jobs based on selected tags.

# Features

-Job Listings Display – Shows companies with their details and tags.
-Tag-Based Filtering – Click on role, level, language, or tool tags to filter job postings.
-Dynamic Search Bar – Displays selected filters with the ability to remove individual tags or clear all.
-Responsive UI – Built with CSS for clean and accessible design.

# How It Works

- Jobs are loaded from a local data.json file.
- Clicking on a tag adds it to the filter list.
- The list of jobs updates in real-time to match all selected filters.

# Project Structure

src/
├── App.js # Main component and app logic
├── App.css # Styling for the app
├── data.json # Job listing data
├── images/ # Header and company logos
Installation
Clone the repository:

```bash

git clone https://github.com/your-username/job-listing-filter-app.git
cd job-listing-filter-app
```

# Usage

-Click any tag in the job listing to filter jobs.
-View applied filters in the search bar.
-Remove individual filters using the ❌ button.
-Click Clear to remove all filters and show all jobs again.

# Tech Stack

-React – UI and state management
-CSS – Styling
-JSON – Static data source
