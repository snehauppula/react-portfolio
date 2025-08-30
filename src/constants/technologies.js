// techStackData.js
import { RiReactjsLine } from "react-icons/ri";
import { SiPython, SiJavascript, SiJava, SiC } from "react-icons/si";
import { SiPandas, SiNumpy, SiScikitlearn, SiMatplotlib, SiSeaborn } from "react-icons/si";
import { SiHtml5, SiCss3, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { SiGit, SiGithub, SiVisualstudiocode, SiJupyter, SiGooglecolab } from "react-icons/si";
import { SiStreamlit, SiChartdotjs, SiGemini } from "react-icons/si";

export const TECH_STACK = [
  {
    group: "Programming Languages",
    items: [
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "Java", icon: SiJava, color: "text-orange-500" },
      { name: "C", icon: SiC, color: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    ]
  },
  {
    group: "AI & Machine Learning",
    items: [
      { name: "Pandas", icon: SiPandas, color: "text-blue-400" },
      { name: "NumPy", icon: SiNumpy, color: "text-green-500" },
      { name: "scikit-learn", icon: SiScikitlearn, color: "text-orange-400" },
      { name: "Matplotlib", icon: SiMatplotlib, color: "text-blue-600" },
      { name: "Seaborn", icon: SiSeaborn, color: "text-pink-500" },
      { name: "Gemini API", icon: SiGemini, color: "text-purple-400" },
    ]
  },
  {
    group: "Web Development",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
      { name: "React", icon: RiReactjsLine, color: "text-cyan-400" },
      { name: "Express.js", icon: SiExpress, color: "text-green-400" },
      { name: "Streamlit", icon: SiStreamlit, color: "text-red-500" },
      { name: "Chart.js", icon: SiChartdotjs, color: "text-yellow-400" },
    ]
  },
  {
    group: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    ]
  },
  {
    group: "Development Tools",
    items: [
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "text-gray-400" },
      { name: "VS Code", icon: SiVisualstudiocode, color: "text-blue-500" },
      { name: "Jupyter", icon: SiJupyter, color: "text-orange-500" },
      { name: "Google Colab", icon: SiGooglecolab, color: "text-yellow-500" },
    ]
  },
  {
    group: "Learning & Next Focus",
    items: [
      { name: "Deep Learning", icon: SiPython, color: "text-purple-500" },
      { name: "Computer Vision", icon: SiPython, color: "text-green-400" },
      { name: "NLP", icon: SiPython, color: "text-blue-400" },
      { name: "Cloud Platforms", icon: SiPython, color: "text-orange-400" },
    ]
  },
];
