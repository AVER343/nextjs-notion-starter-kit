export interface IReport {
	title: string;
	description?: string;
	numberOfQuestions: number;
	topics: any;
	level: Level;
}
export enum Level {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD'
}