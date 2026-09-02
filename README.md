# Comment Collage Experience Builder Widget

Displays comments from a Feature Layer as an interactive, randomized card collage. Each card opens a full-details dialog.

## Install

Place this folder in the Experience Builder Developer Edition widget directory:

`client/your-extensions/widgets/collage`

Build custom widgets from the Experience Builder `client` folder:

```powershell
npm run build:dev
```

## Configure

1. Add **Comments Collage** to an Experience Builder app.
2. Open the widget settings and select the **Data** tab.
3. Choose a Feature Layer or Survey123 feature service.
4. Open **Parameter** and select the relevant fields from the dropdowns populated from the selected layer.
5. Optionally change the title, subtitle, and note.

The Parameter tab supports these field assignments:

- Primary comment
- Secondary comment
- Name
- Division
- Other division
- Date

Field aliases from the selected Feature Layer are displayed as labels in the full-details dialog.

## Behavior

- Cards are shuffled with randomized colors, shapes, and rotations each time the widget loads.
- Click a card to view its full comment details.
- Close the details dialog with the close button or by clicking outside it.

## Default Fields

The included defaults match the GIS Day Survey123 service:

- `i_use_gis_to`
- `gis_helped_me_by`
- `name`
- `division`
- `division_other`
- `created_date`

This source requires Experience Builder Developer Edition to compile. Hosted ArcGIS Experience Builder does not support uploading arbitrary custom widget source folders.
