// Lightweight countries loader with REST fallback and local fallback
export async function loadCountries() {
  // Try RESTCountries API first
  try {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,idd');
    if (!res.ok) throw new Error('network');
    const data = await res.json();
    const countries = [];
    const codes = {};
    data.forEach((c) => {
      const name = c?.name?.common;
      const idd = c?.idd;
      if (!name) return;
      let code = '';
      if (idd) {
        const root = idd.root || '';
        const suffix = (idd.suffixes && idd.suffixes[0]) || '';
        code = root + (suffix || '');
      }
      countries.push(name);
      codes[name] = code;
    });
    countries.sort((a, b) => a.localeCompare(b));
    return { countries, codes };
  } catch (err) {
    // Local minimal fallback to keep app working offline or in dev
    const countries = [
      'United States',
      'United Kingdom',
      'Canada',
      'Australia',
      'Germany',
      'France'
    ];
    const codes = {
      'United States': '+1',
      'United Kingdom': '+44',
      Canada: '+1',
      Australia: '+61',
      Germany: '+49',
      France: '+33'
    };
    return { countries, codes };
  }
}

// Also export a helper to get code by country name synchronously from a provided map
export function getCode(name, codes) {
  return (codes && codes[name]) || '';
}
