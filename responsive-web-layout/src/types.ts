export type DeviceMode = 'fluid' | 'mobile' | 'tablet' | 'desktop';

export interface NavItem {
  id: string;
  label: string;
  href: string;
  badge?: string;
}

export interface BentoFeature {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  technique: 'CSS Grid' | 'Flexbox' | 'Media Queries' | 'Fluid Typography';
  colSpanDesktop: string;
  metric?: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  category: string;
  summary: string;
  imageUrl: string;
  columns: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  tags: string[];
}
