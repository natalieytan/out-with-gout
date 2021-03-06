/* eslint-disable @typescript-eslint/no-explicit-any */
import { GtagEventData } from './types';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const gtagPageView = (url: string): void => {
  (window as any).gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
};

export const gtagEvent = ({ action, category, label }: GtagEventData): void => {
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label
  });
};
