interface TableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  footerRow?: (string | React.ReactNode)[];
  alignRight?: number[];
  variant?: "light" | "dark";
}

export default function Table({
  headers,
  rows,
  footerRow,
  alignRight = [],
  variant = "light",
}: TableProps) {
  const isDark = variant === "dark";

  const cellAlign = (i: number) => (alignRight.includes(i) ? "text-right" : "text-left");

  return (
    <div className={`overflow-hidden rounded-2xl border ${isDark ? "border-white/10" : "border-gray-200"}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className={isDark ? "bg-white/5" : "bg-[#F5F3FF]"}>
            {headers.map((h, i) => (
              <th
                key={i}
                className={`px-5 py-3 text-xs font-semibold tracking-widest uppercase ${cellAlign(i)} ${isDark ? "text-white/50" : "text-gray-400"}`}
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={`border-t ${isDark ? "border-white/5" : "border-gray-100"}`}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-5 py-3.5 text-sm ${cellAlign(ci)} ${isDark ? "text-white/75" : "text-gray-700"}`}
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {footerRow && (
          <tfoot>
            <tr className={`border-t-2 ${isDark ? "border-white/20 bg-white/5" : "border-gray-200 bg-[#F5F3FF]"}`}>
              {footerRow.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-5 py-3.5 text-sm font-bold ${cellAlign(ci)} ${isDark ? "text-white" : "text-gray-900"}`}
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}
