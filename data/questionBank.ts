import { Topic, QuizQuestion } from '../types';

// This is the "robust" core bank. The app will pull from here first.
// If these run out, the AI will generate more based on the subtopics.
export const STATIC_QUESTION_BANK: Record<Topic, QuizQuestion[]> = {
  [Topic.ENGINE]: [
    {
      question: "Technician A says a lean condition can be caused by a vacuum leak. Technician B says a lean condition can be caused by low fuel pressure. Who is correct?",
      options: ["Technician A only", "Technician B only", "Both Technician A and B", "Neither Technician A nor B"],
      correctIndex: 2,
      explanation: "Both are correct. A vacuum leak adds unmetered air, and low fuel pressure reduces fuel delivery; both result in a lean air/fuel mixture."
    },
    {
      question: "Which component is responsible for monitoring the oxygen content in the exhaust stream?",
      options: ["MAF Sensor", "MAP Sensor", "O2 Sensor", "TPS Sensor"],
      correctIndex: 2,
      explanation: "The Oxygen (O2) sensor measures the amount of unburned oxygen in the exhaust to help the ECU adjust fuel trim."
    }
  ],
  [Topic.BRAKES]: [
    {
      question: "A customer complains of a spongy brake pedal. Which of the following is the most likely cause?",
      options: ["Worn brake pads", "Air in the hydraulic lines", "Seized caliper", "Warped rotors"],
      correctIndex: 1,
      explanation: "Air is compressible, whereas hydraulic fluid is not. Air bubbles in the lines cause the pedal to feel spongy or soft."
    },
    {
      question: "What does the 'DOT' rating on a bottle of brake fluid indicate?",
      options: ["Viscosity", "Boiling Point", "Freezing Point", "Brand Manufacturer"],
      correctIndex: 1,
      explanation: "DOT ratings (DOT 3, 4, 5) primarily classify the fluid's dry and wet boiling points."
    }
  ],
  [Topic.ELECTRICAL]: [
    {
      question: "If a 12V circuit has a resistance of 4 Ohms, how much current is flowing through it?",
      options: ["3 Amps", "48 Amps", "0.33 Amps", "8 Amps"],
      correctIndex: 0,
      explanation: "Using Ohm's Law (I = V / R), 12 Volts divided by 4 Ohms equals 3 Amperes."
    },
    {
      question: "Which tool is best used to check for a parasitic draw on a battery?",
      options: ["Test Light", "Digital Multimeter (Ammeter setting)", "Digital Multimeter (Voltmeter setting)", "Jumper Wire"],
      correctIndex: 1,
      explanation: "An ammeter placed in series with the negative battery cable is the standard method for measuring parasitic draw."
    }
  ],
  [Topic.SUSPENSION]: [
    {
      question: "Which alignment angle is responsible for the steering wheel returning to center after a turn?",
      options: ["Camber", "Caster", "Toe", "Thrust Angle"],
      correctIndex: 1,
      explanation: "Positive Caster provides directional stability and helps the steering wheel return to the straight-ahead position."
    },
    {
      question: "Technician A says worn shocks can cause cupped tire wear. Technician B says incorrect toe can cause feathered tire wear. Who is correct?",
      options: ["Technician A only", "Technician B only", "Both Technician A and B", "Neither Technician A nor B"],
      correctIndex: 2,
      explanation: "Worn shocks allow the tire to bounce (cupping), and incorrect toe drags the tire sideways (feathering)."
    }
  ],
  [Topic.HVAC]: [
    {
      question: "The state of the refrigerant as it leaves the condenser is:",
      options: ["Low pressure gas", "Low pressure liquid", "High pressure gas", "High pressure liquid"],
      correctIndex: 3,
      explanation: "The condenser removes heat from the high-pressure gas, turning it into a high-pressure liquid."
    }
  ],
  [Topic.TRANSMISSION]: [
    {
      question: "A slipping clutch in a manual transmission is most noticeable when:",
      options: ["Idling in neutral", "Accelerating in a high gear", "Coasting downhill", "Shifting into reverse"],
      correctIndex: 1,
      explanation: "High load in a high gear puts the most stress on the clutch friction material, revealing slippage."
    }
  ]
};