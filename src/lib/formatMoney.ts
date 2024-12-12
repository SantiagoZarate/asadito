export function formatMoney(amount: number): string {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2, // Ensures two decimal places
  });

  return formatter.format(amount);
}
