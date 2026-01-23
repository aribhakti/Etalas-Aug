import { GoogleGenAI, Type, Schema } from "@google/genai";
import { TeamRecommendation } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const recommendationSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    summary: {
      type: Type.STRING,
      description: "A brief executive summary of the recommended team strategy. Focus on staffing numbers and seniority.",
    },
    roles: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "Job title to hire, e.g., Senior React Engineer" },
          count: { type: Type.INTEGER, description: "Number of developers needed for this role" },
          description: { type: Type.STRING, description: "Key responsibilities and required seniority level for this role" },
        },
        required: ["title", "count", "description"],
      },
      description: "List of recommended team roles to hire.",
    },
    technologies: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "Recommended technology stack for the new hires.",
    },
    estimatedTimeline: {
      type: Type.STRING,
      description: "Estimated time to source and onboard this team (e.g., '3-5 days').",
    },
  },
  required: ["summary", "roles", "technologies", "estimatedTimeline"],
};

export const getTeamRecommendation = async (projectDescription: string): Promise<TeamRecommendation> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `I need to hire a remote team for this project: "${projectDescription}". 
      Focus on staff outsourcing. Suggest exact roles to hire, technologies, and a timeline for sourcing them.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: recommendationSchema,
        systemInstruction: "You are a Senior Talent Consultant for Etalas, a premium IT Staff Outsourcing agency. Your goal is to recommend the perfect team composition of remote developers for a client. Focus on 'hiring' and 'staffing' rather than just 'building'. Be concise and professional."
      },
    });

    const jsonText = response.text;
    if (!jsonText) {
        throw new Error("No response text from Gemini");
    }
    return JSON.parse(jsonText) as TeamRecommendation;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate team recommendation.");
  }
};