export const generateFormattedDate = (dateString: string) => {
    const date = new Date(dateString);
  
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }
  
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  
    return formattedDate;
  };
  