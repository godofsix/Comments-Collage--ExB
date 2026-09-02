import { React, Immutable, AllDataSourceTypes, DataSourceManager, type IMFieldSchema } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { Label, Option, Select, Tab, Tabs, TextInput } from 'jimu-ui'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import { type IMConfig } from '../config'

const supportedTypes = Immutable([AllDataSourceTypes.FeatureLayer])
const headerTextToConfigure: Array<[keyof IMConfig, string]> = [
  ['title', 'Title'],
  ['subtitle', 'Subtitle'],
  ['note', 'Note']
]
const fieldsToConfigure: Array<[keyof IMConfig, string]> = [
  ['commentField', 'Primary comment field'],
  ['commentField2', 'Secondary comment field'],
  ['nameField', 'Name field'],
  ['organizationField', 'Division field'],
  ['organizationOtherField', 'Other division field'],
  ['dateField', 'Date field']
]

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  const [activeTab, setActiveTab] = React.useState('data-selection')
  const updateField = (key: keyof IMConfig, value: string) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set(key, value)
    })
  }
  const dataSourceId = props.useDataSources?.[0]?.dataSourceId
  const fields = dataSourceId
    ? Object.values(DataSourceManager.getInstance().getDataSource(dataSourceId)?.getSchema()?.fields ?? {}) as IMFieldSchema[]
    : []

  return (
    <div className="p-3">
      <Tabs value={activeTab} onChange={setActiveTab} fill aria-label="Collage widget settings">
        <Tab id="data-selection" title="Data">
          <div className="pt-3">
            <DataSourceSelector
              mustUseDataSource
              types={supportedTypes}
              widgetId={props.id}
              useDataSources={props.useDataSources}
              onChange={useDataSources => props.onSettingChange({ id: props.id, useDataSources })}
            />
          </div>
        </Tab>
        <Tab id="parameter" title="Parameter">
          <div className="pt-3">
            {headerTextToConfigure.map(([key, label]) => (
              <div className="mb-3" key={key}>
                <Label>{label}</Label>
                <TextInput
                  size="sm"
                  value={props.config[key] as string}
                  onChange={event => updateField(key, event.target.value)}
                />
              </div>
            ))}
            {fields.length > 0 && fieldsToConfigure.map(([key, label]) => (
              <div className="mb-3" key={key}>
                <Label>{label}</Label>
                <Select
                  size="sm"
                  value={props.config[key as keyof IMConfig] as string}
                  onChange={event => updateField(key as keyof IMConfig, event.target.value)}
                >
                  <Option value="">Select a field</Option>
                  {fields.map(field => (
                    <Option key={field.jimuName} value={field.jimuName}>
                      {field.alias || field.jimuName}
                    </Option>
                  ))}
                </Select>
              </div>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}

export default Setting
