export function formatPostDate(date: string): string {
  if (!date) return '';
  const value = new Date(date.includes('T') ? date : `${date}T12:00:00Z`);
  if (Number.isNaN(value.getTime())) return '';
  return value.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
