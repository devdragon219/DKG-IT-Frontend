# Chart Number 9

This folder contains the code for Chart Number 9.

## Data Structure

In order for the chart to work properly, the following input is needed:

```
interface Data {
  name: string;
  data: {
    name: string;
    percentage: number;
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
      percentage: 0,
    },
    {
      name: '<name>',
      percentage: 0,
    },
  ],
};
```
