# Chart Number 2

This folder contains the code for Chart Number 2.

## Data Structure

In order for the chart to work properly, the following input is needed:

```
interface Data {
  name: string;
  data: {
    country: string;
    parameter: number;
  }[];
}
```

Example:

```
const originalData = {
  name: '<name>',
  data: [
    { country: '<country>', parameter: 0 },
    { country: '<country>', parameter: 0 },
  ],
};
```
