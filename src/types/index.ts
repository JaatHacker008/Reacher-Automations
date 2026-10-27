export interface DetailedFeature {
  title: string;
  shortSummary: string;
  howItWorks: string;
  businessBenefit: string;
  technicalMechanic: string;
}

export interface BeforeAfterComparison {
  before: {
    processTitle: string;
    speed: string;
    friction: string;
    humanLabor: string;
    dropoff: string;
  };
  after: {
    processTitle: string;
    speed: string;
    benefit: string;
    automationLevel: string;
    reliability: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  features: string[];
  detailedFeatures: DetailedFeature[];
  beforeAfter: BeforeAfterComparison;
  businessOutcomes: string[];
  toolsUsed: string[];
  deliverables: string[];
  pipelineStages: {
    step: string;
    title: string;
    detail: string;
    actor: 'Client / Inbound' | 'AI Model' | 'Integration Engine' | 'CRM / Team';
  }[];
}

export interface IndustryItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  challenges: string[];
  solutions: string[];
  workflowExample: {
    input: string;
    aiProcessing: string;
    destination: string;
    outcome: string;
  };
}

export interface PortfolioProject {
  id: string;
  title: string;
  clientType: string;
  category: 'Lead Systems' | 'Customer Care AI' | 'CRM & Pipelines' | 'Scheduling & Booking' | 'Document AI';
  isPrototype: boolean;
  tagline: string;
  clientContext: string;
  problem: string;
  solutionOverview: string;
  implementationSummary?: string;
  architecture: string;
  architectureNodes: {
    label: string;
    type: 'trigger' | 'ai' | 'database' | 'action' | 'output';
    detail: string;
  }[];
  tools: string[];
  coreFeaturesExplained: {
    featureTitle: string;
    explanation: string;
    technicalImplementation: string;
  }[];
  beforeAfter: BeforeAfterComparison;
  metrics: {
    label: string;
    value: string;
    comparison?: string;
  }[];
  flowSteps: string[];
  demoInteractiveData: {
    sampleInput: {
      source: string;
      rawPayload: Record<string, string>;
    };
    aiAnalysis: {
      confidence: string;
      classification: string;
      reasoning: string;
    };
    crmAction: {
      actionType: string;
      destination: string;
      recordState: string;
    };
    notificationOut: {
      channel: string;
      message: string;
    };
  };
}

export interface CaseStudyItem {
  id: string;
  title: string;
  category: string;
  isPrototype: boolean;
  problem: string;
  architecture: string;
  tools: string[];
  implementationSummary: string;
  metrics: {
    label: string;
    value: string;
  }[];
  flowSteps: string[];
}

export interface TechTool {
  name: string;
  category: 'Orchestration' | 'AI & LLMs' | 'CRM & Sales' | 'Communication' | 'Database & Storage';
  description: string;
  role: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  details: string[];
  deliverable: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  website?: string;
  industry: string;
  businessSize?: string;
  automationGoal: string;
  preferredContact: string;
  budgetRange?: string;
  honeypot?: string;
}
