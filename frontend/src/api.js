const API_BASE = "http://localhost:3001"; // Adjust if node runs elsewhere

export async function getLedger() {
  const res = await fetch(`${API_BASE}/ledger`);
  if (!res.ok) throw new Error("Failed to fetch ledger");
  return res.json();
}

export async function getStatus() {
  const res = await fetch(`${API_BASE}/status`);
  if (!res.ok) throw new Error("Failed to fetch status");
  return res.json();
}

export async function sendTransaction({ sender, receiver, amount }) {
  const res = await fetch(`${API_BASE}/transaction`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sender, receiver, amount }),
  });
  if (!res.ok) throw new Error("Failed to send transaction");
  return res.json();
}
