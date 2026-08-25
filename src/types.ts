export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type?: string;
  description: string;
}

export interface EducationItem {
  level: 'tertiary' | 'secondary';
  degree: string;
  institution: string;
  period: string;
}

export interface ToolCategory {
  category: string;
  tools: string[];
}
