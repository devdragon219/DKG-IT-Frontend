# Chart Number 11

This folder contains the code for Chart Number 11.

## Data Structure

In order for the chart to work properly, the following input is needed:

```
interface Data {
  name: string;
  data: {
    name: string;
  }[];
}
```

Example:

```
const data = {
  name: '<name>',
  data: [
    {
      name: '<string>',
    },
    {
      name: '<string>',
    },
  ],
};
```
