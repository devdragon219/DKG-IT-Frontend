# Chart Number 18.1

This folder contains the code for Chart Number 18.1.

## Data Structure

In order for the chart to work properly, the following input is needed:

```
interface Data {
  name: string;
  country: string;
  score: number;
  data: {
    title: string;
    weight: number;
    score: number;
    points: number;
    items: string[];
    factors: number[];
  }[];
}
```

Example:

```
const data = {
  name: '<name>',
  country: '<country>',
  score: 0,
  data: [
    {
      title: '<title>',
      weight: 0,
      score: 0,
      points: 0,
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
      title: '<title>',
      weight: 0,
      score: 0,
      points: 0,
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
