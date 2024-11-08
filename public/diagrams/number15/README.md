# Chart Number 15

This folder contains the code for Chart Number 15.

## Data Structure

In order for the chart to work properly, the following input is needed:

```
interface Data {
  name: string;
  data: {
    name: string;
    value: number;
  }[];
}
```

Example:

```
const data = {
  name: '<name>',
  data: [
    {
      name: '<name>',
      value: 0,
    },
    {
      name: '<name>',
      value: 0,
    },
  ],
};
```
