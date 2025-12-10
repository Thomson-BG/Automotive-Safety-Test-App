import { Topic } from './types';
import { Wrench, Zap, Disc, Wind, Thermometer, Gauge } from 'lucide-react';

export const TOPIC_CONFIG = {
  [Topic.ENGINE]: { icon: Gauge, color: 'text-red-500', bg: 'bg-red-500/10' },
  [Topic.BRAKES]: { icon: Disc, color: 'text-slate-400', bg: 'bg-slate-400/10' },
  [Topic.ELECTRICAL]: { icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  [Topic.SUSPENSION]: { icon: Wind, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  [Topic.HVAC]: { icon: Thermometer, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
  [Topic.TRANSMISSION]: { icon: Wrench, color: 'text-orange-500', bg: 'bg-orange-500/10' },
};

// Subtopics ensure the AI generates a diverse bank of questions
export const SUBTOPICS = {
  [Topic.ENGINE]: ["Ignition Systems", "Fuel Injection", "Emission Controls (EVAP/EGR)", "Timing Belts/Chains", "Engine Mechanical"],
  [Topic.BRAKES]: ["Hydraulic Theory", "ABS Systems", "Disc vs Drum", "Master Cylinders", "Brake Lines & Fluids"],
  [Topic.ELECTRICAL]: ["Ohm's Law", "Series vs Parallel Circuits", "Battery/Starting/Charging", "Multimeter Usage", "Wiring Diagrams"],
  [Topic.SUSPENSION]: ["Alignment Angles (Camber/Caster/Toe)", "Shock Absorbers", "Steering Linkage", "Tire Wear Patterns", "Power Steering"],
  [Topic.HVAC]: ["Refrigerant Cycle", "Compressor Operation", "Heater Cores", "Climate Control Sensors", "Leak Detection"],
  [Topic.TRANSMISSION]: ["Manual Clutch Operation", "Torque Converters", "Planetary Gears", "CV Axles/Driveshafts", "Differential Gears"]
};

export const RANKS = [
  { minXp: 0, title: "Lube Tech", color: "text-slate-400" },
  { minXp: 500, title: "Apprentice", color: "text-green-400" },
  { minXp: 1500, title: "C-Tech", color: "text-blue-400" },
  { minXp: 3000, title: "B-Tech", color: "text-purple-400" },
  { minXp: 5000, title: "A-Tech", color: "text-orange-400" },
  { minXp: 8000, title: "Shop Foreman", color: "text-yellow-400" },
  { minXp: 12000, title: "Master Mechanic", color: "text-red-500" },
];