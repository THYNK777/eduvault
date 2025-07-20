import type { MagicalField } from '@/lib/types';
import { magicalFieldDetails } from '@/lib/types';
import type { LucideProps } from 'lucide-react';

interface MagicalFieldIconProps extends LucideProps {
  field: MagicalField;
}

export default function MagicalFieldIcon({ field, ...props }: MagicalFieldIconProps) {
  const { icon: Icon } = magicalFieldDetails[field];
  return <Icon {...props} />;
}
