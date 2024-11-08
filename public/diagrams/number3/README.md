# Chart Number 3

This folder contains the code for Chart Number 3.

## Data Structure

In order for the chart to work properly, the following input is needed:

```
interface Data {
  name: string;
  data: {
    name: string;
    money: number;
    picture: string;
    country: string;
  }[],
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
      picture: '<picture>',
      country: '<country>',
    },
    {
      name: '<name>',
      money: 0,
      picture: '<picture>',
      country: '<country>',
    },
  ]
};
```
