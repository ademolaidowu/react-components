# Reusable React Components

This repository contains a collection of custom React components that can be reused across different projects. These components are designed to enhance development efficiency by providing pre-built solutions for common UI elements.

## Features

- Easy to integrate into existing React projects
- Customizable and flexible components
- Well-documented

## Component List

### 1. Button

- Button
- IconButton
- LoadingButton

### 2. Input

- Input
- TextArea

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository.git
```

### 2. Install Dependencies

Install the required dependencies. clsx is an important package used for conditionally joining classNames, and it's commonly used with React components. You can install it via npm or yarn:

```bash
# npm
npm install clsx

# yarn
yarn add clsx
```

### 3. Tailwind CSS Configuration

You may need to customize the default configuration to fit the specific design needs of your project. Make sure to edit the tailwind.config.ts file according to your project requirements. For example, you might want to customize colors, fonts, breakpoints, or add new utility classes. Refer to the Tailwind CSS documentation for more information on customizing the configuration.

### 4. Import and Use Components

You can start importing and using the components in your React application. Simply import the desired components into your project and use them as needed.
Check the components to see acceptable parameters and values.

```bash
import React from 'react';
import { Button, Card } from 'path/to/components';

const App = () => {
  return (
    <div>
      <Button color="primary">Click Me</Button>
      <Card />
    </div>
  );
}

export default App;
```
