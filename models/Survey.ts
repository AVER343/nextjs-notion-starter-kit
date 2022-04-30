import { Level } from "interfaces/reports"

export class SurveyModel {
  title: string
  level: Level
  showProgressBar: string
  showTimerPanel: string
  maxTimeToFinishPage: number
  maxTimeToFinish: number
  firstPageIsStarted: boolean
  startSurveyText: string
  pages: any[]
  completedHtml: string
  constructor(props: {
    showProgressBar?: string
    showTimerPanel?: string
    maxTimeToFinishPage?: number
    maxTimeToFinish?: number
    firstPageIsStarted?: boolean
    startSurveyText?: string
    pages: any[]
    title: string
    level: Level
    completedHtml: string
  }) {
    this.title = props.title
    this.level = props.level
    this.completedHtml = props.completedHtml
    this.showProgressBar = props.showProgressBar || 'bottom'
    this.showTimerPanel = props.showTimerPanel || 'top'
    this.maxTimeToFinishPage = props.maxTimeToFinishPage || 10
    this.maxTimeToFinish = props.maxTimeToFinish || 25
    this.firstPageIsStarted = props.firstPageIsStarted || true
    this.startSurveyText = props.startSurveyText || 'Start Quiz'
    this.pages = props.pages
  }
}
