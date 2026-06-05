export interface ProjectSpec {
  polygons?: string;
  textures?: string;
  pipeline?: string;
  softwareUsed: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  specs: ProjectSpec;
  backgroundStory: string;
  breakdownSteps: { title: string; description: string }[];
}

export interface Insight {
  id: string;
  numberString: string;
  title: string;
  category: string;
  date: string;
  content: string;
  readingTime: string;
}
