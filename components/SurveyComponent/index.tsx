// components/survey/index.tsx

import React, { useEffect, useState } from 'react';
import { Survey, Model, StylesManager } from 'survey-react'; // import surveyjs
import 'survey-react/modern.min.css';
import { useRouter } from 'next/router';
import { BASE_URL } from '../../constants/url';
import { SurveyModel } from '../../models/Survey';
import { IsLoadingComponent } from '../isLoading';
import { Level } from 'interfaces/reports';
export interface Element {
	html: string;
	type: string;
	name: string;
	title: string;
	choices: string[];
	correctAnswer: string;
}

export interface Page {
	elements: Element[];
}

export interface Options {
	type: string;
	pages: Page[];
}

export interface RootObject {
	question_id: number;
	status: number;
	description: string;
	question: string;
	level: Level;
	title: string;
	options: Options;
}

const SurveyComponent = () => {
	const router = useRouter();
	const { category, level } = router.query;
	const [ isLoading, setIsLoading ] = useState(true);
	const [ survey, setSurvey ] = useState<Model>(new Model({}));

	if (typeof window != 'undefined') {
		StylesManager.applyTheme('modern');
	}
	useEffect(
		() => {
			fetch(`${BASE_URL}/question/category/${category}/level/${level}`)
				.then((e) => e.json())
				.then((e) => {
					console.log(e);
					return e;
				})
				.then((e) => e.map((e: any) => e['Question_id']))
				.then((e: RootObject[]) => {
					const pages = [
						{
							elements: [
								{
									type: 'html',
									html: `You are about to start quiz on ${category}. <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready.`
								}
							]
						}
					];
					e.map((e) => e.options.pages.map((e) => pages.push({ elements: e.elements })));
					pages.push();
					const model = new SurveyModel({
						title: (!Array.isArray(category) && category) || '',
						level: (e[0] && e[0].level) || Level.EASY,
						pages,
						completedHtml:
							'<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>'
					});

					return model;
				})
				.then((e) => {
					console.log({ e });
					setSurvey(new Model(e));
					setIsLoading(false);
				});
		},
		[ category, level ]
	);

	return (
		<IsLoadingComponent isLoading={isLoading}>
			<Survey model={survey} />
		</IsLoadingComponent>
	);
};

export default SurveyComponent;
