import React from 'react';

export interface NavItem {
  name: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  bullets: string[];
  link: string;
  demoLink?: string;
  demoLabel?: string;
  metrics?: { value: string; label: string }[];
  tags: string[];
  image?: string;
  featured?: boolean;
}

export interface ResearchHighlight {
  title: string;
  venue: string;
  description: string[];
}

export interface PublicationInfo {
  summary: string;
  scholarUrl: string;
}

export interface Publication {
  title: string;
  authors: string;
  citation: string;
  url: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
}

export interface Education {
  degree: string;
  period: string;
  institution: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Language {
  name: string;
  level: string;
  description: string;
}
