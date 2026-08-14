import type { IconType } from 'react-icons'
import { DiMsqlServer } from 'react-icons/di'
import { FaChartBar } from 'react-icons/fa6'
import { TbArrowsSplit, TbChartHistogram } from 'react-icons/tb'
import { VscAzure } from 'react-icons/vsc'
import {
  SiDotnet,
  SiFramer,
  SiGit,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si'

interface StackIcon {
  Icon: IconType
  /** Official brand colour, so each logo reads the way people recognise it. */
  color: string
}

/**
 * Keyed by the `name` of each entry in `projects.stack`.
 * Brands without an official icon fall back to a symbol for what they do.
 */
export const stackIcons: Record<string, StackIcon> = {
  'C# / .NET': { Icon: SiSharp, color: '#9B4F96' },
  'ASP.NET Core': { Icon: SiDotnet, color: '#512BD4' },
  'Node.js': { Icon: SiNodedotjs, color: '#5FA04E' },
  Python: { Icon: SiPython, color: '#3776AB' },
  React: { Icon: SiReact, color: '#61DAFB' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06B6D4' },
  'SQL Server': { Icon: DiMsqlServer, color: '#CC2927' },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  Azure: { Icon: VscAzure, color: '#0078D4' },
  'Git / GitHub': { Icon: SiGit, color: '#F05032' },
  'Pentaho ETL': { Icon: TbArrowsSplit, color: '#CC0000' },
  'Power BI': { Icon: FaChartBar, color: '#F2C811' },
  Tableau: { Icon: TbChartHistogram, color: '#E97627' },
  Vite: { Icon: SiVite, color: '#646CFF' },
  'Framer Motion': { Icon: SiFramer, color: '#0055FF' },
}
