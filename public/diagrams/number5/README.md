# Chart Number 5

This folder contains the code for Chart Number 5.

## Data Structure

In order for the chart to work properly, the following input is needed:

```
interface Data {
  name: string;
  data: {
    name: string;
    money: number;
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
      money: 0,
    },
    {
      name: '<name>',
      money: 0,
    },
  ],
};
```
