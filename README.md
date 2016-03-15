# Toggle navigation
Full screen navigation with toggle.

## Install
```sh
bower install trendwerk/toggle-navigation#~0.1.0 --save
```

## Usage
Using `toggle-navigation` is a two-step process:

1. SCSS: `@include` the mixin on your header. The header should contain your main navigation;
2. JS: Initialize your toggle button (uses jQuery).

### Basic implementation

```scss
@include toggle-navigation((
  'height': 80px,
  'menu': '.menu-selector',
));
```

```js
$('.toggle-selector').toggleNavigation();
```

### Common implementation
A more common setup is to include the `item` and `until` parameters:

```scss
@include toggle-navigation((
  'height': 80px,
  'item': '.item-selector',
  'menu': '.menu-selector',
  'until': 981px,
));
```

### API
```scss
@include toggle-navigation((
    'background': null,
    'bottom-space': 80px,
    'height': null,
    'item': null,
    'menu': null,
    'speed': 0.4s,
    'until': null,
));
```

#### Background
Set a background for the full screen navigation when opened.

#### Bottom space
The spacing below the main navigation.

#### Height
The height of the header when the main navigation is closed. This is necessary to properly animate the opening of the header.

#### Item
The CSS selector of the items in the main navigation. Setting this option animates the menu items in sequence.

#### Menu
The CSS selector for the main navigation.

#### Speed
Animation speed.

#### Until
A breakpoint (in pixels) until which the full screen navigation should be used.
