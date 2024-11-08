function filterByYear(data, year) {
  return data.map((sector) => {
    const filteredGroups = sector.groups
      .map((group) => {
        const filteredCompanies = group.companies.filter(
          (company) => company.year <= year
        );
        return { ...group, companies: filteredCompanies };
      })
      .filter((group) => group.companies.length > 0); // Keep only groups with companies

    return { ...sector, groups: filteredGroups };
  });
  // .filter((sector) => sector.groups.length > 0); // Keep only sectors with groups
}

function getUniqueYears(data) {
  const years = new Set();

  data.forEach((sector) => {
    sector.groups.forEach((group) => {
      group.companies.forEach((company) => {
        years.add(company.year);
      });
    });
  });

  return Array.from(years).sort((a, b) => a - b);
}

function disruptName(name) {
  // Example disruption: reverse the name
  return name.split("").reverse().join("");
}

function countLabels(data) {
  const counts = {};

  data.forEach((sector) => {
    // Initialize count for sectorLabel
    counts[sector.sectorLabel] = counts[sector.sectorLabel] || 0;

    // Iterate through groups in this sector
    sector.groups.forEach((group) => {
      // Initialize count for groupLabel
      counts[group.groupLabel] = counts[group.groupLabel] || 0;

      // Add number of companies in this group to both the sector and group counts
      counts[group.groupLabel] += group.companies.length;
      counts[sector.sectorLabel] += group.companies.length;
    });
  });

  return counts;
}

export { getUniqueYears, filterByYear, countLabels };
