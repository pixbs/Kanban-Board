function formatDate(dateStr: string | undefined): string  {
    if (dateStr === undefined) {
      return 'undefined';
    }
  
    const pattern = /\b[A-Z][a-z]{2} \d{1,2}\b/;
    const matches = dateStr.match(pattern);
  
    if (matches && matches.length > 0) {
      return matches[0];
    }
  
    return 'undefined';
  }
  
  export default formatDate;