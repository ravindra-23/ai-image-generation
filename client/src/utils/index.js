import { surpriseMePrompts } from "../constants";

export const getRandomPrompt = (prompt) => {
	const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
	const randomPrompt = surpriseMePrompts[randomIndex];

	if(prompt === randomPrompt) return getRandomPrompt
	return randomPrompt;
}