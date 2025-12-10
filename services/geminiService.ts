import { GoogleGenAI, Type } from "@google/genai";
import { Topic, QuizQuestion, DiagnosticScenario } from "../types";
import { SUBTOPICS } from "../constants";
import { STATIC_QUESTION_BANK } from "../data/questionBank";
import { STATIC_SCENARIO_BANK } from "../data/scenarioBank";

// Only initialize AI if API key is available
const apiKey = process.env.API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;
const modelName = 'gemini-2.5-flash';

// Simple in-memory cache to prevent seeing the same static question/scenario twice in one session
const usedStaticIndices: Record<string, Set<number>> = {};
const usedScenarioIndices: Record<string, Set<number>> = {};

export const generateQuizQuestions = async (topic: Topic, count: number = 5): Promise<QuizQuestion[]> => {
  const questions: QuizQuestion[] = [];
  
  // 1. Try to pull from Static Bank first
  if (!usedStaticIndices[topic]) {
    usedStaticIndices[topic] = new Set();
  }
  
  const bank = STATIC_QUESTION_BANK[topic] || [];
  
  // Get available static questions
  bank.forEach((q, idx) => {
    if (questions.length < count && !usedStaticIndices[topic].has(idx)) {
      questions.push(q);
      usedStaticIndices[topic].add(idx);
    }
  });

  // 2. If we still need questions, ask Gemini (if available)
  const needed = count - questions.length;
  
  if (needed > 0 && ai) {
    // Pick a random subtopic to ensure variety
    const subtopics = SUBTOPICS[topic];
    const randomSubtopic = subtopics[Math.floor(Math.random() * subtopics.length)];
    
    const prompt = `Generate ${needed} difficult, ASE-style multiple choice questions about ${topic}, specifically focusing on ${randomSubtopic}. 
    Format: A/B/C/D options.
    Ensure one answer is clearly correct and others are plausible distractors.
    Include a "Tech Tip" explanation.`;

    try {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                options: { type: Type.ARRAY, items: { type: Type.STRING } },
                correctIndex: { type: Type.INTEGER, description: "Zero-based index of the correct option" },
                explanation: { type: Type.STRING, description: "Brief explanation of why the answer is correct" }
              },
              required: ["question", "options", "correctIndex", "explanation"]
            }
          }
        }
      });
      
      if (response.text) {
          const aiQuestions = JSON.parse(response.text) as QuizQuestion[];
          questions.push(...aiQuestions);
      }
    } catch (error) {
      console.error("Quiz generation error:", error);
    }
  }
  
  // 3. If we still need questions (no AI or AI failed), recycle from static bank
  if (questions.length < count && bank.length > 0) {
    while(questions.length < count) {
      questions.push(bank[Math.floor(Math.random() * bank.length)]);
    }
  }

  return questions;
};

export const generateDiagnosticScenario = async (topic: Topic): Promise<DiagnosticScenario> => {
  
  // 1. Try Static Bank
  if (!usedScenarioIndices[topic]) {
    usedScenarioIndices[topic] = new Set();
  }

  const bank = STATIC_SCENARIO_BANK[topic] || [];
  // Find indices that haven't been used yet
  const availableIndices = bank.map((_, i) => i).filter(i => !usedScenarioIndices[topic].has(i));

  if (availableIndices.length > 0) {
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    usedScenarioIndices[topic].add(randomIndex);
    
    // Simulate a small delay for consistency
    await new Promise(resolve => setTimeout(resolve, 600)); 
    return bank[randomIndex];
  }

  // 2. If bank is exhausted, use AI (if available)
  if (ai) {
    // Rotate subtopics for scenarios too
    const subtopics = SUBTOPICS[topic];
    const randomSubtopic = subtopics[Math.floor(Math.random() * subtopics.length)];

    const prompt = `Create a realistic automotive diagnostic scenario for a high school student studying ${topic} (${randomSubtopic}). 
    Include a vehicle description, a customer complaint (symptoms), and 4 possible diagnoses (one correct).`;

    try {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              vehicle: { type: Type.STRING, description: "Year, Make, Model" },
              complaint: { type: Type.STRING, description: "Customer states..." },
              details: { type: Type.STRING, description: "Additional symptoms or test results provided to the student" },
              correctDiagnosis: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING }, description: "4 possible causes, including the correct one" },
              explanation: { type: Type.STRING, description: "Detailed walkthrough of the diagnosis" }
            },
            required: ["id", "vehicle", "complaint", "details", "correctDiagnosis", "options", "explanation"]
          }
        }
      });

      if (response.text) {
          return JSON.parse(response.text) as DiagnosticScenario;
      }
    } catch (error) {
      console.error("Scenario generation error:", error);
    }
  }
  
  // 3. If no AI or AI failed, recycle from static bank
  if (bank.length > 0) {
    // Simulate a small delay for consistency
    await new Promise(resolve => setTimeout(resolve, 600));
    return bank[Math.floor(Math.random() * bank.length)];
  }

  // 4. Final fallback scenario
  return {
    id: "fallback-1",
    vehicle: "2015 Ford F-150",
    complaint: "Squealing noise when braking.",
    details: "The noise stops when the brake pedal is released. Visual inspection shows brake pads are thin.",
    correctDiagnosis: "Worn Brake Pads (Wear Indicator)",
    options: ["Worn Brake Pads (Wear Indicator)", "Warped Rotors", "Low Brake Fluid", "Bad Master Cylinder"],
    explanation: "The squealing is likely the mechanical wear indicator contacting the rotor, signaling that the pads need replacement."
  };
};