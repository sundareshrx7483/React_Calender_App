export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const calculateNextCommunicationDate = (lastDate, periodicity) => {
  const nextDate = new Date(lastDate);
  nextDate.setDate(nextDate.getDate() + periodicity);
  return nextDate;
};

export const isOverdue = (nextDate) => {
  return new Date(nextDate) < new Date();
};

export const getCommunicationMethodLabel = (method) => {
  const methodLabels = {
    linkedinPost: 'LinkedIn Post',
    linkedinMessage: 'LinkedIn Message',
    email: 'Email',
    phoneCall: 'Phone Call',
    other: 'Other',
  };
  return methodLabels[method] || 'Unknown Method';
};