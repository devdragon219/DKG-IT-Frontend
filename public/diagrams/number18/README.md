# Chart Number 18

This folder contains the code for Chart Number 18.

## Data Structure

In order for the chart to work properly, the following input is needed:

```
interface Data {
  name: string;
  data: {
    date: '<data>',
    rank: '<rank>',
    name: '<name>',
    value: '<value>',
    picture: '<picture>',
  }[];
}
```

Example:

```
const data = {
  name: '<name>',
  data: [
    {
      date: '<data>',
      rank: '<rank>',
      name: '<name>',
      value: '<value>',
      picture: '<picture>',
    },
    {
      date: '<data>',
      rank: '<rank>',
      name: '<name>',
      value: '<value>',
      picture: '<picture>',
    }
  ],
};
```
