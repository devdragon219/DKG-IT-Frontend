# Chart Number 14

This folder contains the code for Chart Number 14.

## Data Structure

In order for the chart to work properly, the following input is needed:

```
interface Data {
  name: string;
  data: {
    weight: number;
    title: string;
    items: string[];
    factors: number[];
  }[];
}
```

Example:

```
const data = {
  name: '<name>',
  data: [
    {
      weight: 0,
      title: '<title>',
      items: [
        'item1',
        'item2',
        'item3',
        'item4',
        'item5',
        'item6',
      ],
      factors: [0, 0, 0, 0, 0, 0],
    },
    {
      weight: 0,
      title: '<title>',
      items: [
        'item1',
        'item2',
        'item3',
        'item4',
        'item5',
        'item6',
      ],
      factors: [0, 0, 0, 0, 0, 0],
    },
  ],
};
```
