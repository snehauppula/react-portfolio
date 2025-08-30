import { projectImages } from "./assets";

export const PROJECTS = [
    {
      title: "CIVIGUARD – AI-Powered Civic Alert Platform",
      image: projectImages.careerChatbot, // Using existing image as placeholder
      description: {
        summary: "A real-time emergency alert platform using Google Maps API with AI-powered clustering of unsafe zones.",
        features: [
          "Real-time emergency alert system with Google Maps integration",
          "AI-powered clustering algorithm to identify unsafe zones",
          "Interactive map visualization with danger zone highlighting",
          "User-friendly interface for reporting and receiving alerts",
          "Data-driven insights for community safety improvement",
          "Responsive design for mobile and desktop access"
        ]
      },
      url: "#", // Add actual URL when available
      technologies: {
        main: ["Python", "Pandas", "Streamlit", "scikit-learn"],
        others: ["Google Maps API", "Clustering Algorithms"]
      }
    },
    {
      title: "Mini Music Predictor – ML Genre Recommender",
      image: projectImages.apeUniFibExtractor, // Using existing image as placeholder
      description: {
        summary: "Machine learning model to predict music genres based on user attributes using Decision Tree algorithm.",
        features: [
          "Trained Decision Tree model for music genre prediction",
          "Interactive visualization of decision tree using Graphviz",
          "User-friendly interface for genre recommendations",
          "Deployed via Jupyter Notebook for easy access",
          "Feature importance analysis and model interpretation",
          "Scalable architecture for adding new genres and features"
        ]
      },
      url: "#", // Add actual URL when available
      technologies: {
        main: ["Python", "scikit-learn", "Graphviz", "Jupyter"],
        others: ["Decision Trees", "Data Visualization"]
      }
    },
    {
      title: "Nutrition Tracker – Gemini API Food Analyzer",
      image: projectImages.mernEcommerce, // Using existing image as placeholder
      description: {
        summary: "MERN stack application that fetches food data from Gemini API and visualizes nutrition information with Chart.js.",
        features: [
          "Integration with Google's Gemini API for food data retrieval",
          "Interactive nutrition visualization using Chart.js",
          "MERN stack architecture for scalable web application",
          "Real-time food analysis and nutritional insights",
          "User-friendly dashboard for tracking daily nutrition",
          "Responsive design for cross-platform compatibility"
        ]
      },
      url: "#", // Add actual URL when available
      technologies: {
        main: ["MERN", "Gemini API", "Chart.js", "JavaScript"],
        others: ["React", "Express", "MongoDB", "Node.js"]
      }
    },
    {
      title: "Finance Tracker – Streamlit Web App",
      image: projectImages.expenseTracker, // Using existing image as placeholder
      description: {
        summary: "Comprehensive dashboard for analyzing expenses from CSV files using advanced filters and interactive charts.",
        features: [
          "CSV file upload and processing for expense data",
          "Advanced filtering and sorting capabilities",
          "Interactive charts and visualizations for expense analysis",
          "Real-time dashboard with expense insights",
          "Export functionality for reports and summaries",
          "User-friendly interface with Streamlit components"
        ]
      },
      url: "#", // Add actual URL when available
      technologies: {
        main: ["Python", "Streamlit", "Pandas", "Matplotlib"],
        others: ["Seaborn", "Data Analysis", "CSV Processing"]
      }
    },
    {
      title: "AI Content Channel Platform",
      image: projectImages.nextBlog, // Using existing image as placeholder
      description: {
        summary: "AI-focused content platform for sharing insights, tutorials, and cutting-edge AI tools and technologies.",
        features: [
          "Content management system for AI tutorials and insights",
          "Interactive learning modules and code examples",
          "Community features for AI enthusiasts and learners",
          "Integration with various AI platforms and APIs",
          "Responsive design for educational content delivery",
          "Analytics dashboard for content performance tracking"
        ]
      },
      url: "#", // Add actual URL when available
      technologies: {
        main: ["React", "Node.js", "AI APIs", "Content Management"],
        others: ["Educational Technology", "Community Platform"]
      }
    },
    {
      title: "Hackathon Project Portfolio",
      image: projectImages.gameHub, // Using existing image as placeholder
      description: {
        summary: "Collection of innovative projects developed during various hackathons including Hackprix and AI Hack Day.",
        features: [
          "Rapid prototyping and full-stack development",
          "AI/ML integration in hackathon projects",
          "Cross-platform compatibility and deployment",
          "Real-time collaboration and version control",
          "Innovative problem-solving approaches",
          "Competition-ready project presentations"
        ]
      },
      url: "#", // Add actual URL when available
      technologies: {
        main: ["Python", "JavaScript", "AI/ML", "Full-Stack"],
        others: ["Hackathon", "Rapid Development", "Innovation"]
      }
    }
];
