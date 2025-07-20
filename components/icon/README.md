# custom-icon

Displays a simple icon based on a name attribute. Uses Unicode characters to avoid external dependencies.

## Usage
```html
<script type="module" src="../../components/icon/custom-icon.js"></script>
<custom-icon name="menu"></custom-icon>
```

## Attributes
- `name`: icon identifier (`menu`, `user`, `search`, `settings`, `sun`, `moon`).

## Customization
You can style the icon with CSS:
```css
custom-icon span { color: red; font-size: 24px; }
```
