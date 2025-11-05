
import React from 'react';

export interface MarketingTool {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}
