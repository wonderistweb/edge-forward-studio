import csvRaw from "@/data/erateBudgets.csv?raw";

export interface ErateBudget {
  ben: string;
  name: string;
  city: string;
  applicantType: string;
  budgetCycle: string;
  entityCount: number;
  fullTimeStudents: number;
  librarySquareFootage: number;
  multiplier: string;
  totalBudget: number;
  fundedAmount: number;
  pendingAmount: number;
  availableAmount: number;
  budgetVersion: string;
}

function parseCurrency(val: string): number {
  if (!val) return 0;
  return parseFloat(val.replace(/[$,\s]/g, "")) || 0;
}

function parseNumber(val: string): number {
  if (!val) return 0;
  return parseInt(val.replace(/[,\s]/g, ""), 10) || 0;
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

const lines = csvRaw.split("\n").filter((l) => l.trim());
// skip header
const data: ErateBudget[] = lines.slice(1).map((line) => {
  const cols = parseCsvLine(line);
  return {
    ben: cols[0],
    name: cols[1],
    city: cols[2],
    applicantType: cols[4],
    budgetCycle: cols[6],
    entityCount: parseNumber(cols[7]),
    fullTimeStudents: parseNumber(cols[9]),
    librarySquareFootage: parseNumber(cols[10]),
    multiplier: cols[11],
    totalBudget: parseCurrency(cols[13]),
    fundedAmount: parseCurrency(cols[15]),
    pendingAmount: parseCurrency(cols[16]),
    availableAmount: parseCurrency(cols[17]),
    budgetVersion: cols[14],
  };
});

export default data;
