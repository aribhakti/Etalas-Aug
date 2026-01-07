import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface TechItem {
  name: string;
  category: string;
}

export interface TeamRecommendation {
  summary: string;
  roles: {
    title: string;
    count: number;
    description: string;
  }[];
  technologies: string[];
  estimatedTimeline: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}