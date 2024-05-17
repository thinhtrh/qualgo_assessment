export const covertDateStringToYear = (date?: string): number => {
  if (!date) return null;
  const d = Date.parse(date);
  return new Date(d).getFullYear();
};

export const convertRuntimeToHour = (time?: number): string => {
  if (!time) return '0m';
  const h = Math.floor(time / 60);
  const m = time - h * 60;
  return `${h}h${m}m`;
};
