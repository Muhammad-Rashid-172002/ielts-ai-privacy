import {
  ShieldCheck,
  Database,
  Activity,
  Flame,
  Cpu,
  Lock,
  Users,
  FileText,
  Mail,
  CalendarDays,
  Smartphone,
  MailOpen,
  Search,
  FileSignature,
  Download,
  Trash2,
  Copy,
  Check,
  ChevronRight,
  Info,
  LucideProps
} from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

const iconMap: Record<string, ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>> = {
  ShieldCheck,
  Database,
  Activity,
  Flame,
  Cpu,
  Lock,
  Users,
  FileText,
  Mail,
  CalendarDays,
  Smartphone,
  MailOpen,
  Search,
  FileSignature,
  Download,
  Trash2,
  Copy,
  Check,
  ChevronRight,
  Info
};

interface DynamicIconProps extends Omit<LucideProps, "ref"> {
  name: string;
  className?: string;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = iconMap[name] || ShieldCheck;
  return <IconComponent {...props} />;
}
