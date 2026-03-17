import csvRaw from "@/data/libraryBudgets.csv?raw";

export interface LibraryBudget {
  ben: string;
  name: string;
  city: string;
  applicantType: string;
  budgetCycle: string;
  entityCount: number;
  squareFootage: number;
  multiplier: string;
  totalBudget: number;
  fundedAmount: number;
  pendingAmount: number;
  availableAmount: number;
  budgetVersion: string;
}

function parseCurrency(val: string): number {
  if (!val) return 0;
  return parseFloat(val.replace(/[$,\s"]/g, "")) || 0;
}

function parseNumber(val: string): number {
  if (!val) return 0;
  return parseInt(val.replace(/[,\s"]/g, ""), 10) || 0;
}

function parseCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  result.push(current.trim());
  return result;
}

const rows = csvRaw
  .split("\n")
  .slice(1)
  .filter((l) => l.trim().length > 0);

const budgets: LibraryBudget[] = rows.map((row) => {
  const c = parseCsvLine(row);
  return {
    ben: c[0],
    name: c[1],
    city: c[2],
    applicantType: c[4],
    budgetCycle: c[5],
    entityCount: parseNumber(c[6]),
    squareFootage: parseNumber(c[7]),
    multiplier: c[8],
    totalBudget: parseCurrency(c[9]),
    budgetVersion: c[10],
    fundedAmount: parseCurrency(c[11]),
    pendingAmount: parseCurrency(c[12]),
    availableAmount: parseCurrency(c[13]),
  };
});

export default budgets;
