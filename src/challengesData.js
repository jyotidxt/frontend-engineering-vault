// src/challengesData.js
export const challenges = [
  {
    id: 1,
    title: "01. Pagination Engine",
    type: "Machine Coding",
    description: " Pagination is a technique used to break a large set of data into smaller, manageable chunks. Instead of loading thousands of records at once—which would crash the browser or make the page crawl—the system retrieves only a specific segment of data at a time.Eg. adding page numbers...",
    path: "/pagination",
    tagColor: "amber"
  },
  {
    id: 2,
    title: "02. Tab Form Component",
    type: "Machine Coding",
    description: "This component  solves the problem of managing multi-category form state without losing data or degrading performance during tab switches. Instead of wiping out a user's selections when they navigate between tabs, a proper implementation decouples the UI from the data layer, ensuring inputs are safely cached in memory",
    path: "/tabformcomponent",
    tagColor: "sky"
  },
  {
    id: 3,
    title: "02. AutoComplete Search Bar",
    type: "Machine Coding",
    description: "An autocomplete search bar is like Google’s search box. As you type a word, it instantly guesses what you want and shows a list of matching suggestions below it. It also includes ENHANCEMENTS also used DEBOUNCING and CACHED DATA for PERFORMANCE OPTIMIZATION: If you click outside the search bar, the suggestions list hides, and when you focus on the input field again, the list reappears.",
    path: "/autocompletesearch",
    tagColor: "green",
  }
];