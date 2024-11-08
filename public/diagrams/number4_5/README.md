# Chart Number 4.5

This folder contains the code for Chart Number 4.5.

## Data Structure

In order for the chart to work properly, the following input is needed:

```
interface Data {
  name: string;
  data: {
    name: string;
    count: number;
    released: string;
    source: string;
    category: number;
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
      count: 0,
      released: '<released>',
      source: '<source>',
      category: 0,
    },
    {
      name: '<name>',
      count: 0,
      released: '<released>',
      source: '<source>',
      category: 0,
    },
  ],
};
```
