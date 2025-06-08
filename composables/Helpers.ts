export const formatterDataSimple = (date: string | undefined): string => {
  if (!date) return "";

  // Se for no formato dd/mm/aaaa, retorna direto
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(date)) {
    return date;
  }

  // Se for no formato dd-mm-aaaa, substitui "-" por "/" e retorna
  if (/^\d{2}-\d{2}-\d{4}$/.test(date)) {
    return date.replace(/-/g, "/");
  }

  const [year, month, day] = date.split("-");

  return `${day}/${month}/${year}`;
};

export const formatterData = (date: Date | undefined): string => {
  if (!date) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
