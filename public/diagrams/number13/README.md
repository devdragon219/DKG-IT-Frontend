# Chart Number 13

This folder contains the code for Chart Number 13.

## Data Structure

In order for the chart to work properly, the following input is needed:

```
interface Data {
  name: string;
  data: {
    city: string;
    'Goverment Efficiency': number;
    'Economic Resilience': number;
    'Quarantine Management': number;
    'Healthcare Management': number;
    'Vaccination Rate': number;
    'Cultural Compliance': number;
  }[];
}
```

Example:

```
const data = {
  name: '<name>',
  data: [
    {
      city: '<city>',
      'Goverment Efficiency': 0,
      'Economic Resilience': 0,
      'Quarantine Management': 0,
      'Healthcare Management': 0,
      'Vaccination Rate': 0,
      'Cultural Compliance': 0,
    },
    {
      city: '<city>',
      'Goverment Efficiency': 0,
      'Economic Resilience': 0,
      'Quarantine Management': 0,
      'Healthcare Management': 0,
      'Vaccination Rate': 0,
      'Cultural Compliance': 0,
    },
  ],
};
```
