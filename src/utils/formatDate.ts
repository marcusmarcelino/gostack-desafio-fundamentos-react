const formatDate= (date: Date): string =>
  Intl.DateTimeFormat('pt-br', {timeZone: 'UTC'}).format(new Date(date));

export default formatDate;
