# ngx-ldrs

`ngx-ldrs` is an Angular library that allows you to easily integrate the open-source loaders from [uiball.com/ldrs](https://uiball.com/ldrs/) into your Angular applications. Whether you need a loader for data fetching, background processing, or any other asynchronous operation, `ngx-ldrs` provides a simple, customizable solution.

## Features

- **Seamless Angular Integration**: Add loaders to your Angular components with minimal setup.
- **Highly Customizable**: Adjust loader type, color, size, and speed to match your application's design.
- **Lightweight and Efficient**: Minimal impact on your application's performance.

## Installation

Install the library via npm:
```bash
npm install ngx-ldrs --save
```

## Usage

After installing the library, you can start using it in your Angular components.

### Import the Module
Add `NgxLdrsModule` to the `imports` array in your Angular module:
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLdrsModule } from 'ngx-ldrs';

@NgModule({
  declarations: [
    // your components
  ],
  imports: [
    BrowserModule,
    NgxLdrsModule
  ],
  providers: [],
  bootstrap: [/* your main component */]
})
export class AppModule { }
```

### Using the Component
You can now use the `<ngx-ldrs>` component in your templates to add a loader:
```html
<ngx-ldrs [ldrsType]="'bouncy'" color="red" [size]="35" [speed]="1.75"></ngx-ldrs>
```

### Available Inputs
- `ldrsType`: Specifies the type of loader. Refer to [uiball.com/ldrs](https://uiball.com/ldrs/) for available types.
- `color`: Sets the color of the loader (e.g., `"red"`, `"#ff0000"`).
- `size`: Defines the size of the loader (numeric value).
- `speed`: Controls the speed of the animation (numeric value).

### Example
```html
<ngx-ldrs [ldrsType]="'wave'" color="blue" [size]="50" [speed]="2.0"></ngx-ldrs>
```

This will render a "wave" loader with a blue color, 50px size, and a speed of 2.0.

## License
This library is licensed under the MIT License. See the LICENSE file for more information.

## Contributing
Contributions are welcome! Please submit issues or pull requests to help improve this library.

## Acknowledgments
This library is built on top of the fantastic loaders provided by [uiball.com/ldrs](https://uiball.com/ldrs/).


