import { React, type AllWidgetProps, DataSourceComponent, DataSourceManager } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'

const shapes = ['rect', 'rounded', 'blob1', 'blob2', 'ticket', 'torn']
const colors = ['#e63946', '#457b9d', '#2a9d8f', '#e9c46a', '#f4a261', '#264653', '#1982c4', '#8ac926']
const defaultTitle = 'GIS Day Comment Collage'
const defaultSubtitle = 'Celebrating the technology that connects people, places, and data. Every pin on a map tells a story - here are yours.'
const defaultNote = 'Click any comment card to see full details'

type CommentRecord = Record<string, unknown>

const text = (value: unknown): string => value == null ? '' : String(value)

const randomFor = (index: number, seed: number): number => {
  const value = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453
  return value - Math.floor(value)
}

const getOrganization = (attributes: CommentRecord, config: IMConfig): string => {
  const division = text(attributes[config.organizationField])
  const other = text(attributes[config.organizationOtherField])
  return division.toLowerCase() === 'other' && other ? other : division
}

const getDate = (value: unknown): string => {
  if (!value) return ''
  return new Date(Number(value)).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  })
}

const getFieldTitle = (dataSourceId: string, fieldName: string): string => {
  const field = DataSourceManager.getInstance().getDataSource(dataSourceId)?.getSchema()?.fields?.[fieldName]
  return field?.alias || field?.name || fieldName
}

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [selected, setSelected] = React.useState<CommentRecord | null>(null)
  const [layoutSeed] = React.useState(() => Math.random())
  const config = props.config
  const dataSource = props.useDataSources?.[0]

  if (!dataSource) {
    return <div className="gis-day-collage empty">Select a feature layer in the widget settings.</div>
  }

  return (
    <div className="gis-day-collage">
      <header className="collage-header">
        <h1>{config.title || defaultTitle}</h1>
        <p className="collage-intro">{config.subtitle || defaultSubtitle}</p>
        <p className="collage-subtitle">{config.note || defaultNote}</p>
      </header>
      <DataSourceComponent
        useDataSource={dataSource}
        widgetId={props.id}
        query={{
          where: `${config.commentField} IS NOT NULL OR ${config.commentField2} IS NOT NULL`,
          outFields: ['*'],
          pageSize: config.maxComments
        }}
      >
        {(dataSource) => {
          const comments = (dataSource?.getRecords() ?? [])
            .map(record => record.getData() as CommentRecord)
            .filter(attributes => text(attributes[config.commentField]) || text(attributes[config.commentField2]))
          const shuffledComments = comments
            .map((attributes, index) => ({ attributes, order: randomFor(index, layoutSeed) }))
            .sort((first, second) => first.order - second.order)

          if (!shuffledComments.length) return <div className="empty">No comments yet.</div>

          return (
            <div className="collage-grid">
              {shuffledComments.map(({ attributes }, index) => {
                const comment = text(attributes[config.commentField])
                const organization = getOrganization(attributes, config)
                const rotation = (randomFor(index + 100, layoutSeed) - .5) * 10
                const size = comment.length > 200 ? 'xl' : comment.length > 120 ? 'lg' : comment.length < 40 ? 'sm' : 'md'
                const shape = shapes[Math.floor(randomFor(index + 200, layoutSeed) * shapes.length)]
                const color = colors[Math.floor(randomFor(index + 300, layoutSeed) * colors.length)]

                return (
                  <button
                    className={`comment-card ${size} card-${shape}`}
                    key={`${index}-${text(attributes[config.nameField])}`}
                    style={{ backgroundColor: color, transform: `rotate(${rotation}deg)` }}
                    onClick={() => setSelected(attributes)}
                  >
                    <span className="card-comment">{comment.length > 180 ? `${comment.substring(0, 180).trim()}...` : comment}</span>
                    <span className="card-author">{text(attributes[config.nameField]) || 'Anonymous'}</span>
                    {organization && <span className="card-organization">{organization}</span>}
                  </button>
                )
              })}
            </div>
          )
        }}
      </DataSourceComponent>

      {selected && (
        <div className="details-backdrop" role="dialog" aria-modal="true" aria-labelledby="comment-details-title" onClick={() => setSelected(null)}>
          <div className="details" onClick={event => event.stopPropagation()}>
            <button className="close-button" type="button" onClick={() => setSelected(null)} aria-label="Close">×</button>
            <h2 id="comment-details-title">{text(selected[config.nameField]) || 'Anonymous'}</h2>
            {text(selected[config.commentField]) && <p><strong>{getFieldTitle(dataSource.dataSourceId, config.commentField)}:</strong> {text(selected[config.commentField])}</p>}
            {text(selected[config.commentField2]) && <p><strong>{getFieldTitle(dataSource.dataSourceId, config.commentField2)}:</strong> {text(selected[config.commentField2])}</p>}
            {getOrganization(selected, config) && <p><strong>Organization:</strong> {getOrganization(selected, config)}</p>}
            {getDate(selected[config.dateField]) && <p><strong>Date:</strong> {getDate(selected[config.dateField])}</p>}
          </div>
        </div>
      )}
    </div>
  )
}

export default Widget
