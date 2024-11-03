import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import CertificationCard from './components/CertificationCard';
import SectionTitle from './components/SectionTitle';

function App() {
  const projects = [
    {
      title: "E-Commerce-Sentinel",
      description: "A DevSecOps Project to setup Amazon clone on AWS using CICD, Security and GitOps",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=1600",
      tags: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
      link: "https://github.com/devops-maestro17/e-Commerce-Sentinel"
    },
    {
      title: "MultiKubeDeploy",
      description: "Deploying Application to multiple Google Kubernetes Engine (GKE) clusters with ArgoCD Application Sets, Terraform and Helm",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1600",
      tags: ["GCP", "Kubernetes", "ArgoCD", "Helm"],
      link: "https://github.com/devops-maestro17/multiKubeDeploy"
    },
    {
      title: "EnvHorizon",
      description: "Deployment of infrastructure on AWS across multiple environments using Terraform",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600",
      tags: ["AWS", "Terraform", "IaC"],
      link: "https://github.com/devops-maestro17/envHorizon"
    }
  ];

  const skills = [
    "GCP", "AWS", "Kubernetes", "Terraform", "CI/CD",
    "Jenkins", "Linux", "Python", "ArgoCD", "Helm", "Java", "Selenium"
  ];

  const certifications = [
    {
      title: "GCP Associate Cloud Engineer",
      issuer: "Google Cloud Engineer",
      date: "October 2024",
      credentialUrl: "#",
      image: "https://media.licdn.com/dms/image/D4D12AQFBmtRiDXrsQQ/article-cover_image-shrink_720_1280/0/1685531235341?e=2147483647&v=beta&t=vMC3uSCmFxs7BXacHI2zUU7axBqWXQE8Hk9NAOIFHM4"
    }
  ];

  const handleContactClick = () => {
    const subject = encodeURIComponent("Hello from Portfolio");
    const body = encodeURIComponent("Hi Rajdeep,\n\nI saw your portfolio and would like to connect.\n\nBest regards,");
    window.location.href = `mailto:deogharia.rajdeep@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Rajdeep Deogharia</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl">
            A passionate Cloud and DevOps aficionado from India dedicated to lifelong learning and having hands-on experience with cutting-edge technologies.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/devops-maestro17" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rajdeep-deogharia-a543351a7/" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:deogharia.rajdeep@outlook.com" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Featured Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Certifications" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Skills & Technologies" />
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle title="Get In Touch" className="text-center" />
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <button 
            onClick={handleContactClick}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Say Hello
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>Designed & Built by Rajdeep Deogharia</p>
        </div>
      </footer>
    </div>
  );
}

export default App;