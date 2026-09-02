import { ImmutableObject } from 'jimu-core'

export interface Config {
  title: string
  subtitle: string
  note: string
  commentField: string
  commentField2: string
  nameField: string
  organizationField: string
  organizationOtherField: string
  dateField: string
  maxComments: number
}

export type IMConfig = ImmutableObject<Config>
