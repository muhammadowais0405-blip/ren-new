import { Bike, Camera, Gamepad2, Laptop } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { CategorySlug } from '../../types';

/** Static navigation metadata for the four launch categories. */
export const categoryNav: { slug: CategorySlug; name: string; icon: LucideIcon }[] = [
  { slug: 'cameras-photography', name: 'Cameras & Photography', icon: Camera },
  { slug: 'gaming-consoles', name: 'Gaming Consoles', icon: Gamepad2 },
  { slug: 'bikes-cycles', name: 'Bikes & Cycles', icon: Bike },
  { slug: 'electronics-equipment', name: 'Electronics & Equipment', icon: Laptop },
];
