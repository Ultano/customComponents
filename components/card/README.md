# custom-card

A simple card component with header and body slots. Uses theme colors from `styles/theme.css`.

## Usage
```html
<script type="module" src="../../components/card/custom-card.js"></script>
<custom-card>
  <span slot="header">Card Header</span>
  Card content here
</custom-card>
```

## Slots
- `header`: optional header content
- default slot: card body

## Customization
Use CSS variables to change border and background colors.
