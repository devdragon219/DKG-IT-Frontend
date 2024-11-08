$( document ).ready(function() {
  const currentFilters = {}

  let filterTimeout;

  filtersList.forEach(filter => {
    currentFilters[filter.key] = undefined;
    document.getElementById(filter.id).addEventListener('keydown', (ev) => {
      handleFilter(ev, filter.key, filter.comparison);
    });
  })

  function handleFilter(ev, key, comparison) {
    if (ev.key !== 'Enter') {
      checkTimer(() => setFilters(key, ev.target.value, comparison));
    } else {
      clearTimeout(filterTimeout);
      setFilters(key, ev.target.value, comparison);
    }
  }

  function checkTimer(cb) {
    if (filterTimeout) {
      clearTimeout(filterTimeout);
    }
    filterTimeout = setTimeout(cb, options.filterTimeout);
  }

  function setFilters(key, value, comparison) {
    currentFilters[key] = {
      value: value,
      comparison: comparison
    };
    filterObject();
  }

  function filterObject() {
    dataObject.companies.forEach(company => {
      filterComparisonResult = [];
      let previousExcludeValue = JSON.parse(JSON.stringify(company.excluded));
      Object.keys(currentFilters).forEach(filterKey => {
        if (currentFilters[filterKey] && company[filterKey]) {
          filterComparisonResult.push(currentFilters[filterKey].comparison(company[filterKey], currentFilters[filterKey].value));
        }
      })
      company['excluded'] = filterComparisonResult.length > 0 && filterComparisonResult.indexOf(false) !== -1;
      if (previousExcludeValue !== company['excluded']) company.onChange();
    })
    console.log(`
      Total companies amount: ${dataObject.companies.length};
      Excluded companies amount: ${dataObject.companies.filter(company => company.excluded).length};
      Included companies amount: ${dataObject.companies.filter(company => !company.excluded).length};
      Filter value: ${JSON.stringify(currentFilters)}
    `)
    updateCompanyFilter();
  }
});