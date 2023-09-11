function formatDate(inputDate: string): string {
  const date = new Date(inputDate);
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  const day = date.getDate();
  const month = date.getMonth();
  
  const formattedDate = `${monthNames[month]} ${day}`;
  
  return formattedDate;
}

export default formatDate;